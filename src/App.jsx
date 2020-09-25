import React, {Component} from "react"; 
import QuestionBox from './components/questionbox'; 
import questions from './questions.json';
import logo from './signal.png';
import "./App.css";

export default class App extends Component { 
  constructor() { 
    super(); 
    this.state = { 
      questionBank: [], 
      responses: [],
      start: false
    }; 
  }
  
  getQuestions = () => { 
    let q = [];
    let myQ = questions.questions;
    for (var i = 0; i < myQ.length; i ++) {
      q.push(myQ[i]);
    }
    this.setState({questionBank: q});
  }; 
  
  // componentDidMount function to get question 
  componentDidMount() { 
    this.getQuestions(); 
  } 
  
  render() { 
    if (this.state.questionBank.length > 0) {
      return (<div className="container"> 
      <img className="logo" src={logo}/>
      <div className="title"> 
      </div> 
      <QuestionBox questions={this.state.questionBank} /> 
    </div>) 
    }
    else return <div/>
  // else {
  //   return (<div className="container">
  //     <div className="start"> 
  //       성향퀴즈를 시작하세요!
  //     </div> 
  //     <img className="startImage" src={icon}/>
  //     <button className="start" onClick = {() => this.setState({start: true})}>시작하기</button>
  //   </div>);
  // }
}
} 