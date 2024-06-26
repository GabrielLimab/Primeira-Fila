import { Router, Request, Response, NextFunction } from 'express';
import { UserService } from '../services/UserService';
import { loginMiddleware, verifyJWT, notLoggedIn } from '../../../middlewares/auth';
import { statusCodes } from '../../../../utils/constants/status-codes';
export const router = Router();

router.post('/login', notLoggedIn, loginMiddleware);

router.post('/logout', 
  verifyJWT, 
  async(req: Request, res: Response, next:NextFunction) => {  
    try{
      res.clearCookie('jwt', {sameSite: 'none', secure: true});
      res.status(statusCodes.SUCCESS).end();
    } catch (error) {
      next(error);
    }
  },
);

router.post('/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {     
      await UserService.create(req.body);
      res.status(statusCodes.CREATED).end();
    } catch (error) {
      next(error);
    }
  },
);

router.get('/me', 
  verifyJWT, 
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await UserService.getById(req.userId!);
      res.status(statusCodes.SUCCESS).json(user);
    } catch (error) { 
      next(error);
    }
  },
);

router.get('/',
verifyJWT,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await UserService.getAll();
      res.status(statusCodes.SUCCESS).json(user);
    } catch (error) {
      next(error)
    }
  },
);

router.get('/:id',
verifyJWT,
  async (req: Request, res: Response, next: NextFunction) => {
    try{
      const user = await UserService.getById(req.params.id);
      res.status(statusCodes.SUCCESS).json(user);
    } catch (error) {
      next(error)
    }
  },
);

router.put('/:id',
verifyJWT,
  async (req: Request, res:Response, next: NextFunction) => {
    try{
      await UserService.edit(req.params.id, req.body);
      res.status(statusCodes.SUCCESS).end();
    } catch (error) {
      next(error)
    }
  },
);
