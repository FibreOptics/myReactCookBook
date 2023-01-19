import React, { useEffect, useState } from "react";

type Props = {};

interface ProductShape {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: { rate: number; count: number };
}

const getProducts = async () =>
  await fetch("https://fakestoreapi.com/products").then<ProductShape[]>((res) =>
    res.json()
  );

const Products = (props: Props) => {
  const [products, setProducts] = useState<ProductShape[]>([]);

  useEffect(() => {
    (async () => {
      setProducts(await getProducts());
    })();
  }, []);

  return (
    <div>
      <h4>Products</h4>
      <div>
        {products.map(({ id, title, image }) => (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <code>{id}</code>
            <img src={image} height={40} />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
