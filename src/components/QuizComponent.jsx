import React,{Component} from "react";
import "../css/QuizComponent.css"
import questions from "../resource/question.json"

class QuizComponent extends Component{
    constructor(){
        super()
        this.state={
            num:0
        }
        this.handleNext=this.handleNext.bind(this)
        this.handlePrevious=this.handlePrevious.bind(this)
        this.handleQuit=this.handleQuit.bind(this)
    }
    handleNext(){
        if(this.state.num<14){
            this.setState({
                num:this.state.num+1
            })
        }  
    }
    handlePrevious(){
        if(this.state.num>0){
            this.setState({
                num:this.state.num-1
            }) 
        }
    }
    handleQuit() {
        const confirmed = window.confirm("Are you sure you want to quit?");
        if (confirmed) {
          // user clicked "OK"
          // perform actions to quit the quiz
        } else {
          // user clicked "Cancel"
          // do nothing
        }
    }      
    render(){
        return(
            <div className="quiz">
                <p>Question</p>
                <div>
                    <span>
                        {this.state.num+1} of 15
                    </span>
                    <h5>{questions[this.state.num].question}</h5>
                </div>
                <div className="options">
                    <p className="option">{questions[this.state.num].optionA}</p>
                    <p className="option">{questions[this.state.num].optionB}</p>
                    <p className="option">{questions[this.state.num].optionC}</p>
                    <p className="option">{questions[this.state.num].optionD}</p>
                </div>
                <div>
                    <button className="previous-btn" onClick={this.handlePrevious}>Previous</button>
                    <button className="next-btn" onClick={this.handleNext}>Next</button>
                    <button className="quit-btn" onClick={this.handleQuit}>Quit</button>
                </div>
            </div>
        )
    }
}
export default QuizComponent