class paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.Body);
    }
    display(){
        var paperpos=this.body.postion;
        push()
        translate(paperpos.x,paperpos.y);
        
    }
}
class bobObject1{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:(x:this.offsetX, y:this.offsetY)
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope);
        display()
    }
class bobObject2{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:(x:this.offsetX, y:this.offsetY)
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope);
    }
class bobObject3{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:(x:this.offsetX, y:this.offsetY)
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope);
    }
class bobObject4{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:(x:this.offsetX, y:this.offsetY)
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope);
    }
class bobObject5{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:(x:this.offsetX, y:this.offsetY)
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope);
    }
