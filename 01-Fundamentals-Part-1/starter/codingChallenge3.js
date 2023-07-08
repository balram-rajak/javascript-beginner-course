const dolphins=(97+112+101)/3;
const koalas=(106+95+109)/3;

if(dolphins >=100 && koalas >=100){
if(dolphins > koalas){
    console.log(`The dolphins won from koalas with ${dolphins -koalas}`);
}else if(koalas > dolphins){
    console.log(`The koalas won with ${koalas -dolphins}`);
}else if(koalas === dolphins){
console.log(`draw with ${dolphins}`);
}
}else{
console.log("average score lower than 100");
}

