class rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 39,
            stiffness: 0.04

        }
        this.pointB = pointB;
        this.sling = Constraint.create(options)
        World.add(world,this.sling)
        
    }
    display(){
        if( this.sling.bodyA !== null ){
            push();
            strokeWeight(4)
            var pointA = this.sling.bodyA.position
            var pointb = this.pointB
            
            line(pointA.x,pointA.y,pointb.x,pointb.y)

            pop();
        }
    }
    fly(){
        this.sling.bodyA = null;

    }
    attach(body){
        this.sling.bodyA = body;
    }
    
}