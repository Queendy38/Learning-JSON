function attack(){
    this.x = 0;
    this.y = 0;
    this.gravity = 0.5; //the force of gravity
    this.lift = -10; //opposing force
    this.velocity = 0; //initial speed
   

 
    this.show = function() {
        this.velocity += this.gravity; //gravity applied when not jumping
        this.y += this.velocity;
        this.velocity *= 0.9; //resistance
        if (this.y > h-57) { //jumper hits the ground
            this.y = h-57;
            this.velocity = 0;
         }
         if (this.y < 0) { //jumper hits the ceiling
             this.y = 0;
             this.velocity = 0;
         }
         if ((this.x < w-27) && (keyIsDown(39))){//move right
             this.x += 5;
            
         }
         if ((this.x > 0) && (keyIsDown(37))){//move left
             this.x -= 5;
             
         }
    line(this.x, this.y + 30, w, this.y+30);
    stroke(700);
  
}
    this.up = function () { //not running continuously
    this.velocity += this.lift; //jumping function
   
}
}
//make attack