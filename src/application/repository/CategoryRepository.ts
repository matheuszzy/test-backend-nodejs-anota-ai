import Category from "../../domain/entities/Category";

export default interface CategoryRepository {
    save(category: Category): Promise<Category>
    findByOwnerId(ownerId: string): Promise<Category[]>
}