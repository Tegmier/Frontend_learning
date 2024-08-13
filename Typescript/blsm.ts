var num = 2
num = 12
function test() {
    console.log("test!")
}
test()
function greet(): string {
    return "Hello World"
}
console.log(greet())

function add(x: number, y: number): number {
    return x + y
}
console.log(add(1,2))