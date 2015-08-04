// add scripts

$(document).on('ready', function() {


var valuesArr = [];

$(':submit').on('click', function (e) {
  e.preventDefault();
  var formValues = $('.form-input');
  for (var i = 0; i < formValues.length; i++) {
    valuesArr.push($($('.form-input')[i]).val());
    $($('.form-input')[i]).val("");
  }

  console.log(valuesArr);
  // return valuesArr;
  var subTotal = totalCharges(valuesArr);

  $('#subtotal').html(" $" +subTotal);

});

$(':button').on('click', function (e) {
  e.preventDefault();
   var formValues = $('.form-input');
  for (var i = 0; i < formValues.length; i++) {
    $($('.form-input')[i]).val("");
  }
});



});

function totalCharges (valuesArr) {

  var mealPrice = parseInt(valuesArr[0]);
  var taxRate = (valuesArr[1]);
  var tipPercetage = (valuesArr[2]);

  var subTotal = mealPrice + (mealPrice*taxRate);
  var tipTotal = mealPrice*tipPercetage;

  return subTotal;

}



