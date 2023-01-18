console.log("set");
let answer=0,DisplayScreen='',symbol = 'd',ini=0,firstval=0;

function helper(num1,num2,operator){
  let output = 0;
 
  try {

    switch(operator) {
      case '+':
        output = num1 + num2
        break;

      case '*':
        output = num1* num2
        break;

      case '-':
        output = num1 - num2
        break;

     case '/': 
        if (b === 0) {
          throw "Can't divide by 0!"
        } else {
          output = num1 / num2
        }
        break;
    }
  }
  catch(e) {
    console.log("There's an error: ", e)
  }

  return output;
}

function cal(num){
  console.log("numss");
  console.log(num);
    let val1=0,val2=0,flag=true;
    for(let i=0;i<num.length;i++){
    
      if(num[i]=="+" || num[i]=="-" || num[i]=="*" || num[i]=="/"){
        symbol=num[i];
        flag=false;
      }else{
      if(flag){
        val1= val1 + num[i];
      }else{
        val2 = val2 + num[i];
      }
      }


    }
    console.log("values");
    console.log(val1,val2,symbol);
    return helper(+val1,+val2,symbol);
    


}

function storeVal(EnteredValue){
  if(EnteredValue=='C'){
    DisplayScreen=0;
    document.getElementById("output").innerHTML = DisplayScreen;
    answer=0;
  }else
  if(EnteredValue=='='){
    answer=cal(DisplayScreen);
    document.getElementById("output").innerHTML = answer;
    DisplayScreen=answer;
    console.log(answer);
  }else{
    if(DisplayScreen=='0'){
      DisplayScreen='' + EnteredValue;
    }else{
    DisplayScreen = ''+ DisplayScreen + EnteredValue;
  }
  document.getElementById("output").innerHTML = DisplayScreen;
  console.log(DisplayScreen);
  }

}