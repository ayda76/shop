import { Component } from "react";

class ErrorBoundary extends Component{
   
constructor(){
    super();
    //state has to be an obj and you can assign all the states to this one
    this.state={hasError:false}

}
 //this function is for catching errors
 componentDidCatch(){
    this.setState({hasError:true}) ;   
}
    render(){
        if(this.state.hasError){
            return <p>some thing went wrong!</p>

        }
        return this.props.children;
    }
}
export default ErrorBoundary;