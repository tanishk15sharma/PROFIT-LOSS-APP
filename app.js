var initialPrice = document.querySelector("#initial-price")
var stocksQuantity = document.querySelector("#stocks-quantity")
var currentPrice = document.querySelector("#current-price")
var submitBtn = document.querySelector("#submit-btn")
var outputBox = document.querySelector("#output-box")

submitBtn.addEventListener("click", checkHandler)

function checkHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr)
}



function calculateProfitAndLoss(initial, quantity, current)

{  if (initial <= 0 || quantity <= 0 || current <= 0) {
    return outputBox.innerText = "Enter positive value ";
}
  else  if (initial > current) {
        var loss = ((initial - current) * quantity ).toFixed(3);
        var lossPercentage = (loss / initial) * 100;


        showOutput(`oops it's loss Rs.${loss} ! The loss percentage is ${lossPercentage.toFixed(3)} % `);
        

        //loss logic
    } else if (current > initial) {
        var profit = ((current - initial) * quantity ).toFixed(3);
        var profitPercentage = (profit / initial) * 100;
        showOutput(`wow it's profit Rs.${profit} ! The profit percentage is ${profitPercentage.toFixed(3)} % `);
        //profit logic
    } else {
        showOutput("no gain , no change ");
    }
}

function showOutput(message) {

    outputBox.innerHTML = message
}