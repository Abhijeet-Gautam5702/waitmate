import { Document, Types } from "mongoose";

export interface ISignup {
  _id: Types.ObjectId;
  projectId: Types.ObjectId;
  userId: string; // Appwrite user ID
  email: string;
  verified: boolean;
  verificationToken: string;
  source: string;
  metadata: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

export interface ISignupDocument extends ISignup, Document<Types.ObjectId> {}
