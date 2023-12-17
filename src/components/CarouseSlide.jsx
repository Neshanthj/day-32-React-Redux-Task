import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <div>
        <div>
        <Carousel>
      <Carousel.Item style={{height:"300px"}}>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img23/Wireless/Xiaomi/RedmiNote13/Teaser/GW/Set1/V1/D108421481_INWLD_RedmiNote13_DesktopTallHero_3000x1200._CB571153214_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:"300px"}}>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/Local/3000x1200_5P_PC_14th_Dec._CB570985999_.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item  style={{height:"300px"}}>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img17/AmazonPay/Siddhi/CBCC-PC_Hero_3000x1200_Prime_28thsept._CB576824032_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item  style={{height:"300px"}}>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91XJaUTUICL._SX3000_.jpg"
          alt="Forth slide"
        />
      </Carousel.Item>
      <Carousel.Item  style={{height:"300px"}}>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img21/Jewellery/2023/December/GW/ATF/MFD/16th_Dec/Prime/Prime_3000._CB571364529_.jpg"
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item  style={{height:"300px"}}>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img22/boAt/new/days/Launch/Boat_Tallhero_3000x1200._CB571428659_.jpg"
          alt="Sixth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default UncontrolledExample;