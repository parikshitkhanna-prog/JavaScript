// lexical scope or lexical environment

const var1 = "hello";
let var2 = 69;

const myFunc = () => {

    var var3 = `I LOVE ${var2}`;

    function newFunc(){
        let var2 = `I LOVE ${var1}`;
        console.log(var2);
        const nayaFunc = () => console.log(var1);
        nayaFunc();
    }

    const onemoreFunc = function(){
        console.log(var2);
        newFunc();
    }

    console.log(var3);
    onemoreFunc();
}

myFunc();