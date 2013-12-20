var BtceManager = require('./btceManager.js')

var callback = function callback (err, data) {
	if (err)
		console.log(err);
	else
		console.log(data);
}

var btce = new BtceManager('config.json', callback);

// btce.getInfo(function(err, data) {
//   console.log('\nGet Info: ')
//   if (!err) console.log(data)
//   else console.log(err)
// })

// btce.ticker({ pair: 'btc_usd' }, function(err, data) {
//   console.log('\nTicker: ')
//   if (!err) console.log(data)
//   else console.log(err)
// })

