import React from 'react';
import ReactDOM from 'react-dom';
import Child from './child';
import test from './function';
class App extends React.PureComponent{

    constructor(props) {
        super(props);
        this.state = {
            foo:1,
            bar:3,
            clicked:0
        };
    }
    render(){
        const {clicked} = this.state;
        return (<div>
            React JS !
            <button type='button' onClick ={
                ()=> this.setState({clicked: clicked + 1})
            }>{`Clicked ${clicked}`}</button>
            <Child/>
            {test()}
        </div>);
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
