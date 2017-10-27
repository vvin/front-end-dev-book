(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;

  var formHandler = new FormHandler(FORM_SELECTOR);


  /* SILVER CHALLENGE */
  var RANGE_SELECTOR = '[data-coffee-order-range="strengthLevel"]';
  var LABEL_SELECTOR = '[data-coffee-order-label="strengthLevel"]';
  var $range = $(RANGE_SELECTOR);
  var $label = $(LABEL_SELECTOR);
  if($range.length === 0 ) {
    throw Error("Can't find range input element " + RANGE_SELECTOR);
  }
  if($label.length === 0 ) {
    throw Error("Can't find label element " + LABEL_SELECTOR);
  }
  $range.on('change', function() {
    var rangeVal = $range.val();
    console.log("Changed to " + rangeVal + "!");
    $label.text("Caffeine Strength: " + " " + rangeVal);
    var redVal = Math.round(255.0/100 * rangeVal);
    var greenVal = Math.round(255.0/100 * (100-rangeVal));
    console.log("redVal " + redVal);
    var colorVal = 'rgb('+redVal+', '+greenVal+', 0)';
    console.log('colorVal = ' + colorVal);
    $label.css('color', colorVal);
  });
  /* END SILVER CHALLENGE */

  formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  console.log(formHandler);
})(window);
