function AreaVolume(width, height, depth) {

    let area = width * height;
    let volume = width * height * depth;

    return [area, volume];

}

let result = AreaVolume(2, 7, 5);

console.log(result[0] + '\n' + result[1]);