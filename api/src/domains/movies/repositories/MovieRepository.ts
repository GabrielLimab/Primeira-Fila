import prisma from "../../../../libs/prisma";

class MovieRepositoryClass {
  async getTopUserReview(userId: string) {
    return [{id: "1", userId: "1", movieId: "1", rating: 5, review: "Great movie!"}];
    // return prisma.movieReview.findFirst({
    //   where: {
    //     userId: userId
    //   }
    // });

  }
  
}

export const MovieRepository = new MovieRepositoryClass();