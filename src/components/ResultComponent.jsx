import React,{Component} from "react";
import "../css/ResultComponent.css"
class ResultComponent extends Component{
    render(){
        return(
            <div>
                <h2>Result</h2>
                <div className="result">
                    <h3>You need more practise!</h3>
                    <h1>Your score is 20%</h1>
                    <div className="flex">
                        <div className="details">
                          <h5>Totol number of quesions</h5>
                          <h5>Number of attempted questions</h5>
                          <h5>Number of correct answers</h5>
                          <h5>Number of wrong answers</h5>
                        </div>
                        <div className="number">
                          <h5>15</h5>
                          <h5>9</h5>
                          <h5>3</h5>
                          <h5>6</h5>
                        </div>
                    </div>
                </div><br/>
                <div className="buttons">
                    <button className="play">Play Again</button>
                    <button className="home">Back to home</button>
                </div>
            </div>
        )
    }
}
export default ResultComponent