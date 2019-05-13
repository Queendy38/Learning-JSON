function barrier() { //object
    this.x = w;
    this.y = 0;
    this.gravity = 1; //the force of gravity
    this.lift = -10; //opposing force
    this.velocity = 0; //initial speed

    this.show = function () {
        image(enemy, barrier.x, barrier.y);
    }

    this.update = function () { //barrier running
        this.velocity += this.gravity; //gravity applied horizontally
        this.x -= this.velocity;
        this.velocity *= 0.8; //resistance

        if (this.x < 0) { //barrier hits left side
            this.x = w; //return to original position
            this.y = random(h); //random y position
            score += -20; //keep track of scores
            this.gravity += 0.5; //increase speed when scores
           
        }
      if (this.gravity > 20){
          this.gravity -= 10;
      }
    }
} //object ends here