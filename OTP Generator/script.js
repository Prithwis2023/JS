let str = '0123456789'
let values = document.querySelectorAll(".value");
function generate(){
  var i = 0;
  const interval = setInterval(()=>{
    for(j=0; j<values.length; j++){
      let num = Math.floor(Math.random() * str.length);
      values[j].innerHTML = str[num];
    }
    if(i==10){
      clearInterval(interval);
    }
    i = i+1;
  }, 80)
}