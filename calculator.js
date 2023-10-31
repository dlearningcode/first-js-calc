export default function calculatorOps() {
    let result=""
    let display=document.getElementById("display")
    
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
    const dividedBy=document.getElementById("divide")
    const multiplyBy=document.getElementById("multiply")
    const subtract=document.getElementById("subtract")
    const plus=document.getElementById("add")
    const equals=document.getElementById("equals")
    const clear=document.getElementById("clear")

    function forDisplay(){
        const displayResult = new Function(`return ${result}`)()
        console.log(displayResult)
        display.innerHTML= displayResult
    }
    

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

    dividedBy.addEventListener("click", function(){
        result+="/"
        console.log(result)
        display.innerHTML=result
        }
    )

    multiplyBy.addEventListener("click", function(){
        result+="*"
        console.log(result)
        display.innerHTML=result
        }
    )

    subtract.addEventListener("click", function(){
        result+="-"
        console.log(result)
        display.innerHTML=result
        }
    )

    plus.addEventListener("click", function(){
        result+="+"
        console.log(result)
        display.innerHTML=result
        }
    )

    equals.addEventListener("click", forDisplay())

    // eval is returning the string, not the result of the operation

    clear.addEventListener("click", function(){
        result=""
        console.log(result)
        display.innerHTML=result
        }
    )

}