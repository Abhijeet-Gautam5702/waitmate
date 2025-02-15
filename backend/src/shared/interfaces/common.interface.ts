import { Request } from "express";
import { Models } from "node-appwrite";

export interface IRequest extends Request {
  userId?: string;
  session?: Models.Session;
}
