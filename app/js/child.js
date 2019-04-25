import React from 'react';

class Child extends React.PureComponent{
    constructor(props){
        super(props);
        this.state={
            value:0
        };
    }
    render(){
        const {value} = this.state;
        return (
            <div>
                <button type="button" onClick={
                    ()=> this.setState({value:value+1})
                }> Increase!</button>
                {`Child value ${value}`}
            </div>
        );
    }
}
export default Child;