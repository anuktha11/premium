// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
// import { Carousel } from 'react-bootstrap';
import './Home.css';
import kurtiImage from '../images/dress/WhatsApp Image 2024-09-16 at 12.33.56 AM (2).jpeg';
import embroideryKurtiImage from '../images/kurthi/1.jpeg';
import kutri from '../images/kurthi2/WhatsApp Image 2024-09-16 at 10.50.11 PM (1).jpeg'
  // import lehang from '../images/lehanga/li.jpeg'
const Home = () => {
  const categories = [
    // { name: 'Lehenga', imageUrl: lehang, originalPrice: '₹1500', offerPrice: '₹1200' },
    { name: 'Kurti', imageUrl: kurtiImage, originalPrice: '₹1120', offerPrice: '₹699' },
    { name: 'Kurti01', imageUrl: embroideryKurtiImage, originalPrice: '₹999', offerPrice: '₹499' },
    { name: 'Kurti02', imageUrl: kutri, originalPrice: '₹700', offerPrice: '₹360' },
    // { name: 'Sari', imageUrl: '/images/sari.jpg', originalPrice: '₹2000', offerPrice: '₹1500' },
  ];

  // const offerBanners = [
  //   { imageUrl: '/images/offer1.jpg' },
  //   { imageUrl: '/images/offer2.jpg' },
  //   { imageUrl: '/images/offer3.jpg' },
  // ];

  return (
    <div className="home-container">
      <div className="intro">
        <h1>Discover the Elegance of Quality Dresses</h1>
        <p>Unmatched style, comfort, and design for every occasion.</p>
      </div>

      {/* <div className="carousel-section">
        <h2>Special Offers</h2>
        <Carousel>
          {offerBanners.map((offer, index) => (
            <Carousel.Item key={index}>
              <img src={offer.imageUrl} alt={`Offer ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div> */}

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
              <Link to="/lehengas">
          <button className="lehenga-button">View Narayanpeta Lehengas</button>
        </Link>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
