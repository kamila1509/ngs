// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
 
cont=0;

const sleep1 =(ms)=> new Promise(resolve =>(setTimeout(resolve,ms)))
async function demo() {
    do {
        console.log("Hello World")
        await sleep1(1000)
        cont++
        
    } while (cont<5);
    
    console.log("Done");
    
}
demo()



