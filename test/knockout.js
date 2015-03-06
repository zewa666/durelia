define([], function() {
  var knockout = function() {
    var self = this;

    self.observable = function(value) {
      return value;
    };

    self.observableArray = function(value) {
      return value;
    };
  };

  return new knockout();
});