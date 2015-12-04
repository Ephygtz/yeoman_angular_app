'use strict';

describe('Service: payrollCalcService', function () {

  // load the service's module
  beforeEach(module('yeomanAppApp'));

  // instantiate service
  var payrollCalcService;
  beforeEach(inject(function (_payrollCalcService_) {
    payrollCalcService = _payrollCalcService_;
  }));

  it('should do something', function () {
    expect(!!payrollCalcService).toBe(true);
  });

});
