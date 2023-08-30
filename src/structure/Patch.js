import { levels } from './levels.js';
import Cell from './Cell.js';

// the main struct of the game
class Patch{
    constructor(level , parent){
        this.size = {
            x : levels[level].length,
            y : levels[level][0].length
        }
        this.cur_state = [];
        for(let i = 0; i < this.size.x; i++){
            this.cur_state.push([]);
            for(let j = 0; j < this.size.y; j++){
                this.cur_state[i].push((new Cell(1 , 1 , 1)).copyCell(levels[level][i][j]));
            }
        }
        this.parent = parent;
    }

    printState(){
        this.cur_state.forEach(row => {
            let row_string = '';
            row.forEach(item => {
                row_string +=item.getValue();
            })
            console.log(row_string);
        });
        console.log('----------------------------------------------');
    }

    checkMove(){
        const move_priority = new Map([['U' , 1] , ['D' , 2] , ['R' , 3] , ['L' , 4]]);
        const possible_moves = new Set();
        for(let i = 0; i < this.size.x; i++){
            for(let j = 0; j < this.size.y; j++){
                if(this.cur_state[i][j].box!==0){
                    if(i > 0 && this.cur_state[i-1][j].canMove()) possible_moves.add('U');
                    if(i < this.size.x-1 && this.cur_state[i+1][j].canMove()) possible_moves.add('D');
                    if(j > 0 && this.cur_state[i][j-1].canMove()) possible_moves.add('L');
                    if(j < this.size.y-1 && this.cur_state[i][j+1].canMove()) possible_moves.add('R');
                }
            }
        }
        const final_moves = [...possible_moves.values()].sort((a , b) => move_priority.get(a)-move_priority.get(b));
        return final_moves; 
    }

    clone(){
        const new_copy = new Patch(0 , this.parent);
        new_copy.size.x = this.size.x;
        new_copy.size.y = this.size.y;
        for(let i = 0; i < this.size.x; i++){
            for(let j = 0; j < this.size.y; j++){
                new_copy.cur_state[i][j] = (new Cell(1 , 1 , 1)).copyCell(this.cur_state[i][j]);
            }
        }
        return new_copy;
    }

    getMovedCell(direction){
        const moved_Cells = [];
        for(let i = 0; i < this.size.x; i++){
            for(let j = 0; j < this.size.y; j++){
                if(this.cur_state[i][j].box!==0){
                    if(i > 0 && this.cur_state[i-1][j].canMove() && direction==='U') moved_Cells.push({i , j});
                    if(i < this.size.x-1 && this.cur_state[i+1][j].canMove() && direction==='D') moved_Cells.push({i , j});
                    if(j > 0 && this.cur_state[i][j-1].canMove() && direction==='L') moved_Cells.push({i , j});
                    if(j < this.size.y-1 && this.cur_state[i][j+1].canMove() && direction==='R') moved_Cells.push({i , j});
                }
            }
        }
        return moved_Cells;
    }

    move(direction){
        const steps = this.getMovedCell(direction);
        switch(direction){
            case 'U':
                steps.forEach(item => {
                    Cell.moveCell(this.cur_state[item.i][item.j] , this.cur_state[item.i-1][item.j]);
                });
                break
            case 'D':
                steps.forEach(item => {
                    Cell.moveCell(this.cur_state[item.i][item.j] , this.cur_state[item.i+1][item.j]);
                });
                break;
            case 'L':
                steps.forEach(item => {
                    Cell.moveCell(this.cur_state[item.i][item.j] , this.cur_state[item.i][item.j-1]);
                });
                break;
            case 'R':
                steps.forEach(item => {
                    Cell.moveCell(this.cur_state[item.i][item.j] , this.cur_state[item.i][item.j+1]);
                });
                break;
            default:
                console.log(`wrong direction ${direction}`);
        }
        return this;
    }

    isFinal(){
        let ok = true;
        for(let i = 0; i < this.size.x; i++){
            for(let j = 0; j < this.size.y; j++){
                if(this.cur_state[i][j].target!==this.cur_state[i][j].box) ok = false;
            }
        }
        return ok;
    }

    isEqual(value){
        for(let i = 0; i < this.size.x; i++){
            for(let j = 0; j < this.size.y; j++){
                if(!this.cur_state[i][j].isEqual(value.cur_state[i][j])) return false;
            }
        }
        return true;
    }

    getNextStates(){
        const next_states = [];
        const moves = this.checkMove();
        moves.forEach(move => {
            const next_state = this.clone();
            next_state.move(move);
            next_state.parent = {ref : this , move: move}
            next_states.push(next_state);
        });
        return next_states;
    }

    getKey(){
        return JSON.stringify(this.cur_state);
    }
}

export default Patch;