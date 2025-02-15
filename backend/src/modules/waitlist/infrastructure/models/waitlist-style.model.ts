import { Schema, model } from "mongoose";
import {
  IWaitlistStyleDocument,
  FontStyle,
  FontWeight,
  OverallSize,
} from "../../types/waitlist.types";

// Component schemas
const titleSchema = new Schema(
  {
    text: { type: String, required: true },
    color: { type: String, required: true },
  },
  { _id: false }
);

const subtitleSchema = new Schema(
  {
    text: { type: String, required: true },
    color: { type: String, required: true },
  },
  { _id: false }
);

const labelSchema = new Schema(
  {
    text: { type: String, required: true },
    color: { type: String, required: true },
  },
  { _id: false }
);

const buttonSchema = new Schema(
  {
    text: { type: String, required: true },
    textColor: { type: String, required: true },
    bgColor: { type: String, required: true },
    rounded: { type: Boolean, required: true, default: true },
  },
  { _id: false }
);

const waitlistStyleSchema = new Schema<IWaitlistStyleDocument>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    projectId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "WaitlistProject",
    },
    fontStyle: {
      type: String,
      enum: ["normal", "italic"] as FontStyle[],
      required: true,
      default: "normal",
    },
    fontWeight: {
      type: String,
      enum: ["normal", "bold", "light"] as FontWeight[],
      required: true,
      default: "normal",
    },
    overallSize: {
      type: String,
      enum: ["small", "medium", "large"] as OverallSize[],
      required: true,
      default: "medium",
    },
    title: {
      type: titleSchema,
      required: true,
    },
    subtitle: {
      type: subtitleSchema,
      required: true,
    },
    label: {
      type: labelSchema,
      required: true,
    },
    button: {
      type: buttonSchema,
      required: true,
    },
    successMsg: {
      type: String,
      required: true,
    },
    whitelabel: {
      type: Boolean,
      required: true,
      default: false,
    },
    logo: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Indexes
waitlistStyleSchema.index({ projectId: 1 }, { unique: true });

const WaitlistStyleModel = model<IWaitlistStyleDocument>(
  "WaitlistStyle",
  waitlistStyleSchema
);
export default WaitlistStyleModel;
