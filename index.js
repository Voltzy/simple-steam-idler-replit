const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = '';
var password = '';
var shared_secret = '';

var games = [730, 440, 570, 438100, 1172470, 1905180, 2381340, 2061630, 2388360, 2471900, 952950, 2362150, 2147580, 2450220, 2305790, 2426500, 1951950, 2025280, 1059420, 1557760, 2335720, 2442880, 2396620, 2487640, 2266370, 2284810, 2272090, 2358610, 2439100, 2308220];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});
