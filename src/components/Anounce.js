import React from 'react';
import styled from "styled-components";

const Container = styled.div`
height:30px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:flex-end;
font-size:14px;
font-weight:500;
font-family: 'Urbanist', sans-serif;
`

export default function Announcement() {
  return (
  <Container> <p className='aounce-text'>Lorem ipsum dolor sit aalah hu akbar.</p></Container>
  );
}
