// add scripts

$(document).on('ready', function() {


var valuesArr = [];

$(':submit').on('click', function (e) {
  e.preventDefault();
  valuesArr=[];
  var formValues = $('.form-input');
  for (var i = 0; i < formValues.length; i++) {
    valuesArr.push($($('.form-input')[i]).val());
    $($('.form-input')[i]).val("");
  }

  console.log(valuesArr);
  // return valuesArr;
  var subTotal = subTotalPrice(valuesArr);
  $('#subtotal').html(" $" +subTotal);

  var tipTotal = tipPrice(valuesArr);
  $('#tip').html(" $" +tipTotal);

  $('#total').html(" $" + totalCharges(subTotal, tipTotal));

});

$(':button').on('click', function (e) {
  e.preventDefault();
   var formValues = $('.form-input');
  for (var i = 0; i < formValues.length; i++) {
    $($('.form-input')[i]).val("");
  }
});



});





