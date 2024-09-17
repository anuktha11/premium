import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import kurtiImage from '../images/dress/WhatsApp Image 2024-09-16 at 12.33.56 AM (2).jpeg';
import embroideryKurtiImage from '../images/kurthi/1.jpeg';
import kutri from '../images/kurthi2/WhatsApp Image 2024-09-16 at 10.50.11 PM (1).jpeg';
import zkurti from '../images/kurthi5/1 (11).jpeg';
import arkurti from '../images/kurthi3/3 (2).jpeg';

const Home = () => {
  const categories = [
    { name: 'Kurti', imageUrl: kurtiImage, originalPrice: '₹1120', offerPrice: '₹699' },
    { name: 'Kurti01', imageUrl: embroideryKurtiImage, originalPrice: '₹999', offerPrice: '₹499' },
    { name: 'Kurti02', imageUrl: kutri, originalPrice: '₹599', offerPrice: '₹340' },
    { name: 'Kurti03', imageUrl: arkurti, originalPrice: '₹799', offerPrice: '₹399' },
    { name: 'Kurti05', imageUrl: zkurti, originalPrice: '₹599', offerPrice: '₹340' },
  ];

  return (
    <div className="home-container">
      <div className="intro">
        <h1>Discover the Elegance of Quality Dresses</h1>
        <p>Unmatched style, comfort, and design for every occasion.</p>
      </div>

      <div className="categories-section">
        <h2>Explore by Category</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.name} className="category-item">
              <Link to={`/category/${category.name.toLowerCase()}`}>
                <img src={category.imageUrl} alt={category.name} />
                <div className="category-info">
                  <h3>{category.name}</h3>
                  <p className="price">
                    <span className="original-price">{category.originalPrice}</span> {category.offerPrice}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Add single purple "Lehenga" button at the bottom */}
      <div className="lehenga-section">
        <Link to="/lehengas">
          <button className="lehenga-button">View Narayanpeta Lehengas</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
