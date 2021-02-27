import React, {Component} from 'react';

class HighScore extends Component{
    
    render(){
        if(this.props.premio){
            return(
                // alternative syntax for onClick function :
                // onClick= {(e) => this.props.onReset(e)}
                <div id="premio">
                    <h1 class="center">Has clickeado 10 veces.
                    <br/>
                    Has ganado un premio!</h1>
                    <button class="btn btn-reset" onClick= {this.props.onReset}>Reset</button>  
                </div>
            )
        }else{
            return null; //method has to return something 
        }
    }

}

export default HighScore;