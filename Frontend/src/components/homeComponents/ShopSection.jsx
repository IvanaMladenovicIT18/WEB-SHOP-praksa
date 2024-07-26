import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useProductStore from "../../store/productStore.js";

const ShopSection = () => {

    const { products, loading, error, getAllProducts } = useProductStore();

    useEffect(() => {
        getAllProducts();
        }, [getAllProducts]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                  <>
                    {products.map((product) => (
                      <div
                        className="shop col-lg-3 col-md-4 col-sm-6"
                        key={product.id}
                      >
                        <div className="border-product">
                          <Link to={`/products/${product.id}`}>
                            <div className="shopBack">
                              <img src={product.image} alt={product.shape} />
                            </div>
                          </Link>

                          <div className="shoptext">
                            <p>
                              <Link to={`/products/${product.id}`}>
                                {product.name}
                              </Link>
                            </p>

                            <h3>{product.price} RSD</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
