import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useCategoryStore from "../../store/categoryStore";
import useProductStore from "../../store/productStore";
import useCartStore from "../../store/cartStore";


const Header = ({ onSelectCategory }) => {

  const location = useLocation();

  const { categories, loading, error, getAllCategories, getCategoryById } = useCategoryStore();
  const { getAllProducts, getProductsByCategory } = useProductStore();
  const { cart } = useCartStore();
  const [ selectedCategory, setSelectedCategory] = useState(null);
  
  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId) {
      getProductsByCategory(categoryId);
    } else {
      getAllProducts();
      setSelectedCategory(null); 
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="header">
        <div className="container">
        <div className="row">
              <div className="webshop-name col-md-3 col-4 d-flex align-items-center">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                  <img alt="logo" src="/images/logo.png" onClick={() => handleCategoryClick(null)}/>
                  <h1 className="col-md-6 align-items-center">FASHIONshop</h1>
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                
              </div> 
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                <div className="btn-group ml-auto">
                <button
                    type="button"
                    className="name-button dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    Korisnik
                </button>
                <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/profile">
                    Profil
                    </Link>

                    <Link
                    className="dropdown-item"
                    to="/login"
                    // onClick={logoutHandler}
                    >
                    Odjavi se
                    </Link>
                </div>
                </div>
                <Link to="/login">Prijava</Link>

                <Link to="/cart">
                  <i className="fas fa-shopping-bag"></i>
                  <span className="badge">{cart.length}</span>
                </Link>
              </div>
            </div>
        </div>
      </div>
      {/* Categories of product */}
      {location.pathname === '/' && (
        <div className="Category ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              {/* Dropdown Menu */}
                <div className="btn-group ml-3">
                <button
                    type="button"
                    className="name-button dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    Kategorije
                </button>
                <div className="dropdown-menu">
                  {loading ? (
                    <p>Loading...</p>
                  ) : error ? (
                    <p>Error: {error.message}</p>
                  ) : (
                    categories.map((category) => (
                      <Link
                        key={category.id}
                        className="dropdown-item"
                        onClick={() => handleCategoryClick(category.id)}
                      >
                        {category.name}
                      </Link>
                    ))
                  )}
                </div>
                </div>
                <div className="justify-content-center d-flex">
                <p>{selectedCategory ? categories.find(cat => cat.id === selectedCategory)?.name : 'Najnoviji proizvodi'}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      )}
      
    </div>
  );
};

export default Header;
