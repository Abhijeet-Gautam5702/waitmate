import { Document, Types } from "mongoose";

export interface IWebhook {
  url: string;
  events: string[];
  active: boolean;
}

export interface IPriceConfig {
  tier: string;
  amount: number;
  currency: string;
  description: string;
}

export interface IAlerts {
  signupMilestone: number;
  waitlistUpperCap: boolean;
}

export interface IPaywall {
  enabled: boolean;
  prices: IPriceConfig[];
}

export interface IWaitlistSettings {
  _id: Types.ObjectId;
  projectId: Types.ObjectId;
  alerts: IAlerts;
  webhooks: IWebhook[];
  paywall: IPaywall;
}

export interface IWaitlistSettingsDocument
  extends IWaitlistSettings,
    Document<Types.ObjectId> {}
