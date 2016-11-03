console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

storage.setItemSync('accounts', [{
	username: 'Asreet',
	balance: 100
},{
	username: 'MyData',
	balance: 2000
}]);

var accounts = storage.getItemSync('accounts');
console.log(accounts);

storage.setItemSync('accounts', [{
	username: 'Asreet',
	balance: 100
}]);

console.log(accounts);

accounts.push({
	username: 'Jen',
	balance: 75
	
}) ;

storage.setItemSync('accounts',accounts)

console.log(accounts);
