import ApiError from "../shared/utils/api-error";
import asyncHandler from "../shared/utils/async-handler";
import { Request, Response, NextFunction } from "express";
import appwriteAuth from "../config/appwrite-auth";
import { Models } from "node-appwrite";
import { IRequest } from "../shared/interfaces/common.interface";

const authenticate = asyncHandler(
  async (req: IRequest, res: Response, next: NextFunction) => {
    // Extract Appwrite session from HTTP Request header
    let sessionId = req.header("X-Appwrite-Session");
    if (!sessionId) {
      throw new ApiError(401, "No session ID provided");
    }

    // Get the account object from AppwriteAuth instance
    const account = appwriteAuth.getAccount();

    try {
      let session: Models.Session | null = null;
      session = await account.getSession(sessionId);
      if (!session) {
        throw new ApiError(401, "Invalid session");
      }

      // Attach the session-details on the HTTP Request object
      req.userId = session.userId;
      req.session = session;

      next();
    } catch (error: any) {
      throw new ApiError(401, error.message || "Invalid session", error);
    }
  }
);

export default authenticate;
