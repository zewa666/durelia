define([],
  function() {
    "use strict";
    console.log('testModule loaded');

    var testModule = function() {
      var that = this;

      this.variable = 10;

      that.getVariable = function(){
        alert('function executed ' + that.variable);
      };

      that.canActivate = function() {
        that.variable++;
        return true;
      };

      that.activate = function() {
        console.log('Activate called');
      }
    };

    return testModule;
  });
