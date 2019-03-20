import React from 'react';
import styled from 'styled-components';
import faker from 'faker';
import About from './About.jsx';
import List from './List.jsx';

const MainContainer = styled.div`
  color: #020621;
  font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, "Liberation Sans", FreeSans, sans-serif;
  line-height: 1.4;

  &.pad-1 {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`;

const Container = styled.div`
  max-width: 1040px;
  margin-left: auto;
  margin-right: auto;

  &.pad-2 {
    padding-left: 1.8rem;
    padding-right: 1.8rem;
  }
`;

const Row = styled.div`
  width: 100%;
  flex-wrap: wrap;

  &.row:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Description = styled.div`
  float: left;
  width: 66.67%;
  background-color: white;

  @media only screen and (max-width: 650px) {
    width: 100%;
  }
  
  &.pad-3 {
    padding-left: 1.8rem;
    padding-right: 1.8rem;
    box-sizing: border-box;
  }
`;

const Pledges = styled.div`
  float: left;
  width: 33.33%;
  
  @media only screen and (max-width: 650px) {
    width: 100%;
    height: 0px;
    display: none;
  }
  
  &.pad-4 {
    padding-left: 1.8rem;
    padding-right: 1.8rem;
    box-sizing: border-box;
  }
`;

const Header = styled.h3`
  font-size: 22px;
  font-weight: 400;
  margin: 0 0 3rem 0;

  @media only screen and (max-width: 650px) {
    display: none;
  }
`;


const Main = props => (
  <MainContainer className="pad-1">
    <Container className="pad-2">
      <Row className="row">
        <Description className="pad-3">
          <Header>About</Header>
          <About />
        </Description>

        <Pledges className="pad-4">
          <Header>Support</Header>
          <List />
        </Pledges>
      </Row>
    </Container>
  </MainContainer>
);

export default Main;