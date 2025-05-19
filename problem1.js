function findName(list){
  let temp=[];
  for (let i = 0; i < list.length; i++) {
    const nam = list[i];
    if(nam.includes('k')){
      temp.push(nam)
    }
  }
  return temp
}




const namList=['sujon','sakil','akash','sagor','kayes','ohid'];
const result = findName(namList);
console.log(result);
