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

  var SilverChallengeCh10 = App.SilverChallengeCh10;
  var silverChallengeCh10 = new SilverChallengeCh10(RANGE_SELECTOR, LABEL_SELECTOR);

  silverChallengeCh10.addStrengthChangeHandler();
  /* END SILVER CHALLENGE */

  formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  console.log(formHandler);
})(window);
