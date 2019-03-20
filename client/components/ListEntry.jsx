import React from 'react';
import styled from 'styled-components';
import SelectBar from './SelectBar.jsx';


const PledgeReward = styled.div`
  border: 1px solid #9B9E9E;
  margin-bottom: 20px;
  position: relative;
  vertical-align: baseline;
`;

const MouseOverSelect = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 5;
  color: white;
  vertical-align: middle;

  &.mouseover:hover {
    display: block;
    background-color: rgba(0,158,116,0.9);
    transition: all 0.2s ease-in-out;
  }
`;

const PledgeTop = styled.div`
  padding: 1.8rem 1.8rem;
`;

const PledgeHeader = styled.h4`
  display: block;
  color: #282828;
  font-size: 20px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 20px;
`;

const PledgeTitle = styled.h5`
  display: block;
  color: #282828;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

const PledgeDescription = styled.div`
  color: #656969;
  font-size: 16px;
  margin-bottom: 20px;
`;
  // height: 5rem;
  // overflow: hidden;
  
const PledgeExtraInfo = styled.div`
`;

const ExtraInfo = styled.div`
  float: left;
  width: 50%;
`;

const InfoTitle = styled.p`
  color: #656969;
  text-transform: uppercase;
  font-size: 12px;
`;

const Backers = styled.div`
  color: #656969;
  font-size: 14px;
  margin-top: 1.8rem;
`;

const PledgeForm = styled.div`
  padding: 1.8rem;
`;
// height: 26.4rem;

const FormHeader = styled.div`
  font-size: 14px;
  color: #656969;
`;

const Shipping = styled.div`
  margin-bottom: 5px;
`;

// const SelectBar = styled.select`
//   margin-bottom: 5px;
// `;

const Amount = styled.div`
  margin-bottom: 5px;
`;

const CurrencyBox = styled.div`
  border-right: 1px solid #DCDEDD;
  position: absolute;
  width: 42px;
  height: 42px;
  box-sizing: border-box;
  text-align: center;
  font-size: 14px;
  padding-top: 12px;

  &.mouseover:hover {
    border-right: 1px solid #009E74;
  }
`;

// const field = (props) => (
//   <div 
//     className={props.className} 
//     value={props.value} 
//     onChange={(e) => props.fn(e)}
//   >
//   </div>
// )

const InputField = styled.input`
  width: 100%;
  height: 42px;
  padding-left: 3rem;
  box-sizing: border-box;
  font-size: 16px;

  &.input-focus:focus{
    outline: none;
  }
  
  &.mouseover:hover {
    border: 1px solid #009E74;
  }
`;

const ContinueButton = styled.button`
  color: #FFFFFF;
  background-color: #009E74;
  height: 4.2rem;
  width: 100%;
  padding: 0 1.8rem;
  font-size: 1.4rem;
  margin-bottom: 1.8rem;

  &.button-focus:focus {
    outline: none;
  }
`;

const PStyle = styled.p`
  position: absolute;
  margin-top: 50%;
  width: 100%;
  height: 100%;
  text-align: center;

  &.mouseover:hover {
    display: inline-block;
    transition: all 0.2s ease-in-out;
  }
`;

class ListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
      displayMouseover: "",
      value: 10
    }

    this.showForm = this.showForm.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.inputAmount = this.inputAmount.bind(this);
  }

  componentDidMount() {
    this.setState({
      isHidden: true,
      displayMouseover: "block",
      value: this.props.price
    })
  }

  showForm() {
    this.setState({
      isHidden: !this.state.isHidden,
      displayMouseover: "none"
    })
  }

  inputAmount(e) {
    e.preventDefault();
    if(e.target.value !== this.state.value) {
      this.setState({
        value: e.target.value
      })
    }
  }

  renderForm() {
    if (!this.state.isHidden) {
      return (
        <PledgeForm>
          <Shipping>
            <FormHeader>Shipping destination</FormHeader>
            <SelectBar />
          </Shipping>

          <Amount>
            <FormHeader>Pledge amount</FormHeader>
            <CurrencyBox className="mouseover">$</CurrencyBox>
            <InputField
              className="mouseover input-focus" 
              type="text" 
              value={this.state.value} 
              placeholder="Pledge any amount"
              onChange={this.inputAmount} 
            />
          </Amount>

          <ContinueButton className="button-focus">Continue</ContinueButton>
        </PledgeForm>
      );
    }
  }

  render() {
    return (
      <div>
        <PledgeReward>

          <MouseOverSelect className="mouseover" onClick={() => this.showForm()} style={{display: this.state.displayMouseover}}>
            <PStyle className="mouseover">Select this reward</PStyle>
          </MouseOverSelect>

          <PledgeTop>
            <PledgeHeader>Pledge ${this.props.price} or more</PledgeHeader>

            <PledgeTitle>{this.props.title} Pledge</PledgeTitle>

            <PledgeDescription>
              <p>
                {this.props.info}
              </p>

            </PledgeDescription>

            <PledgeExtraInfo>
              <ExtraInfo>
                <InfoTitle>Estimated delivery</InfoTitle>
                <p>{this.props.date} 2019</p>
              </ExtraInfo>
              <ExtraInfo>
                <InfoTitle>Ships to</InfoTitle>
                <p>Anywhere in the world</p>
              </ExtraInfo>
            </PledgeExtraInfo>
            
            {/* Insert "Limited (x left of y)" here */}

            <Backers>{this.props.backers} backers</Backers>
          </PledgeTop>

          { this.renderForm() }
        </PledgeReward>
      </div>
    );
  }
}


export default ListEntry;