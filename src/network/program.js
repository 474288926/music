import {request} from './request.js';

export function getDjProgramDetail(id){
  return request({
    url: '/api/dj/program/detail',
    params:{
      id
    }
  })
}

export function getDjProgram(rid){
  return request({
    url: '/api/dj/program',
    params:{
      rid
    }
  })
}


export class Program{
  constructor(value) {
      this.img = value.coverUrl
      this.name = value.name
      this.radioname = value.radio.name
      this.subcount = value.radio.subCount
      this.playtime = value.mainSong.bMusic.playTime
      this.category = value.categoryName
      this.programCount = value.radio.programCount
      this.createTime = value.radio.createTime
      this.listenerCount = value.listenerCount
      this.desc = value.description
  }
}

export class DjProgram{
  constructor(value) {
      this.img = value.coverUrl
      this.name = value.name
      this.nickname = value.serialNum
  }
}