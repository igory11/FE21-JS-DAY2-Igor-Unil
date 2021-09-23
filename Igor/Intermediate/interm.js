// Normal anonym function


(function(text) {

    let txt1 = text.charAt(0).toUpperCase();

    console.log(txt1 + text.substring(1, 20));

}('i am a web develper'));

// Arrow anonym function

((text) => {

    let txt1 = text.charAt(0).toUpperCase();

    console.log(txt1 + text.substring(1, 20));

})('i am a web develper');




// Part 2

function grades(math, phys, eng) {

    let sum = Number(math) + Number(phys) + Number(eng);
    let avg = sum / 3;

    return [sum, avg];

}

let [sum, avg] = grades(3, '4', '5');

document.write(sum + '<br>');
document.write(avg)