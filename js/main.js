// add scripts
$(document).on('ready', function() {

  var valuesArr = [];
  var tipArr = [];
  $(':submit').on('click', function (e) {
    e.preventDefault();
    valuesArr=[];
    var formValues = $('.form-input');
    // TODO: add check for form - imput === ""
    for (var i = 0; i < formValues.length; i++) {
      valuesArr.push($($('.form-input')[i]).val());
      $($('.form-input')[i]).val("");
    }
    var mealData= new Calculate(valuesArr, tipArr)
    tipArr.push(mealData.tip());
    $('#subtotal').html(" $" + mealData.subTotal());
    $('#tip').html(" $" +mealData.tip());
    $('#total').html(" $" +(mealData.subTotal()+mealData.tip()) );
    $('#totalTips').html(" $" +mealData.addTips());
    $("#mealCount").html(" " + tipArr.length);
    $("#averageTip").html(" $" + (mealData.addTips() / tipArr.length))
  });

  $(':button').on('click', function (e) {
    e.preventDefault();
    var formValues = $('.form-input');
    for (var i = 0; i < formValues.length; i++) {
      $($('.form-input')[i]).val("");
    }
  });
});
