// pages/Category.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Category.css";

// Importing Kurti images
import kurti1 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.56 AM (2).jpeg";
import kurti2 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.43 AM (1).jpeg";
import kurti3 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.43 AM (2).jpeg";
import kurti4 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.43 AM (3).jpeg";
import kurti5 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.43 AM.jpeg";
import kurti6 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.44 AM (1).jpeg";
import kurti7 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.44 AM.jpeg";
import kurti8 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.45 AM (1).jpeg";
import kurti9 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.45 AM (2).jpeg";
import kurti10 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.45 AM (3).jpeg";
import kurti11 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.45 AM.jpeg";
import kurti12 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.46 AM (1).jpeg";
import kurti13 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.46 AM.jpeg";
import kurti14 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.47 AM (1).jpeg";
import kurti15 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.47 AM (2).jpeg";
import kurti16 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.47 AM.jpeg";
import kurti18 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.48 AM (2).jpeg";
import kurti19 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.48 AM.jpeg";
import kurti20 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.49 AM (1).jpeg";
import kurti21 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.49 AM (2).jpeg";
import kurti22 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.49 AM (3).jpeg";
import kurti23 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.49 AM.jpeg";
import kurti24 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.50 AM (1).jpeg";
import kurti25 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.50 AM (2).jpeg";
import kurti26 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.50 AM.jpeg";
import kurti27 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.51 AM (1).jpeg";
import kurti28 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.51 AM (2).jpeg";
import kurti29 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.51 AM.jpeg";
import kurti30 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.52 AM (1).jpeg";
import kurti31 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.52 AM (2).jpeg";
import kurti32 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.52 AM.jpeg";
import kurti33 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.53 AM (1).jpeg";
import kurti34 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.53 AM (2).jpeg";
import kurti35 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.53 AM.jpeg";
import kurti36 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.54 AM (1).jpeg";
import kurti37 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.54 AM (2).jpeg";
import kurti38 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.54 AM.jpeg";
import kurti39 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.55 AM (1).jpeg";
import kurti40 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.55 AM (2).jpeg";
import kurti41 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.55 AM.jpeg";
import kurti42 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.56 AM (1).jpeg";
import kurti44 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.56 AM.jpeg";
import kurti45 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.57 AM (1).jpeg";
import kurti46 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.57 AM (2).jpeg";
import kurti47 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.57 AM (3).jpeg";
import kurti48 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.57 AM.jpeg";
import kurti49 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.58 AM (1).jpeg";
import kurti50 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.58 AM (2).jpeg";
import kurti51 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.58 AM.jpeg";
import kurti52 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.59 AM (1).jpeg";
import kurti53 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.59 AM (2).jpeg";
import kurti54 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.59 AM (3).jpeg";
import kurti55 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.59 AM.jpeg";
import kurti56 from "../images/dress/WhatsApp Image 2024-09-16 at 12.34.00 AM (1).jpeg";
import kurti57 from "../images/dress/WhatsApp Image 2024-09-16 at 12.34.00 AM (2).jpeg";
import kurti58 from "../images/dress/WhatsApp Image 2024-09-16 at 12.34.00 AM.jpeg";
import kurti59 from "../images/dress/WhatsApp Image 2024-09-16 at 12.34.01 AM (1).jpeg";
import kurti60 from "../images/dress/WhatsApp Image 2024-09-16 at 12.34.01 AM (2).jpeg";
import kurti61 from "../images/dress/WhatsApp Image 2024-09-16 at 12.34.01 AM.jpeg";
import kurti62 from "../images/dress/WhatsApp Image 2024-09-16 at 12.34.02 AM (1).jpeg";
import kurti63 from "../images/dress/WhatsApp Image 2024-09-16 at 12.34.02 AM (2).jpeg";
import kurti64 from "../images/dress/WhatsApp Image 2024-09-16 at 12.34.02 AM.jpeg";
import kurti65 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.35 AM.jpeg";
import kurti66 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.36 AM (1).jpeg";
import kurti67 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.36 AM (2).jpeg";
import kurti68 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.36 AM.jpeg";
import kurti69 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.37 AM (1).jpeg";
import kurti70 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.37 AM (2).jpeg";
import kurti71 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.37 AM.jpeg";
import kurti72 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.38 AM (1).jpeg";
import kurti73 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.38 AM (2).jpeg";
import kurti74 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.38 AM.jpeg";
import kurti75 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.39 AM (1).jpeg";
import kurti76 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.39 AM.jpeg";
import kurti77 from "../images/dress/WhatsApp Image 2024-09-16 at 12.33.40 AM (1).jpeg";

// Importing Embroidery Kurthi images
import Ekurti1 from "../images/kurthi/1.jpeg";
import Ekurti2 from "../images/kurthi/2.jpeg";
import Ekurti3 from "../images/kurthi/3.jpeg";
import Ekurti4 from "../images/kurthi/4.jpeg";
import Ekurti5 from "../images/kurthi/5.jpeg";
import Ekurti6 from "../images/kurthi/6.jpeg";
import Ekurti7 from "../images/kurthi/7.jpeg";
import Ekurti8 from "../images/kurthi/8.jpeg";
import Ekurti9 from "../images/kurthi/9.jpeg";
import Ekurti10 from "../images/kurthi/10.jpeg";
import Ekurti11 from "../images/kurthi/11.jpeg";
import Ekurti12 from "../images/kurthi/12.jpeg";
import Ekurti13 from "../images/kurthi/13.jpeg";
import Ekurti14 from "../images/kurthi/14.jpeg";
import Ekurti15 from "../images/kurthi/15.jpeg";
import Ekurti16 from "../images/kurthi/16.jpeg";
import Ekurti17 from "../images/kurthi/17.jpeg";
import Ekurti18 from "../images/kurthi/18.jpeg";
import Ekurti19 from "../images/kurthi/19.jpeg";
import Ekurti20 from "../images/kurthi/20.jpeg";
import Ekurti21 from "../images/kurthi/21.jpeg";
import Ekurti22 from "../images/kurthi/22.jpeg";
import Ekurti23 from "../images/kurthi/23.jpeg";
import Ekurti24 from "../images/kurthi/24.jpeg";
import Ekurti25 from "../images/kurthi/25.jpeg";
import Ekurti26 from "../images/kurthi/26.jpeg";
import Ekurti27 from "../images/kurthi/27.jpeg";
import Ekurti28 from "../images/kurthi/28.jpeg";
import Ekurti29 from "../images/kurthi/29.jpeg";
import Ekurti30 from "../images/kurthi/30.jpeg";
import Ekurti31 from "../images/kurthi/31.jpeg";
import Ekurti32 from "../images/kurthi/32.jpeg";
import Ekurti33 from "../images/kurthi/33.jpeg";
import Ekurti34 from "../images/kurthi/34.jpeg";
import Ekurti35 from "../images/kurthi/35.jpeg";
import Ekurti36 from "../images/kurthi/36.jpeg";
import Ekurti37 from "../images/kurthi/37.jpeg";
import Ekurti38 from "../images/kurthi/38.jpeg";
import Ekurti39 from "../images/kurthi/39.jpeg";
import Ekurti40 from "../images/kurthi/40.jpeg";
import Ekurti41 from "../images/kurthi/41.jpeg";
import Ekurti42 from "../images/kurthi/42.jpeg";
import Ekurti43 from "../images/kurthi/43.jpeg";
import Ekurti44 from "../images/kurthi/44.jpeg";
import Ekurti45 from "../images/kurthi/45.jpeg";
import Ekurti46 from "../images/kurthi/46.jpeg";
import Ekurti47 from "../images/kurthi/47.jpeg";
import Ekurti48 from "../images/kurthi/48.jpeg";
import Ekurti49 from "../images/kurthi/49.jpeg";
import Ekurti50 from "../images/kurthi/50.jpeg";
import Ekurti51 from "../images/kurthi/51.jpeg";
import Ekurti52 from "../images/kurthi/52.jpeg";
import Ekurti53 from "../images/kurthi/53.jpeg";
import Ekurti54 from "../images/kurthi/54.jpeg";
import Ekurti55 from "../images/kurthi/55.jpeg";
import Ekurti56 from "../images/kurthi/56.jpeg";
import Ekurti57 from "../images/kurthi/57.jpeg";
import Ekurti58 from "../images/kurthi/58.jpeg";
import Ekurti59 from "../images/kurthi/59.jpeg";
import Ekurti60 from "../images/kurthi/60.jpeg";
import Ekurti61 from "../images/kurthi/61.jpeg";
import Ekurti62 from "../images/kurthi/62.jpeg";
import Ekurti63 from "../images/kurthi/63.jpeg";
import Ekurti64 from "../images/kurthi/64.jpeg";
import Ekurti65 from "../images/kurthi/65.jpeg";
import Ekurti66 from "../images/kurthi/66.jpeg";
import Ekurti67 from "../images/kurthi/67.jpeg";
import Ekurti68 from "../images/kurthi/68.jpeg";
import Ekurti69 from "../images/kurthi/69.jpeg";
import Ekurti70 from "../images/kurthi/70.jpeg";
import Ekurti71 from "../images/kurthi/71.jpeg";
import Ekurti72 from "../images/kurthi/72.jpeg";
import Ekurti73 from "../images/kurthi/73.jpeg";
import Ekurti74 from "../images/kurthi/74.jpeg";
import Ekurti75 from "../images/kurthi/75.jpeg";
import Ekurti76 from "../images/kurthi/76.jpeg";
import Ekurti77 from "../images/kurthi/77.jpeg";
import Ekurti78 from "../images/kurthi/78.jpeg";


import kurty from "../images/kurthi2/WhatsApp Image 2024-09-16 at 10.50.10 PM.jpeg"
import kurty1 from "../images/kurthi2/WhatsApp Image 2024-09-16 at 10.50.11 PM (1).jpeg"
import kurty2 from "../images/kurthi2/WhatsApp Image 2024-09-16 at 10.50.11 PM (2).jpeg"
import kurty3 from "../images/kurthi2/WhatsApp Image 2024-09-16 at 10.50.11 PM.jpeg"
import kurty4 from "../images/kurthi2/WhatsApp Image 2024-09-16 at 10.50.12 PM (1).jpeg"
import kurty5 from "../images/kurthi2/WhatsApp Image 2024-09-16 at 10.50.12 PM (2).jpeg"
import kurty6 from "../images/kurthi2/WhatsApp Image 2024-09-16 at 10.50.12 PM (3).jpeg"
import kurty7 from "../images/kurthi2/WhatsApp Image 2024-09-16 at 10.50.12 PM.jpeg"
import kurty8 from "../images/kurthi2/WhatsApp Image 2024-09-16 at 9.26.34 PM.jpeg"

import zkurthi from "../images/kurthi5/1 (1).jpeg"
import zkurthi1 from "../images/kurthi5/1 (2).jpeg"
import zkurthi2 from "../images/kurthi5/1 (3).jpeg"
import zkurthi3 from "../images/kurthi5/1 (4).jpeg"
import zkurthi4 from "../images/kurthi5/1 (5).jpeg"
import zkurthi5 from "../images/kurthi5/1 (6).jpeg"
import zkurthi6 from "../images/kurthi5/1 (7).jpeg"
import zkurthi7 from "../images/kurthi5/1 (8).jpeg"
import zkurthi8 from "../images/kurthi5/1 (9).jpeg"
import zkurthi9 from "../images/kurthi5/1 (10).jpeg"
import zkurthi10 from "../images/kurthi5/1 (11).jpeg"
import zkurthi11 from "../images/kurthi5/1 (12).jpeg"
import zkurthi12 from "../images/kurthi5/1 (13).jpeg"
import zkurthi13 from "../images/kurthi5/1 (14).jpeg"
import zkurthi14 from "../images/kurthi5/1 (15).jpeg"
import zkurthi15 from "../images/kurthi5/1 (16).jpeg"
import zkurthi16 from "../images/kurthi5/1 (17).jpeg"
import zkurthi17 from "../images/kurthi5/1 (18).jpeg"
import zkurthi18 from "../images/kurthi5/1 (19).jpeg"
import zkurthi19 from "../images/kurthi5/1 (20).jpeg"
import zkurthi20 from "../images/kurthi5/1 (21).jpeg"
import zkurthi21 from "../images/kurthi5/1 (22).jpeg"
import zkurthi22 from "../images/kurthi5/1 (23).jpeg"
import zkurthi23 from "../images/kurthi5/1 (24).jpeg"
import zkurthi24 from "../images/kurthi5/1 (25).jpeg"
import zkurthi25 from "../images/kurthi5/1 (26).jpeg"
import zkurthi26 from "../images/kurthi5/1 (27).jpeg"
import zkurthi27 from "../images/kurthi5/1 (28).jpeg"
import zkurthi28 from "../images/kurthi5/1 (29).jpeg"
import zkurthi29 from "../images/kurthi5/1 (30).jpeg"
import zkurthi30 from "../images/kurthi5/1 (31).jpeg"
import zkurthi31 from "../images/kurthi5/1 (32).jpeg"
import zkurthi32 from "../images/kurthi5/1 (33).jpeg"
import zkurthi33 from "../images/kurthi5/1 (34).jpeg"
import zkurthi34 from "../images/kurthi5/1 (35).jpeg"
import zkurthi35 from "../images/kurthi5/1 (36).jpeg"
import zkurthi36 from "../images/kurthi5/1 (37).jpeg"
 

import arkurty from "../images/kurthi3/3 (1).jpeg"
import arkurty1 from "../images/kurthi3/3 (2).jpeg"
import arkurty2 from "../images/kurthi3/3 (3).jpeg"
import arkurty3 from "../images/kurthi3/3 (4).jpeg"
import arkurty4 from "../images/kurthi3/3 (5).jpeg"
import arkurty5 from "../images/kurthi3/3 (6).jpeg"
import arkurty6 from "../images/kurthi3/3 (7).jpeg"
import arkurty7 from "../images/kurthi3/3 (8).jpeg"
import arkurty9 from "../images/kurthi3/3 (9).jpeg"
import arkurty10 from "../images/kurthi3/3 (10).jpeg"
import arkurty11 from "../images/kurthi3/3 (11).jpeg"
import arkurty12 from "../images/kurthi3/3 (12).jpeg"
import arkurty13 from "../images/kurthi3/3 (13).jpeg"
import arkurty14 from "../images/kurthi3/3 (14).jpeg"
import arkurty15 from "../images/kurthi3/3 (15).jpeg"
import arkurty16 from "../images/kurthi3/3 (16).jpeg"
import arkurty17 from "../images/kurthi3/3 (17).jpeg"
import arkurty18 from "../images/kurthi3/3 (18).jpeg"
import arkurty19 from "../images/kurthi3/3 (19).jpeg"
  import arkurty20 from "../images/kurthi3/3 (20).jpeg" 
   import arkurty21 from "../images/kurthi3/3 (21).jpeg"
   import arkurty22 from "../images/kurthi3/3 (22).jpeg"
   import arkurty23 from "../images/kurthi3/3 (23).jpeg"
   import arkurty24 from "../images/kurthi3/3 (24).jpeg"
   import arkurty25 from "../images/kurthi3/3 (25).jpeg"
   import arkurty26 from "../images/kurthi3/3 (26).jpeg"










const Category = () => {
  const { categoryName } = useParams();

  // Defining images for each category
  const categoryItems = {
    kurti: [
      kurti1,
      kurti14,
      kurti54,
      kurti19,
      kurti58,
      kurti18,
      kurti2,
      kurti3,
      kurti4,
      kurti5,
      kurti6,
      kurti7,
      kurti8,
      kurti9,
      kurti10,
      kurti11,
      kurti12,
      kurti13,
      kurti15,
      kurti20,
      kurti21,
      kurti22,
      kurti23,
      kurti24,
      kurti25,
      kurti26,
      kurti27,
      kurti28,
      kurti29,
      kurti30,
      kurti31,
      kurti32,
      kurti33,
      kurti34,
      kurti35,
      kurti36,
      kurti37,
      kurti38,
      kurti39,
      kurti40,
      kurti41,
      kurti42,
      kurti44,
      kurti45,
      kurti46,
      kurti47,
      kurti48,
      kurti49,
      kurti50,
      kurti51,
      kurti52,
      kurti53,
      kurti55,
      kurti56,
      kurti57,
      kurti59,
      kurti60,
      kurti61,
      kurti62,
      kurti63,
      kurti64,
      kurti16,
      kurti65,
      kurti66,
      kurti67,
      kurti68,
      kurti69,
      kurti70,
      kurti71,
      kurti72,
      kurti73,
      kurti74,
      kurti75,
      kurti76,
      kurti77,
    ],
    kurti01:  [
      Ekurti1, Ekurti2, Ekurti3, Ekurti4, Ekurti5, Ekurti6, Ekurti7, Ekurti8,
      Ekurti9, Ekurti10, Ekurti11, Ekurti12, Ekurti13, Ekurti14, Ekurti15, Ekurti16,
      Ekurti17, Ekurti18, Ekurti19, Ekurti20, Ekurti21, Ekurti22, Ekurti23, Ekurti24,
      Ekurti25, Ekurti26, Ekurti27, Ekurti28, Ekurti29, Ekurti30, Ekurti31, Ekurti32,
      Ekurti33, Ekurti34, Ekurti35, Ekurti36, Ekurti37, Ekurti38, Ekurti39, Ekurti40,
      Ekurti41, Ekurti42, Ekurti43, Ekurti44, Ekurti45, Ekurti46, Ekurti47, Ekurti48,
      Ekurti49, Ekurti50, Ekurti51, Ekurti52, Ekurti53, Ekurti54, Ekurti55, Ekurti56,
      Ekurti57, Ekurti58, Ekurti59, Ekurti60, Ekurti61, Ekurti62, Ekurti63, Ekurti64,
      Ekurti65, Ekurti66, Ekurti67, Ekurti68, Ekurti69, Ekurti70, Ekurti71, Ekurti72,
      Ekurti73, Ekurti74, Ekurti75, Ekurti76, Ekurti77, Ekurti78
  ],
  kurti02:[
kurty,kurty1,kurty2,kurty3,kurty4,kurty5,kurty6,kurty7,kurty8],

  kurti03:[
arkurty,arkurty1,arkurty2,arkurty3,arkurty4,arkurty5,arkurty6,arkurty7,arkurty9,arkurty10,arkurty11,arkurty12,arkurty13,arkurty14,arkurty15,arkurty16,arkurty17,arkurty19,arkurty18,arkurty20,arkurty21,arkurty22,arkurty23,arkurty24,arkurty25,arkurty26],
kurti05:[
  zkurthi,zkurthi1,zkurthi2,zkurthi3,zkurthi4,zkurthi5,zkurthi6,zkurthi7,zkurthi8,zkurthi9,zkurthi10,zkurthi11,zkurthi12,zkurthi13,zkurthi14,zkurthi15,zkurthi16,zkurthi17,zkurthi18,zkurthi19,zkurthi20,zkurthi21,zkurthi22,zkurthi23,zkurthi24,zkurthi25,zkurthi26,zkurthi27,zkurthi28,zkurthi29,zkurthi30,zkurthi32,zkurthi31,zkurthi33,zkurthi34,zkurthi35,zkurthi36],
  };

  // Descriptions for each category
  const categoryDescriptions = {
    kurti: {
      title: "New Launch: Kurti with Dupatta",
      fabric: "Heavy Muslin",
      size: "S to XXXL (depends on stock availability)",
      originalPrice: "₹1120",
      salePrice: "₹699",
      offer: "Free Shipping on All Orders!",
      call: "Call Now For Book Your Favorite Kurti: +91 9442533967",
    },
    kurti01: {
      title: "Embroidery Kurthi",
      fabric: "Dobby foil ,silk cotton full Embroidery",
      size: "Given with image",
      originalPrice: "₹999",
      salePrice: "₹460",
      offer: "Free Shipping on All Orders!",
      call: "Call Now For Book Your Favorite Kurti: +91 9442533967",
    },
    kurti02: {
      title: " Single Kurthi",
      fabric: "Rayon side open",
      size: "Given with image",
      originalPrice: "₹599",
      salePrice: "₹340 +shipping",
      call: "Call Now For Book Your Favorite Kurti: +91 9442533967",
    },
    kurti03: {
      title: "Designer neck  Brand Aram and Zorra Kurtis",
      fabric: "Rayon and silk available",
      size: " M,L,XL,XXL",
      originalPrice: "₹799",
      salePrice: "₹399 + Shipping",
      call: "Call Now For Book Your Favorite Kurti: +91 9442533967",
    },
    kurti04: {
      title: " Zorra Kurthis",
      fabric: "Rayon side open",
      size: "Given with image",
      originalPrice: "₹899",
      salePrice: "₹420 + shipping",
      call: "Call Now For Book Your Favorite Kurti: +91 9442533967",
    },
    kurti05: {
      title: " Zaarra Kurthis",
      fabric: "Rayon ,Cotton and Silk",
      size: " M,L,XL,XXL",
      originalPrice: "₹599",
      salePrice: "₹340 + Shipping",
      call: "Call Now For Book Your Favorite Kurti: +91 9442533967",
    },
  };

  const items = categoryItems[categoryName] || [];
  const description = categoryDescriptions[categoryName] || {};

  return (
    <div className="category-container">
<div className="link-container">
        <Link to="/ " style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/category/kurti" style={{ margin: '0 10px' }}>Kurti @ 699</Link>
      <Link to="/lehengas" style={{ margin: '0 10px' }}>Lehengas @ 999</Link>
      <Link to="/category/kurti01" style={{ margin: '0 10px' }}>Kurti @ 460</Link>
      <Link to="/category/kurti02" style={{ margin: '0 10px' }}>kurti @ 340</Link>
      <Link to="/category/kurti03" style={{ margin: '0 10px' }}>Kurti @ 399</Link>
      <Link to="/category/kurti05" style={{ margin: '0 10px' }}> top @ 340</Link>
       {/* Add more categories as needed */}
    </div>
      {/* Description Section */}
      <div className="offer-description">
        <h2>{description.title}</h2>
        <p style={{ color: "black", marginBottom: "10px" }}>
          <strong>FABRIC</strong> - {description.fabric}
        </p>
        <p style={{ color: "black", marginBottom: "10px" }}>
          <strong>Size</strong> - {description.size}
        </p>
         <p style={{color:'black', marginBottom:'10px'}}><strong>SALE RATE</strong> - {description.salePrice}</p> 
        <p style={{ color: "black", marginBottom: "10px" }}>
          {description.offer}
        </p>
        <p style={{ color: "black", marginBottom: "10px" }}>
          {description.call}
        </p>
      </div>

      {/* Image Grid Section */}
      <h1>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h1>
      <div className="items-grid">
        {items.map((item, index) => (
          <div key={index} className="item">
            <img src={item} alt={`${categoryName} ${index + 1}`} />
            <div className="item-description">
              <div className="price">
                <span className="original-price">
                  {description.originalPrice}
                </span>{" "}
                {description.salePrice}{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '30px' }}>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰ Categories
      </div>

      {/* Conditional rendering of the categories based on screen size */}
      <div className="link-container">
                <Link to="/" className="category-link">Home</Link>
        <Link to="/category/kurti" className="category-link">Kurti @ 699</Link>
        <Link to="/lehengas" className="category-link">Lehengas @ 999</Link>
        <Link to="/category/kurti01" className="category-link">Kurti @ 460</Link>
        <Link to="/category/kurti02" className="category-link">Kurti @ 340</Link>
        <Link to="/category/kurti03" className="category-link">Kurti @ 399</Link>
        <Link to="/category/kurti05" className="category-link">Zaarra Kurti @ 340</Link>
      </div>

    </div>
    <p>Contact us: +91-9442533967</p>
      {/* Category Buttons */}
      {/* <div className="category-buttons">
        <Link to="/kurti" className="category-button">
          Kurti
        </Link>
        <Link to="/lehenga" className="category-button">
          Lehenga
        </Link>
        <Link to="/sari" className="category-button">
          Sari
        </Link>
        <Link to="/embroiderykurthi" className="category-button">
          Embroidery Kurthi
        </Link>
      </div> */}
    </div>
  );
};

export default Category;
