function forLoop(array){
  for(var i=0;i<25;i++){
    if(i===1)
      array.push("I am 1 strange loop.")
    else
      array.push(`I am ${i} strange loops.`)
  }
  return array
}

function whileLoop(num){
  while(num>0){
    console.log(--num)
  }
return "done"
}

var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(int){
  do{
    console.log("I run once regardless.")
  } while(incrementVariable()<int+1)
  
}


