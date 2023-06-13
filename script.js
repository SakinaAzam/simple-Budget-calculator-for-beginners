
// function getvalue(){
// const watch=document.getElementById("inputWatch").value;
// const phone=document.getElementById("inputPhone").value;
// const laptop=document.getElementById("inputLaptop").value;
// const x=document.getElementById("output");
// const y=document.getElementById("output1");
// const z=document.getElementById("output2");
// x.innerHTML=watch;
// y.innerHTML=phone;
// z.innerHTML=laptop;
// }
function calculatebudget() {
    const inputWatch=document.getElementById("inputWatch").value;
    var total = 50 * inputWatch;
    const inputPhone=document.getElementById("inputPhone").value;
    var total1= 100 * inputPhone;
    const inputLaptop=document.getElementById("inputLaptop").value;
    var total2= 500 * inputLaptop;
    var sum=total+total1+total2;
    // console.log(sum)
    const y=document.getElementById("output"); 
    y.innerHTML=`your Cost is: ${sum} Rupees`;
  }
// function calculatebudget(){
    
// }

