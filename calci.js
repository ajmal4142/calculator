const calci={
    symbols: ['+','-','/','*','='],
    
    memmory:[],

    screenMemmory:'',

    btns: function(numb){
        document.getElementById("display").innerHTML += numb;
        this.screenMemmory += ''+numb;
        document.getElementById("display").innerHTML = this.screenMemmory;
        console.log("this",this.screenMemmory)
    },

    btnsym: function(symbol){
        document.getElementById("display").innerHTML += symbol;
        this.memmory.push(this.screenMemmory);
        this.memmory.push(symbol);
        this.screenMemmory='';
        console.log("screen memmory now",this.screenMemmory)
        console.log("memmory",this.memmory)
    },

    clear : function(){
        this.memmory = [];
        this.screenMemmory = '';
        document.getElementById("display").innerHTML = "";
        console.log("cleared")
    }
}