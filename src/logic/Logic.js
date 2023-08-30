import { MinPriorityQueue , PriorityQueue} from '@datastructures-js/priority-queue';

class Logic{

    play(type , game , update){
        this.type = type;
        this.steps_array = [];
        this.visited_state = new Map();
        this.start_time = performance.now();
        this.finished = false;
        this.update = update
        switch(type){
            case 1:
                this.userPlay(game);
                break;
            case 2:
                this.dfs(game);
                break;
            case 3:
                this.bfs(game);
                break;
            case 4: 
                this.UCS(game);
                break;
            case 5:
                this.aStar(game);
                break;
            default:
        }
    }

    userPlay(game){
        this.isFinished(game , '');
        this.visited_state.set(game.getKey() , {ref: game , depth: 0})
        if(window.matchMedia("(max-width: 768px)").matches){
            const lastPoint = {x: null, y: null}
            window.ontouchstart = (e) => {
                lastPoint.x = e.touches[0].pageX;
                lastPoint.y = e.touches[0].pageY;
            };
            window.ontouchend = (e) =>{
                const leftOrRight = ( e.changedTouches[0].pageX > lastPoint.x ? 'R' : e.changedTouches[0].pageX < lastPoint.x ? 'L' : 'none')
                const upOrDown = ( e.changedTouches[0].pageY > lastPoint.y ? 'D' : e.changedTouches[0].pageY < lastPoint.y ? 'U' : 'none')
                const horizontal = Math.abs(e.changedTouches[0].clientX - lastPoint.x);
                const vertical  = Math.abs(e.changedTouches[0].clientY - lastPoint.y);
                const direction = horizontal > vertical ? leftOrRight : upOrDown;
                const pre_state = game.clone();
                if(direction==='U'){
                    game.move('U');
                    this.steps_array.push('U');
                } // up
                else if(direction==='D'){
                    game.move('D');
                    this.steps_array.push('D');
                } // down
                else if(direction==='L'){
                    game.move('L');
                    this.steps_array.push('L');
                } // left
                else if(direction==='R'){
                    game.move('R');
                    this.steps_array.push('R');
                }//right
                if(game.isEqual(pre_state)) this.steps_array.pop();
                this.update({finished: this.finished, show_array: game.cur_state});
                const game_clone = game.clone();
                if(this.visited_state.get(game_clone.getKey())===undefined){
                    this.visited_state.set(game_clone.getKey() , {ref: game_clone , depth: this.visited_state.get(pre_state.getKey()).depth+1});
                }
                this.isFinished(game , '');
            };
        }
        else{
            window.onkeydown = (e) => {
                const pre_state = game.clone();
                if(e.keyCode===38){
                    game.move('U');
                    this.steps_array.push('U');
                } // up
                else if(e.keyCode===40){
                    game.move('D');
                    this.steps_array.push('D');
                } // down
                else if(e.keyCode===37){
                    game.move('L');
                    this.steps_array.push('L');
                } // left
                else if(e.keyCode===39){
                    game.move('R');
                    this.steps_array.push('R');
                }//right
                if(game.isEqual(pre_state)) this.steps_array.pop();
                this.update({finished: this.finished, show_array: game.cur_state});
                const game_clone = game.clone();
                if(this.visited_state.get(game_clone.getKey())===undefined){
                    this.visited_state.set(game_clone.getKey() , {ref: game_clone , depth: this.visited_state.get(pre_state.getKey()).depth+1});
                }
                this.isFinished(game , '');
            };
        }
    }

    dfs(game){
        const steps = [game];
        this.visited_state.set(game.getKey() , {ref: game , depth: 0});
        while(steps.length!==0){
            const step = steps.pop();
            this.isFinished(step , `by using DFS :)`);
            this.checkLimit(game);
            if(this.finished) return;
            const children = step.getNextStates();
            while(children.length!==0){
                const child = children.pop();
                if(this.visited_state.get(child.getKey())===undefined){
                    this.visited_state.set(child.getKey() , {ref: game , depth: this.visited_state.get(step.getKey()).depth+1});
                    steps.push(child);
                }
            }
        }
    }

    bfs(game){
        const steps = [game];
        this.visited_state.set(game.getKey() , {ref: game , depth: 0});
        while(steps.length !== 0){
            const step = steps.shift();
            this.isFinished(step , `by using BFS :)`);
            this.checkLimit(game);
            if(this.finished) return;
            const children = step.getNextStates();
            children.forEach(child => {
                if(this.visited_state.get(child.getKey())===undefined){
                    this.visited_state.set(child.getKey() , {ref: child , depth: this.visited_state.get(step.getKey()).depth+1});
                    steps.push(child);
                }
            });
        }
    }

    UCS(game){
        const priority_queue =  new MinPriorityQueue(item => item.cost); //{state: game , cost: 0}
        priority_queue.enqueue({state: game , cost: 0});
        this.visited_state.set(game.getKey() , {ref: game , cost: 0 , depth: 0});
        while(!priority_queue.isEmpty()){
            this.checkLimit(game);
            if(this.finished) return;
            const step = priority_queue.dequeue();
            const children = step.state.getNextStates();
            children.forEach(child => {
                if(this.visited_state.get(child.getKey()) === undefined){
                    this.visited_state.set(child.getKey() , {ref: child , cost: step.cost+1 , depth: this.visited_state.get(step.state.getKey()).depth+1});
                    priority_queue.enqueue({state: child , cost: step.cost+1});
                }
                else{
                    const cur_visited = this.visited_state.get(child.getKey());
                    if(cur_visited.cost > step.cost+1){
                        cur_visited.ref = child;
                        cur_visited.cost = step.cost+1;
                        cur_visited.depth = this.visited_state.get(step.state.getKey()).depth+1;
                        priority_queue.enqueue({state: child , cost: step.cost+1});
                    }
                }
            });
        }
        this.visited_state.forEach(value => {
            if(value.ref.isFinal()){
                this.isFinished(value.ref , `by using UCS :)` , value.cost);
            }
        });
    }

    aStar(game){
        const priority_queue =  new PriorityQueue((a , b) => {
            return a.cost > b.cost ? true : a.cost < b.cost ? false : a.cost===b.cost ? (a.h >= b.h ? true : false) : false;
        }); //{state: game , cost: 0 , h: 0 , g: 0} 
        const h_game = this.calcHeuristic(game);
        priority_queue.enqueue({state: game , cost: h_game , g: 0 , h: h_game});
        this.visited_state.set(game.getKey() , {ref: game , cost: h_game , h: h_game , g: 0 , depth: 0});
        while(!priority_queue.isEmpty()){
            const step = priority_queue.dequeue();
            this.isFinished(step.state , `by using A* :)` , step.g);
            this.checkLimit(game);
            if(this.finished) return;
            const children = step.state.getNextStates();
            children.forEach(child => {
                if(this.visited_state.get(child.getKey()) === undefined){
                    const h_child = this.calcHeuristic(child);
                    this.visited_state.set(child.getKey() , {ref: child , cost: (step.g+1)+h_child , h: h_child , g: step.g+1 , depth: this.visited_state.get(step.state.getKey()).depth+1});
                    priority_queue.enqueue({state: child , cost: (step.g+1)+h_child , h: h_child , g: step.g+1});
                }
                else{
                    const cur_visited = this.visited_state.get(child.getKey());
                    if(cur_visited.g > step.g+1){
                        cur_visited.ref = child;
                        cur_visited.cost = step.g + 1 + cur_visited.h;
                        cur_visited.g = step.g + 1;
                        cur_visited.depth = this.visited_state.get(step.state.getKey()).depth+1
                        priority_queue.enqueue({state: child , cost: step.g+1+cur_visited.h , g: step.g+1 , h: cur_visited.h});
                    }
                }
            });
        }
    }

    getTreeDepth(){
        return [...this.visited_state.values()].reduce((max , cur) => Math.max(max , cur.depth) , 0);
    }

    getStepsToSolve(game){
        if(this.type===1) return;
        let cur_game = game;
        while(cur_game.parent!==undefined){
            this.steps_array.unshift(cur_game.parent.move);
            cur_game = cur_game.parent.ref;
        }
    }

    calcHeuristic(game){
        const index = new Map(); // [number , {box: {i , j} , target : {i , h}}]
        for(let i = 0; i < game.size.x; i++){
            for(let j = 0; j < game.size.y; j++){
                if(game.cur_state[i][j].target!==0){
                    const temp = game.cur_state[i][j].target;
                    if(index.get(temp)===undefined) index.set(temp , {'target' : {i , j}});
                    else index.get(temp).target = {i , j};
                }
                if(game.cur_state[i][j].box!==0){
                    const temp = game.cur_state[i][j].box;
                    if(index.get(temp)===undefined) index.set(temp , {'box' : {i , j}})
                    else index.get(temp).box = {i , j};
                }
            }
        }
        return [...index.values()].reduce((h1 , cur) => h1+(Math.abs(cur.box.i-cur.target.i)+Math.abs(cur.target.j-cur.box.j)) , 0);
    }

    checkLimit(game){
        const time = performance.now() - this.start_time;
        if(time > 20000 && this.type!==1){
            this.finished = true;
            this.update({
                finished: this.finished,
                show_array: game.cur_state,
                time: time,
                tree_depth: this.getTreeDepth(),
                visited_count: this.visited_state.size,
                msg: 'Time limit exceeded, can not solve using this algorithm',
                error: true,
            });
        }
    }

    isFinished(game , msg , cost){
        const time = performance.now() - this.start_time;
        if(game.isFinal()){
            this.finished = true;
            window.onkeydown = null; window.ontouchend = null; window.ontouchstart = null;
            this.getStepsToSolve(game);
            this.update({
                finished: this.finished,
                show_array: game.cur_state,
                time: time,
                steps_array: this.steps_array,
                visited_count: this.visited_state.size,
                msg: msg,
                cost: cost,
                tree_depth: this.getTreeDepth(),
            });
            return true;
        }
        return false;
    }
    
}

export default Logic;