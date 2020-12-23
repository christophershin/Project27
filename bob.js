class Bob{
    constructor(x,y,width,height){
    var options={
   'density':1.0,
   'restitution':0.4
    }
    
    this.body=Bodies.circle(200,370,20,20,options);
    world.add(world,this.body); 
    }
    display(){
       
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        pop();
    }
    }