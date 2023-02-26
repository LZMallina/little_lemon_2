const convertMilitaryTime = (time) => {
    
    let splitTime = time.split(':'); //time is split into array consist of [hours, minute, seconds]

    //change time into numbers.  Time format: hr:mm AM/PM

    let hours = Number(splitTime[0]);
    let minutes = Number(splitTime[1]);
    
    //calculate and put time back together
    
    let timeValue;

    if (hours > 0 && hours <= 12) {
        timeValue = '' + hours;
    } else if (hours > 12) {
        timeValue = '' + (hours - 12);
    } else if(hours === 0){
        timeValue = '12';
    }

    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
    timeValue += (hours >= 12) ? " PM" : " AM";  // get AM/PM

    return timeValue;
}

export default convertMilitaryTime;