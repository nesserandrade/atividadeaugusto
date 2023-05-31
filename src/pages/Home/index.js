import { React, useState, useEffect } from "react";
import MenuHome from "../../components/MenuHome";
import ProductItem from "../../components/ProductItem";
import FooterHome from "../../components/FooterHome";

const ListProducts = () => {
  useEffect(() => {
    async function getProducts() {
      const result = await fetch(`https://fakestoreapi.com/products/`);
      const data = await result.json();
      setProducts(data);
    }

    getProducts();
  }, []);

  const [products, setProducts] = useState([]);

  return (
    <>
      <MenuHome title="VitrineVirtual - Lista de produtos" />
      <div className="products-container">
        {products.map((item) => (
          <ProductItem
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
            index={item.id}
            category={item.category}
          />
        ))}
      </div>
      <FooterHome text="Essa loja foi desenvolvida por Nesser"/>
    </>
  );
};

export default ListProducts;
