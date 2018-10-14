

let cars = {
    amg: new Mercedes(),
    bmw: new Bmw(),
    audi: new Audi(),
    toyota: new Toyota(),
    lexus: new Lexus()
};

let tracks = {
    asphalt: new Asphalt(),
    ground: new Ground(),
    ice: new Ice()
};


let race = new Race();


race.onWin = function (racer) {
    console.log('win', racer);
};

race.onMove = function (racer) {
    console.log('move', racer);

    let racerElement = document.querySelector(`.all-track:nth-child(${race.racers.indexOf(racer) + 1}) .racer`);

    racerElement.style.left = 100 * (racer.position / race.track.length) + '%';
};

for (let carElement of document.querySelectorAll('.car')) {
    carElement.addEventListener('click', function () {
        if (carElement.classList.contains('active')) {
            carElement.classList.remove('active');
        } else {
            carElement.classList.add('active');
        }
    });
}


for (let trackElement of document.querySelectorAll('.track')) {
    trackElement.addEventListener('click', function () {
        if (trackElement.classList.contains('active')) {
            trackElement.classList.remove('active');
        }
        else {
            trackElement.classList.add('active');
        }
    });
}





document.querySelector('.start-game').addEventListener('click', function () {
    


    let carElements = document.querySelectorAll('.car.active');
    let trackElements = document.querySelectorAll('.track.active');


    if (carElements.length !== 3 && trackElements.length!==1) {
        return alert('Please, select 3 cars.');
    }

    let track = tracks[trackElements[0].dataset.model];

    drowTrack(track.color);   
    race.setTrack(track);
    let trackElementss = document.querySelectorAll('.all-track');

    for (let i = 0; i < trackElementss.length; i++) {
        let trackElement = trackElementss[i];
        let racerElement = trackElement.querySelector('.racer');
        let racerImageElement = racerElement.querySelector('.racer-image');
        let model = carElements[i].dataset.model;
        let car = cars[model];

        race.addCar(car);

        racerImageElement.src = `img/${model}.png`;
    }

    race.start();
});


