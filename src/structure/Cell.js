class Cell{
    constructor(type , target , box){
        this.out = 0; // [0-1]
        this.empty = 0; // [0-1]
        this.wall = 0; // [0-1]
        this.target = target; // [0-5]
        this.box = box; // [0-5]
        if(type===1) this.out = 1;
        else if(type===2) this.empty = 1;
        else if(type===3) this.wall = 1;
    }

    getValue(){
        let value = '';
        if(this.out===1) value = 'xx';
        else if(this.empty===1) value = '..';
        else if(this.wall===1) value = '##########';
        if(this.target!==0 && this.box!==0) value = `(target${this.target} box${this.box})`;
        else if(this.box!==0) value = `box${this.box}`;
        else if(this.target!==0) value = `target${this.target}`;
        while(value.length < 15) value+=' ';
        return value;
    }

    canMove(){
        if(this.out===1 || this.wall===1 || this.box!==0) return false;
        return true;
    }

    copyCell(value){
        this.out = value.out;
        this.empty = value.empty;
        this.wall = value.wall;
        this.target = value.target; 
        this.box = value.box;
        return this;
    }

    isEqual(value){
        if(this.out===value.out && this.empty===value.empty && this.wall===value.wall && this.target===value.target && this.box===value.box) return true;
        return false;
    }

    //              from      to
    static moveCell(first , second){
        second.empty = 0; second.box = first.box;
        first.box = 0;
        if(first.target===0) first.empty = 1;
    }
}

export default Cell;