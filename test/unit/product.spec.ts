import ProductDTO from "../../src/application/dtos/ProductDTO";
import Product from "../../src/domain/entities/Product";
import { sutCategory } from "./category.spec";

export const sutProduct = () => {
  const product: ProductDTO = {
    title: "Product Title",
    description: "Product description",
    price: 10,
    category: sutCategory(),
    ownerId: "654321",
  };

  return new Product(product);
};

describe("Product", () => {
  it("Should create a sut product", () => {
    const sut = sutProduct();
    expect(sut).toBeDefined();
  });
});


