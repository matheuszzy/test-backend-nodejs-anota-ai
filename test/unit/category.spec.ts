import CategoryDTO from "../../src/application/dtos/CategoryDTO";
import CreateCategory from "../../src/application/use-cases/CreateCategory";
import Category from "../../src/domain/entities/Category";

export const sutCategory = () => {
  const category: CategoryDTO = {
    description: "Category Description",
    ownerId: "123456",
    title: "Category title",
  };

  return new Category(category);
};

describe("Category", () => {
  it("Should create a sut category", () => {
    const sut = sutCategory();
    expect(sut).toBeDefined();
  });

  it("Should create a category", () => {
    const category: CategoryDTO = {
      description: "Category Description",
      ownerId: "123456",
      title: "Category title",
    };
    
    const createCategory = new CreateCategory().execute(category)
    
    expect(category).toStrictEqual(createCategory)
  });
});
