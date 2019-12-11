//variables

    var signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius",
        "Capricorn", "Aquarious", "Pisces", "that's not a real date!", "Its your Birthday!!"];
    var messages = ["Keep on being awesome!", "Keep being chill!", "You want a clone?!", "Not a disease, but an amazing human being!",
        "Same as me! Is that a good thing?!", "Good job on the homework grind!", "2 + 2 = 4?!",
        "Keep on looking 3 steps ahead, and thinking 5 steps ahead!", "Sagitaris?! Sageitarus?! Sage-Taurus??!",
        "You're the goat!", "Not a water sign but an air sign!..Aang?!",
        "A smart person learns from their mistakes, a Pisces learns fom other people's mistakes!",
        "You gotta change your dates to make this work!", "OMG, go eat a cake!!"];
    var image = ["images/aries.jpg", "images/taurus.jpg", "images/gemini.jpg", "images/cancer.jpg",
        "images/leo.jpg", "images/virgo.jpg", "images/libra.jpeg", "images/scorpio.jpg",
        "images/sagittarius.jpg", "images/capricorn.jpg", "images/aquarius.jpeg", "images/pisces.jpg",
        "images/change.jpg", "images/birthday.jpg"];


function onSubmit() {
    var userMonth = document.getElementById('MONTH').value;
    var userDay = document.getElementById('DAY').value;
    var username = document.getElementById('NAME').value;
    var num = 0;
    var thisDate = new Date();
    var currentMonth = thisDate.getMonth() + 1;
    var currentDay = thisDate.getDate();

    //checks if there is a name
    if (username == "") {
        document.getElementById('outPutAnswer').innerHTML = ("Hey! You have to give me your name!");
        document.getElementById('outPutMessage').innerHTML = "";
        return
    }

    //checks if today is their birthday
    if ( (userMonth == currentMonth) && (userDay == currentDay) ) {
        document.getElementById('outPutAnswer').innerHTML = ("Hey, " + username + "! " + signs[13]);
        document.getElementById('outPutMessage').innerHTML = messages[13];
        document.getElementById('outPutImage').src = image[13];
        return
    }


    //code that figures out what sign they are
    if ( (userMonth == 3) && (userDay >= 21) ) {
        num = 0;
    }
    if ( (userMonth == 4) && (userDay <= 19) ) {
        num = 0;
    }
    if ( (userMonth == 4) && (userDay >= 20) ) {
        num = 1;
    }
    if ( (userMonth == 5) && (userDay <= 20) ) {
        num = 1;
    }
    if ( (userMonth == 5) && (userDay >= 21) ) {
        num = 2;
    }
    if ( (userMonth == 6) && (userDay <= 20) ) {
        num = 2;
    }
    if ( (userMonth == 6) && (userDay >= 21) ) {
        num = 3;
    }
    if ( (userMonth == 7) && (userDay <= 22) ) {
        num = 3;
    }
    if ( (userMonth == 7) && (userDay >= 23) ) {
        num = 4;
    }
    if ( (userMonth == 8) && (userDay <= 22) ) {
        num = 4;
    }
    if ( (userMonth == 8) && (userDay >= 23) ) {
        num = 5;
    }
    if ( (userMonth == 9) && (userDay <= 22) ) {
        num = 5;
    }
    if ( (userMonth == 9) && (userDay >= 23) ) {
        num = 6;
    }
    if ( (userMonth == 10) && (userDay <= 22) ) {
        num = 6;
    }
    if ( (userMonth == 10) && (userDay >= 23) ) {
        num = 7;
    }
    if ( (userMonth == 11) && (userDay <= 21) ) {
        num = 7;
    }
    if ( (userMonth == 11) && (userDay >= 22) ) {
        num = 8;
    }
    if ( (userMonth == 12) && (userDay <= 21) ) {
        num = 8;
    }
    if ( (userMonth == 12) && (userDay >= 22) ) {
        num = 9;
    }
    if ( (userMonth == 1) && (userDay <= 19) ) {
        num = 9;
    }
    if ( (userMonth == 1) && (userDay >= 20) ) {
        num = 10;
    }
    if ( (userMonth == 2) && (userDay <= 18) ) {
        num = 10;
    }
    if ( (userMonth == 2) && (userDay >= 19) ) {
        num = 11;
    }
    if ( (userMonth == 3) && (userDay <= 20) ) {
        num = 11;
    }

//checks if it is a non date
    if ((userMonth == 2) && ( (userDay == 29) || (userDay == 30) || (userDay == 31) ) ) {
        num = 12;
    }
    if ((userMonth == 4) && (userDay == 31) ) {
        num = 12;
    }
    if ((userMonth == 6) && (userDay == 31) ) {
        num = 12;
    }
    if ((userMonth == 9) && (userDay == 31) ) {
        num = 12;
    }
    if ((userMonth == 11) && (userDay == 31) ) {
        num = 12;
    }

    //gets the code and outputs answer
    document.getElementById('outPutAnswer').innerHTML = ("Hey, " + username + "! you are a " + signs[num] + "!");
    document.getElementById('outPutMessage').innerHTML = messages[num];
    document.getElementById('outPutImage').src = image[num];

}
