import React,{Component} from "react";
import "../css/HomeComponent.css"
class HomeComponent extends Component{
    render(){
        return(
            <div className="home">
                <h2 className="home-heading">Quiz App</h2>
                <button className="home-bt">Play</button>
            </div>
        )
    }
}
export default HomeComponent