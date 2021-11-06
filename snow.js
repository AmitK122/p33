class Snow {
    constructor(x,y){
        var options = {
            density : 0.5,
            friction : 0.1
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,20,options);
        this.image = loadImage("snow4.webp")
        World.add(world,this.body)
    }

    display(){
     imageMode(CENTER)
     image(this.image,this.body.position.x,this.body.position.y,20)
    }
}