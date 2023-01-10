console.log("set");
let answer=0,DisplayScreen='',symbol = '+';





function storeVal(EnteredValue){
    if(+EnteredValue){
        DisplayScreen = ''+ DisplayScreen + EnteredValue;
        document.getElementById("output").innerHTML = DisplayScreen;
        let amount = EnteredValue;
        console.log(amount);

        switch (symbol) {
            case '+':
                answer=answer+ +EnteredValue;
              break;
            case "-":
                answer=answer- +EnteredValue;
              break;
            case '*':
                answer=answer* +EnteredValue;
              break;
            case '/':
                answer=answer/ +EnteredValue;
              break;    
            default:
                console.log( "Sw" );
          }


    }else{
       
        DisplayScreen = ''+DisplayScreen+EnteredValue;
        
        document.getElementById("output").innerHTML = DisplayScreen;
       
       
       console.log(EnteredValue);
        switch (EnteredValue) {
            case '+':
                symbol = '+';
              break;
            case "-":
                symbol = '-';
              break;
            case "*":
                symbol = '*';
              break;
            case "/":
                symbol = '/';
              break;
            case "C":
                symbol = '+';
                answer=0;
                document.getElementById("output").innerHTML = 0;
                DisplayScreen='';
              break;
            case '=':
                console.log(answer);
                DisplayScreen = answer;
                document.getElementById("output").innerHTML = answer;
                break;
            default:
                console.log( "try again" );
          }
    }
    
    
}
