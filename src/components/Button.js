import PropTypes from "prop-types";
import { ButtonStyled } from "./Styles/Button.styled";
import { BsSearch } from "react-icons/bs";

const Button = ({ text, onClick }) => {
  return (
    <ButtonStyled primary tabIndex="0" onClick={onClick}>
      <span>
        <BsSearch />
      </span>
    </ButtonStyled>
  );
};

Button.defaultProps = {
  color: "#678EFE",
};

Button.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
