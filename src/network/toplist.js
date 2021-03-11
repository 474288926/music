import {request} from './request.js';

export function getTopList() {
  return request({
    url: '/api/toplist'
  })
} 

export function getListDetail(id) {
  return request({
    url: '/api/playlist/detail',
    params: {
      id
    }
  })
}

export function getSongDetail(ids) {
  return request({
    url: '/api/song/detail',
    params: {
      ids: ids + ''
    }
  })
}

export function getSongUrl(id){
  return request({
    url:'/api/song/url',
    params:{
      id: id + ''
    }
  })
}

export function getLyric(id) {
  return request({
    url: '/api/lyric',
    params: {
      id
    }
  })
}

export class listDetail{
  constructor(value) {
      this.id = value.id
      this.name = value.name
      this.img = value.coverImgUrl
      this.updateTime = value.updateTime
      this.playCount = value.playCount
      this.tracks = value.tracks
      this.trackCount = value.trackCount
  }
}

export class urlDetail{
  constructor(value) {
      this.url = value.url
  }
}