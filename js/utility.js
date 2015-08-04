
function subTotalPrice (valuesArr) {

  var mealPrice = parseInt(valuesArr[0]);
  var taxRate = valuesArr[1];
  var tipPercetage = valuesArr[2];

  var subTotal = mealPrice + (mealPrice*taxRate);

  return subTotal;
}

function tipPrice (valuesArr) {

  var mealPrice = parseInt(valuesArr[0]);
  var taxRate = valuesArr[1];
  var tipPercetage = valuesArr[2];

  var tipTotal = mealPrice*tipPercetage;

  return tipTotal;
}

function totalCharges (subTotal, tipTotal) {
  return subTotal + tipTotal;
}
