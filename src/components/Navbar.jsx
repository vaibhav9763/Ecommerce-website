import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { FaSearch } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  border: 0.9px solid lightgray;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: #e21010;
  ${mobile({ fontSize: "24px" })}
  &:hover {
    color: black;
    transform: scale(1.1);
    transition: 0s all;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 19px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Search" />
            <FaSearch style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>BIGCART</Logo>
        </Center>

        <Right>
          <MenuItem>
            <NavLink
              style={{ textDecoration: "none", color: "blue " }}
              to="/register"
            >
              Register
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              style={{ textDecoration: "none", color: "blue" }}
              to="/login"
            >
              Login
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              style={{ textDecoration: "none", color: "blue" }}
              to="/cart"
            >
              Cart
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              style={{ textDecoration: "none", color: "blue" }}
              to="/product"
            >
              Product
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              style={{ textDecoration: "none", color: "blue" }}
              to="/productlist"
            >
              ProductList
            </NavLink>
          </MenuItem>

          <MenuItem>
            {/* bootstrap  */}
            <button type="button" class="btn position-relative">
              <BsCart2 />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
