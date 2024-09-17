import React from 'react';
import './LehengaVideos.css'; // Optional: For custom styles
import { Link } from 'react-router-dom'
// Importing the video files from the images folder
import video1 from '../images/lehanga/WhatsApp Video 2024-09-16 at 11.05.42 PM (1).mp4';
import video2 from '../images/lehanga/one.mp4';
  import video3 from '../images/lehanga/two.mp4';
 import video4 from '../images/lehanga/three.mp4';
//   import video5 from '../images/lehanga/four.mp4';
  import video6 from '../images/lehanga/five.mp4';
  import video7 from '../images/lehanga/six.mp4';
  import video8 from '../images/lehanga/seven.mp4';


// Add more videos as needed

const LehengaVideos = () => {
  // Shipping information
  const price = 999;
  const shippingAPTS = 60;
  const shippingOtherStates = 100;

  return (
    <div className="lehenga-videos-container">
<div className="link-container">
         <Link to="/ " style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/category/kurti" style={{ margin: '0 10px' }}>Kurti @ 699</Link>
      <Link to="/lehengas" style={{ margin: '0 10px' }}>Lehengas @ 999</Link>
      <Link to="/category/kurti01" style={{ margin: '0 10px' }}>Kurti @ 460</Link>
      <Link to="/category/kurti02" style={{ margin: '0 10px' }}>Kurti @ 340</Link>
      <Link to="/category/kurti03" style={{ margin: '0 10px' }}>Kurti @ 399</Link>
      <Link to="/category/kurti05" style={{ margin: '0 10px' }}>Top @ 340</Link>
       {/* Add more categories as needed */}
    </div>
      <h1>Narayanpeta Lehengas</h1>
      <p className="price">Price: ₹{price}</p>
      <p> call: "Call Now For Book Your Favorite one: +91 9442533967"</p>
      <p className="shipping">Shipping charges:</p>
      <ul>
        <li>Andhra Pradesh & Telangana: ₹{shippingAPTS}</li>
        <li>Other States: ₹{shippingOtherStates}</li>
      </ul>

      <div className="videos">
        {/* Displaying the first video */}
       
        <div className="video-wrapper">
          <video width="100%" height="auto" controls>
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>  
        <div className="video-wrapper">
          <video width="100%" height="auto" controls>
            <source src={video4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>  
        {/* <div className="video-wrapper">
          <video width="100%" height="auto" controls>
            <source src={video5} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>   */}
        <div className="video-wrapper">
          <video width="100%" height="auto" controls>
            <source src={video6} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>  
        <div className="video-wrapper">
          <video width="100%" height="auto" controls>
            <source src={video7} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>  
        <div className="video-wrapper">
          <video width="100%" height="auto" controls>
            <source src={video8} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>  
        <div className="video-wrapper">
          <video width="100%" height="auto" controls>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* You can add more videos similarly by importing them */}
          <div className="video-wrapper">
          <video width="100%" height="auto" controls>
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> 
        <div className="link-container">
                  <Link to="/ " style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/category/kurti" style={{ margin: '0 10px' }}>Kurti @699</Link>
      <Link to="/lehengas" style={{ margin: '0 10px' }}>Lehengas @ 999</Link>
      <Link to="/category/kurti01" style={{ margin: '0 10px' }}>Kurti @460</Link>
      <Link to="/category/kurti02" style={{ margin: '0 10px' }}>Kurti @ 340</Link>
      <Link to="/category/kurti03" style={{ margin: '0 10px' }}>Kurti @ 399</Link>
      <Link to="/category/kurti05" style={{ margin: '0 10px' }}>top @ 340</Link>
       {/* Add more categories as needed */}
    </div> 
      </div>
    </div>
  );
};

export default LehengaVideos;
