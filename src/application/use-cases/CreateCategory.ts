import CategoryRepositoryDB from "../../infra/repositories/CategoryRepositoryMongoDB";
import CategoryDTO from "../dtos/CategoryDTO";

export default class CreateCategory {
  constructor(readonly categoryRepository: CategoryRepositoryDB) {}

  async execute(input: CategoryDTO) {
    return await this.categoryRepository.save(input);
  }
}
