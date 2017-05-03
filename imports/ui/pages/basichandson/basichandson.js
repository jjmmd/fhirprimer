import { Template } from "meteor/templating"

import "./basichandson.html"

Template.basichandson.onCreated(function () {
	let defaultFHIR = {
		base : "http://api.hackathon.siim.org/fhir/",
		resource : "Condition",
		queryParams : {
			name : ""
		}
	}

	Session.set('FHIRurl', defaultFHIR)
})

Template.basichandson.helpers({
	FHIRurl : function () {
		let url = Session.get('FHIRurl')

		urlOut = url.base + url.resource
		$('#FHIRurl').val(urlOut)
		return urlOut
	}
})

Template.basichandson.events({
	"click #sendFHIR" : function (event) {
		event.preventDefault()

		Meteor.call('FHIRrequest', $('#FHIRurl').val(), function(error, response) {
			$('#FHIRresponse').html(JSON.stringify(response, undefined, 2))
		})
	}
})