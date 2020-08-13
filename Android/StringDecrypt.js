  
/* 
String Decryption For https://m.apkpure.com/in/bg-anti-decompile-reverse-java/com.bgplus.Anti.JavaDecompiler
*/  
      
          Java.perform(function () 
       {
             //class where decryption method is
            var ClassToHook = Java.use("com.lll.llll.util.¥æ¤");
            //method which decrypt string
            var MethodToHook= "µ¤¥"; 
            //overload just take parameter which method have
            ClassToHook["µ¤¥"].overload("int").implementation = function(enc) /* enc name can be anything , as method have only 1 perameter so taken enc if more parameter we can take enc1,enc2,enc3 etc */
            
            {   
               /* enc is our encrypted string */
                console.log("Encrypted String : " + enc.toString(16));
                /* call decryption method with encrypted string so it can decrypt string and store decrypted value in var decrypt */
                var decrypt=this["µ¤¥"](enc);
                /* print decrypted strinf */
                console.warn("Decrypted String: "+ decrypt);
                /*return original method again so app not crash */
                return this["µ¤¥"].overload("int").call(this,enc);
                     
            
            }
         } )
            
            

            

        