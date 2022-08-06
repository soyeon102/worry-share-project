import { StyledEngineProvider } from '@mui/styled-engine';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const CommonButton = ({ text, onClick, size, variant, iconColor }) => {
  return (
    <StyledEngineProvider injectFirst>
      {text ? (
        <MyButton variant={variant} onClick={onClick} size={size}>
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

const MyButton = styled(Button)(({ size }) => ({
  width: size || 'auto',
  color: 'black',
}));
