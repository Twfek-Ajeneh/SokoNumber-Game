//import react
import React from "react";

//import components
import LinkButton from "../../components/Link Button/LinkButton";

//import style sheet
import './Home.css';

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            level : 0,
            method: 0
        }
        this.levels = [1 , 2 , 3 , 4 , 5 , 6];
        this.methods = ['User' , 'DFS' , 'BFS' , 'UCS' , 'A*']; 
        this.handleClick.bind(this);
    }

    handleClick(new_level , new_method){
        const new_state = {level: new_level , method: new_method};
        this.setState(new_state);
    }

    render(){
        return (
            <div className="home-page">
                <div className="home-page-content">
                    <p>SOKONUMBER</p>
                    <p>Choose level :</p>
                    <div className="home-page-levels">
                        {this.levels.map(value  => <span key={value} className={value===this.state.level ? 'active' : ''} onClick={() => this.handleClick(value , this.state.method)}>{value}</span>)}
                    </div>
                    <p>Choose how to play :</p>
                    <div className="home-page-methods">
                        {this.methods.map((value , index) => <span key={value} className={index+1===this.state.method ? 'active' : ''} onClick={() => this.handleClick(this.state.level , index+1)}>{value}</span>)}
                    </div>
                    <LinkButton 
                        width='140px'
                        height='45px'
                        title='Start'
                        color='var(--main-red)'
                        to={`/sokonumber/play/${this.state.level}/${this.state.method}`}
                        disabled = {(this.state.level===0 || this.state.method===0) ? true : false}
                    />
                </div>
            </div>
        );
    }
}

export default Home;