import {request} from './request.js';

export function getDjCateList() {
	return request({
		url: '/api/dj/catelist'
	})
}

export function getDjRecommendType(type) {
  return request({
    url: '/api/dj/recommend/type',
    params:{
      type
    }
  })
}

export function getDjRadioHot(cateId, limit=101){
  return request({
    url: '/api/dj/radio/hot',
    params:{
      cateId,
      limit
    }
  })
}