import '/imports/startup/server'
import '/imports/startup/both'

import { HTTP } from 'meteor/http'

Meteor.methods({
	FHIRrequest : function (url) {

		let options = {
			headers : {
				Accept	: "application/json",
				apikey : "40d26305-4934-40a2-8165-ddc7712bea71"
			}
		}
		console.log(url)
		let result = HTTP.call('GET', url, options)
		
		return JSON.parse(result.content)
	},
	getTweets : function () {
		Twit = new TwitMaker({
			consumer_key:         'BUuFvZHNBGWx45o6ouZ7XS2pG',
			consumer_secret:      '4EmRSGMng7t8pIMVjGZj2bcqU7Lt2CUxMi1J0AUAIdSprb8r6d',
			access_token:         '2500691990-hlZCYxJDyTScOXX1jDEJPa3pXo7nOijKGD2HKc8',
			access_token_secret:  'U0LYTk3hyBtFhaUjmnjDFrUmgoJwWPNxnB76Akpo6Fma2'
		})

		Twit.get('search/tweets', { q: '#FHIR -RT', count: 10, lang: 'en', result_type: 'recent' }, Meteor.bindEnvironment(function(err, data, response) {
			Meteor.call('tweets.remove')
			for(let i = 0; i < data.statuses.length; i++) {
				Meteor.call('tweets.insert', data.statuses[i])
			}
		}))
	}
})