import { Document } from "mongoose";

// User account details interface
export interface IUserAccountDetails {
  accountID: string;
  bankAccountNumber: string;
  routingNumber: string;
  bankName: string;
}

// Auth provider type
export type AuthProvider = "google" | "github";

// Sub merchant account status type
export type SubMerchantAccountStatus =
  | "verified"
  | "suspended"
  | "pending"
  | "inactive";

// Base user interface without mongoose methods
export interface IUser {
  _id: string; // Appwrite generated user ID
  email: string;
  name: string;
  password: string;
  authProvider: AuthProvider;
  authProviderId: string;
  userAccountDetails?: IUserAccountDetails;
  subMerchantAccountStatus: SubMerchantAccountStatus;
  createdAt: Date;
  updatedAt: Date;
}

// Interface for User document (mongoose methods + IUser properties)
export interface IUserDocument extends IUser, Document<string> {}
