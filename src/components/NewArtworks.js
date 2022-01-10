import React from "react";
import "../assets/css/homepage/newartwork.css";
import { Card, Image } from "react-bootstrap";

export default function ArtNetwork() {
  return (
    <div id="newartworks">
    <div className="card">
      <Card className="outer" style={{ width: "13rem" }}>
        <Image
          className="img"
          src="https://d31cksjl6r6w9h.cloudfront.net/60decbc1510fef5af830fe25/media-library/400x550/220x100-2011-7_7229a993068fa8.jpg"
          rounded
        />
      </Card>
      <Card className="outer" style={{ width: "13rem" }}>
      <Image
          className="img"
          src="https://d31cksjl6r6w9h.cloudfront.net/60ded05e510fef5af8312ce0/media-library/400x550/DSC_0835-1_d3ec6a57c06bf6.jpg"
          rounded
        />
      </Card>
      <Card className="outer" style={{ width: "13rem" }}>
      <Image
          className="img"
          src="https://d31cksjl6r6w9h.cloudfront.net/60ded1b3510fef5af8313a74/media-library/400x550/2D6F1C8A-59C0-43D8-B400-30BCB3ACB6DC_f08d96de0e61ef.jpeg"
          rounded
        />
      </Card>
      <Card className="outer" style={{ width: "13rem" }}>
      <Image
          className="img"
          src="https://d31cksjl6r6w9h.cloudfront.net/60ded5e1510fef5af8316838/media-library/400x550/inbound7518499409691055806_6d2a045f110cac.jpg"
          rounded
        />
      </Card>
    </div>
    </div>
  );
}
