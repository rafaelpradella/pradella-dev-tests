const Calc = {
    
    isValidParameters: function(a,b){
        return (a && b && typeof a === "number" && typeof b === "number") ? true : false;
    },
    
    sum: function(a,b){
        return (this.isValidParameters(a,b)) ? a + b : false;
    }, 

    sub: function(a,b){
        return (this.isValidParameters(a,b)) ? a - b : false;
    },

    mult: function(a,b){
        return (this.isValidParameters(a,b)) ? a * b : false;
    }, 

    div: function(a,b){
        if( b === 0 ) return "Please, don´t divide by zero. For our safety as human race!"
        return (this.isValidParameters(a,b)) ? a / b : false;
    }
}

module.exports = Calc;