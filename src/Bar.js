import React from 'react';

class Bar extends React.Component{
    state = {size:0}

    onFormSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.size);
        this.props.onSub(this.state.size);
    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Select the size</label>
                        <input type="number" min="0" value={this.state.size} onChange={(e) => this.setState({size:e.target.value})} />
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default Bar;