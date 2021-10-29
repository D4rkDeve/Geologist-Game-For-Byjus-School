class iron{ 
    constructor(x,y,r)
{
    var options = {
        'density':0.8,
        'friction': 3,
        'restitution':30    
    }
         
        this.body=Bodies.rectangle(x,y,50,50,options)
        this.height = 50
        this.width = 80
        World.add(world, this.body);

}
display()
{
        var rubberpos=this.body.position;		
        push()
        translate(rubberpos.x, rubberpos.y);
        rectMode(CENTER)
        strokeWeight(2);
        stroke("black");
        fill("green");
        rect(0,0,this.width,this.height)//draw the ellipse here to display the rubber ball
        center()
        rotation()
        pop()
}

}
