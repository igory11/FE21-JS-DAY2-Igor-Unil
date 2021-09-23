function time(minutes) {

    let h = Math.floor(minutes / 60);

    console.log(`${minutes} minutes = ${h} hour(s) and ${minutes%60} minute(s)`);

    return [h, minutes % 60]

}

time(200)


// let minutesGiven = 200;
// let [h, r] = time(minutesGiven);

// console.log(`${minutesGiven} minutes = ${h} hour(s) and ${r} minute(s)`);


// Arrow

// const time2 = (minutes) => {

//     let h = Math.floor(minutes / 60);
//     let r = minutes % 60;

//     console.log(`${minutes} minutes = ${h} hour(s) and ${r} minute(s)`);

//     return [h, r]

// }

// time2(210)