import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import Yoda from "../../../../assets/images/logo/logo.svg";
import YodaDark from "../../../../assets/images/logo/logo-dark.svg";
import YodaRtl from "../../../../assets/images/logo/logo-rtl.svg";
import YodaRtlDark from "../../../../assets/images/logo/logo-rtl-dark.svg";

export default function MenuLogo(props) {
  const customise = useSelector((state) => state.customise);

  return (
    <Link
      to="/"
      className="hp-header-logo hp-d-flex hp-align-items-end"
      onClick={props.onClose}
    >
      {customise.direction === "rtl" ? (
        customise.theme === "light" ? (
          <img className="hp-logo" src={YodaRtl} alt="logo" />
        ) : (
          <img className="hp-logo" src={YodaRtlDark} alt="logo" />
        )
      ) : customise.theme === "light" ? (
        <img className="hp-logo" src={Yoda} alt="logo" />
      ) : (
        <img className="hp-logo" src={YodaDark} alt="logo" />
      )}
    </Link>
  );
}
