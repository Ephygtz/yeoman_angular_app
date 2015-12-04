'use strict';

describe('Controller: SpanctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanAppApp'));

  var SpanctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpanctrlCtrl = $controller('SpanctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SpanctrlCtrl.awesomeThings.length).toBe(3);
  });
});
