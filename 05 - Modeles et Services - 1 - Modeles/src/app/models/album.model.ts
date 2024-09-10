// Import de l'interface Product
import Product from "./product.model";

// Création du modèle Album qui est une interface qui étend Product
export default interface Album extends Product {
  artiste: string;
}