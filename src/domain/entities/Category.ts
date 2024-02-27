import CategoryDTO from "../../application/dtos/CategoryDTO";

export default class Category {
  title: string = "";
  description: string = "";
  ownerId: string = "";
  
  constructor(categoryDTO: CategoryDTO) {
    Object.assign(this, categoryDTO);
  }
}
