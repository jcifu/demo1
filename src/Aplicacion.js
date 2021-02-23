import React, {Component} from 'react';

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

    render(){
        let {count}=this.state; 

        return( 
            <div>
                <h1>Has clickeado el boton: {count} veces</h1>   
                    {(this.state.premio) ?
                    <h1>Has clickeado 10 veces Has ganado un premio!</h1>
                    : null
                    }
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