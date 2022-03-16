import { Button as BootStrapButton } from "react-bootstrap";

const Button = ({ format, text, onClick }) => {
  return (
    <BootStrapButton variant={format} onClick={onClick}>
      {text}
    </BootStrapButton>
  );
};

export default Button;
