import { Schema, model } from "mongoose";
import {
  IWaitlistProjectDocument,
  WaitlistStatus,
} from "../../types/waitlist.types";

const waitlistProjectSchema = new Schema<IWaitlistProjectDocument>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    userId: {
      type: String,
      required: true,
      ref: "User",
    },
    projectName: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"] as WaitlistStatus[],
      required: true,
      default: "active",
    },
    domain: {
      type: String,
      required: false,
      trim: true,
    },
    signupLimit: {
      type: Number,
      required: true,
      min: 0,
    },
    currentSignups: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    enableEmailVerification: {
      type: Boolean,
      required: true,
      default: false,
    },
    enablePaidSignups: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Indexes
waitlistProjectSchema.index({ userId: 1 });
waitlistProjectSchema.index({ status: 1 });

const WaitlistProjectModel = model<IWaitlistProjectDocument>(
  "WaitlistProject",
  waitlistProjectSchema
);
export default WaitlistProjectModel;
