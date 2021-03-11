import {request} from './request.js';

export function getPlayListHot(limit) {
	return request({
		url: '/api/personalized',
		// responseType: 'json'
		params: {
			limit
		}
	})
}

export function getTopAlbum(limit, area = 'ZH') {
  return request({
    url: '/api/album/new',
    params: {
      limit,
      area
    }
  })
}

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

export function getArtistList(type = -1, area = -1, limit = 5, initial = -1) {
  return request({
    url: '/api/artist/list',
    params: {
      type,
      area,
      limit,
      initial
    }
  })
}

export function getArtistDetail(id) {
  return request({
    url: '/api/artist/detail',
    params: {
      id
    }
  })
}

export function getDjTop(limit = 5, type = 'hot') {
  return request({
    url: '/api/dj/toplist',
    params: {
      limit,
      type
    }
  })
}

export function getSongUrl(id){
  return request({
    url: '/api/song/url',
    params: {
      id
    }
  })
}