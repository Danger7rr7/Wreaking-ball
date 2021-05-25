class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stifness: 1.2,
            length: 250,
        }

        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    
    fly(){
        this.rope.bodyA.position.x = null;
        this.rope.bodyA.position.y = null;
    }
    
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push()

        stroke("Red")
        strokeWeight(4)
        line(pointA.x,pointA.y, pointB.x,pointB.y);
        pop()

    }
}