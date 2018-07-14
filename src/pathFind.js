

function pathFind(obj){
    var newObj = {}
    for (var v in obj){
        newObj[v]= obj[v]
        if (obj.hasOwnProperty(v)) {
            if (typeof obj[v] == "object") {
                pathFind(obj[v])
            }   
        }
        
    }
return newObj[v]

}


module.exports = {pathFind}

