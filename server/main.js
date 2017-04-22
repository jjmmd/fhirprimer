import '/imports/startup/server'
import '/imports/startup/both'

import { HTTP } from 'meteor/http'

Meteor.methods({
	FHIRrequest : function (url) {

		let options = {
			headers : {
				Accept	: "application/json",
			}
		}

		let result = HTTP.call('GET', url, options)
		
		return JSON.parse(result.content)
	}
})