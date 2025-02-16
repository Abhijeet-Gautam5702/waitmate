import { IRequest } from "../../../shared/interfaces/common.interface";
import { Response } from "express";
import asyncHandler from "../../../shared/utils/async-handler";
import { UserService } from "../services/user.service";
import UserRepository from "../infrastructure/repositories/user.repository";
import ApiResponse from "../../../shared/utils/api-response";
import ApiError from "../../../shared/utils/api-error";

/*
    DEPENDENCY INJECTION PRINCIPLE

    Dependency Injection is a software design pattern which allows for flexible programming by allowing one service/component to depend on the other by injecting them instead of hardcoding them into one another.
    
    It allows for:
    - Easy testing: as it is easy to create mockups of the service/component
    - Easy replacement of service/component: since we are injecting the service instead of using direct references, it becomes easier to replace it with some other service in the future.
        Example: If we ever want to use PostgreSQL instead of MongoDB, so we only have to change the UserRepository and inject it inside UserService.
*/
const userService = new UserService(new UserRepository());

export const healthcheck = asyncHandler(
  async (req: IRequest, res: Response) => {
    const user = await userService.findUser("67b1fed00035d284adff");
    if (!user) {
      throw new ApiError(404, "User not found");
    }
    res.status(200).json(new ApiResponse(200, "Health check OK", {}));
  }
);
