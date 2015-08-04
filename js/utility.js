
function subTotalPrice (valuesArr) {

  var mealPrice = parseInt(valuesArr[0]);
  var taxRate = (valuesArr[1]);
  var tipPercetage = (valuesArr[2]);

  var subTotal = mealPrice + (mealPrice*taxRate);
  var tipTotal = mealPrice*tipPercetage;

  return subTotal;

}
