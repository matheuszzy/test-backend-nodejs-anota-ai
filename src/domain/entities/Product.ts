import ProductDTO from "../../application/dtos/ProductDTO";
import Category from "./Category";

export default class Product {
  constructor(productDTO: ProductDTO) {
    Object.assign(this, productDTO);
  }
}
