const calci={
    symbols: ['+','-','*','/'],
    
    memmory:[],

    screenMemmory:'',

    btns: function(numb){
        document.getElementById("display").innerHTML += numb;
        this.screenMemmory += ''+numb;
        document.getElementById("display").innerHTML = this.screenMemmory;
        
    },

    btnsym: function(symbol){
        document.getElementById("display").innerHTML += symbol;
        this.memmory.push(this.screenMemmory);
        this.memmory.push(symbol);
        this.screenMemmory='';
        
    },

    clear : function(){
        this.memmory = [];
        this.screenMemmory = '';
        document.getElementById("display").innerHTML = "";
        
    },
    result : function(){
        this.memmory.push(this.screenMemmory);
        let len=this.memmory.length;
        for(i=0;i<len;i++){
            if(this.memmory[i]===this.symbols[0]){
               let results =Number(this.memmory[i-1]) + Number(this.memmory[i+1]);
               document.getElementById("display").innerHTML = results;
               this.screenMemmory=results;
               this.memmory.push(results);
            }
            else if(this.memmory[i]===this.symbols[1]){
                let results = this.memmory[i-1]-this.memmory[i+1];
                document.getElementById("display").innerHTML = results;
                this.screenMemmory=results;
                this.memmory.push(results);
             }
             else if(this.memmory[i]===this.symbols[2]){
                let results = this.memmory[i-1]*this.memmory[i+1];
                document.getElementById("display").innerHTML = results;
                this.screenMemmory=results;
                this.memmory.push(results);
             }
             else if(this.memmory[i]===this.symbols[3]){
                let results = this.memmory[i-1]/this.memmory[i+1];
                document.getElementById("display").innerHTML = results;
                this.screenMemmory=results;
                this.memmory.push(results);
             }
             
        }
    }
}