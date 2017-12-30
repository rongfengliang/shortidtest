
const shortid = require("shortid");
var index =0;
var list=[];
for(var i=0;i<100000000000;i++) {
  list.push(shortid.generate());
  index++;
  console.log("the count is",index,"the insert count is:",list.length);
  if (list.length!=index) {
   console.log("there is some key is repeated please checj it")
 }
  if(list.length==100){
   process.exit();
  }
}
