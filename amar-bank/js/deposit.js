document.getElementById("deposit-btn").addEventListener('click', function () {
    // console.log("Hello world") 
    const depositField = document.getElementById("deposit-field");

    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)

    // console.log(typeof newDepositAmount);

    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;


    const balanceTotalElement = document.getElementById("balance-total");
    const previouseBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previouseBalanceTotalString);


    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';
})