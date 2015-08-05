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
    var mealData= new Calculate(valuesArr)
    $('#subtotal').html(" $" + mealData.subTotal());
    $('#tip').html(" $" +mealData.tip());
    $('#total').html(" $" +(mealData.subTotal()+mealData.tip()) );
  });

  $(':button').on('click', function (e) {
    e.preventDefault();
    var formValues = $('.form-input');
    for (var i = 0; i < formValues.length; i++) {
      $($('.form-input')[i]).val("");
    }
  });
});
