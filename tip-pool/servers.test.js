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
	it('should update #serverTable on updateServerTable()', function() {
		submitServerInfo();
		// updateServerTable();

		let curSrvTable = document.querySelectorAll('#serverTable tbody tr td');
		expect(curSrvTable.length).toEqual(3);
		expect(curSrvTable[0].innerText).toEqual('Alice');
		expect(curSrvTable[1].innerText).toEqual('$0.00');
		expect(curSrvTable[2].innerText).toEqual('X');
	});
	afterEach(function() {
		serverId = 0;
		serverTbody.innerHTML = '';
		allServers = {};
	});
});
// let originalHTML = document.querySelector('#serverTable').innerHTML;
