function randomtext() {
    var randomtxt = [
        "Have a blast, or don't. We don't care.",
        'Fuckin\' eat. Fuckin\' DRINK. Fuckin\' whatever. Jeez...',
        '50% off everything! (Including your braincells)',
        'Ushering so many unwanted children into the world.',
        'Helping you forget tonight tomorrow!',
        'Selling your personal information at shamefully low prices!'
    ];
    return randomtxt[Math.floor((Math.random() * randomtxt.length))];
}

document.getElementById("randomtxt1").innerHTML = randomtext();

function randomtext2() {
    var randomtxt = [
        'Let the shame begin.',
        'Bounce, mother-fucker!',
        'Fuckin\' Bounce... Fuck!',
        'Let there be blood.',
        'Fuck, I\'m not driving.'
    ];
    return randomtxt[Math.floor((Math.random() * randomtxt.length))];
}

document.getElementById("start-button").innerHTML = randomtext2();
