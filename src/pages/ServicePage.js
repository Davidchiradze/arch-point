import React, { useReducer, useEffect } from "react";
import {
  ServicesSection,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  TitleIcon,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  Container,
  DivSides,
  Sider,
  AboutTitle,
  AboutTitleDiv,
  AboutTitleIcon,
  MappedDivWrapper,
  CheckerDiv,
  MarkerCheckbox,
  InputContainer,
  TitleInput,
  NumberInput,
  BackgroundImage,
  PricingResult,
  PricingTitle,
  PricingAmount,
} from "../components/StyledComponent";
import imgService from "../assets/406068280_304729212527505_1161707641134475858_n.jpg";

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

const serviceOptions = [
  { text: "არქიტექტურული პროექტი", id: 1, price: 2.5 },
  { text: "კონსტრუქციული პროექტი (დასკვნა)", id: 2, price: 1.8 },
  { text: "გეოლოგია (ექსპერტიზა)", id: 3, price: 1.2 },
  { text: "ენერგო ეფექტურობის დეკლარაცია", id: 4, price: 0.8 },
  { text: "ტოპოგრაფიული გეგმა", id: 5, price: 1.0 },
  { text: "მშენებლობის ორგანიზების პროექტი", id: 6, price: 1.5 },
];

const initialState = {
  checkedItems: [],
  inputValue: 0,
  servicePrice: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "service/toggle":
      const itemId = action.payload;
      const isChecked = state.checkedItems.includes(itemId);
      return {
        ...state,
        checkedItems: isChecked
          ? state.checkedItems.filter((id) => id !== itemId)
          : [...state.checkedItems, itemId],
      };
    case "service/inputValue":
      return {
        ...state,
        inputValue: action.payload,
      };
    case "service/setPrice":
      return {
        ...state,
        servicePrice: action.payload,
      };
    default:
      return state;
  }
}

function ServicePage() {
  const [{ checkedItems, inputValue, servicePrice }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const calculatePrice = () => {
      const totalPrice = checkedItems.reduce((total, itemId) => {
        const service = serviceOptions.find((s) => s.id === itemId);
        return total + (service ? service.price : 0);
      }, 0);

      const finalPrice = totalPrice * Number(inputValue) || 0;
      dispatch({ type: "service/setPrice", payload: finalPrice });
    };

    calculatePrice();
  }, [checkedItems, inputValue]);

  const handleServiceToggle = (itemId) => {
    dispatch({ type: "service/toggle", payload: itemId });
  };

  const handleInputChange = (e) => {
    dispatch({ type: "service/inputValue", payload: e.target.value });
  };

  return (
    <>
      {/* Services Overview Section */}
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

      {/* Price Calculator Section */}
      <ServicesSection style={{ background: "#f8f9fa" }}>
        <Container>
          <SectionHeader>
            <TitleIcon />
            <SectionTitle>ფასის კალკულატორი</SectionTitle>
            <SectionSubtitle>
              აირჩიეთ სასურველი სერვისები და მიუთითეთ ფართი ზუსტი ფასის
              გასარკვევად
            </SectionSubtitle>
          </SectionHeader>

          <DivSides>
            <Sider>
              <AboutTitleDiv>
                <AboutTitleIcon />
                <AboutTitle>სერვისების არჩევა</AboutTitle>
              </AboutTitleDiv>

              <MappedDivWrapper>
                {serviceOptions.map((item) => (
                  <CheckerDiv key={item.id}>
                    <MarkerCheckbox
                      type="checkbox"
                      checked={checkedItems.includes(item.id)}
                      onChange={() => handleServiceToggle(item.id)}
                    />
                    <div>
                      <div
                        style={{ fontWeight: "600", marginBottom: "0.25rem" }}
                      >
                        {item.text}
                      </div>
                      <div style={{ color: "#666", fontSize: "0.9rem" }}>
                        {item.price}₾ კვ.მ-ზე
                      </div>
                    </div>
                  </CheckerDiv>
                ))}

                <InputContainer>
                  <TitleInput>ობიექტის სრული ფართი (კვ.მ)</TitleInput>
                  <NumberInput
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="შეიყვანეთ ფართი"
                    min="0"
                  />
                </InputContainer>

                {servicePrice > 0 && (
                  <PricingResult>
                    <PricingTitle>სრული ფასი:</PricingTitle>
                    <PricingAmount>{servicePrice.toFixed(0)} ₾</PricingAmount>
                  </PricingResult>
                )}
              </MappedDivWrapper>
            </Sider>

            <BackgroundImage image={imgService} />
          </DivSides>
        </Container>
      </ServicesSection>
    </>
  );
}

export default ServicePage;
