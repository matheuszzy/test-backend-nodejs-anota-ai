import Category from "../../domain/entities/Category";
import CategoryRepositoryDB from "../../infra/repositories/CategoryRepositoryMongoDB";
import CategoryDTO from "../dtos/CategoryDTO";

export default class CreateCategory {
  constructor(readonly categoryRepository: CategoryRepositoryDB) {}

  async execute(input: CategoryDTO) {
    const categoryList = await this.categoryRepository.findByOwnerId(
      input.ownerId
    );

    const categoryExists = categoryList.find(
      (category) => category.title === input.title
    );

    if (categoryExists) {
      throw new Error("Category already exists");
    }

    return await this.categoryRepository.save(input);
  }
}
