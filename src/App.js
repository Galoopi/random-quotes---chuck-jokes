import React,{Component} from 'react';
import JokeDisplay from './Components/JokeDisplay';
import QuoteBox from './Components/QuoteBox';
import Header from './Components/Header';
import './App.css';


class App extends Component {

render() {

  return (
    <div className="App">
      <Header />
    <section class="fl w-100">
      <div class="fl w-100 w-50-m w-100-l pa3-m pa4-l">
      <JokeDisplay  />
      
      </div>

      <div class="fl w-100 w-50-m w-100-l pa3-m pa4-l">
      <QuoteBox />

      </div>
      </section>


      </div>
    );
  }
}
export default App;
