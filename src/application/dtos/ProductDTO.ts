import Category from "../../domain/entities/Category";

export default interface ProductDTO {
    readonly title: string,
    readonly description: string,
    readonly price: number,
    readonly category: Category,
    readonly ownerId: string
}