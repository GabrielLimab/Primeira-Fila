import { beforeEach, describe, expect, test, vi } from "vitest";
import { RatingService } from "../domains/ratings/services/RatingService";
import { Prisma, Rating } from "@prisma/client";
import prisma from "../../libs/__mocks__/prisma";
import axios from 'axios'

vi.mock('axios');
vi.mock("../../libs/prisma.ts");

describe("create", () => {
    let createBody: Prisma.RatingCreateInput;

    beforeEach(() => {
        vi.resetAllMocks();

        createBody = {
            movieId: 1, 
            user: {
                connect: {
                  id: 1,
                },
              }, 
            rating: 2, 
            watched: true, 
            review: "string"
        };
    });

    test("", async () => {
        // await RatingService.createdRating(createBody);
    });

});