var initialPrice = document.querySelector("#initial-price")
var stocksQuantity = document.querySelector("#stocks-quantity")
var currentPrice = document.querySelector("#current-price")
var submitBtn = document.querySelector("#submit-btn")
var outputBox = document.querySelector("#output-box")

submitBtn.addEventListener("click", checkHandler)

function checkHandler() {
    var ip = initialPrice.value
    var qty = stocksQuantity.value
    var curr = currentPrice.value

    calculateProfitAndLoss(ip, qty, curr)
}



function calculateProfitAndLoss(initial, quantity, current)

{
    if(initial<=0||quantity<=0||current<=0){
        return outputBox.innerText = "Enter positive numbers!"
    }

    else if (initial > current) {
        //loss
        var loss = (initial - current) * quantity
        var lossPercentage = (loss / initial) * 100;

        showOutput(`oops it's loss ${loss} ! The loss percentage is ${lossPercentage} % `);


    } else if (current > initial) {
        //profit
        var profit = (current - initial) * quantity
        var profitPercentage = (profit / initial) * 100;
        showOutput(`wow it's profit ${profit} ! The profit percentage is ${profitPercentage} % `);
    } else {
        showOutput("no gain , no change ");
    }
}

function showOutput(message) {

    outputBox.innerHTML = message
}