import { Document, Types } from "mongoose";

// Waitlist status type
export type WaitlistStatus = "active" | "inactive";

// Font style types
export type FontStyle = "normal" | "italic";
export type FontWeight = "normal" | "bold" | "light";
export type OverallSize = "small" | "medium" | "large";

// Style component interfaces
export interface ITitle {
  text: string;
  color: string;
}

export interface ISubtitle {
  text: string;
  color: string;
}

export interface ILabel {
  text: string;
  color: string;
}

export interface IButton {
  text: string;
  textColor: string;
  bgColor: string;
  rounded: boolean;
}

// Base waitlist project interface
export interface IWaitlistProject {
  _id: Types.ObjectId;
  userId: string;
  projectName: string;
  status: WaitlistStatus;
  domain?: string;
  signupLimit: number;
  currentSignups: number;
  enableEmailVerification: boolean;
  enablePaidSignups: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Base waitlist style interface
export interface IWaitlistStyle {
  _id: Types.ObjectId;
  projectId: Types.ObjectId;
  fontStyle: FontStyle;
  fontWeight: FontWeight;
  overallSize: OverallSize;
  title: ITitle;
  subtitle: ISubtitle;
  label: ILabel;
  button: IButton;
  successMsg: string;
  whitelabel: boolean;
  logo: string;
}

// Document interfaces
export interface IWaitlistProjectDocument
  extends IWaitlistProject,
    Document<Types.ObjectId> {}
export interface IWaitlistStyleDocument
  extends IWaitlistStyle,
    Document<Types.ObjectId> {}
