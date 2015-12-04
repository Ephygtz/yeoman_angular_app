'use strict';

describe('Service: payrollFactory', function () {

  // load the service's module
  beforeEach(module('yeomanAppApp'));

  // instantiate service
  var payrollFactory;
  beforeEach(inject(function (_payrollFactory_) {
    payrollFactory = _payrollFactory_;
  }));

  it('should do something', function () {
    expect(!!payrollFactory).toBe(true);
  });

});
