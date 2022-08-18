
  const symbols= ['+','-','x','%'];
  let numb,results,memmory;
 function btns(numbers){
  numb=document.getElementById(numbers).innerHTML
  document.getElementById("display").innerHTML += numb;
  numb="";
  console.log("numb",numb)
}

 function btnsym(symbol){
  if (numb!==" + "&&numb!==" - "&&numb!==" x "&&numb!==" % "){
      numb=document.getElementById(symbol).innerHTML;
  document.getElementById("display").innerHTML += numb;
  console.log("numb2",numb)
  }
 }
function clearing(){
     numb='';
     document.getElementById("display").innerHTML = "";
     
 }
function result(){
  value=document.getElementById("display").innerHTML;
  console.log("values",value)
  memmory=value.split(" ");
     
     console.log('memm',memmory)

     let len=memmory.length;
     for(i=0;i<len;i++){
         if(memmory[i]===symbols[0]){
            results =parseFloat(memmory[i-1]) + parseFloat(memmory[i+1]);
            memmory[i+1]=results;
            document.getElementById("display").innerHTML = results;
            console.log("result",results)
            
         }
         else if(memmory[i]===symbols[1]){
             results = memmory[i-1]-memmory[i+1];
             memmory[i+1]=results;
             document.getElementById("display").innerHTML = results;
             screenMemmory=results;
             
          }
          else if(memmory[i]===symbols[2]){
             results = memmory[i-1]*memmory[i+1];
            memmory[i+1]=results;
             document.getElementById("display").innerHTML = results;
             screenMemmory=results;
             
          }
          else if(memmory[i]===symbols[3]){
             results = memmory[i-1]/memmory[i+1];
             memmory[i+1]=results;
             document.getElementById("display").innerHTML = results;
             screenMemmory=results;
          }

          
     }
 }



 