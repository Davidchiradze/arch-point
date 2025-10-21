import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ProjectsData } from "../constants/projects";
import Header from "../components/layout/Header";
import Footer from "../components/Footer";
import Map from "../components/Map";

// Hero Section Components
import {
  HeroSection,
  HeroBackground,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  HeroButton,
  NavigationArrows,
  ArrowButton,
} from "../components/ui/HeroSection";

// Project Components
import {
  ProjectsSection,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  TitleIcon,
  ProjectsGrid,
} from "../components/projects/ProjectGrid";
import {
  ProjectCard,
  ProjectImage,
  ProjectInfo,
  ProjectTitle,
  ProjectSize,
} from "../components/projects/ProjectCard";

// Contact Components
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

// Other Components
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
  StyledLink,
  WholeWrapper,
} from "../components/StyledComponent";

const services = [
  {
    icon: "🏗️",
    title: "არქიტექტურა და პროექტირება",
    description:
      "ინდივიდუალური სახლები, საზოგადოებრივი ნაგებობები, მრავალსართულიანი შენობები",
  },
  {
    icon: "🏠",
    title: "ინტერიერის დიზაინი",
    description: "სივრცის გეგმარება, 3D დიზაინის შექმნა, მუშა ნახაზები",
  },
  {
    icon: "🌳",
    title: "ლანდშაფტის დიზაინი",
    description: "სკვერები და ბაღები, გარე სივრცის დაგეგმარება",
  },
  {
    icon: "📐",
    title: "კონსულტაცია",
    description: "პროექტის დაგეგმარება, მასალების შერჩევა, ზედამხედველობა",
  },
];

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

function Home() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  console.log("🚀 ~ Home ~ isVisible:", isVisible);
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentProject((prev) => (prev + 1) % ProjectsData.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [isHovered]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollTop > windowHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % ProjectsData.length);
  };

  const prevProject = () => {
    setCurrentProject(
      (prev) => (prev - 1 + ProjectsData.length) % ProjectsData.length
    );
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <WholeWrapper>
      <Header />

      {/* Hero Section */}
      <HeroSection
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <HeroBackground image={ProjectsData[currentProject].image[0]} />
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>არქ ფოინთი</HeroTitle>
          <HeroSubtitle>
            მოდერნული არქიტექტურა და დიზაინი საქართველოში
          </HeroSubtitle>
          <HeroButtons>
            <HeroButton variant="primary" onClick={scrollToProjects}>
              ჩვენი პროექტები
            </HeroButton>
            <HeroButton variant="secondary" onClick={scrollToContact}>
              დაგვიკავშირდით
            </HeroButton>
          </HeroButtons>
        </HeroContent>
        <NavigationArrows>
          <ArrowButton onClick={prevProject}>
            <i className="ion-ios-arrow-back"></i>
          </ArrowButton>
          <ArrowButton onClick={nextProject}>
            <i className="ion-ios-arrow-forward"></i>
          </ArrowButton>
        </NavigationArrows>
      </HeroSection>

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
                ჩვენი კომპანიის პროექტები არის შემოქმედებითი გაერთიანების შედეგი
                არქიტექტორებსა და მომხარებლებს შორის, ერთობლივი რეფლექსიის
                შედეგი.
              </AboutDescription>
            </AboutText>
            <AboutImage image={ProjectsData[0].image[0]} />
          </AboutContent>
        </Container>
      </AboutSection>

      {/* Projects Section */}
      <ProjectsSection id="projects">
        <Container>
          <SectionHeader>
            <TitleIcon />
            <SectionTitle>ჩვენი პროექტები</SectionTitle>
            <SectionSubtitle>
              ყველა პროექტი ინდივიდუალურია და შექმნილია კონკრეტული მომხარებლის
              მოთხოვნების შესაბამისად
            </SectionSubtitle>
          </SectionHeader>
          <ProjectsGrid>
            {ProjectsData.slice(0, 6).map((project) => (
              <StyledLink
                key={project.id}
                to={`/project/${project.id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <ProjectCard>
                  <ProjectImage src={project.image[0]} alt={project.title} />
                  <ProjectInfo>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectSize>{project.m2}</ProjectSize>
                  </ProjectInfo>
                </ProjectCard>
              </StyledLink>
            ))}
          </ProjectsGrid>
        </Container>
      </ProjectsSection>

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

      {/* Contact Section */}
      <ContactSection id="contact">
        <Container>
          <ContactContent>
            <ContactInfo>
              <ContactTitle>დაგვიკავშირდით</ContactTitle>
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
                  onClick={() => history.push("/contactinfo")}
                >
                  რუკაზე ნახვა
                </ActionButton>
              </ActionButtons>
            </ContactInfo>
            <ContactMap>
              <Map />
            </ContactMap>
          </ContactContent>
        </Container>
      </ContactSection>

      <Footer />
    </WholeWrapper>
  );
}

export default Home;
