import React from "react";

const Footer = () => {
  const date = new Date();
  return <footer>Copyright &copy; {date.getFullYear()} Matthew Brooks</footer>;
};

export default Footer;
