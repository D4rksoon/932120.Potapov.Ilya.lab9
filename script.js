var operationPressed = false;
function addNumber(e)
{
    if(operationPressed){
        operationPressed = false;
        let result = document.getElementById("result");
        result.value = "";
    }
    let result = document.getElementById("result");
    let resultGray = document.getElementById("result-gray");
    result.value += e.value;
    resultGray.value += e.value;
}

function addOperation(e)
{
    let result = document.getElementById("result");
    let resultGray = document.getElementById("result-gray");
    if(result.value.length != 0){
        if(isNaN(result.value.slice(-1))){
            result.value = result.value.slice(0, -1);
            resultGray.value = resultGray.value.slice(0, -1);
        }
        result.value += e.value;
        resultGray.value += e.value;
        operationPressed = true;
    }
}

function addDot()
{
    let result = document.getElementById("result");
    let resultGray = document.getElementById("result-gray");
    if(result.value.slice(-1) != "."){
        result.value += ".";
        resultGray.value += ".";
    }
}

function resetResult()
{
    operationPressed = false;
    let result = document.getElementById("result");
    let resultGray = document.getElementById("result-gray");
    result.value = "";
    resultGray.value = "";
}

function deleteLastNum() 
{
    operationPressed = false;
    let result = document.getElementById("result");
    let resultGray = document.getElementById("result-gray");
    result.value = result.value.slice(0, -1);
    resultGray.value = resultGray.value.slice(0, -1);
}

function equals() 
{
    let result = document.getElementById("result");
    let resultGray = document.getElementById("result-gray");
    if(!isNaN(resultGray.value.slice(-1)) & resultGray.value != ""){
        result.value = eval(resultGray.value);
        resultGray.value = eval(resultGray.value);
    }
}