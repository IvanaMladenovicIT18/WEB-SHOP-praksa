import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/homeComponents/Header";
import useProductStore from "../store/productStore";
import useCartStore from "../store/cartStore";
import Footer from "../components/homeComponents/Footer";

const SingleProduct = () => {

    const [qty, setQty] = useState(1);

    const navigate = useNavigate();
    const params = useParams();
    const productId = params.id;

    const { loading, error, product, getProductById } = useProductStore();
    const { addToCart } = useCartStore();

    useEffect(() => {
        getProductById(productId);
    }, [productId, getProductById]);

    const AddToCartHandle = () => {
      addToCart(product, parseInt(qty));
      navigate("/cart");
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
          <Header />
          <div className="container single-product">
            {loading ? (
              <p>Loading</p>
            ) : error ? (
              <p>Error</p>
            ) : product ? (
              <>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product-dtl">
                      <div className="product-info">
                        <div className="product-name">{product.name}</div>
                      </div>
                      <p>Opis: {product.description}</p>
                      <p>Velicina: {product.size}</p>
    
                      <div className="product-count col-lg-7 ">
                        <div className="flex-box d-flex justify-content-between align-items-center">
                          <h6>Cena</h6>
                          <span>{product.price} RSD</span>
                        </div>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                          <h6>Status</h6>
                          {product.availableQuantity > 0 ? (
                            <span>Na stanju</span>
                          ) : (
                            <span>nije dostupno</span>
                          )}
                        </div>
                        {product.availableQuantity > 0 ? (
                          <>
                            <div className="flex-box d-flex justify-content-between align-items-center">
                              <h6>Kolicina</h6>
                              <select
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                              >
                                {[...Array(Math.min(product.availableQuantity, 50)).keys()].map(
                                  (x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  )
                                )}
                              </select>
                            </div>
                            <button
                              onClick={AddToCartHandle}
                              className="round-black-btn"
                            >
                              Dodaj u korpu
                            </button>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
          <Footer/>
        </>
      );
}

export default SingleProduct;