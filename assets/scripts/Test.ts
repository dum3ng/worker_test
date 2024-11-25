import { _decorator, Button, Component, Label, Node } from 'cc'
import MyWorker from './worker'
import worker from './worker'
const { ccclass, property } = _decorator

@ccclass('Test')
export class Test extends Component {
    @property(Button)
    button: Button

    @property(Label)
    label: Label

    worker: MyWorker
    start() {
        console.log('start')
        this.button.node.on(Button.EventType.CLICK, this.onButtonClick, this)
        this.worker = new MyWorker('workers/worker.js')
        this.worker.onMessage((e) => {
            console.log(e)
            this.label.string = e
        })
    }

    onButtonClick() {
        this.worker.postMessage({ source: 'poem-puzzle', data: 10 })
    }

    update(deltaTime: number) {}
}
