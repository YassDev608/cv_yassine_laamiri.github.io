const numberButtons = document.getElementsByClassName("number")
const operationButtons = document.getElementsByClassName("operation");
const equalsButton = document.getElementById('equals');
const deleateButton = document.getElementById('delete')
const clearAllButton = document.getElementById('all-clear');
const previousOperandElt = document.getElementById('previous-operand');
const currentOperandElt = document.getElementById('current-operand');

class Calculator {
    constructor(previousOperandElt,currentOperandElt) {
        this.previousOperandElt = previousOperandElt;
        this.currentOperandElt = currentOperandElt;
    }

    clear() {
        this.currentOperandElt.innerHTML = "";
        this.previousOperandElt.innerHTML = "";
    }

    delete() {
        var oprd = this.currentOperandElt.innerHTML;
        var n = oprd.length;
        if(oprd.length>0) {
            this.currentOperandElt.innerHTML = oprd.slice(0,n-1)
        }
    }

    appendNumber(number) {
        if(!(this.currentOperandElt.innerHTML.includes(".") && number === ".")) {
            this.currentOperandElt.innerHTML += number;
        }
    }

    choseOperation(operation) {
        switch(operation) {
            case "×":
                return "*";
            case "+":
                return "+"
            case "-":
                return "-"
            default:
                return "/"
        }
    }

    compute() {
        var previous = this.previousOperandElt.innerHTML;
        let output;
        if(previous==""){
            output = this.currentOperandElt.innerHTML;
            return output;
        }
        output = eval(previous+this.currentOperandElt.innerHTML)
        return output;
    }

    updateDisplay(operation,value) {
        var op = this.choseOperation(operation)
        this.previousOperandElt.innerHTML = value.toString() + op;     
        this.currentOperandElt.innerHTML = "";       
    }

    showResult() {
        this.currentOperandElt.innerHTML = eval(this.previousOperandElt.innerHTML+this.currentOperandElt.innerHTML);
        this.previousOperandElt.innerHTML = "";
    }
}

const calculator = new Calculator(previousOperandElt,currentOperandElt);

for(let button of numberButtons) {
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerHTML);
    })
}

clearAllButton.addEventListener('click',()=>{
    calculator.clear();
})

deleateButton.addEventListener('click',()=>{
    calculator.delete();
})

equalsButton.addEventListener('click',()=>{
    calculator.showResult();
})

for(let button of operationButtons){
    button.addEventListener('click',()=>{
        let value = calculator.compute()
        calculator.updateDisplay(button.innerHTML,value);
    })
}