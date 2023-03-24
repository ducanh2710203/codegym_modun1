class Plane {

    
    constructor(x,y,width,height) {
        this.x = x;
        this.y =y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById("myCanvas")
        this.ctx = this.canvas.getContext("2d")

    }
    draw(){
        let img = new Image()
        img.onload = () =>{
            this.ctx.drawImage(img,this.x,this.y,this.width,this.height)
        }
        img.src="img/download.jpg"
    }
    move(x){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.x = x;
        this.draw();
    }

}

