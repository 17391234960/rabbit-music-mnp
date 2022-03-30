const baseUrl = 'https://rabbit-music-1761640-1310612875.ap-shanghai.run.tcloudbase.com'

export const get = (uri: string) =>{
    wx.showLoading({
        title: '加载中'
    })

    return new Promise((resolve, reject) => {
        wx.request({
            url: baseUrl + uri,
            method: 'GET',
            success: (res) => {
                // 包装请求 过滤请求
                handleError(res, reject)
                resolve(res.data)
            },
            fail: reject,
            complete: ()=> {
                // 结束loading
                wx.hideLoading()
            }
        })
    })
   
}
const handleError = (response:any, reject:any) => {
    if(response.statusCode !== 200) {
        console.log('非200请求')
        reject()
    }
}