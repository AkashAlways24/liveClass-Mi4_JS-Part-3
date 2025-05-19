function sendProposal(bor,patri){
if(typeof bor === 'object' && typeof patri === 'object'
    && !Array.isArray(bor) && !Array.isArray(patri)){
    if(bor.district === patri.district){
    console.log('send the proposal');
  }
  else{
    console.log("don't send it!!!!!");
  }
}

else{
  console.log('only object input plase');
}

};


const heroAlom = {
  name: "heroAlom",
  age : 25,
  district:"dhaka",
  fatherName:"omuk"
}
const hena = {
  name: "hena",
  age : 20,
  district:"dhaka",
  fatherName:"tomuk"
}

const result = sendProposal(heroAlom,hena);
// console.log(result);