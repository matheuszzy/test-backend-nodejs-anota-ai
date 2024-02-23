import CategoryDTO from "../../application/dtos/CategoryDTO";

export default class Category {
  constructor(categoryDTO: CategoryDTO) {
    Object.assign(this, categoryDTO);
  }
}
