import { WECHAT } from 'cc/env'

class MyWorker {
    _worker: any
    constructor(url: string) {
        if (WECHAT) {
            // @ts-ignore
            this._worker = wx.createWorker(url)
        } else {
            this._worker = new Worker(url)
        }
    }
    onMessage(h) {
        if (WECHAT) {
            // @ts-ignore
            this._worker.onMessage(h)
        } else {
            this._worker.onmessage = (e) => {
                h(e.data)
            }
        }
    }
    postMessage(e) {
        this._worker.postMessage(e)
    }
}
export default MyWorker
