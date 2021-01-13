describe('Payment functions test with setup and teardown', function() {
	beforeEach(function() {
		billAmtInput.value = 200;
		tipAmtInput.value = 20;
	});
	it('should add a new payment to allPayments on submitPaymentInfo()', function() {
		submitPaymentInfo();

		expect(Object.keys(allPayments).length).toEqual(1);
		expect(allPayments['payment1'].billAmt).toEqual('200');
		expect(allPayments['payment1'].tipAmt).toEqual('20');
		expect(allPayments['payment1'].tipPercent).toEqual(10);
	});
	it('should payment update #paymentTable on appendPaymentTable()', function() {
		let testPayment = createCurPayment();
		allPayments['payment1'] = testPayment;

		appendPaymentTable(testPayment);

		let testTdList = document.querySelectorAll('#paymentTable tbody tr td');

		expect(testTdList.length).toEqual(3);
		expect(testTdList[0].innerText).toEqual('$200');
		expect(testTdList[1].innerText).toEqual('$20');
		expect(testTdList[2].innerText).toEqual('10%');
	});
	it('should create a current payment object on createCurrentPayment()', function() {
		let testPayment = createCurPayment();
		expect(testPayment).toEqual({ billAmt: '200', tipAmt: '20', tipPercent: 10 });
	});
	it('should return undefined with negative inputs on createCurrentPayment()', function() {
		billAmtInput.value = -1;
		tipAmtInput.value = -1;
		let testPayment = createCurPayment();
		expect(testPayment).toEqual(undefined);
	});
	it('should allow 0 tip on createCurrentPayment()', function() {
		billAmtInput.value = 200;
		tipAmtInput.value = 0;
		let testPayment = createCurPayment();
		expect(testPayment).toEqual({ billAmt: '200', tipAmt: '0', tipPercent: 0 });
	});

	afterEach(function() {
		allPayments = {};
		paymentId = 0;
		billAmtInput.value = '';
		tipAmtInput.value = '';
		paymentTbody.innerHTML = '';
		serverTbody.innerHTML = '';
	});
});
