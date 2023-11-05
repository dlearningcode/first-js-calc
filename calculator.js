let result=""
let display=document.getElementById("display")
let operator=""
let operand=0

const zeroKey=document.getElementById("zero")
const oneKey=document.getElementById("one")
const twoKey=document.getElementById("two")
const threeKey=document.getElementById("three")
const fourKey=document.getElementById("four")
const fiveKey=document.getElementById("five")
const sixKey=document.getElementById("six")
const sevenKey=document.getElementById("seven")
const eightKey=document.getElementById("eight")
const nineKey=document.getElementById("nine")
const dividedByBtn=document.getElementById("divide")
const multiplyByBtn=document.getElementById("multiply")
const subtractBtn=document.getElementById("subtract")
const plusBtn=document.getElementById("add")
const equalsBtn=document.getElementById("equals")
const clearBtn=document.getElementById("clear") 

export default function calculatorOps() {
    console.log("oneKey:", oneKey)
    console.log("dividedByBtn:", dividedByBtn)
    console.log("clearBtn:", clearBtn)
    
    zeroKey.addEventListener("click", function(){
        result+="0"
        console.log(result)
        display.innerHTML=result
        }
    )

    oneKey.addEventListener("click", function(){
        result+="1"
        console.log(result)
        display.innerHTML=result
        }
    )

    twoKey.addEventListener("click", function(){
        result+="2"
        console.log(result)
        display.innerHTML=result
        }
    )

    threeKey.addEventListener("click", function(){
        result+="3"
        console.log(result)
        display.innerHTML=result
        }
    )

    fourKey.addEventListener("click", function(){
        result+="4"
        console.log(result)
        display.innerHTML=result
        }
    )

    fiveKey.addEventListener("click", function(){
        result+="5"
        console.log(result)
        display.innerHTML=result
        }
    )

    sixKey.addEventListener("click", function(){
        result+="6"
        console.log(result)
        display.innerHTML=result
        }
    )

    sevenKey.addEventListener("click", function(){
        result+="7"
        console.log(result)
        display.innerHTML=result
        }
    )

    eightKey.addEventListener("click", function(){
        result+="8"
        console.log(result)
        display.innerHTML=result
        }
    )

    nineKey.addEventListener("click", function(){
        result+="9"
        console.log(result)
        display.innerHTML=result
        }
    )

    dividedByBtn.addEventListener("click", () => {myCalc("dividedBy")})
    multiplyByBtn.addEventListener("click", () => {myCalc("times")})
    subtractBtn.addEventListener("click", () => {myCalc("minus")})
    plusBtn.addEventListener("click", () => {myCalc("plus")})
    equalsBtn.addEventListener("click", equalsResult)
    clearBtn.addEventListener("click", clearCalculator)

}

function myCalc(calcOperation){
    console.log('operation:', calcOperation)

    // if (isNaN(result)){return}

    if (operator===""){
        operand=result
        operator=calcOperation
        console.log(operand)
        console.log(operator)
        result=""
        display.innerHTML=result
    } else {
        switch (operator) {
            case "plus":
                operator="plus"
                let middleMath=Number(result)+Number(operand)
                console.log(middleMath)
                result=middleMath.toString()
                operator=calcOperation
                console.log(operator)
                display.innerHTML=result
                break
            case "minus":
                operator="minus"
                result=Number(result)-Number(operand)
                display.innerHTML=result
                break
            case "times":
                operator="times"
                result=Number(result)*Number(operand)
                display.innerHTML=result
                break
            case "dividedBy":
                operator="dividedBy"
                result=Number(result)/Number(operand)
                display.innerHTML=result
                break
            default:
                return result="error"
        }
    }
}

function equalsResult(){
    switch (operator) {
        case "plus":
            operator="plus"
            let middleMath=Number(result)+Number(operand)
            console.log(middleMath)
            result=middleMath.toString()
            console.log(operator)
            display.innerHTML=result
            result="0"
            operand=0
            operator=""
            break
        case "minus":
            operator="minus"
            result=Number(result)-Number(operand)
            display.innerHTML=result
            break
        case "times":
            operator="times"
            result=Number(result)*Number(operand)
            display.innerHTML=result
            break
        case "dividedBy":
            operator="dividedBy"
            result=Number(result)/Number(operand)
            display.innerHTML=result
            break
        default:
            return result="error"
    }
}

function clearCalculator(){
    result=""
    operand=0
    operator=""
    display.innerHTML=result
}