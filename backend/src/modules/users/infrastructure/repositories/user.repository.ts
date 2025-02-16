import { IUserDocument } from "../../types/user.types";
import UserModel from "../models/user.model";

export interface IUserRepository {
  findById(id: string): Promise<IUserDocument | null>;
  findByEmail(email: string): Promise<IUserDocument | null>;
}

export default class UserRepository implements IUserRepository {
  public findById = async (userId: string) => {
    return await UserModel.findOne({ userId });
  };

  public findByEmail = async (email: string) => {
    return await UserModel.findOne({ email });
  };
}
