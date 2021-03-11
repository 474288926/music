import {request} from './request.js';

export function getSongDetail(ids) {
  return request({
    url: '/api/song/detail',
    params: {
      ids: ids + ''
    }
  })
}

export function getLyric(id){
  return request({
    url: '/api/lyric',
    params: {
      id
    }
  })
}

export function getSimiSong(id){
  return request({
    url: '/api/simi/song',
    params: {
      id
    }
  })
}


export function getSearch(keywords, limit=3, type=1000){
  return request({
    url: '/api/search',
    params: {
      keywords,
      limit,
      type
    }
  })
}

export class Detail{
  constructor(song) {
      this.name = song.name
      // console.log(song)
  }
}