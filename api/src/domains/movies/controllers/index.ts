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

router.get('/:id',
  verifyJWT,
  async(req: Request, res: Response, next:NextFunction) => {
    try {
      const movieImages = await MovieService.getMovieDetails(req.params.id);
      res.status(statusCodes.SUCCESS).json(movieImages);
    } catch (error) {
      next(error);
    }
  },
);



