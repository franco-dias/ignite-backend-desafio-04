import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id: userId }: IRequest): User {
    const user = this.usersRepository.findById(userId);
    if (!user) {
      throw new Error("User does not exist.");
    }
    const updated = this.usersRepository.turnAdmin(user);
    return updated;
  }
}

export { TurnUserAdminUseCase };
