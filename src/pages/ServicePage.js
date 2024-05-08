import { useReducer } from "react";
import Header from "../components/Header";
import ServiceItem from "../components/ServiceItem";
import {
  AboutTitle,
  AboutTitleDiv,
  AboutTitleIcon,
  BackgroundImage,
  DivSides,
  DivWrapper,
  InputContainer,
  MappedDivWrapper,
  NumberInput,
  Sider,
} from "../components/StyledComponent";

import imgService from "../assets/406068280_304729212527505_1161707641134475858_n.jpg";
import { useEffect } from "react";

const initialState = {
  ServiceArray: [
    { text: "არქიტექტურული პროექტი", id: 1 },
    { text: "კონსტრუქციული პროექტი (დასკვნა)", id: 2 },
    { text: "გეოლოგია (ექსპერტიზა) ", id: 3 },
    { text: "ენერგო ეფექტურობის დეკლარაცია", id: 4 },
    { text: "ტოპოგრაფიული გეგმა", id: 5 },
    { text: " მშენებლობის ორგანიზების პროექტი", id: 6 },
  ],
  CheckedItems: [],
  inputValue: 0,
  servicePrice: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "service/filter":
      return {
        ...state,
        CheckedItems: [...action.payload],
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
  const [{ ServiceArray, CheckedItems, inputValue, servicePrice }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    function setPrice() {
      const price = 2.5 * CheckedItems.length * Number(inputValue);
      dispatch({ type: "service/setPrice", payload: price });
    }
    setPrice();
  }, [CheckedItems.length, inputValue]);

  console.log(ServiceArray);

  return (
    <>
      <Header margin={"0"} />
      <DivWrapper>
        <AboutTitleDiv>
          {/* <AboutTitleIcon /> */}
          {/* <AboutTitle>სერვისები</AboutTitle> */}
        </AboutTitleDiv>
        <DivSides>
          <Sider>
            <AboutTitleDiv>
              <AboutTitleIcon />
              <AboutTitle>მომსახურეობის ფასის კალკულირება</AboutTitle>
            </AboutTitleDiv>
            <MappedDivWrapper>
              {ServiceArray.map((item) => (
                <ServiceItem
                  service={item.text}
                  key={item.id}
                  CheckedItems={CheckedItems}
                  id={item.id}
                  dispatch={dispatch}
                />
              ))}
              <InputContainer>
                <AboutTitleDiv>
                  <AboutTitleIcon />
                  <AboutTitle>ობიექტის სრული ფართი</AboutTitle>
                </AboutTitleDiv>
                <NumberInput
                  type="number"
                  value={inputValue}
                  onChange={(e) =>
                    dispatch({
                      type: "service/inputValue",
                      payload: e.target.value,
                    })
                  }
                />
              </InputContainer>
              <AboutTitle>სრული ფასი : {servicePrice} ₾</AboutTitle>
            </MappedDivWrapper>
          </Sider>
          <BackgroundImage image={imgService} />
        </DivSides>
      </DivWrapper>
    </>
  );
}

export default ServicePage;
