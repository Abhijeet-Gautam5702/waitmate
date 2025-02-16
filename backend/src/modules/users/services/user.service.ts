
import { IUserRepository } from "../infrastructure/repositories/user.repository";
import { IUserDocument } from "../types/user.types";

interface IUserService {
  findUser: (id?: string, email?: string) => Promise<IUserDocument | null>;
}

export class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  findUser = async (id?: string, email?: string) => {
    if (id) {
      return await this.userRepository.findById(id);
    } else if (email) {
      return await this.userRepository.findByEmail(email);
    } else {
      return null;
    }
  };
}
