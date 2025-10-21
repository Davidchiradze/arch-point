import React from "react";
import Map from "../components/Map";
import {
  ContactSection,
  ContactContent,
  ContactInfo,
  ContactTitle,
  ContactItem,
  ContactIcon,
  ContactText,
  ContactDescription,
  SocialLinks,
  SocialTitle,
  SocialLink,
  SocialIcon,
  SocialName,
  ActionButtons,
  ActionButton,
  ContactMap,
  Container,
} from "../components/ui/ContactSection";
import {
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  TitleIcon,
} from "../components/projects/ProjectGrid";

const contactInfo = [
  {
    icon: "📍",
    text: "თბილისი, სამტრედიის ქუჩა #3 ა",
    description: "ჩვენი ოფისი მდებარეობს თბილისის ცენტრში",
  },
  {
    icon: "📞",
    text: "592 005 297",
    description: "დაგვიკავშირდით ნებისმიერ დროს",
  },
  {
    icon: "✉️",
    text: "archpoint74@gmail.com",
    description: "წერილები ვუპასუხებთ 24 საათის განმავლობაში",
  },
  {
    icon: "🕒",
    text: "სამუშო საათები: 10:00 — 19:00",
    description: "ორშაბათი - პარასკევი",
  },
  {
    icon: "📅",
    text: "დასვენების დღეები: შაბათი, კვირა",
    description: "შაბათ-კვირას ვცდილობთ ვუპასუხოთ",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/archpointofficial",
    icon: "📘",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/archpointi/",
    icon: "📷",
  },
];

function ContactInfoPage() {
  return (
    <ContactSection>
      <Container>
        <SectionHeader>
          <TitleIcon />
          <SectionTitle>დაგვიკავშირდით</SectionTitle>
          <SectionSubtitle>
            ჩვენ ყოველთვის მზად ვართ დაგეხმაროთ თქვენს არქიტექტურულ პროექტებში
          </SectionSubtitle>
        </SectionHeader>

        <ContactContent>
          <ContactInfo>
            <ContactTitle>კონტაქტის ინფორმაცია</ContactTitle>

            {contactInfo.map((item, index) => (
              <ContactItem key={index}>
                <ContactIcon>{item.icon}</ContactIcon>
                <div>
                  <ContactText>{item.text}</ContactText>
                  <ContactDescription>{item.description}</ContactDescription>
                </div>
              </ContactItem>
            ))}

            <SocialLinks>
              <SocialTitle>სოციალური ქსელები</SocialTitle>
              {socialLinks.map((social, index) => (
                <SocialLink
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon>{social.icon}</SocialIcon>
                  <SocialName>{social.name}</SocialName>
                </SocialLink>
              ))}
            </SocialLinks>

            <ActionButtons>
              <ActionButton
                variant="primary"
                onClick={() => window.open("tel:592005297")}
              >
                📞 დარეკვა
              </ActionButton>
              <ActionButton
                variant="outline"
                onClick={() => window.open("mailto:archpoint74@gmail.com")}
              >
                ✉️ ელ.ფოსტა
              </ActionButton>
            </ActionButtons>
          </ContactInfo>

          <ContactMap>
            <Map />
          </ContactMap>
        </ContactContent>
      </Container>
    </ContactSection>
  );
}

export default ContactInfoPage;
