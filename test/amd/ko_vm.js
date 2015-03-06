define(['knockout'], function(ko) {
    "use strict";

    var testModule = function() {
      var self = this;

      self.name = ko.observable('Durandal');

      self.setName = function(newName) {
        self.name = newName;
      };

      self.tags = ko.observableArray(['Tag 1', 'Tag 2', 'Tag 3']);
    };

    return new testModule();
  });
