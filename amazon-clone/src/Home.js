import React from "react";
import "./Home.css";
import primevideo from "./assests/primevideo.png";
import makeup from "./assests/makeup.jpg";
import Product from "./Product";
import product_img_1 from "./assests/product_img_1.jpg";
import product_img_2 from "./assests/product_img_2.jpg";
import product_img_3 from "./assests/product_img_3.jpg";
import product_img_4 from "./assests/product_img_4.jpg";
import product_img_5 from "./assests/product_img_5.jpg";
import product_img_6 from "./assests/product_img_6.jpg";
import product_img_7 from "./assests/product_img_7.jpg";
import product_img_8 from "./assests/product_img_8.jpg";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img className="home_img" src={makeup} alt="prime" />
        </div>
        <div className="home_row">
          <Product
            id={1}
            desp="Harry Potter Box Set: The Complete Collection (Children’s Paperback) 
                Paperback – Box set, 1 December 2014
                by J.K. Rowling (Author)"
            price={2901}
            rating={5}
            img={product_img_1}
          />
          <Product
            id={7}
            desp="WAAN Signature Shoes for Men, Sports Shoes for Men, Running Shoes for Men, 
                Men Shoes, Sports Shoes, Walking Shoes for Men, 
                Sport Shoes for Men, Gym Shoes for Men"
            price={799}
            rating={3}
            img={product_img_7}
          />

          <Product
            id={2}
            desp="Lenovo Yoga Slim 7 AI Powered Intel Evo Core Ultra 7 155H 14in
                (35.5cm) WUXGA-OLED 400Nits Laptop (32GB/1TB SSD/60Hz/100% DCI-P3/Backlit 
                KB/Win11/Office 21/Alexa/3 Mon. Game Pass/Grey/1.4Kg), 83CV002DIN"
            price={107990}
            rating={4}
            img={product_img_2}
          />
        </div>
        <div className="home_row">
          <Product
            id={3}
            desp="boAt Nirvana 751 ANC Hybrid Active Noise Cancelling 
                Bluetooth Wireless Over Ear Headphones with Up to 65H Playtime, ASAP Charge, 
                Ambient Sound Mode, Immersive Sound, Carry Pouch(Gunmetal Grey)"
            price={4499}
            rating={4}
            img={product_img_3}
          />
          <Product
            id={4}
            desp="EYEBOGLER Polo Neck Half Sleeve Striped Print Casual Men Tshirt"
            price={349}
            rating={3}
            img={product_img_4}
          />
          <Product
            id={5}
            desp="INDULGE HOMES - White Vase/Flower Vase/Pampas 
                Grass Vase/Ceramic Vase/Round Shaped Vase/Home Decor Centrepiece/Decor 
                Showpiece Donut Vase 6 & 8 Inches (Pack of 2)"
            price={799}
            rating={4}
            img={product_img_5}
          />
          <Product
            id={8}
            desp="FUNTEREST Gold Metal Wall Decor Leaf Wall Hanging Decoration, Set of 3 Metal 
                Wall Art Home Decor for Living Room Office Bedroom Hotel"
            price={920}
            rating={4}
            img={product_img_8}
          />
        </div>
        <div className="home_row">
          <Product
            id={6}
            desp="boAt Aavante Bar 900/908 Bluetooth Soundbar with 30W RMS, 
                2.0 Channel, Multiple Connectivity, EQ Modes, Sleek Finish, 
                Easy Access Integrated Controls(Premium Black)"
            price={2499}
            rating={4}
            img={product_img_6}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
