import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Asset from './Asset.jsx';

const Header = styled.h3`
  font-size: 22px;
  font-weight: 400;
  margin: 0 0 3rem 0;
`;

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      images: [],
      text: [],
      rctext: []
    }

    this.fetchData = this.fetchData.bind(this);
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('http://18.222.221.214:3002/api/description', {
    // axios.get('api/description', {
      params: this.state.query
    })
    .then(data => {
      var images = data.data.images;
      var text = data.data.text;
      var rctext = data.data.rctext;

      this.setState({ 
        images: images, 
        text: text,
        rctext: rctext
      }, () => {
        // console.log(this.state);
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        {
          this.state.images.map((image, index) => (
            <Asset 
              image={image}
              text={this.state.text[index]}
              key={index}
            />
          ))
        }

        <Header>Risks and challenges</Header>
        {this.state.rctext[0]}
      </div>
    );
  }
};

export default About;