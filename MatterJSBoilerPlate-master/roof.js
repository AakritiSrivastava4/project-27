class roof{
    constructor(x,y,w,h){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.body= Bodies.rectangle(this.x,this.y,this.w,this.h,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        push ()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill ("yellow");
        rect(0,0,300,20);
        pop ();
        
    }
}