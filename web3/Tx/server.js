'use strict'

const infuraAPI = 'https://mainnet.infura.io/w9JTAEeCdmMnmrhqsoAi'

const Tx = require('ethereumjs-tx');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(infuraAPI));

// * owner ----------------------------------------------------------------------------

const owner = 'OWNER_ADDRESS';
const privateKey = new Buffer('OWNER_PRIVATE_KEY', 'hex');



start();

function start() {
	web3.eth.defaultAccount = owner;

	// * tx info -----------------------------------------------------------------------

	const gasPrice = web3.utils.numberToHex(web3.utils.toWei('10', 'GWei'));
	const gasLimit = web3.utils.numberToHex(21000);
	const to 		= '0x48c6783ca981dcb86f9c7af2337a0c258127eb9e';
	const value 	= web3.utils.numberToHex(web3.utils.toWei('0.001', 'ether'));
	const data		= ''

	prepareTx(gasPrice, gasLimit, to, value, data);
}

function prepareTx(gasPrice, gasLimit, to, value, data) {
	web3.eth.getTransactionCount(sendAddress)
	.then(function(nonce) {
		sendTx(nonce, gasPrice, gasLimit, to, value, data);
	});	
}

function sendTx(_nonce, _gasPrice, _gasLimit, _to, _value, _data) {
	let rawTx = {
	  	nonce: _nonce,
		gasPrice: _gasPrice,
		gasLimit: _gasLimit,
		to: _to,
		value: _value,
		data: _data
	}

	// * tx sign -----------------------------------------------------------------------

	let tx = new Tx(rawTx);
	tx.sign(privateKey);

	let serializedTx = tx.serialize();

	web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), 
		(err, result) => {

			// * tx hash -----------------------------------------------------------------

			if(err) console.log(err);
			else console.log(`Transaction: ${result}`);
		}).on('receipt', console.log);
}