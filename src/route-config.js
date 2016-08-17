export function configRouter (router) {
  // normal routes
  router.map({
    'books': {
      component: require('./components/Products.vue')
    },
    '/contact': {
      component: require('./components/Contact.vue')
    },
    '/cart': {
      component: require('./components/Cart.vue')
    },
    '/': {
      component: require('./components/Home.vue')
    }
  })

  // redirect
  router.redirect({
  })

  // global before
  // 3 options:
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()
  router.beforeEach((transition) => {
    if (transition.to.path === '/forbidden') {
      router.app.authenticating = true
      setTimeout(() => {
        router.app.authenticating = false
        // alert('this route is forbidden by a global before hook')
        transition.abort()
      }, 3000)
    } else {
      transition.next()
    }
  })
}
