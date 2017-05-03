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
import '../../ui/pages/basiclesson1/basiclesson1.js'
import '../../ui/pages/basiclesson2/basiclesson2.js'

// Components
import '../../ui/components/navbar/navbar.js'
import '../../ui/components/tweetlist/tweetlist.js'
import '../../ui/components/footer/footer.js'

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('master', {
    	nav : 'navbar',
    	main : 'home',
      footer : 'footer'
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

FlowRouter.route('/basiclesson1', {
  name : 'basiclesson1',
  action() {
    BlazeLayout.render('master', {
      nav : 'navbar',
      main : 'basiclesson1'
    })
  }
})

FlowRouter.route('/basiclesson2', {
  name : 'basiclesson2',
  action() {
    BlazeLayout.render('master', {
      nav : 'navbar',
      main : 'basiclesson2'
    })
  }
})