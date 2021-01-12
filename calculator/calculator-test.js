it('should calculate the monthly rate correctly', function() {
	expect(calculateMonthlyPayment({ amount: 10000, years: 10, rate: 4.5 })).toEqual('103.64');
	expect(calculateMonthlyPayment({ amount: 1000000, years: 30, rate: 1.9 })).toEqual('3646.39');

	// ...
});

it('should return a result with 2 decimal places', function() {
	expect(calculateMonthlyPayment({ amount: 10043, years: 8, rate: 5.8 })).toEqual('131.00');

	// ..
});

/// etc
///booger
