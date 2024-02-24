import CategoryDTO from "../../src/application/dtos/CategoryDTO";
import CreateCategory from "../../src/application/use-cases/CreateCategory";
import MongooseAdapter from "../../src/infra/database/DatabaseConnection";
import CategoryMongooseAdapter from "../../src/infra/database/do/CategoryMongooseAdapter";
import CategoryRepositoryDB from "../../src/infra/repositories/CategoryRepositoryMongoDB";

let connection: MongooseAdapter;

const sutCategoryRepository = () => {
  const connection = new CategoryMongooseAdapter();
  return new CategoryRepositoryDB(connection);
};

describe("Category", () => {
  beforeAll(() => {
    connection = new MongooseAdapter("mongodb://root:root@127.0.0.1:27017/");
  });

  it("Should create a category", async () => {
    const category: CategoryDTO = {
      description: "Category Description",
      ownerId: "123456",
      title: "Category title",
    };

    const createdCategory = await new CreateCategory(
      sutCategoryRepository()
    ).execute(category);

    expect(createdCategory).toHaveProperty("description");
    expect(createdCategory).toHaveProperty("ownerId");
    expect(createdCategory).toHaveProperty("title");
  });

  afterAll(() => {
    MongooseAdapter.close();
  });
});
