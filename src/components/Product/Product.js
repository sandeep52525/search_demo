import React from "react";

import styles from "./styles.module.css";

const Product = ({ product }) => {
  return (
    <div className={styles.productContainer}>
      <img src={product.image_link} alt={product.product_code} />
      <div className={styles.detailsContainer}>
        <span className={styles.detailsTitle}>{product.title}</span>
        <span className={styles.detailsSKU}>SKU: {product.product_code}</span>
        <span className={styles.detailsPrice}>${product.price}</span>
      </div>
    </div>
  );
};

export default Product;
