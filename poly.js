class Poly{
    constructor(x,y){
        var options ={
            restitution:0.3,
            friction:0.5,
            density:0.5,
            
        }
        this.body = Bodies.circle(x,y,10,options);
        this.x = x
        this.y = y
        World.add(world,this.body)
        this.image = loadImage("polygon.png");
        
    }
    display(){
        var y = this.body.position.y;
        var x = this.body.position.x;

        ellipseMode(RADIUS);
        ellipse(x,y,25,25)
        imageMode(CENTER);
        image(this.image, x, y, 70, 70);
    }
}