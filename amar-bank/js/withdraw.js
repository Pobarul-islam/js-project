document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithDrawAmountStirng = withdrawField.value;
  const newWithDrawAmount = parseFloat(newWithDrawAmountStirng);

  const withDrawTotalElement = document.getElementById("withdraw-total");
  const previousWithDrawTotalString = withDrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithDrawTotalString);

  if (newWithDrawAmount > previousWithdrawTotal) {
    alert("balance nai");
    return;
  }

  const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
  withDrawTotalElement.innerText = currentWithdrawTotal;

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
  withdrawField.value = "";

  balanceTotalElement.innerText = newBalanceTotal;
});
