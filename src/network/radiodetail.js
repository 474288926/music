import {request} from './request.js';

export function getDjDetail(rid){
  return request({
    url: '/api/dj/detail',
    params: {
      rid
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

export function getDjRadioHot(cateId){
  return request({
    url: '/api/dj/radio/hot',
    params: {
      cateId
    }
  })
}

export class DjRadios{
  constructor(value){
    this.img = value.picUrl
    this.name = value.name
    this.nickname = value.dj.nickname
  }
}