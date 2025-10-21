import React from "react";
import {
  AboutSection,
  AboutContent,
  AboutText,
  AboutTitle,
  AboutDescription,
  AboutImage,
  ServicesSection,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  PricingSection,
  PricingCard,
  PricingTitleCard,
  PricingPrice,
  PricingFeatures,
  PricingFeature,
  ContactSection,
  ContactContent,
  ContactInfo,
  ContactTitle,
  ContactItem,
  ContactIcon,
  ContactText,
  Container,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  TitleIcon,
} from "../components/StyledComponent";
import { ProjectsData } from "../constants/projects";

const services = [
  {
    icon: "🏗️",
    title: "არქიტექტურა და პროექტირება",
    description:
      "ინდივიდუალური სახლები, საზოგადოებრივი ნაგებობები, მრავალსართულიანი შენობები, კომერციული ფართები",
  },
  {
    icon: "🏠",
    title: "ინტერიერის დიზაინი",
    description:
      "სივრცის გეგმარება, 3D დიზაინის შექმნა, მუშა ნახაზები, მასალების შერჩევა",
  },
  {
    icon: "🌳",
    title: "ლანდშაფტის დიზაინი",
    description:
      "სკვერები და ბაღები, გარე სივრცის დაგეგმარება, ბუნებრივი გარემოს ინტეგრაცია",
  },
  {
    icon: "📐",
    title: "კონსულტაცია",
    description: "პროექტის დაგეგმარება, ზედამხედველობა, ტექნიკური მხარდაჭერა",
  },
];

const pricingPlans = [
  {
    title: "60 კვ",
    price: "2000 ₾",
    features: ["სრული პროექტი", "3D ვიზუალიზაცია", "მასალების შერჩევა"],
  },
  {
    title: "60 - 100 კვ",
    price: "47 ₾/კვ",
    subtitle: "(თბილისი + 800 ლარი)",
    features: ["სრული პროექტი", "3D ვიზუალიზაცია", "მასალების შერჩევა"],
  },
  {
    title: "100 - 130 კვ",
    price: "42 ₾/კვ",
    subtitle: "(თბილისი + 800 ლარი)",
    features: ["სრული პროექტი", "3D ვიზუალიზაცია", "მასალების შერჩევა"],
  },
  {
    title: "130 - 150 კვ",
    price: "35 ₾/კვ",
    subtitle: "(თბილისი + 800 ლარი)",
    features: ["სრული პროექტი", "3D ვიზუალიზაცია", "მასალების შერჩევა"],
  },
  {
    title: "150 - 170 კვ",
    price: "31 ₾/კვ",
    subtitle: "(თბილისი + 800 ლარი)",
    features: ["სრული პროექტი", "3D ვიზუალიზაცია", "მასალების შერჩევა"],
  },
  {
    title: "170 - 200 კვ",
    price: "29 ₾/კვ",
    subtitle: "(თბილისი + 800 ლარი)",
    features: ["სრული პროექტი", "3D ვიზუალიზაცია", "მასალების შერჩევა"],
  },
  {
    title: "200 - 500 კვ",
    price: "23 ₾/კვ",
    subtitle: "(თბილისი + 800 ლარი)",
    features: ["სრული პროექტი", "3D ვიზუალიზაცია", "მასალების შერჩევა"],
  },
  {
    title: "500+ კვ",
    price: "20 ₾/კვ",
    subtitle: "(თბილისი + 800 ლარი)",
    features: ["სრული პროექტი", "3D ვიზუალიზაცია", "მასალების შერჩევა"],
  },
];

const contactInfo = [
  {
    icon: "📍",
    text: "თბილისი, სამტრედიის ქუჩა #3 ა",
  },
  {
    icon: "📞",
    text: "592 005 297",
  },
  {
    icon: "✉️",
    text: "archpoint74@gmail.com",
  },
  {
    icon: "🕒",
    text: "სამუშო საათები: 10:00 — 19:00",
  },
  {
    icon: "📅",
    text: "დასვენების დღეები: შაბათი, კვირა",
  },
];

const AboutCompany = () => {
  return (
    <>
      {/* About Section */}
      <AboutSection>
        <Container>
          <AboutContent>
            <AboutText>
              <AboutTitle>ჩვენი კომპანიის შესახებ</AboutTitle>
              <AboutDescription>
                <strong>არქ-ფოინთი</strong> წარმოადგენს არქიტექტურულ კომპანიას,
                რომელიც წარმატებით საქმიანობს საქართველოში 2019 წლიდან
                არქიტექტურის, ქალაქგეგმარების, ინტერიერის დიზაინის მიმართულებით.
              </AboutDescription>
              <AboutDescription>
                არქიტექტურული კომპანია „არქ ფოინთი" ყოველთვის ცდილობს გამოიყენოს
                მსოფლიო არქიტექტურისა და დიზაინის უახლესი მიღწევები თავის
                პროექტებში. კონკრეტული ადამიანებისთვის დიზაინით, ჩვენ
                ვახორციელებთ მათ იდეალურ ხედვას, მათ ოცნებებსა და სურვილებს.
              </AboutDescription>
              <AboutDescription>
                ჩვენი კომპანიის პროექტები არის შემოქმედებითი გაერთიანების შედეგი
                არქიტექტორებსა და მომხარებლებს შორის, ერთობლივი რეფლექსიის
                შედეგი. და ამიტომ, ჩვენს ნამუშევრებს შორის ვერ ნახავთ ორ იდენტურ
                შენობას ან ინტერიერს.
              </AboutDescription>
            </AboutText>
            <AboutImage image={ProjectsData[0].image[0]} />
          </AboutContent>
        </Container>
      </AboutSection>

      {/* Services Section */}
      <ServicesSection>
        <Container>
          <SectionHeader>
            <TitleIcon />
            <SectionTitle>ჩვენი სერვისები</SectionTitle>
            <SectionSubtitle>
              ყოვლისმომცველი არქიტექტურული და დიზაინის სერვისები
            </SectionSubtitle>
          </SectionHeader>
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard key={index}>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </ServicesSection>

      {/* Pricing Section */}
      <PricingSection>
        <Container>
          <SectionHeader>
            <TitleIcon />
            <SectionTitle>ფასები</SectionTitle>
            <SectionSubtitle>
              გამჭვირვალე და კონკურენტუნარიანი ფასები ყველა ტიპის პროექტისთვის
            </SectionSubtitle>
          </SectionHeader>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              marginTop: "3rem",
            }}
          >
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index}>
                <PricingTitleCard>{plan.title}</PricingTitleCard>
                <PricingPrice>{plan.price}</PricingPrice>
                {plan.subtitle && (
                  <div
                    style={{
                      color: "#666",
                      fontSize: "0.9rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {plan.subtitle}
                  </div>
                )}
                <PricingFeatures>
                  {plan.features.map((feature, featureIndex) => (
                    <PricingFeature key={featureIndex}>
                      ✓ {feature}
                    </PricingFeature>
                  ))}
                </PricingFeatures>
              </PricingCard>
            ))}
          </div>
        </Container>
      </PricingSection>

      {/* Contact Section */}
      <ContactSection>
        <Container>
          <ContactContent>
            <ContactInfo>
              <ContactTitle>კონტაქტი</ContactTitle>
              {contactInfo.map((item, index) => (
                <ContactItem key={index}>
                  <ContactIcon>{item.icon}</ContactIcon>
                  <ContactText>{item.text}</ContactText>
                </ContactItem>
              ))}
              <div style={{ marginTop: "2rem" }}>
                <div style={{ marginBottom: "1rem" }}>
                  <strong>სოციალური ქსელები:</strong>
                </div>
                <div style={{ color: "#666" }}>
                  Facebook:{" "}
                  <a
                    href="https://www.facebook.com/archpointofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    archpointofficial
                  </a>
                </div>
                <div style={{ color: "#666" }}>
                  Instagram:{" "}
                  <a
                    href="https://www.instagram.com/archpointi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    archpointi
                  </a>
                </div>
              </div>
            </ContactInfo>
          </ContactContent>
        </Container>
      </ContactSection>
    </>
  );
};

export default AboutCompany;
