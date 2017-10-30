(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  /* SilverChallengeCh10 constructor
   * Problem definition: make the Caffeine Strength label color change from green to yellow to red as it is dragged from 0 to 100 respectively
   */
  function SilverChallengeCh10(rangeSelector, labelSelector) {
    if(!rangeSelector) {
      throw new Error("No range selector provided");
    }
    if(!labelSelector) {
      throw new Error("No label selector provided");
    }

    this.$range = $(rangeSelector);
    this.$label = $(labelSelector);
    if(this.$range.length === 0 ) {
      throw Error("Can't find range input element " + RANGE_SELECTOR);
    }
    if(this.$label.length === 0 ) {
      throw Error("Can't find label element " + LABEL_SELECTOR);
    }
  }

  SilverChallengeCh10.prototype.setInitialStrengthColor = function() {

  }
  
  SilverChallengeCh10.prototype.addStrengthChangeHandler = function() {
    var $range = this.$range;
    var $label = this.$label;

    $range.on('change', function() {
      var rangeVal = $range.val();
      console.log("Changed to " + rangeVal + "!");

      $label.text("Caffeine Strength: " + " " + rangeVal);

      if (rangeVal <= 50) {
        var redVal = Math.round(255.0/100 * (rangeVal * 2));
        var greenVal = 255;
      } else {
        var redVal = 255;
        var greenVal = Math.round(255.0/100 * ((100 - rangeVal) * 2));
      }

      console.log("redVal " + redVal);
      var colorVal = 'rgb('+redVal+', '+greenVal+', 0)';
      console.log('colorVal = ' + colorVal);

      $label.css('color', colorVal);
    });
  }

  App.SilverChallengeCh10 = SilverChallengeCh10;
  window.App = App;

})(window);
