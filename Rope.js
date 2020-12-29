class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.Rope=Matter.Constraint.create(options)
        World.add(world,this.Rope);
    }
    display(){
        strokeWeight(2);    
        line(this.Rope.bodyA.position.x,this.Rope.bodyA.position.y,this.Rope.bodyB.position.x+this.offsetX,this.Rope.bodyB.position.y);
        console.log(this.Rope.bodyA.position);
        console.log(this.Rope.bodyB.position);
    }
}