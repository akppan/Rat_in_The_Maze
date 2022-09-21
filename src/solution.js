
function isValid(i,j,n,vis,arr){
    if(i>=0 && i<n && j>=0 && j<n && arr[i][j]===true && vis[i][j]===false){
        return true
    }
    return false
}

function recur(n,mat,path,vis,posi,posj,paths){
    let i = path[path.length-1][0]
    let j = path[path.length-1][1]
    if(path[path.length-1][0]===n-1 && path[path.length-1][1]===n-1){
        paths.push([...path])
        return
    }
    for(let k=0;k<4;k++){
        if(isValid(i+posi[k],j+posj[k],n,vis,mat)){
            path.push([i+posi[k],j+posj[k]])
            vis[i+posi[k]][j+posj[k]] = true
            recur(n,mat,path,vis,posi,posj,paths)
            path.pop()
            vis[i+posi[k]][j+posj[k]] = false
        }
    }
    return
}

function sol(arr,n){
    var paths = []
    const posi = [-1,0,1,0]
    const posj = [0,1,0,-1]
    
    if(arr[0][0]===false){
        return []
    }

    var vis = []
    for(let i=0;i<n;i++){
        var s = []
        for(let j=0;j<n;j++){
            s.push(false)
        }
        vis.push(s)
    }
    vis[0][0] = true
    recur(n,arr,[[0,0]],vis,posi,posj,paths)
    // console.log(paths);
    return paths;
}

export default sol;
// arr = [[true,true,true,true],[true,true,true,false],[true,false,true,true],[false,false,true,true]]
// n = 4
// sol(arr,n)