const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");

const generateword = (n)=>{
let text = "";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
for(let i =0;i<n;i++){
const random = (Math.random()*25).toFixed(0);
text+=letters[random];
}
return text;
};


let numWord;
const generatePara = () => {
  numWord =  Number(input.value);

  const para = document.createElement("p");
  let data ="";
  for(let i =0;i<numWord;i++){
    const randomNum = (Math.random()*15).toFixed(0);
    data+= generateword(randomNum);
    data+=" ";
  }
  para.innerText=data;
    para.setAttribute("class","paras");
  container.append(para);
};

