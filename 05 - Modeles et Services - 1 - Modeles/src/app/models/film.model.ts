import Product from "./product.model";

export interface FilmModel extends Product {
  real: string;
  synopsis: string;
}
