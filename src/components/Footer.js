import React from "react";
import { useHistory } from "react-router-dom";
import {
  Footer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterText,
  FooterBottom,
  StyledLink,
} from "./StyledComponent";

function FooterComponent() {
  const history = useHistory();

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "მთავარი", path: "/" },
    { label: "პროექტები", path: "/projectpage" },
    { label: "კომპანია", path: "/aboutCompany" },
    { label: "სერვისები", path: "/servicepage" },
    { label: "კონტაქტი", path: "/contactinfo" },
  ];

  const services = [
    "არქიტექტურა და პროექტირება",
    "ინტერიერის დიზაინი",
    "ლანდშაფტის დიზაინი",
    "კონსულტაცია",
  ];

  const contactInfo = [
    "თბილისი, სამტრედიის ქუჩა #3 ა",
    "592 005 297",
    "archpoint74@gmail.com",
  ];

  return (
    <Footer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>არქ ფოინთი</FooterTitle>
          <FooterText>
            მოდერნული არქიტექტურა და დიზაინი საქართველოში 2019 წლიდან. ჩვენ
            ვქმნით ინდივიდუალურ და უნიკალურ პროექტებს.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>სწრაფი ბმულები</FooterTitle>
          {quickLinks.map((link, index) => (
            <StyledLink
              key={index}
              to={link.path}
              onClick={() => history.push(link.path)}
            >
              <FooterText>{link.label}</FooterText>
            </StyledLink>
          ))}
        </FooterSection>

        <FooterSection>
          <FooterTitle>სერვისები</FooterTitle>
          {services.map((service, index) => (
            <FooterText key={index}>{service}</FooterText>
          ))}
        </FooterSection>

        <FooterSection>
          <FooterTitle>კონტაქტი</FooterTitle>
          {contactInfo.map((info, index) => (
            <FooterText key={index}>{info}</FooterText>
          ))}
          <FooterText>სამუშო საათები: 10:00 — 19:00</FooterText>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <FooterText>
          © {currentYear} არქ ფოინთი. ყველა უფლება დაცულია.
        </FooterText>
      </FooterBottom>
    </Footer>
  );
}

export default FooterComponent;
