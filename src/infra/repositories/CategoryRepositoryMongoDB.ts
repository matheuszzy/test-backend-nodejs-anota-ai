import CategoryRepository from "../../application/repository/CategoryRepository";
import Category from "../../domain/entities/Category";
import CategoryMongooseAdapter from "../database/do/CategoryMongooseAdapter";

export default class CategoryRepositoryDB implements CategoryRepository {
  constructor(private categoryMongooseAdapter: CategoryMongooseAdapter) {}

  async save(category: Category): Promise<Category> {
    return await this.categoryMongooseAdapter.model.insertMany(category);
  }
}
