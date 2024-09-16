import React from 'react';
import './LehengaVideos.css'; // Optional: For custom styles

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
      <h1>Narayanpeta Lehengas</h1>
      <p className="price">Price: ₹{price}</p>
      <p className="shipping">Shipping:</p>
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
      </div>
    </div>
  );
};

export default LehengaVideos;
