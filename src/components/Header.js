import PropTypes from "prop-types";
import { HeaderStyled } from "./Styles/Header.styled";

const Header = ({ title, subTitle }) => {
  return (
    <HeaderStyled>
      <h3>{title}</h3>
      <h4>{subTitle}</h4>
    </HeaderStyled>
  );
};

Header.defaultProps = {
  title: "Welcome to the Weather app!",
};

Header.propTypes = { title: PropTypes.string.isRequired };

export default Header;
