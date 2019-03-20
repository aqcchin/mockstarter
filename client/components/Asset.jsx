import React from 'react';
import styled from 'styled-components';
import faker from 'faker';

const Block = styled.div`
  margin-bottom: 10px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  width: auto\9;
`;


const Asset = props => (
  <div>
    <Block>
      <div>
        { props.text }
      </div>

      <br/>

      <div>
        <Image src={props.image} />
      </div>
    </Block>
  </div>
)

export default Asset;