import { useState, useEffect, useCallback } from "react";
import { CoverDiv, Line, LineWrapper } from "../components/StyledComponent";

const CoverComponent = ({ array, intervalTime }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);

  console.log(width);

  const changeIndex = useCallback(
    (args) => {
      setActiveIndex((current) => (current + 1) % array.length);
    },
    [array.length]
  );

  function changeWidth() {
    setWidth((current) => (current === 100 ? 0 : current + 2));
  }

  useEffect(() => {
    let intervalID = setInterval(() => {
      changeIndex();
    }, intervalTime);

    return () => clearInterval(intervalID);
  }, [changeIndex, intervalTime]);
  useEffect(() => {
    let intervalID = setInterval(() => {
      changeWidth();
    }, 150);

    return () => clearInterval(intervalID);
  }, []);
  return (
    <>
      <LineWrapper>
        <Line width={width} />
      </LineWrapper>
      <CoverDiv
        activeImage={array[activeIndex]}
        height={"800px"}
        alignItems={"flex-end"}
      ></CoverDiv>
      <LineWrapper>
        <Line width={width} />
      </LineWrapper>
    </>
  );
};

export default CoverComponent;
