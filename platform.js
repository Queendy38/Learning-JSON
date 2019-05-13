function platform() {
    this.x = 0;
    this.y = h / 2;
    this.show = function () {
        image(restBlock, platform.x, platform.y);
    }
}