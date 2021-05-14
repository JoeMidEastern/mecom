import ProductList from "../../components/Products/ProductList/ProductList";

const HomeScreen = ({ products, quickAddToCart }) => {
  console.log("products logged from HomeScreen.jsx", products);
  return (
    <ProductList
      products={products}
      quickAddToCart={quickAddToCart}
    ></ProductList>
  );
};

export default HomeScreen;
