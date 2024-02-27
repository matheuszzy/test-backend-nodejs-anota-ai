import Category from "../../domain/entities/Category";
import Queue from "../../infra/queue/Queue";
import CategoryDTO from "../dtos/CategoryDTO";
import CategoryRepository from "../repository/CategoryRepository";

export default class CreateCategory {
  constructor(
    readonly categoryRepository: CategoryRepository,
    readonly queue: Queue
    ) {}

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
