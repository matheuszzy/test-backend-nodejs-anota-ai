import { Model, Schema, model } from "mongoose";
import CategoryDTO from "../../../application/dtos/CategoryDTO";

export default class CategoryMongooseAdapter {
  public model: Model<CategoryDTO>;
  private _schema: Schema<CategoryDTO>;

  constructor() {
    this._schema = new Schema({
      title: { type: String, required: true },
      description: { type: String },
      ownerId: { type: String, required: true },
    });

    this.model = model("Category", this._schema);
  }
}
