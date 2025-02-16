import { Schema, model } from "mongoose";
import {
  IUser,
  AuthProvider,
  SubMerchantAccountStatus,
  IUserDocument,
} from "../../types/user.types";

// User account details schema
const userAccountDetailsSchema = new Schema(
  {
    accountID: { type: String },
    bankAccountNumber: { type: String },
    routingNumber: { type: String },
    bankName: { type: String },
  },
  { _id: false }
);

// User schema
const userSchema = new Schema<IUserDocument>(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    authProvider: {
      type: String,
      enum: ["google", "github"] as AuthProvider[],
      required: true,
    },
    authProviderId: {
      type: String,
      required: true,
    },
    userAccountDetails: {
      type: userAccountDetailsSchema,
      required: false,
    },
    subMerchantAccountStatus: {
      type: String,
      enum: [
        "verified",
        "suspended",
        "pending",
        "inactive",
      ] as SubMerchantAccountStatus[],
      required: true,
      default: "inactive",
    },
  },
  {
    timestamps: true,
    versionKey: false,
    id: false,
  }
);

// Indexes
// userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ authProvider: 1, authProviderId: 1 }, { unique: true });

const UserModel = model<IUserDocument>("User", userSchema);
export default UserModel;
