class Block{
    constructor(x, y) {
        
        this.body = Bodies.rectangle(x, y,40, 40);
        World.add(world, this.body);
        this.visiblity = 255;
      }
      display(){
        if(this.body.speed < 5){
          rectMode(CENTER)
          rect(this.body.position.x,this.body.position.y,40, 40)
        } else {
          push();
          World.remove(world,this.body)
          this.visiblity = this.visiblity-5;
          tint(255,this.visiblity) 
         
          pop();
        }
      }
}