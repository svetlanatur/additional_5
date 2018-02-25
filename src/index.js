module.exports = function check(str, bracketsConfig) {
  var s=[];
for (var k=0; k<str.length; k++){
 for (var i=0; i<bracketsConfig.length; i++){
   var c=bracketsConfig[i];
   

       if (str.substr(k,1)==c[0]){
         s.push(c[0]);
       }else {
               if (str.substr(k,1)==c[1]){
                   if (s.length==0){
                     return false;
                    } else {
                    var b=s.pop();
           
                     if (c[0]!==b){
                      return false;
                      }
                    }          
                }
                
              } 
              
                if (c[0]==c[1]){
                  for (var t=(s.length)-1; t>=0; t--){
                    if (s[t]==s[t-1] && s[t]==c[0]){
                     s.splice(t-1,2);
                      
                    }
                  }
                }     
       }  
   }
   
if (s.length!==0){return false;}else {return true;}

 }
 
 

