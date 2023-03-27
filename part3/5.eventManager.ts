class EventManager {

    private static instance: EventManager;
    eventMap: any = {
        'key1': [fn1, fn2],
        'key2': [fn1, fn2]
    }

    public static getInstance(): EventManager {
        if (this.instance == null) {
            this.instance = new EventManager();
        }
        return this.instance;
    }

    on(key: string, callback: Function) {
        console.log('[on:]', key, callback)
        const list = this.eventMap[key] || [];
        list.push(callback);
        this.eventMap[key] = list
    }

    emit(key: string) {

        const list = this.eventMap[key] || [];
        console.log('list-->', list)
        list.forEach((cb: Function) => {
            console.log(key, cb)
            cb()
        });
    }
}



class Test {
    constructor() {
        this.init()
    }
    init() {
        EventManager.getInstance().on("event_key1", this.refresh1)
        EventManager.getInstance().on("event_key2", this.refresh2)
    }

    refresh1() {
        //...
        console.log('[执行了：refresh1]')
    }

    refresh2() {
        //...
        console.log('[执行了：refresh2]')
    }

    netWork() {
        EventManager.getInstance().emit("event_key1")
    }
}

class Test2 {
    @onEvent("event_key1")
    refresh1() {
        //...
        console.log('[执行了：refresh1]')
    }

    @onEvent("event_key2")
    refresh2() {
        //...
        console.log('[执行了：refresh2]')
    }

    requestData() {
        //..
        EventManager.getInstance().emit("event_key2")
    }
}

export function onEvent(key: string) {
    return function logMethod(value: any, context: ClassMethodDecoratorContext) {
        EventManager.getInstance().on(key, value)
    }
}
new Test2().requestData()