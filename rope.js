class Rope{
constructor(body1,body2,offsetX,offsetY){

this.offset=offsetX
this.offset=offsetY
    var options={
bodyA:body1,
bodyB:body2,
stiffness:0.3,
lenngth:10
}

this.Rope=Contraint.create(options);
world.add(world,this.Rope); 
}
rope1=new rope(bobObject1.body,roof.body,-bobDiameter*2,0)

display(){
    if(this.rope.bodyA){//if body A is not null,only then read the position of body A in line 17.
    var body1 = this.rope.body1.position;
    var body2 = this.rope.body2.position;
    strokeWeight(4);
    line(body1.x, body1.y, body2.x, body2.y);
    }
}
}