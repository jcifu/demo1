import React, {Component} from 'react';
import HighScore from './HighScore';

class Aplicacion extends Component{
    constructor(props){
        super(props);
        // props and state will be javascript object or undefined
        this.state={
            count:0,
            premio: false
        }
    }
    /*
        function (a){
        return a + 100;
    
    equals
        (a) => {
        return a + 100;
        }
    equals
        a => a + 100;

    */

    handleClick = () => {
        console.log("Click!");
        
        // setState takes an object as a parameter and an optional callback
        this.setState({count: this.state.count+1}) 
        /*if (this.state.count>10 && this.state.count!=this.state.count){
            this.setState({premio:true}); 
        }
        */
    }

    componentDidUpdate(props, state){
        
        if(this.state.count >= 10 && this.state.count != state.count && !this.state.premio){
            console.log("Click número 10 alcanzado");
            this.setState({premio: true});
        }
    }
    /*Creation of a function for reset count to 0 
    */
    resetCount = (e) =>{
        console.log("Evento Reset:  ", e);
        this.setState({
            count: 0,
            premio: false
        });
        
    }

    render(){
        let {count}=this.state; 
        /* class Highscore can be coded as <Highscore/> due 
        it doesnt have child elements inside it
        Also can use as <HighScore> argument </HighScore>
        */ 
        return( 
            // javascript within a return method must be wrapped in curly braces { }
            
            <div>
                <h1>Has clickeado el boton: {count} veces</h1>                       
                    <HighScore
                        /* creation of a property named premio
                        each time a variable property must pass in as a property
                        it is wrapped in curly braces {}
                        */
                        premio={this.state.premio} 
                        
                        /* alternative syntax for argument function onReset:
                        onReset={(e)=> this.resetCount(e)} */
                       onReset={this.resetCount} // no function parameter specified
                    />
                <span> 
                    <button onClick={(e) => {this.handleClick()}}>Clickéame</button>
                </span>
            </div>
       );
    }

    // https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html

    // OnClick capture the event of a button click 
    // and send it over to function handleClick happens /
    

    UNSAFE_componentWillMount(props, state){
     
    }

    componentDidMount(props, state){
        console.log("Montado con ", props, state);
    }

    //  Gets called before it mounts because it will 
    // recieve properties and its changes 
    UNSAFE_componentWillReceiveProps(props){

    }
    // Update properties and state so you could 
    // test later. It will recieve new properties 
    // to return these as new props
    UNSAFE_componentWillUpdate(props, state){
        /* Example:
        if(this.props.name!==props.name){
        // do something      
         }
         */
    }

    //Safer way to handle component updates
    // componentDidUpdate gets triggered when a re-render
    //happens as well. It use current properties   
   
    
}
//para cada vez que se necesite importar este archivo desde otro se utiliza
// la sintaxis: export default nombre_aplicacion;  
export default Aplicacion;