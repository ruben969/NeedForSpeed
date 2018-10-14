function drowTrack(color) {

    let divTrac = document.createElement('div');

    let divTrackFirst = document.createElement('div');
    let divTrackToo = document.createElement('div');
    let divTrackThree = document.createElement('div');

    let divFirstCar = document.createElement('div');
    let divSecondCar = document.createElement('div');
    let divLastCar = document.createElement('div');

    let divStart = document.createElement('div');
    let divFinish = document.createElement('div');

    let imgFirstCar = document.createElement('img');
    let imgSecondCar = document.createElement('img');
    let imgLastCar = document.createElement('img');


    divTrac.className = 'speedway';
    divTrac.style.backgroundColor = `${color}`;

    divTrackFirst.className = 'track-one all-track';
    divTrackToo.className = 'track-too all-track';
    divTrackThree.className = 'track-three all-track';

    divFirstCar.className = 'racer';
    divSecondCar.className = 'racer';
    divLastCar.className = 'racer';

    divStart.className = 'track-lable';
    divStart.innerHTML = 'START';

    divFinish.className = 'track-lable-finish';
    divFinish.innerHTML = 'FINISH';

    imgFirstCar.className = 'racer-image';
    imgSecondCar.className = 'racer-image';
    imgLastCar.className = 'racer-image';
    imgFirstCar.src = "img/lexus.png";
    imgSecondCar.src = "img/lexus.png";
    imgLastCar.src = "img/lexus.png";





    divFirstCar.appendChild(imgFirstCar);
    divSecondCar.appendChild(imgSecondCar);
    divLastCar.appendChild(imgLastCar);

    divTrackFirst.appendChild(divFirstCar);
    divTrackToo.appendChild(divSecondCar);
    divTrackToo.appendChild(divStart);
    divTrackToo.appendChild(divFinish);
    divTrackThree.appendChild(divLastCar);

    divTrac.appendChild(divTrackFirst);
    divTrac.appendChild(divTrackToo);
    divTrac.appendChild(divTrackThree);

    document.querySelector('#space-for-track').appendChild(divTrac);

}