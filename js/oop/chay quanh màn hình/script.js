/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    let speed = 100
    this.left += speed;
    speed++
    console.log(speed)
    console.log('ok: ' + this.left);
  }
  this.moveleft = function(){
    let speed = 100
    this.left -= speed;
    speed++
    console.log(speed)
    console.log('ok: ' + this.left);
  }
  this.movedown = function(){
    let speed = 100
    this.top += speed;
    speed++
    console.log(speed)
    console.log('ok: ' + this.left);
  }
  this.movetop = function(){
    let speed = 100
    this.top -= speed;
    speed++
  }

}

var hero = new Hero('pikachu.png', 0, 600, 200);

function start(){
  if(hero.left < window.innerWidth - hero.size && hero.top  == 0){
    hero.moveRight();
  }
  else if(hero.top < window.innerHeight - hero.size && hero.left > hero.size){
    hero.movedown()
  }else if( hero.left >20){
    hero.moveleft();
  }else if( hero.top  > -hero.size) {
    hero.movetop()
  }

  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();