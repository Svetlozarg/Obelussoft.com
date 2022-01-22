import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DropdownConatiner = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: #112e42;
  display: ${({ isOpen }) => (isOpen ? "grid" : "none")};;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: opacity: ${({ isOpen }) => (isOpen ? "0" : "-100%")};;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 250ms ease-in-out;

  &:hover {
    color: #ffa500;
  }
`;

const DropDown = ({ isOpen, toggle }) => {
  return (
    <DropdownConatiner isOpen={isOpen}>
      <Icon onClick={toggle}></Icon>
      <DropdownWrapper>
        <DropdownMenu>
          <DropdownLink to="/" onClick={toggle} exact>
            Home
          </DropdownLink>

          <DropdownLink to="/services" onClick={toggle} exact>
            Services
          </DropdownLink>

          <DropdownLink to="/portfolio" onClick={toggle} exact>
            Portfolio
          </DropdownLink>

          <DropdownLink to="/contact" onClick={toggle} exact>
            Contact
          </DropdownLink>
        </DropdownMenu>
      </DropdownWrapper>
    </DropdownConatiner>
  );
};

export default DropDown;
