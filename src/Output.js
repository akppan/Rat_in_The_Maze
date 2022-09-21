import React from 'react';
import sol from './solution';

class Grid extends React.Component{

    func = (r,p) => {
        const val = this.props.size;
        const items = [];
        for (let j=0; j<val;j++){
            var row = r.toString()
            var col = j.toString()
            var k = row+'_'+col
            let bgCol = 'greenyellow'
            if(val>0){
                let v = this.props.que[r][j]
                if(v===false){
                    bgCol = 'red'
                }
                let inAns=false;
                for(let q=0;q<this.props.ans[p].length;q++){
                    console.log(this.props.ans[p][q]);
                    let currBlock = this.props.ans[p][q]
                    if(currBlock.toString()===[r, j].toString()){
                        inAns=true
                    }
                }
                if(inAns===true){
                    bgCol = 'blue';
                }
            }
            // items.push(<Block key={k} ke={k} onBlock={this.setBlock}/>);
            items.push(<div key={k} style=
            {{position:'relative'  ,backgroundColor:bgCol ,borderRadius:'5px', margin:'-9px 1px', display:'inline', width:'60px', height:'60px'}}
            >{}</div>)
            items.push()
        }
        return <div key={r} style={{marginTop:'0px', padding:'0px', display:'flex'}}>{items}</div>
    }

    grids = () => {
        var ops = []
        for(let j=0;j<this.props.ans.length;j++){
            // console.log(this.props.ans[i])
            console.log(this.props.que);
            const value = this.props.size;
            console.log(value);
            const items=[];
            for (let i=0; i<value;i++){
                // console.log(i);
                items.push(<div key={i} style=
                    {{ position:'relative', margin:'1px', display:'inline'}}
                >{this.func(i,j)}</div>)
            }
            // console.log(this.state);
            let ke = 'grid' + j.toString();
            ops.push(<div key={ke} style={{marginLeft:'20px'}}>{items}</div>)
        }
        return ops;
    }

    render(){
        return(
            <div style={{position:'relative' ,display:'inline-flex', flexDirection:'row', width:'100%', flexFlow:'wrap'}}>
                {this.grids()}
            </div>
        )
    }
}

class Output extends React.Component{

    outGrids = () => {
        const n = this.props.size;
        const arr = this.props.block;
        var paths = []
        if(n>0){
            paths = sol(arr,n);
        }
        var val = ""
        if(paths.length>10){
            val = `There are ${paths.length} number of paths`;
        }
        return (
            <div style={{marginTop:'20px', display:'inline'}}>
                <div>{val}</div>
                <div style={{position:'relative',marginTop:'10px',display:'flex', flexDirection:'row', float:'left'}}><Grid size={this.props.size} que={this.props.block} ans={paths.slice(0,10)} /></div>
            </div>
        )
    }

    render(){
        return(
            <div style={{display:'flex', flexDirection:'row'}}>
                {this.outGrids()}
            </div>
        );
    }
}

export default Output;