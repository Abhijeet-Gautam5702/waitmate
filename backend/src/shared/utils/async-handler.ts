import { Request, Response, NextFunction } from "express";
import ApiError from "./api-error";

/*
    @description     Async handler
    @param {Function} callbackFn - The controller of the HTTP request
    @return {Function} The callback function wrapped in a try-catch block with error handling
*/
const asyncHandler = (
  callbackFn: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await callbackFn(req, res, next);
    } catch (error: ApiError | unknown) {
      res
        .status(error instanceof ApiError ? error.statusCode : 500)
        .json(
          error instanceof ApiError ? error.toResponse() : ApiError.internal()
        );
    }
  };
};

export default asyncHandler;
