import React from "react";
import { Link } from "react-router-dom";

import { AppWrap } from "../../wrapper";

const Header = () => {
  return (
    <div>
      Buy With <Link to={"/products"}>Us</Link>
      :)
    </div>
  );
};

export default AppWrap(Header, "home");
