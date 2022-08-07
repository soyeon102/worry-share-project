import { StyledEngineProvider } from "@mui/styled-engine";
import styled from "styled-components";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const CommonButton = ({ text, onClick, size, variant, iconColor, margin }) => {
  return (
    <StyledEngineProvider injectFirst>
      {text ? (
        <MyButton
          variant={variant}
          onClick={onClick}
          size={size}
          margin={margin}
        >
          {text}
        </MyButton>
      ) : (
        <IconButton onClick={onClick} color={iconColor}>
          <DeleteIcon />
        </IconButton>
      )}
    </StyledEngineProvider>
  );
};

export default CommonButton;

const MyButton = styled(Button)(({ size, margin }) => ({
  width: size || "auto",
  color: "black",
  margin: margin || "auto",
}));
