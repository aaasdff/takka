import React, {Component} from "react"; 
import loading1 from "../loading/1.png"
import loading2 from "../loading/2.png"
import loading3 from "../loading/3.png"
import loading4 from "../loading/4.png"
import loading5 from "../loading/5.png"
import loading6 from "../loading/6.png"
import loading7 from "../loading/7.png"
import loading8 from "../loading/8.png"
import loading9 from "../loading/9.png"
import loading10 from "../loading/10.png"
import loading11 from "../loading/11.png"
import loading12 from "../loading/12.png"

import elephant from "../characters/elephant.png"
import cat from "../characters/cat.png"
import deer from "../characters/deer.png"
import tiger from "../characters/tiger.png"
import wolf from "../characters/wolf.png"
import lion from "../characters/lion.png"
import horse from "../characters/horse.png"
import monkey from "../characters/monkey.png"
import sheep from "../characters/sheep.png"

import "./questionbox.css"

let cMap = new Map();
cMap[0] = "A";
cMap[1] = "B";
cMap[2] = "C";
cMap[3] = "A";
cMap[4] = "B";
cMap[5] = "C";
cMap[6] = "A";
cMap[7] = "B";
cMap[8] = "C";
cMap[9] = "A";
cMap[10] = "B";
cMap[11] = "C";

let iMap = new Map();
iMap[0] = loading1;
iMap[1] = loading2;
iMap[2] = loading3;
iMap[3] = loading4;
iMap[4] = loading5;
iMap[5] = loading6;
iMap[6] = loading7;
iMap[7] = loading8;
iMap[8] = loading9;
iMap[9] = loading10;
iMap[10] = loading11;
iMap[11] = loading12;

let tMap = new Map();
tMap[0] = "힘든 일이 있으면 뭐든 말해봐! 항상 도움을 준비가 되어있는 양";
tMap[1] = "너의 사랑을 쟁취할 자격도! 능력도 충분해. 강한 자신감과 도전 정신을 가진 호랑이 ";
tMap[2] = "나의 세계는 독특해, 한번 들어와 볼래? 나만의 세계가 뚜렷한 개인주의자 고양이 ";
tMap[3] = "너를 위해서라면 뭐든 완벽해야해! 정의롭고 완벽한 사자";
tMap[4] = "우리 오래오래 행복하게 함께 하자. 싸우는건 지치잖아.. 안정을 추구하는 평화주의자 코끼";
tMap[5] = "너와 내가 함께 앞으로 나아갈 수 있었으면 좋겠어! 효율성과 성취를 중요시하는 늑대";
tMap[6] = "내가 너를 사랑한다고 할 때는 정말 사랑하는 거야! 책임감이 강하고 신중한 사슴";
tMap[7] = "너와 함께 있으면 심장이 터질것만 같아! 행복을 추구하는 열정적인 원숭이";
tMap[8] = "이것도 알고싶고, 저것도 알고싶고, 너도 알고싶어! 현명하고 지적인 탐구자 말";

let r_tMap = new Map();
r_tMap[0] = 8;
r_tMap[1] = 7;
r_tMap[2] = 6;
r_tMap[3] = 5;
r_tMap[4] = 4;
r_tMap[5] = 3;
r_tMap[6] = 2;
r_tMap[7] = 1;
r_tMap[8] = 0;

let characterMap = new Map();
characterMap[0] = sheep;
characterMap[1] = tiger;
characterMap[2] = cat;
characterMap[3] = lion;
characterMap[4] = elephant;
characterMap[5] = wolf;
characterMap[6] = deer;
characterMap[7] = monkey;
characterMap[8] = horse;

var NUM_Q = 12;
var responses = new Map();

export default class QuestionBox extends Component { 
  constructor(props) { 
    super(props); 
    console.log(this.props.questions[0]);
    this.state = { 
        question: this.props.questions[0].question,
        option1: this.props.questions[0].option1,
        option2: this.props.questions[0].option2,
        currentQuestion: 0
      }; 
  }
  
  getNextQuestion = () => { 
    let cur = this.state.currentQuestion + 1;
    this.setState({currentQuestion: cur});
    this.setState({question: this.props.questions[cur].question});
    this.setState({option1: this.props.questions[cur].option1});
    this.setState({option2: this.props.questions[cur].option2});
  }; 

  calculateResult = () => {
    let countByCategory = new Map();
    for (let key in responses) {
      let currentLetter = cMap[key];
      let value = responses[key];
      if (value) {
        !(currentLetter in countByCategory) && (countByCategory[currentLetter] = 0);
        countByCategory[currentLetter] = countByCategory[currentLetter] + 1;
      }
    }
    console.log(countByCategory);
    let A = cMap["A"];
    let B = cMap["B"];
    let C = cMap["C"];
    return 0;
    // if (A == B && B == C) return "peacemaker"
    // if (A >= B && B >= C) return ""
    // if (B > A > C) return ""
    // if (C > A > B) return ""
    // if (C > B > C) return ""
  }

  onOptionClick = (option) => {
    let currentResponses = responses;
    currentResponses[this.state.currentQuestion] = option;
    responses = currentResponses;
    if (this.state.currentQuestion < NUM_Q - 1) this.getNextQuestion();
    else this.setState({currentQuestion: this.state.currentQuestion + 1});
  }

  onWebsiteClick = () => {
    window.open("https://signal-project.wixsite.com/mysite", "_blank")
  }

  onShareClick = () => {
    window.open("someLink", "_blank")
  }
  
  render() {
    let type = this.calculateResult();
    console.log(type);
    if (this.state.currentQuestion < NUM_Q ) {
      return (
      <div className="container-question"> 
      <div className="question-number"> 
        Q{this.state.currentQuestion+1}.
      </div> 
      <br/>
      <div className="question"> 
        {this.state.question}
      </div> 
      <div className="container-option">
        <button className="option1" onClick = {() => this.onOptionClick(true)}>{this.state.option1}</button>
        <button className="option2" onClick = {() => this.onOptionClick(false)}>{this.state.option2}</button>
        <div className="loadingdiv">
        <img className="loading" src={iMap[this.state.currentQuestion]}/>
        </div>
        </div>
    </div>) 
    }
    else {
      return (<div className="container-question">
              <div className="result">
        <div className="myResult">
          <div className="yourTypeTitle"> 
            당신의 타입은...
          </div> 
          <br/>
          <div className="yourType"> 
          {tMap[type]}
          </div> 
          <img className="type" src={characterMap[type]}/>
        </div>
        <br/>
        <div className="soulmate">
          <div className="soulType">
            <br/>
            내 소울 메이트
            <br/>
          </div> 
          <img className="typesoul" src={characterMap[r_tMap[type]]}/>
          <p className="yoursoulType">{tMap[r_tMap[type]]}</p>
        
        </div>
        <div className="sharebuttons">
          <button className="share" onClick = {() => this.onShareClick()}>공유하기</button>
          <button className="website" onClick = {() => this.onWebsiteClick()}>소울메이트 찾으러 가기</button>
          </div>
          <div className="footer">
            결과 저작권은 [비프렌즈] 에 있으며, 상업적 이용을 금합니다. <br/>
            본 서비스의 공유 및 사용은 격렬하게 환영합니다. <br/>
            피드백은 <a src="www.yonsei.ac.kr">khj6051@yonsei.ac.kr</a>로 부탁드립니다.
        </div>
      </div>
      </div>);
    }
  } 
} 