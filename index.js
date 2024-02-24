function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
   console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    const whisper = "I can't hear you!"
    const shout = "YES INDEED!"
    const dinner = "I would love to!"
    if (string.toLowerCase(string) === string) {
        return whisper;
    }
    else if (string.toUpperCase(string) === string) {
        return shout;
    }
    else if (string) {
        return dinner
    }
}
console.log(sayHiToHeadphonedRoommate)

