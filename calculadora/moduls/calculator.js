const screen = document.getElementById("display"),
      keys = document.getElementById("keys")  ;

      screen.textContent = "0";
      let operationStatus = false;
      let number1;
      let typeOperation;

      const calculator = () => {
        if(!keys) return
        keys.addEventListener("click", (e)=>{
            const t = e.target,
                  d = t.dataset

                  // console.log(t.textContent)
                  // console.log(d.math)
                  
            
                  if(d.number) writeScreen(d.number)

                  if(d.math) getOperation(t, d.math)

                  if(d.operation) runOperation(d.operation)
        })
      }

      const writeScreen = (d) => {
        if(screen.textContent.includes(".") && d === ".") return;
       screen.textContent === "0" || operationStatus === true
       ? screen.textContent = d
       : screen.textContent += d
       operationStatus = false
       
      }

      const getOperation = (t, d) => {
        operationStatus = true
         number1 = Number(screen.textContent)
         typeOperation = d
        screen.textContent = t.textContent
        // return {number1, typeOperation}
        // console.log(typeOperation)
        

      }

      const runOperation = (d) => {
        const getResult = (number, operation)=> {
          const number2 = Number(screen.textContent);
          switch (operation){
          
            case "plus":
          screen.textContent = number + number2
          break
          
          case "minus":
            screen.textContent = number - number2
            break
          case "multiply":
            screen.textContent = number * number2
            break
          case "divide":
            screen.textContent = number / number2
            screen.textContent === "Infinity"
         ? screen.textContent = 0
         : screen.textContent = screen.textContent
            break  }}
        if (d === "clear") {
          screen.textContent = "0"
          number1 = 0
        }
        else {
          getResult(number1, typeOperation);
         number1 = 0   
        }}
      
 
      export {calculator}