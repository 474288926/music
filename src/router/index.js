import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const TopList = () => import('../views/toplist/TopList.vue')
const Song = () => import('../views/song/Song.vue')
const Discover = () => import('../views/discover/Discover.vue')
const PlayList = () => import('../views/playlist/PlayList.vue')
const DjRadio = () => import('../views/djradio/DjRadio.vue')
const Category = () => import('../views/category/Category.vue')
const RadioDetail = () => import('../views/radiodetail/RadioDetail.vue')
const Program = () => import('../views/program/Program.vue')
const Artist = () => import('../views/artist/Artist.vue')

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/toplist',
    name: 'TopList',
    component: TopList
  },
  {
    path: '/discover',
    name: 'Discover',
    component: Discover
  },
  {
    path: '/djradio',
    name: 'DjRadio',
    component: DjRadio
  },
  {
    path: '/song',
    name: 'Song',
    component: Song
  },
  {
    path: '/playlist',
    name: 'PlayList',
    component: PlayList
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/radiodetail',
    name: 'RadioDetail',
    component: RadioDetail
  },
  {
    path: '/program',
    name: 'Program',
    component: Program
  },
  {
    path: '/artist',
    name: 'Artist',
    component: Artist
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
