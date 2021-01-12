describe('Servers test (with setup and tear-down)', function() {
	beforeEach(function() {
		// initialization logic
		serverNameInput.value = 'Alice';
	});

	it('should add a new server to allServers on submitServerInfo()', function() {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers['server' + serverId].serverName).toEqual('Alice');
	});
	afterEach(function() {
		let aliceTable = document.querySelector('#serverTable tbody');
		while (aliceTable.firstChild) {
			aliceTable.removeChild(aliceTable.firstChild);
		}
	});
});
// let originalHTML = document.querySelector('#serverTable').innerHTML;
