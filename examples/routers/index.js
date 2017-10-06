import Vue from 'vue'
import Router from 'vue-router'
import Button from './button'
import Menu from './menu'
import Icon from './icon'
import Input from './input'
import Rate from './rate'
import Grid from './grid'
import Switch from './switch'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/button',
      component: Button
    },
    {
      path: '/menu',
      component: Menu
    },
    {
      path: '/icon',
      component: Icon
    },
    {
      path: '/input',
      component: Input
    },
    {
      path: '/rate',
      component: Rate
    },
    {
      path: '/grid',
      component: Grid
    },
    {
      path: '/switch',
      component: Switch
    }
  ]
})

export default router
