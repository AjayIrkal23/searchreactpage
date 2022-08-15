import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import EmailIcon from '@mui/icons-material/Email';
import * as React from "react";
import Badge from "@mui/material/Badge";
import {mobile} from "../respn"

import Product from "./Product";
 

export default function Navbar() {
  const Container = styled.div`
    height: 60px;
   ${mobile({height:"50px"})}
  `;

  const Wrapper = styled.div`
    padding: 20px 20px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    ${mobile({padding:"10px 15px"})}
    background: bisque;
   
  `;

  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;

  const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({flex:5,justifyContent:"center"})}
  `;

  const Center = styled.div`
    flex: 1;
    align-items: center;
    margin:auto;
    
  `;

  const Language = styled.span`
    font-size: 20px;
    margin-right:10px;
    cursor: pointer;
    ${mobile({fontSize:"15px",marginRight:"20px"})}
   
    
  `;

 


  const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
  
    ${mobile({fontSize:"30px",marginRight:"15px"})}
  `;

  const MenuItem = styled.div`
    font-size: 17px;
    cursor: pointer;
    margin-left:25px;
    margin-right:25px;
    ${mobile({fontSize:"15px",marginLeft:"10px",marginRight:"10px"})}
   

  `;

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>

        </Left>
        <Center>
          <Logo>Mercy</Logo>
        </Center>
        <Right>
          <MenuItem>Login</MenuItem>
          <MenuItem>Signin</MenuItem>
          <MenuItem>
            <Badge badgeContent={9} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
      
     
    </Container>
  );
}
