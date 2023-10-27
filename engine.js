document.addEventListener("DOMContentLoaded", function () {
  // Get references to the form and form elements
  const form = document.querySelector("form");
  const billTotal = document.getElementById("billTotal");
  const tipAmount = document.getElementById("tipAmount");
  const tipPercentage = document.getElementById("tipPercentage");
  const tipValue = document.getElementById("tipValue");
  const totalBill = document.getElementById("totalBill");

  // Add event listeners for "input" and "change" events on the form
  form.addEventListener("input", updateTip);
  form.addEventListener("change", updateTip);

  // Function to update tip calculations
  function updateTip() {
    const billTotalValue = parseFloat(billTotal.value);
    const tipAmountValue = parseFloat(tipAmount.value);

    // Validate if billTotalValue is a valid number
    if (isNaN(billTotalValue)) {
      // Display an error message or handle the invalid input as per your requirements
      // For now, let's set the disabled fields to blank
      tipPercentage.value = "";
      tipValue.value = "";
      totalBill.value = "";
      return;
    }

    const tipPercentageValue = tipAmountValue.toFixed(2) + "%";
    const tipAmountValueCalculated = (billTotalValue * tipAmountValue) / 100;
    const totalBillValue = (billTotalValue + tipAmountValueCalculated).toFixed(
      2
    );

    // Update the disabled fields with the calculated values
    tipPercentage.value = tipPercentageValue;
    tipValue.value = "$" + tipAmountValueCalculated.toFixed(2);
    totalBill.value = "$" + totalBillValue;
  }
});
