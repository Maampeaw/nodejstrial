

const findLCM = (a, b) => {

let min = (a > b) ? a : b;


while (true) {
    if (min % a == 0 && min % b == 0) {
        console.log(`The LCM of ${a} and ${b} is ${min}`);
        break;
    }
    min++;
}

}

module.exports ={findLCM}