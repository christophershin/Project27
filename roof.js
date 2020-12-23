class roof{
    constructor(x,y,width,height){
    var options={
    'friction':1.0,
    'density':0.3,
    }
    
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    world.add(world,this.body); 
    }
    display(){
Push();
translate(this.body.position.x,this.body.position.y);
imageMode (CENTER);
pop ();
    }
    }