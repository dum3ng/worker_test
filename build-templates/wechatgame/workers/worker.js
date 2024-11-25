const { fib } = require('./fn')

// declare global {
//     const worker: any
// }
const source = 'poem-puzzle'

function handler(e, resHandler) {
    if (e.source && e.source === source) {
        console.log(e.data)
        const res = fib(e.data)
        // postMessage(res)
        resHandler(res)
    }
}

try {
    worker.onMessage((e) => {
        handler(e, (res) => worker.postMessage(res))
    })
} catch (e) {
    console.log(`in worker folder: ${e}`)
    onmessage = (e) => {
        handler(e, (res) => postMessage(res))
    }
}
