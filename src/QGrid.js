import React from 'react';

// class Block extends React.Component{
    
//     render(){
//         return (<div key={this.props.ke} onClick={(e) => {}} style=
//         {{backgroundColor:'greenyellow' ,borderRadius:'5px', margin:'1px', display:'inline-block', width:'60px', height:'60px'}}
//         >{}</div>);
//     }
// }

class QGrid extends React.Component{
    
    func = (r) => {
        const val = this.props.size;
        const items = [];
        for (let j=0; j<val;j++){
            var row = r.toString()
            var col = j.toString()
            var k = row+'_'+col
            let bgCol = 'greenyellow'
            if(val>0){
                let v = this.props.block[r][j]
                if(v===false){
                    bgCol = 'red'
                }
            }
            // items.push(<Block key={k} ke={k} onBlock={this.setBlock}/>);
            items.push(<div key={k} onClick={(e) => {this.props.onUpdate(r,j)}} style=
            {{backgroundColor:bgCol ,borderRadius:'5px', margin:'-9px 1px', display:'inline-block', width:'60px', height:'60px'}}
            >{}</div>)
        }
        return <div key={r} style={{margin:'0px', padding:'0px', display:'flex'}}>{items}</div>
    }

    grid = () => {
        console.log(this.props.block);
        const value = this.props.size;
        console.log(value);
        const items=[];
        for (let i=0; i<value;i++){
            // console.log(i);
            items.push(<div key={i} style=
                {{backgroundColor:'greenyellow' ,borderRadius:'5px', margin:'1px', display:'inline', width:'60px', height:'60px'}}
             >{this.func(i)}</div>)
        }
        // console.log(this.state);
        return <div key="grid" style={{}}>{items}</div>
    }

    render(){
        return(
            <div className="ui container">
                {this.grid()}
            </div>
        );
    }
}

export default QGrid;