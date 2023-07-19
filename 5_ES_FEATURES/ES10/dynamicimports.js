
    async function load() {
        try{
            let say = await import('./add.js');
            say.hi(); // Hello!
            say.bye(); // Bye!
            say.default(); // Module loaded (export default)!
        }catch(err){
            console.log("salman",err);
        }
      }
    
    load().then((response)=>{
    console.log("response",response);
    }).catch((error)=>{
        console.log("error",error);
    });
    
    
    