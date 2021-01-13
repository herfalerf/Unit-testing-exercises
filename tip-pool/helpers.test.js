describe('Helper function tests (with setup and tear-down', function() {
	beforeEach(function() {
		billAmtInput.value = 100;
		tipAmtInput.value = 20;
		submitPaymentInfo();
	});

	it('should sum total tip amount of all payments on sumPaymentTotal()', function() {
		expect(sumPaymentTotal('tipAmt')).toEqual(20);
		billAmtInput.value = 100;
		tipAmtInput.value = 20;
		submitPaymentInfo();
		expect(sumPaymentTotal('tipAmt')).toEqual(40);
	});
	it('should sum total bill amount of all payments on sumPaymentTotal()', function() {
		expect(sumPaymentTotal('billAmt')).toEqual(100);
		billAmtInput.value = 100;
		tipAmtInput.value = 20;
		submitPaymentInfo();
		expect(sumPaymentTotal('billAmt')).toEqual(200);
	});
	it('should calculate the tip percentage on calculateTipPercent()', function() {
		billAmtInput.value = 100;
		tipAmtInput.value = 20;
		expect(calculateTipPercent(billAmt.value, tipAmt.value)).toEqual(20);
	});
	it('should add a new cell to a specified row on appendTd()', function() {
		let newTr = document.createElement('tr');
		serverTbody.append(newTr);
		appendTd(newTr, 'test');
		let testTd = document.querySelector('#serverTable tbody td');

		expect(testTd.innerText).toEqual('test');
	});

	afterEach(function() {
		billAmtInput.value = '';
		tipAmtInput.value = '';
		paymentTbody.innerHTML = '';
		summaryTds[0].innerHTML = '';
		summaryTds[1].innerHTML = '';
		summaryTds[2].innerHTML = '';
		serverTbody.innerHTML = '';
		allPayments = {};
		paymentId = 0;
	});
});
