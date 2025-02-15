import { Schema, model } from "mongoose";
import { IWaitlistSettingsDocument } from "../../types/waitlist-settings.types";

const priceConfigSchema = new Schema(
  {
    tier: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    description: { type: String, required: true },
  },
  { _id: false }
);

const webhookSchema = new Schema(
  {
    url: { type: String, required: true },
    events: [{ type: String, required: true }],
    active: { type: Boolean, default: true },
  },
  { _id: false }
);

const alertsSchema = new Schema(
  {
    signupMilestone: { type: Number, required: true },
    waitlistUpperCap: { type: Boolean, required: true },
  },
  { _id: false }
);

const paywallSchema = new Schema(
  {
    enabled: { type: Boolean, required: true, default: false },
    prices: [priceConfigSchema],
  },
  { _id: false }
);

const waitlistSettingsSchema = new Schema<IWaitlistSettingsDocument>(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "WaitlistProject",
      required: true,
    },
    alerts: {
      type: alertsSchema,
      required: true,
    },
    webhooks: {
      type: [webhookSchema],
      default: [],
    },
    paywall: {
      type: paywallSchema,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Indexes
waitlistSettingsSchema.index({ projectId: 1 }, { unique: true });

const WaitlistSettingsModel = model<IWaitlistSettingsDocument>(
  "WaitlistSettings",
  waitlistSettingsSchema
);
export default WaitlistSettingsModel;
