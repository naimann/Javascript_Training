let formula = "";



function Input(userInput)
{
    let StrInput = userInput.toString();

    if (CheckIsOperator(StrInput) &&
        CheckIsOperator(formula[formula.length - 1])) {

        formula = formula.slice(0, formula.length - 1);
    }

    formula += StrInput;
    document.getElementById("ResultBox").setAttribute("value", formula);
}



function Clear()
{
    formula = "";
    document.getElementById("ResultBox").setAttribute("value", formula);
}

function Backspace()
{
    formula = formula.slice(0, formula.length - 1);
    document.getElementById("ResultBox").setAttribute("value", formula);
}

function Process()
{
    const Numbers = [];
    const Operators = [];
    let FinalValue = 0;

    // Split Numbers / Operators
    let Number = "0";

    for (let i = 0; i < formula.length; i++) {

        let CurrChar = formula[i];

        if (CheckIsOperator(CurrChar)) {
            Numbers.push(parseInt(Number));
            Operators.push(CurrChar);

            Number = "0";
        }
        else {
            Number += CurrChar;
        }
    }
    
    Numbers.push(parseInt(Number));

    if (Numbers.length > 0 &&
        Operators.length > 0) {
            
        // Multiply / Division    
        let CurrNum = Numbers[0];

        for (let i = 1; i < Numbers.length; i++) {

            let NewOperator = Operators[i - 1];        
            let NewNum = (i > Numbers.length) ? 0 : Numbers[i];

            switch (NewOperator) {
                case "*":
                    CurrNum *= NewNum;

                    Operators[i - 1] = "";
                    Numbers[i] = 0;
                    break;

                case "/":
                    CurrNum /= NewNum;

                    Operators[i - 1] = "";
                    Numbers[i] = 0;
                    break;
            }
        }
        
        // Addition / Subtraction        
        for (let i = 1; i < Numbers.length; i++) {

            let NewOperator = Operators[i - 1];        
            let NewNum = (i > Numbers.length) ? 0 : Numbers[i];

            switch (NewOperator) {
                case "+":
                    CurrNum += NewNum;

                    Operators[i - 1] = "";
                    Numbers[i] = 0;
                    break;

                case "-":
                    CurrNum -= NewNum;

                    Operators[i - 1] = "";
                    Numbers[i] = 0;
                    break;
            }
        }

        FinalValue += CurrNum;

        document.getElementById("ResultBox").setAttribute("value", FinalValue);


        
        // History
        const currDiv = document.getElementById("HistoryDiv");

        let newParagraph = document.createElement("li");
        let newText = document.createTextNode(formula + "=" + FinalValue);

        newParagraph.appendChild(newText);
        
        document.body.insertBefore(newParagraph, currDiv.lastElementChild);


        
        formula = FinalValue;
    }
}



function CheckIsOperator(string)
{
    switch (string)
    {
        case '+':
        case '-':            
        case '*':
        case '/':
            return true;
        break;
    }
}
