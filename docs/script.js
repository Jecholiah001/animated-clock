"use strict"

const updateClock = () => {
    const currentDate = new Date();//get the current date

    const seconds = currentDate.getSeconds(); //get the seconds
    const minutes = currentDate.getMinutes() + seconds / 60; //get the minutes
    const hours = (currentDate.getHours() % 12) + minutes / 60; //get the hours

    //Angle of Rotation
    const secHandRotation = 6 * seconds;
    const minHandRotation = 6 * minutes;
    const hourHandRotation = 30 * hours;

    //Getting elements
    const secondHand = document.querySelector('#seconds')
    const minuteHand = document.querySelector('#minutes')
    const hourHand = document.querySelector('#hours')

    //Transform using SVG
    secondHand.setAttribute("transform", `rotate(${secHandRotation}, 244 251)`);
    minuteHand.setAttribute("transform", `rotate(${minHandRotation}, 244 251)`);
    hourHand.setAttribute("transform", `rotate(${hourHandRotation}, 244 251)`);

    //For the ticksound
    const tickSound = new Audio("./media/tick.mp3");
    tickSound.currentTime = 0;
    tickSound.play();
};

setInterval(updateClock, 1000);

