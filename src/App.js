import Bar from './Bar'
import React from 'react';
import QGrid from './QGrid';
import Output from './Output';

class App extends React.Component {

  state={size:0,blocks:{}}

  onFormSub = (sz) => {
    let ele = []
    for(let i=0;i<sz;i++){
        let row = []
        for(let j=0;j<sz;j++){
            row.push(true);
        }
        ele.push(row);
    }
    let stateObj = {...ele}

    this.setState({size:sz,blocks:stateObj},()=>{
      console.log(this.state);      
    });
  }

  onQuery = (r,c) => {
    let sz = this.state.size;
    let ele = []
    for(let i=0;i<sz;i++){
      let row = []
      for(let j=0;j<sz;j++){
        if(i===r && j===c){
          row.push(!this.state.blocks[i][j])
        }
        else{
          row.push(this.state.blocks[i][j]);
        }
      }
      ele.push(row);
    }
    let stateObj = {...ele}
    this.setState({blocks:stateObj})
  }

  render(){
    return (
      <div className="ui container">
        <Bar onSub={this.onFormSub}/>
        <QGrid size={this.state.size} block={this.state.blocks} onUpdate={this.onQuery} />
        <Output size={this.state.size} block={this.state.blocks} />
      </div>
    );
  }
  
}

export default App;
