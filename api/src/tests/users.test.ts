import { beforeEach, describe, expect, test, vi } from "vitest";
import { UserService } from "../domains/users/services/UserService";
import { Prisma, User } from "@prisma/client";
import prisma from "../../libs/__mocks__/prisma";
import * as bcrypt from "bcrypt";

vi.mock("../../libs/prisma.ts");
vi.mock("bcrypt", () => ({
    hash: vi.fn((password: string, saltRounds: number) => "encryptedPassword"),
}));

describe("create", () => {
    let createBody: Prisma.UserCreateInput;

    beforeEach(() => {
        vi.resetAllMocks();

        createBody = {
            email: "test@test.io",
            password: "123",
            name: "test"
        };
    });

    test("Should call findFirst with email and username", async () => {
        await UserService.create(createBody);

        expect(prisma.user.findFirst).toHaveBeenNthCalledWith(1, {
            where: {
                email: createBody.email,
            },
        });
    });

    test("Should get error when email already in use", async () => {
        prisma.user.findFirst.mockResolvedValueOnce({
            id: "1",
            name: "Test",
            email: createBody.email,
            password: "hashedPassword"
        });
        await expect(UserService.create(createBody)).rejects.toThrow('Email already in use');
    })

});