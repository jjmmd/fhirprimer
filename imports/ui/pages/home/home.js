import { Template } from 'meteor/templating'

import './home.html'

Template.home.helpers({
	socialMedia : function () {
		return {
			title : "Get started with FHIR!",
			excerpt : "Learn the basics of HL7 FHIR and get started with your own FHIR based application today!",
			description : "Learn the basics of HL7 FHIR and get started with your own FHIR based application today!",
			summary : "Learn the basics of HL7 FHIR and get started with your own FHIR based application today!",
			url : "http://learnFHIR.com"
		}
	}
})