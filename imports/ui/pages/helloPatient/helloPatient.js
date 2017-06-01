import { Template } from 'meteor/templating'

import './helloPatient.html'
import './HPintro.html'
import './HPstep1.html'
import './HPstep2.html'
import './HPstep3.html'
import './HPstep4.html'
import './HPstep5.html'
import './HPfinishedCode.html'

Template.helloPatient.onCreated(function () {
	Session.set('HPstep', 'HPintro')
})

Template.helloPatient.helpers({
	HPstep: function () {
		return Session.get('HPstep')
	}
})

Template.helloPatient.events({
 'click .nav-pills li': function( event, template ) {
    var currentPill = $( event.target ).closest( "li" )

    currentPill.addClass( "active" )
    $( ".nav-pills li" ).not( currentPill ).removeClass( "active" )

    Session.set('HPstep', currentPill.data( "template" ))
  }
})