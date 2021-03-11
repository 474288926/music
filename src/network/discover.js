import {request} from './request.js';

export function getTopPlayList(limit, cat="全部" ) {
	return request({
		url: '/api/top/playlist',
    params: {
      limit,
      cat
    }
	})
}

export function getCatList(){
  return request({
    url: '/api/playlist/catlist'
  })
}

export function getSearch(keywords, limit=100, type=1000){
  return request({
    url: '/api/cloudsearch',
    params: {
      keywords, 
      limit, 
      type
    }
  })
}

export class PlayList{
  constructor(value) {
    // console.log(value)
      this.picUrl = value.coverImgUrl
      this.name = value.name
      this.id = value .id
      this.nickname = value.creator.nickname
      this.userId = value.creator.userId
      this.playCount = value.playCount
  }
}