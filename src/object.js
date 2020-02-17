import React,{Component} from "react";
import "./object.css";

class Object extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            price : this.props.price,
            amount : 0,
            purchased : 0,
            generated : 0,
            clicked_button : false
        };

    }

    giveApples = e =>{

        this.setState( { amount : this.state.amount + (this.state.purchased * this.props.purchase_increment) });
        setTimeout(() =>{
            this.giveApples();
        }, 1000);
    }

    updateObject = e =>{
        

        if (this.state.price <= this.state.amount){
            this.setState({ amount : this.state.amount - this.state.price  ,
                            price : Math.floor(this.state.price * 1.5), 
                            purchased : this.state.purchased + 1 
                        });
        }

        if ( !this.state.clicked_button){

            setTimeout(() => {
                this.giveApples();
            }, 1000);
            this.setState({clicked_button : true});
        }
        

    }

    imageClick = e =>{

        this.setState({amount : this.state.amount + 1, generated : this.state.generated + 1});

    }
    
    render(){
        return(
            
            <div align = "center" className= "object">
                <h1 ><u> {this.props.name} </u></h1>
                <b>Amount: </b>    {this.state.amount}
                <p><b>Purchased:</b>    {this.state.purchased}</p>
                <p > <b>Price: </b>    {this.state.price}</p>
                <p ><b>Description: </b>    {this.props.description}</p>
                <p ><b>Generating per second: </b>    {this.state.purchased * this.props.purchase_increment}</p><br></br>
                <img src ={this.props.img} onClick = {this.imageClick} className = "imgObject"/>
                <p><button onClick = {this.updateObject}>Purchase</button></p>
                
            </div>


        )
    }
}

export default Object;