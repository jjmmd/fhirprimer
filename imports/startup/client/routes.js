import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'

// Layouts
import '../../ui/layouts/body/body.js'

// Pages
import '../../ui/pages/home/home.js'
import '../../ui/pages/not-found/not-found.js'
import '../../ui/pages/introduction/introduction.js'
import '../../ui/pages/prequiz/prequiz.js'
import '../../ui/pages/basichandson/basichandson.js'

// Components
import '../../ui/components/navbar/navbar.js'

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('master', {
    	nav : 'navbar',
    	main : 'home'
    })
  },
})

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('master', {
    	main: 'notFound'
    })
  },
}

FlowRouter.route('/introduction', {
  name : 'introduction',
  action() {
    BlazeLayout.render('master', {
      nav : 'navbar',
      main : 'introduction'
    })
  }
})

FlowRouter.route('/basichandson', {
  name : 'basichandson',
  action() {
    BlazeLayout.render('master', {
      nav : 'navbar',
      main : 'basichandson'
    })
  }
})