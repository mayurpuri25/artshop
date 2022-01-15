import React from "react";
import { Image } from "react-bootstrap";
import "../../assets/css/homepage/mainpage.css";
// import MyNavbar from "./MyNavbar";
import img1 from "../../assets/images/bgimg1.jpg";
import Categories from "../../components/Categories"
import JoinUs from "../../components/JoinUs"
import ArtNetwork from "../../components/ArtNetwork";
import NewArtworks from "../../components/NewArtworks";
import Footer from "../../components/Footer";

export default function Homepage() {
  return (
    <>
        {/* <MyNavbar /> */}
      <div id="coverimg">
        <Image src={img1} width="100%" />
      </div>
      <div className="break">&nbsp;</div>
      <div id="heading">Admire the Art</div>
        <Categories/>
        <div className="break">&nbsp;</div>
        <div id="heading">The Art Network</div>
        <ArtNetwork/>
        <JoinUs/>
        <div className="break">&nbsp;</div>
        <div id="heading">New Artworks</div>
        <NewArtworks/>
        <Footer/>
    </>
  );
}
