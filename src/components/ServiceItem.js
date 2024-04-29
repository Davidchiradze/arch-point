import { useState } from "react";
import { CheckerDiv, MarkerCheckbox, ParagraphAbout } from "./StyledComponent";

function ServiceItem({ service, CheckedItems, id, dispatch }) {
  const [checked, setChecked] = useState(false);

  function Checked() {
    if (checked === true) {
      const data = CheckedItems.filter((item) => item !== id);
      dispatch({ type: "service/filter", payload: data });
    } else {
      dispatch({ type: "service/filter", payload: [...CheckedItems, id] });
    }
  }
  return (
    <>
      <CheckerDiv>
        <MarkerCheckbox
          type="checkbox"
          checked={checked}
          onChange={() => {
            setChecked(!checked);
            Checked();
          }}
        />

        <ParagraphAbout>{service}</ParagraphAbout>
      </CheckerDiv>
    </>
  );
}

export default ServiceItem;
