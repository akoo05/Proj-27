class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.4,
            length: 10
        }
        this.chain=Constraint.create(options);
        World.add(world, this.chain);
        rope=new rope(bobObject1.body,roofObject.body,bobDiameter/2,0);
        rope=new rope(bobObject2.body,roofObject.body,bobDiameter/2,0);
        rope=new rope(bobObject3.body,roofObject.body,bobDiameter/2,0);
        rope=new rope(bobObject4.body,roofObject.body,bobDiameter/2,0);
        rope=new rope(bobObject5.body,roofObject.body,bobDiameter/2,0);
    }

    display(){
        var pointA = this.chain.bodyA.postion;
        var pointB = this.chain.bodyB.postion;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}