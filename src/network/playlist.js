import {request} from './request.js';

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

export function getRelatedPlayList(id){
  return request({
    url: '/api/related/playlist',
    params: {
      id
    }
  })
}

export class RelatedPlayList{
  constructor(value){
    this.img = value.coverImgUrl
    this.name = value.name
    this.nickname = value.creator.nickname
  }
}