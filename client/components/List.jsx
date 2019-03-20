import React from 'react';
import styled from 'styled-components';
import faker from 'faker';
import ListEntry from './ListEntry.jsx';

const PledgeList = styled.div`
`;

const NoRewardPledge = styled.div`
  border: 1px solid #9B9E9E;
  margin-bottom: 20px;
`;

const NoRewardPledgeHeader = styled.h4`
  display: block;
  color: #282828;
  font-size: 20px;
  font-weight: 400;
  padding: 20px 0 20px 0;
  margin: 0 20px 0 20px;
`;

const NoRewardPledgeForm = styled.div`
  padding: 0 1.8rem;
`;

const NoRewardPledgeInput = styled.div`
  position: relative;
  padding: 10px 0 10px 0;
  width: 100%;
  height: 42px;
  margin-bottom: 1.8rem;
  display: block;
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


class List extends React.Component {
  constructor(props) {
    super();
    
    this.state = {
      rewards: [],
      rewardDate: '',
      value: 10,
      isHidden: true
    }

    this.inputAmount = this.inputAmount.bind(this);
    this.showForm = this.showForm.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  componentDidMount() {
    var rewardsNum = Math.floor(Math.random() * (10 - 3)) + 3;
    var rewardsArr = [];
    var rewardPrice = 15;

    for (var i = 0; i < rewardsNum; i++) {
      var rewardsObj = {};

      rewardsObj.title = faker.lorem.words();
      rewardsObj.info = faker.lorem.sentences();
      rewardsObj.price = rewardPrice;
      rewardsObj.backers = Math.floor(Math.random() * Math.floor(200));
      
      rewardsArr.push(rewardsObj);
      rewardPrice += 5;
    }

    this.setState({
      rewards: rewardsArr,
      rewardDate: faker.date.month().slice(0, 3),
      isHidden: true
    })
  };
  
  inputAmount(e) {
    e.preventDefault();
    if(e.target.value !== this.state.value) {
      this.setState({
        value: e.target.value
      })
    }
  }

  showForm() {
    this.setState({
      isHidden: !this.state.isHidden,
    })
  }

  renderButton() {
    if (!this.state.isHidden) {
      return (
        <ContinueButton className="button-focus">Continue</ContinueButton>
      );
    }
  }

  render() {
    return (
      <div>
        <PledgeList>
          <div id="root3"></div>
          {/* <NoRewardPledge onClick={() => this.showForm()}>
            <NoRewardPledgeHeader>
              Make a pledge without a reward
            </NoRewardPledgeHeader>
            
            <NoRewardPledgeForm>
              <NoRewardPledgeInput>
                <CurrencyBox className="mouseover">$</CurrencyBox>
                <InputField
                  className="mouseover input-focus" 
                  type="text" 
                  value={this.state.value} 
                  onChange={this.inputAmount}
                />
              </NoRewardPledgeInput>
              { this.renderButton() }
            </NoRewardPledgeForm>
          </NoRewardPledge> */}

          {/* {
            this.state.rewards.map((reward, i) => {
              return (
                <ListEntry 
                  key={i} 
                  title={reward.title}
                  info={reward.info} 
                  date={this.state.rewardDate}
                  price={reward.price} 
                  backers={reward.backers}
                />
              )
            })
          } */}
  
        </PledgeList>
      </div>
    )
  };
}


export default List;