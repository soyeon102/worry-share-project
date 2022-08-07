import styled from "styled-components";
import Input from "@mui/material/Input";

const ariaLabel = { "aria-label": "description" };

const CommonInput = ({ text, id }) => {
  return (
    <StBox>
      <Input
        placeholder={text}
        inputProps={ariaLabel}
        sx={{ margin: "20px 0", width: "100%" }}
        id={id}
      />
    </StBox>
  );
};

export default CommonInput;

const StBox = styled.div``;
