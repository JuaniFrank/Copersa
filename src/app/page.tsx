'use client' 

import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { Carousel } from "react-responsive-carousel";
import BuildArticle from '../componentes/BuildArticle'


export default function HomeScreen() {

  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };

  

  return (
    <main>
      <header style={{ justifyContent: "center", alignContent: "center" }}>
        <img
          className={`background__billboard`}
          src={"/header.jpg"}
          alt="Billboard background"
        />
        <div className="header-text-container">
          <h1 className="copersa-title-text-header">COPERSA SA</h1>
          <p className="copersa-description-text-header">
            Ingeniería en Construcciones Marítimas
          </p>
        </div>
      </header>

      <section style={{display: 'flex', rowGap: 40, flexDirection: 'column'}}>
        <div className="nuestras-obras-title-container">
          <h1 className="nuestras-obras-title-text">
            Nuestras Obras Destacadas
          </h1>
        </div>
        
        <BuildArticle title={undefined} description={undefined} images={['/muelle-terminal-zarate1.png', "/muelle-terminal-zarate2.png"]}/>
        <BuildArticle title={undefined} description={undefined} images={['/P4250190.JPG', "/P4250194.JPG"]}/>
        <BuildArticle title={undefined} description={undefined} images={['/muelle-terminal-zarate1.png', "/muelle-terminal-zarate2.png"]}/>
        <BuildArticle title={undefined} description={undefined} images={['/P4250190.JPG', "/P4250194.JPG"]}/>


        <BuildArticle title={undefined} description={undefined} images={[]}/>
        
      </section>
    </main>
  );
}
