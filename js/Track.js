class Track {
    constructor(factor, color) {
        this.factor = factor;
        this.length = 1000;
        this.color = color;
    }
}

class Asphalt extends Track {
    constructor(factor, color) {
        super(1.2, '#808080');
    }
}

class Ground extends Track {
    constructor(factor, color) {
        super(1, '#573c08');
    }
}

class Ice extends Track {
    constructor(factor, color) {
        super(0.7, 'aqua');
    }
}
