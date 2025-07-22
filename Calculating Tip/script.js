function totalSum() {
  const billAmount = document.getElementById("bill-amount").value;
  const tip = document.getElementById("tip-percentage").value;
    //.value string return krta hai isilye type cast krna pda
  const bill = Number(billAmount);
  const tipPercent = Number(tip);

  const tipCalculation = bill * (tipPercent / 100);
  const tSum = bill + tipCalculation;

  document.getElementById("result").textContent = tSum.toFixed(2); // 2 decimal places
}

