import React, { useState } from "react";
import Header from "../components/homeComponents/Header";
import Footer from "../components/homeComponents/Footer";
import ShopSection from "../components/homeComponents/ShopSection";

const HomeScreen = () => {
  window.scrollTo(0, 0);
  
  const [ selectedCategory, setSelectedCategory ] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Header onSelectCategory={handleCategorySelect}/>
      <ShopSection selectedCategory={selectedCategory}/>
      <Footer/>
    </div>
  );
};

export default HomeScreen;
