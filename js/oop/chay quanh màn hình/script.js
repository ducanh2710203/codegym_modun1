/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;


    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        let speed = 100
        this.left += speed;
        speed++
        console.log(speed)
        console.log('ok: ' + this.left);
    }
    this.moveleft = function () {
        let speed = 100
        this.left -= speed;
        speed++
        console.log(speed)
        console.log('ok: ' + this.left);
    }
    this.movedown = function () {
        let speed = 100
        this.top += speed;
        speed++
        console.log(speed)
        console.log('ok: ' + this.left);
    }
    this.movetop = function () {
        let speed = 100
        this.top -= speed;
        speed++
    }

}

let hero = new Hero('phai.png', 0, 0, 200)
let hero = new Hero('trai.png', 0, 0, 200)



function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top <= 0) {
        hero.moveRight();

    } else if (hero.top < window.innerHeight - hero.size && hero.left > hero.size) {
        hero.movedown()
    } else if (hero.left > -100) {
        hero.moveleft();
    } else if (hero.top > -hero.size) {
        hero.movetop()
    }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 50)
}

start();