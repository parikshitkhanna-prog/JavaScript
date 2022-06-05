// functions inside functions...

function example(){
    
    //function expression
    const mul = function(num1,num2){
        return num1*num2;
    }

    //function declaration
    function indexPosChar(str){
        for(let i=0;i<str.length;i++){
            console.log(`${i} -> ${str[i]}`);
        }
    }

    //arrow function
    let myName = (str) => `YOUR NAME IS ${str}`;

    console.log(mul(7,7));
    indexPosChar("Parikshit");
    console.log(myName("Parikshit Khanna".toUpperCase()));
}

example();