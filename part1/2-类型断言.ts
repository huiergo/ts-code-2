const box = document.getElementById('img') as HTMLImageElement
// 这块是要告诉编译器他是对的。
box.src = ''

let idCard: string | number

//  服务端传递过来的不规范的类型
function handle(idCard: string | number) {
    // 试一下： idCard.length 
    if (idCard as string) {
        // 处理string的逻辑
        (idCard as string).length
    } else {
        // 处理 number 的逻辑
        (idCard as number).toFixed(2)
    }
}

// number | string
function test(idCard: any) {
    if (idCard as string) {
        // 处理string的逻辑
        (idCard as string).length
    } else {
        // 处理 number 的逻辑
        (idCard as number).toFixed(2)
    }
}

test(true)


export { }