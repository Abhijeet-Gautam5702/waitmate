import { Schema, model, Types } from "mongoose";
import { ISignupDocument } from "../../types/signup.types";

const signupSchema = new Schema<ISignupDocument>(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "WaitlistProject",
      required: true,
    },
    userId: {
      type: String,
      ref: "User",
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    metadata: {
      type: Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Indexes
signupSchema.index({ projectId: 1, email: 1 }, { unique: true });
signupSchema.index({ userId: 1 });
signupSchema.index({ verificationToken: 1 });

const SignupModel = model<ISignupDocument>("Signup", signupSchema);
export default SignupModel;
