var Calculate = function(valuesArr) {
  this.mealPrice = parseInt(valuesArr[0]);
  this.taxRate = valuesArr[1];
  this.tipPercetage = valuesArr[2];
}
Calculate.prototype.subTotal = function(){
  subTotalPrice = this.mealPrice + (this.mealPrice*(this.taxRate))
  return subTotalPrice;
}
Calculate.prototype.tip = function (){
  tip = this.tipPercetage * this.mealPrice;
  return tip;
}
