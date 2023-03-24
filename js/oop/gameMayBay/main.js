let plane1 = new Plane(2000 ,400,100,100)
plane1.draw()

window.addEventListener("mousemove", function (e) {
    let xMouse = e.clientX;
    plane1.move(xMouse)
})
function play() {
    // createBullet();
    // shortBullet();
    requestAnimationFrame(play)
}

play()