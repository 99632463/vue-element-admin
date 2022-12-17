import request from '@/utils/request'

export function fetchList(query) {
    return request({
        url: '/vue-element-admin/renovation/mobile/list',
        method: 'get',
        params: query
    })
}

export function createPage(data) {
    return request({
        url: '/vue-element-admin/renovation/mobile/create',
        method: 'post',
        data
    })
}

export function updatePage(data) {
    return request({
        url: '/vue-element-admin/renovation/mobile/update',
        method: 'post',
        data
    })
}

export function deletePage(data) {
    return request({
        url: '/vue-element-admin/renovation/mobile/delete',
        method: 'post',
        data
    })
}