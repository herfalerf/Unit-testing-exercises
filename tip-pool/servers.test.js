const originalHTML = document.querySelector('#serverTable').innerHTML;

describe('Servers test (with setup and tear-down)', function() {
	beforeEach(function() {
		// initialization logic
		serverNameInput.value = 'Alice';
	});

	afterEach(function() {
		document.querySelector('#serverTable').innerHTML = originalHTML;
	});

	it('should add a new server to allServers on submitServerInfo()', function() {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers['server' + serverId].serverName).toEqual('Alice');
	});

	afterEach(function() {
		// teardown logic
	});
});
