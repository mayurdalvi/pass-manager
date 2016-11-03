var crypto = require('crypto-js');

var secretMessage = {
	name: 'Mayur',
	secretName: 'patch'
};
var secretKey = 'TP002';

// Encrypt
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);
console.log('Encrypted Message: ' + encryptedMessage);


// Decrypt Message
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log('Decrypted Message: ' + decryptedMessage);
console.log('Decrypted Message: ' + decryptedMessage.name);
console.log('Decrypted Message: ' + decryptedMessage.secretName);
