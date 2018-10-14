class Race {
    constructor() {
        this.racers = [];
        this.onMove = null;
        this.onWin = null;
    }

    setTrack(track) {
        this.track = track;
    }

    addCar(car) {
        this.racers.push(new Racer(car));
    }

    start() {
        let handle = setInterval(() => {
            for (let racer of this.racers) {
                racer.position += racer.car.speed * this.track.factor;
                this.onMove(racer);

                if (racer.position >= this.track.length) {
                    this.onWin(racer);

                    clearInterval(handle);
                }
            }
        }, 1000);
    }
}