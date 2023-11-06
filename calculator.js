let result=""
let display=document.getElementById("display")
let operator=""
let saveResult=0
let middleMath=0
let resultCheck

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
const dotBtn=document.getElementById("dot")
const signBtn=document.getElementById("sign")
const deleteBtn=document.getElementById("delete")

export default function calculatorOps() {
    
    zeroKey.addEventListener("click", () => {addInput("0")})
    oneKey.addEventListener("click", () => {addInput("1")})
    twoKey.addEventListener("click", () => {addInput("2")})
    threeKey.addEventListener("click", () => {addInput("3")})
    fourKey.addEventListener("click", () => {addInput("4")})
    fiveKey.addEventListener("click", () => {addInput("5")})
    sixKey.addEventListener("click", () => {addInput("6")})
    sevenKey.addEventListener("click", () => {addInput("7")})
    eightKey.addEventListener("click", () => {addInput("8")})
    nineKey.addEventListener("click", () => {addInput("9")})
    dotBtn.addEventListener("click", addDot)

    dividedByBtn.addEventListener("click", () => {myCalc("dividedBy", false)})
    multiplyByBtn.addEventListener("click", () => {myCalc("times", false)})
    subtractBtn.addEventListener("click", () => {myCalc("minus", false)})
    plusBtn.addEventListener("click", () => {myCalc("plus", false)})
    equalsBtn.addEventListener("click", () => {myCalc(operator, true)}) // equalsResult)
    clearBtn.addEventListener("click", clearCalculator)
    deleteBtn.addEventListener("click", deleteLast)
    signBtn.addEventListener("click", toggleSign)

}

function addInput (input){
    if (result=="0"){
        result=input
    } else if (result!="0" && result!=saveResult) {
        result+=input
    } else {
        saveResult=result
        result=input
    }
    console.log(result)
    display.innerHTML=result
}

function addDot(){
    resultCheck=result.toString()

    if (resultCheck.includes(".") && result != saveResult){ return }

    if (result=="0"){
        result="."
    } else if (result!="0" && result!=saveResult) {
        result+="."
    } else {
        saveResult=result
        result="."
    }
    console.log(result)
    display.innerHTML=result
}

function toggleSign(){
    resultCheck=result.toString()

    if (resultCheck.includes("-")){
        result=resultCheck.replace("-","")
    } else {
        result="-"+resultCheck
    }
    display.innerHTML=result
}

function deleteLast(){
    if (result.length==1){
        result="0"
    } else {
        result=result.slice(0,-1)
    }
    display.innerHTML=result
}

function myCalc(calcOperation, isEquals){
    console.log('operation:', calcOperation)

    // Check if result is a number
    if (isNaN(Number(result))){return}

    if (operator===""){ // First time
        saveResult=result // Take the result and save it
        operator=calcOperation
        display.innerHTML=result
    } else { // Additional times
        switch (operator) { // Base calculation on previous operator
            case "plus":
                operator="plus"
                middleMath=Number(saveResult)+Number(result)
                break
            case "minus":
                operator="minus"
                middleMath=Number(saveResult)-Number(result)
                break
            case "times":
                middleMath=Number(saveResult)*Number(result)
                break
            case "dividedBy":
                middleMath=Number(saveResult)/Number(result)
                break
            default:
                return result="error"
        }
        result=middleMath.toString()
        if (isEquals){            
            display.innerHTML=result
            saveResult=result
            operator=""
            return
        } else {
        operator=calcOperation
        saveResult=result
        display.innerHTML=result
        }
    }
}

function clearCalculator(){
    result=0
    saveResult=0
    operator=""
    display.innerHTML=result
}