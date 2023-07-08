const marksWeight=78;
const marksHeight=1.69;

const johnWeight=92;
const johnHeight=1.95;

function getBmi(weight,height){

    return weight/(height ** 2);
}

const marksBMI=getBmi(marksWeight,marksHeight);
const johnBMI=getBmi(johnWeight,johnHeight);
console.log("marks BMI = ",marksBMI);
console.log("John BMI = ",johnBMI);

const markHigherBMI=marksBMI > johnBMI;

console.log("is marks have higher BMI ", markHigherBMI);



