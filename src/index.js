module.exports = function check(str, bracketsConfig) {
  var s=[];
 for (var i=0; i<bracketsConfig.length; i=i+2){
   for (var j=0; j<bracketsConfig[i].length; j++){
     for (var k=0; k<str.length; k++){
       if (str.substr(k,1)==bracketsConfig[i][j]){
         s.push(bracketsConfig[i][j]);
       }
       if (str.substr(k,1)==bracketsConfig[i+1][j]){
         var b=s.pop();
         if (b!==bracketsConfig[i][j]){
           return false;
         } 
       }
     }
   }
 }
 if (s.length==1){return true;}
}
