function jumper() { //object
    this.x = 0;
    this.y = 0;
    this.gravity = 0.5; //the force of gravity
    this.lift = -10; //opposing force
    this.velocity = 0; //initial speed

    this.show = function () {
       //this is jumper
    
        if (keyIsDown(37)){ //left
           image(characterLeft, jumper.x, jumper.y); //change direction of the character
        }
        else {
        image(character, jumper.x, jumper.y);
      
    }}
    this.up = function () { //not running continuously
        this.velocity += this.lift; //jumping function
        jumpSound.play();
    }
    this.update = function () { //jump hits the floor
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
       
    }
 
} //object ends here


//work on drop on ceiling
//eat something, speed up  
