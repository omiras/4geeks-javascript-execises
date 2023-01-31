// Add your code here

function lyricsGenerator(song) {
    let breakBase = 0;
    let lyrics = '';

    song.forEach(s => {
        if (s == 0) {
            lyrics += " Boom";
        }

        else if (s==1 && breakBase==3) {
            lyrics += " !!!Break the base!!!";
            lyrics += " Drop the base";
            breakBase = 0;
        }

        else {
            lyrics += " Drop the base";
            breakBase++;

        }

    
    });

    return lyrics.substring(1);

}

// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))