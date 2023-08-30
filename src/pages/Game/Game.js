//import react
import React from "react";

//import components
import MainButton from "../../components/Main Button/MainButton";
import LinkButton from '../../components/Link Button/LinkButton';

//import struct and logic
import Patch from "../../structure/Patch";
import Logic from "../../logic/Logic";

//import style sheet
import './Game.css';

class Game extends React.Component{
    constructor(){
        super();
        this.level = parseInt(window.location.toString().slice(-3)[0]);
        this.method = parseInt(window.location.toString().slice(-3)[2]);
        this.game = new Patch(this.level-1 , undefined);
        this.logic = new Logic();
        this.state = {
            finished: false,
            show_array: this.game.cur_state,
            show_button: true,
        }
    }

    updateShowArray(new_state){  
        this.setState({
            ...this.state,
            ...new_state
        });
    }

    async startPlay(){
        this.setState({show_button: false});
        await new Promise(resolve => setTimeout(resolve , 300));
        this.logic.play(this.method, this.game , this.updateShowArray.bind(this));
    }

    componentDidMount(){
        if(this.method===1) this.startPlay();
    }

    render(){  
        return (
            <div className="game-page">
                <div className='game-page-content'>
                    <div className="game-page-info">
                        <p>Level {this.level}</p>
                        {
                            this.state.finished ?
                            <div className="game-page-info-state">
                                {this.state.error ? 
                                    <>
                                        <p style={{color: 'var(--main-red)'}}>{this.state.msg}</p>
                                        <p>Time: {this.state.time.toFixed(0)} ms</p>
                                        <p>Tree depth: {this.state.tree_depth}</p>
                                        <p>Number of visited state: {this.state.visited_count}</p>
                                    </> :
                                    <>
                                        <p>You Win!!! {this.state.msg}</p>
                                        <p>Time: {this.state.time.toFixed(0)} ms</p>
                                        <p>Tree depth: {this.state.tree_depth}</p>
                                        <p>Number of step to solve {this.method!==1 ? '/ solve depth' : null}: {this.state.steps_array.length}</p>
                                        {this.state.cost && <p>cost to solve: {this.state.cost}</p>}
                                        <p>Number of visited state: {this.state.visited_count}</p>
                                        <p style={{overflowY: 'auto' , maxHeight: '150px' , padding: '6px'}}>Steps to solve:<br/>[{this.state.steps_array.join(' , ')}]</p>
                                    </> 
                                }
                                <LinkButton 
                                    width='140px'
                                    height='45px'
                                    title='Back to Home'
                                    color='var(--main-red)'
                                    to={`/sokonumber/home`}
                                />
                            </div>
                            : this.method!==1 ? <MainButton
                                width='140px'
                                height='45px'
                                title='Start'
                                color='var(--main-red)'
                                onClick={this.startPlay.bind(this)}
                                disabled = {!this.state.show_button}
                            />
                            : <></> 
                        }
                    </div>
                    <div className="game-page-patch">
                        {
                            this.state.show_array.map((row , i) => 
                                row.map((column , j) => 
                                <div 
                                    key={(i*7)+j+1}
                                    className="game-page-cell" 
                                    style={
                                        {
                                            top: `${65*i}px`, 
                                            left: `${65*j}px`,
                                            backgroundColor: column.out===1 ? 'var(--main-color)' : column.wall===1 ? 'var(--secondary-color3)' : (column.empty===1 || column.target!==0) ? 'var(--secondary-color1)' : '',
                                            borderRadius: (column.wall===1 || column.target!==0 || column.empty===1 || column.box!==0) ? '10px' : '',
                                            width: column.out===1 ? '65px' : '',
                                            height: column.out===1 ? '65px' : '',
                                            border: column.target!==0 ? '3px dashed var(--secondary-color2)' : '',
                                        }
                                    }
                                    
                                >
                                    {column.target!==0 ? column.target : null}
                                    {column.box!==0 ? 
                                        <span 
                                            style=
                                            {
                                                {
                                                    backgroundColor: column.target===column.box ? 'var(--win-color)' : column.box!==0 ? '#F3950D' : '', //F3950D
                                                }
                                            }
                                        >
                                            {column.box}
                                        </span> 
                                        : null
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>  
            </div>
        );
    } 
}   

export default Game;