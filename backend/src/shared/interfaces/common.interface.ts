import { Request } from "express";
import { Models } from "node-appwrite";

export interface IRequest extends Request {
  userId?: string;
  session?: Models.Session;
}

export interface IApiResponse {
  readonly statusCode: number;
  readonly message: string;
  readonly data: unknown;
  readonly success: boolean;
}

export interface IApiError {
  readonly statusCode: number;
  readonly message: string;
  readonly success: boolean;
  readonly errors?: unknown;
}
