class Circle {
    constructor(x, y, radius) {
        this.x = x
        this.y = y
        this.radius = radius
    }

    getrandomcolor() {

        let Yellow = Math.random() * 255
        let violet = Math.random() * 255
        let red = Math.random() * 255
        return "rgb(" + Yellow + "," + violet + "," + red + ")"
    }

    createCircle() {
        let tr = document.getElementById("myCanvas").getContext("2d");
        let top = Math.random() * innerWidth
        let left = Math.random() * innerHeight
        let r = Math.random() * 100

        tr.beginPath();
        tr.fillStyle = this.getrandomcolor()
        tr.arc(top, left, r, 0, 2 * Math.PI);
        tr.fill();
        tr.closePath();
    }


}
function clearCanvas(){
    let tr = document.getElementById("myCanvas").getContext("2d");
    tr.clearRect(0, 0, 1000, 600);
}
var j = 0
var arr=[]
var ten = []
var a = ''
function start() {
     a = prompt("nhập tên của bạn")

    clearCanvas()
    let i = 0
    for ( i = 0; i < Math.random()*1000; i++) {
        let circlei = new Circle(1, 500, 80);
        circlei.createCircle();
    }
    // alert(i)

    arr[j]=i


    console.log(arr[j])
    document.getElementById("text").innerHTML="thằng "+a+" in được "+arr[j]
    j++


}
function end() {
    let max = arr[0]
    console.log(arr)
    console.log(name)
    for (let i = 0; i < arr.length; i++) {
         if (max<arr[i]){
             max = arr[i]
         }


    }
    document.getElementById("text").innerHTML="thằng thắng có số bóng là "+max
    clearCanvas()
}
