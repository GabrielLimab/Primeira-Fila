import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { UserService } from '../domains/users/services/UserService';
import prisma from '../libs/__mocks__/prisma';

vi.mock('../libs/prisma');
vi.mock('bcrypt', () => ({
  hash: vi.fn((password: string, saltRounds: number) => 'encryptedPassword'),
}));

const selectOptions = {
  id: true,
  name: true,
  email: true,
  ratings: true,
  created_at: true,
};

describe('create', () => {
  let createBody: Prisma.UserCreateInput;
  
  beforeEach(() => {
    vi.restoreAllMocks();
    
    createBody = {
      email: 'test@test.com',
      password: 'test',
      name: 'test',
    }
  });

  test('should call findFirst with email and username', async () => {
    await UserService.create(createBody);
    
    expect(prisma.user.findFirst).toHaveBeenNthCalledWith(1, {
      where: {
        email: createBody.email,
      },
    });

    expect(prisma.user.findFirst).toHaveBeenNthCalledWith(2, {
      where: {
        name: createBody.name,
      },
    });
  });

  test('should throw error if email already exists', async () => {
    prisma.user.findFirst.mockResolvedValueOnce({...createBody, id: '1', created_at: new Date('01-01-2023')});

    await expect(UserService.create(createBody)).rejects.toThrow('Email already in use');
  });

  test('should throw error if username already exists', async () => {
    prisma.user.findFirst.mockResolvedValueOnce(null);
    prisma.user.findFirst.mockResolvedValueOnce({...createBody, id: '1', created_at: new Date('01-01-2023')});

    await expect(UserService.create(createBody)).rejects.toThrow('Username already in use');
  });

  test('should call encryptPassword', async () => {
    prisma.user.findFirst.mockResolvedValueOnce(null);
    prisma.user.findFirst.mockResolvedValueOnce(null);

    await UserService.create(createBody);

    expect(bcrypt.hash).toHaveBeenCalledWith(createBody.password, 10);
  });

  test('should call create with encrypted password', async () => {
    prisma.user.findFirst.mockResolvedValueOnce(null);
    prisma.user.findFirst.mockResolvedValueOnce(null);

    await UserService.create(createBody);

    expect(prisma.user.create).toHaveBeenCalledWith({
      data: {
        ...createBody,
        password: 'encryptedPassword',
        picture: {
          create: {
            picture_url: 'default.png',
            profile_picture: true,
          },
        }
      },
    });
  });

});

describe('getAll', () => {
  let findManyUsers: User[];

  beforeEach(() => {
    vi.restoreAllMocks();

    findManyUsers = [
      {
        id: '1',
        name: 'test',
        email: 'test@test.com',
        password: 'test',
        created_at: new Date('01-01-2023'),
      },
    ];
  });

  test('should call findMany with select', async () => {
    prisma.user.findMany.mockResolvedValueOnce(findManyUsers);
    
    await UserService.getAll();

    expect(prisma.user.findMany).toHaveBeenCalledWith({ select: selectOptions });
  });

  test('should return users', async () => {
    prisma.user.findMany.mockResolvedValueOnce(findManyUsers);

    const users = await UserService.getAll();

    expect(users).toEqual(findManyUsers);
  });

  test('should throw error if no users found', async () => {
    prisma.user.findMany.mockResolvedValueOnce([]);

    await expect(UserService.getAll()).rejects.toThrow('No users found');
  });
});

describe('getById', () => {
  let findFirstUser: User;

  beforeEach(() => {
    vi.restoreAllMocks();

    findFirstUser = {
      id: '1',
      name: 'test',
      email: 'test@test.com',
      password: 'test',
      created_at: new Date('01-01-2023'),
    };
  });

  test('should call findFirst with id and select', async () => {
    prisma.user.findFirst.mockResolvedValueOnce(findFirstUser);
    
    await UserService.getById('1');

    expect(prisma.user.findFirst).toHaveBeenCalledWith({
      where: {
        id: '1',
      },
      select: selectOptions,
    });
  });

  test('should return user', async () => {
    prisma.user.findFirst.mockResolvedValueOnce(findFirstUser);

    const user = await UserService.getById('1');

    expect(user).toEqual(findFirstUser);
  });

  test('should throw error if user not found', async () => {
    prisma.user.findFirst.mockResolvedValueOnce(null);

    await expect(UserService.getById('1')).rejects.toThrow('User not found');
  });
});

describe('edit', () => {
  let findFirstUser: User;
  let editBody: Partial<Omit<User, 'id'>>;
  let file: any;

  beforeEach(() => {
    vi.restoreAllMocks();

    findFirstUser = {
      id: '1',
      name: 'test',
      email: 'test@test.com',
      password: 'test',
      created_at: new Date('01-01-2023'),
    };

    editBody = {
      name: 'test2',
      email: 'test@test.com',
      password: 'test',
    };

    file = {
      filename: 'test.png',
    };
  });

  test('should call findFirst with id', async () => {
    prisma.user.findFirst.mockResolvedValueOnce(findFirstUser);
    
    await UserService.edit('1', editBody);

    expect(prisma.user.findFirst).toHaveBeenCalledWith({
      where: {
        id: '1',
      },
    });
  });

  test('should throw error if user not found', async () => {
    prisma.user.findFirst.mockResolvedValueOnce(null);

    await expect(UserService.edit('1', editBody)).rejects.toThrow('User not found');
  });

  test('should call findFirst with email and username', async () => {
    prisma.user.findFirst.mockResolvedValueOnce(findFirstUser);
    
    await UserService.edit('1', editBody);

    expect(prisma.user.findFirst).toHaveBeenNthCalledWith(2, {
      where: {
        email: editBody.email,
      },
    });
  });

  test('should throw error if email already exists', async () => {
    prisma.user.findFirst.mockResolvedValue(findFirstUser);

    await expect(UserService.edit('2', editBody)).rejects.toThrow('Email already in use');
  });

  test('should throw error if username already exists', async () => {
    prisma.user.findFirst.mockResolvedValueOnce(findFirstUser);
    prisma.user.findFirst.mockResolvedValueOnce(null);
    prisma.user.findFirst.mockResolvedValueOnce(findFirstUser);

    await expect(UserService.edit('2', editBody)).rejects.toThrow('Username already in use');
  });

  test('should call encryptPassword', async () => {
    prisma.user.findFirst.mockResolvedValueOnce(findFirstUser);
    prisma.user.findFirst.mockResolvedValueOnce(null);
    prisma.user.findFirst.mockResolvedValueOnce(null);

    await UserService.edit('2', editBody);
    expect(bcrypt.hash).toHaveBeenCalledWith('test', 10);
  });

  test('should call update with encrypted password', async () => {
    prisma.user.findFirst.mockResolvedValueOnce(findFirstUser);
    prisma.user.findFirst.mockResolvedValueOnce(null);
    prisma.user.findFirst.mockResolvedValueOnce(null);

    await UserService.edit('2', editBody);

    expect(prisma.user.update).toHaveBeenCalledWith({
      where: {
        id: '2',
      },
      data: {
        ...editBody,
        password: 'encryptedPassword',
      },
    });
  });


});