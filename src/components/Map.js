import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {
  ContactCardTitle,
  ContactDetails,
  ContactDiv,
  ContactDiv2,
  ContactInfoCard,
  Img,
} from "./StyledComponent";
import icon1 from "../assets/contact-address.png";
import icon2 from "../assets/contact-call.png";
import icon3 from "../assets/contact-email.png";
function Map() {
  const contactArray = [
    { icon: icon2, text: "+995 592 005 297" },
    { icon: icon1, text: "info@archPoint.ge | feedback@archPoint.ge" },
    { icon: icon3, text: "სამტრედიის ქუჩა N3ა, Tbilisi, Georgia" },
  ];
  return (
    <>
      <div style={{ height: "80vh", width: "100%" }}>
        <MapContainer
          center={[41.743608, 44.778167]}
          zoom={40}
          scrollWheelZoom={true}
          style={{ height: "100%", flex: "1" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker position={[41.743608, 44.778167]}>
            <Popup>
              <span>სამტრედიის ქუჩა N3ა, Tbilisi, Georgia</span>
            </Popup>
          </Marker>
          <ContactInfoCard>
            <ContactCardTitle>საკონტაქტო ინფორმაცია</ContactCardTitle>
            <ContactDiv2>
              {contactArray.map((item) => (
                <ContactDiv>
                  <Img src={item.icon} />
                  <ContactDetails>{item.text}</ContactDetails>
                </ContactDiv>
              ))}
            </ContactDiv2>
          </ContactInfoCard>
        </MapContainer>
      </div>
    </>
  );
}

export default Map;
