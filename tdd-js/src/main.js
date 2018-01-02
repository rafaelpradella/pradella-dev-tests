module.exports = {
    
    sum: function(a,b){
        return (!a || !b || typeof a !== "number" || typeof b !== "number") ? false : a + b;
    }, 

    sub: function(a,b){
        return (!a || !b || typeof a !== "number" || typeof b !== "number") ? false : a - b;
    },

    mult: function(a,b){
        return (!a || !b || typeof a !== "number" || typeof b !== "number") ? false : a * b;
    }, 

    div: function(a,b){
        if( b === 0 )
            return "Please, don´t divide by zero. For our safety as human race!"

        return (!a || !b || typeof a !== "number" || typeof b !== "number") ? false : a / b;
    },
}