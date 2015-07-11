import React from 'react';

const sortNames = (names) => {
  return names.sort(() => {
    return .5 - Math.random();
  });
};

const MyComponent = React.createClass({
  getInitialState: function() {
    return {
      nameArr: [
        'Novak Djokovic',
        'Andy Murray',
        'Roger Federer',
        'Rafael Nadal',
        'Lleyton Hewitt',
        'Goran Ivanišević'
      ]
    };
  },
  componentDidMount: function() {
    setInterval(function() {
      const nameArr = sortNames(this.state.nameArr);
      this.setState({
        nameArr: nameArr
      });
    }.bind(this), 2000);
  },
  render: function() {
    let nameList = this.state.nameArr.map((val, index) => {
        return (
          <li key={index}>{val}</li>
        );
      });
    return (
      <ul>
        {nameList}
      </ul>
    );
  }
});

export default MyComponent;
