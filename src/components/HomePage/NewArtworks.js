import React from "react";
import "../../assets/css/homepage/newartwork.css";
import { Card, Image, Row } from "react-bootstrap";

export default function ArtNetwork() {
  return (
    <div id="newartworks">
        <Row className="scroll">
          <Card className="outer">
            <Image
              className="card-img"
              src="https://d31cksjl6r6w9h.cloudfront.net/60decbc1510fef5af830fe25/media-library/400x550/220x100-2011-7_7229a993068fa8.jpg"
              rounded
            />
          </Card>
          
          <Card className="outer">
            <Image
              className="card-img"
              src="https://d31cksjl6r6w9h.cloudfront.net/60ded05e510fef5af8312ce0/media-library/400x550/DSC_0835-1_d3ec6a57c06bf6.jpg"
              rounded
            />
          </Card>
          <Card className="outer">
            <Image
              className="card-img"
              src="https://d31cksjl6r6w9h.cloudfront.net/60dece33510fef5af8311812/media-library/400xauto/WigofLarks_da9f16f7ffac69.jpg"
              rounded
            />
          </Card>
          <Card className="outer">
            <Image
              className="card-img"
              src="https://d31cksjl6r6w9h.cloudfront.net/60dee7bd510fef5af8320e2f/media-library/400xauto/IMG_7197_3dc4b58992369d.jpg"
              rounded
            />
          </Card>
          <Card className="outer">
            <Image
              className="card-img"
              src="https://d31cksjl6r6w9h.cloudfront.net/60ded5e1510fef5af8316838/media-library/400x550/inbound7518499409691055806_6d2a045f110cac.jpg"
              rounded
            />
          </Card>
          <Card className="outer">
            <Image
              className="card-img"
              src="https://d31cksjl6r6w9h.cloudfront.net/60dec966510fef5af830e106/media-library/400xauto/Coincidentia-oppositorum_acb79c19eb5f46.jpg"
              rounded
            />
          </Card>
          <Card className="outer">
            <Image
              className="card-img"
              src="https://d31cksjl6r6w9h.cloudfront.net/60dec966510fef5af830e105/media-library/400xauto/the-woman-who-combs-herself_13b79ef06ff50e.jpg"
              rounded
            />
          </Card>
          <Card className="outer">
            <Image
              className="card-img"
              src="https://d31cksjl6r6w9h.cloudfront.net/60dedc6e510fef5af831aa3f/media-library/400xauto/Artista-FATIMA-MARQUES-Titulo-LA-LEGERETE-D-ETRE-ano-2019-oleo-sobre-tela-100-x-90-cm-versao-1_df72fe84ab4c1a.jpg"
              rounded
            />
          </Card>
        </Row>
    </div>
  );
}
