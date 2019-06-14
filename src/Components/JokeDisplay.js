import React from 'react';

const axios = require('axios');

let colors = ['#16a085', '#27ae60', 'rgb(131,58,180)', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#4487dd', "#8daacd", "#BDBB99", "#77B1A9", "#73A857"];

class JokeDisplay extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      fact: 'Chuck Norris Jokes',
      color: ''
    };
       this.getFact = this.getFact;
       this.changeColor = this.changeColor;


}
getFact = () => {

  axios.get('https://api.chucknorris.io/jokes/random')
  .then(response => {
    this.setState({fact: response.data.value});
      })
    .catch(error => {
     console.log(error);
   })
}


changeColor = () => {
    const newColor = this.state.color === colors[Math.floor(Math.random() * colors.length)] ? colors[Math.floor(Math.random() * colors.length)] : colors[Math.floor(Math.random() * colors.length)];
    this.setState({ color: newColor });

  }

  buttonClicked = () => {
    this.getFact();
    this.changeColor();
  }

  render (){

    return (

      <article class="center mw5 mw6-ns br3 hidden ba b--black-10 mv4 " style={{background: this.state.color}}>
      <h1 class="f2 bg-near-white br3 br--top black-60 mv0 pv2 ph3 gold">Chuck Norris Jokes</h1>
      <div class="pa3 bt b--black-10">
        <p class="f5 f5-ns lh-copy measure center near-black">
          {this.state.fact}
      </p>
      </div>

      <button className="f6 link dim ba ph3 pv2 mb2 dib near-black"
              onClick={this.buttonClicked.bind(this)}>Next Fact
      </button>
      
      </article>

    )
  }
}

export default JokeDisplay ;
