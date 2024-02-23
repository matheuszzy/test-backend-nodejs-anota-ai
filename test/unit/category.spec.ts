import CategoryDTO from "../../src/application/dtos/CategoryDTO";
import CreateCategory from "../../src/application/use-cases/CreateCategory";
import CategoryMongooseAdapter from "../../src/infra/database/do/CategoryMongooseAdapter";
import CategoryRepositoryDB from "../../src/infra/repositories/CategoryRepositoryMongoDB";

export const sutCategoryRepository = () => {
  const db = new CategoryMongooseAdapter();

  return new CategoryRepositoryDB(db);
};

export const sutCreateCategory = () => {
  const repository = sutCategoryRepository();

  return new CreateCategory(repository)
};

describe("Category", () => {

  it("Should create a category", () => {
    const category: CategoryDTO = {
      description: "Category Description",
      ownerId: "123456",
      title: "Category title",
    };
    const sut = sutCreateCategory();

    expect(category).toStrictEqual(sut.execute(category));
  });
});
