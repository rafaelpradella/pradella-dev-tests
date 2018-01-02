module.exports = {
    sum: function(a,b){
        if(!a || !b || typeof a !== "number" || typeof b !== "number")
            return false
        return a + b;
    } 
}