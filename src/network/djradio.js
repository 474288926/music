import {request} from './request.js';

export function getDjCateList() {
	return request({
		url: '/api/dj/catelist'
	})
}

export function getProgramRecommend(){
  return request({
    url: '/api/program/recommend'
  })
}

export function getDjProgramTopListHours(limit=10){
  return request({
    url: '/api/dj/program/toplist/hours',
    params:{
      limit
    }
  })
}

export function getDjRecommendType(type){
  return request({
    url: '/api/dj/recommend/type',
    params:{
      type
    }
  })
}