import { Router, Request, Response, NextFunction } from 'express';
import { MovieService } from '../services/MovieService';
import { verifyJWT } from '../../../middlewares/auth';
import { statusCodes } from '../../../../utils/constants/status-codes';
export const router = Router();

router.get('/trending', 
  verifyJWT, 
  async(req: Request, res: Response, next:NextFunction) => {  
    try {
      const movies = await MovieService.getTrendingMovies();
      res.status(statusCodes.SUCCESS).json(movies);
    } catch (error) { 
      next(error);
    }
  },
);

