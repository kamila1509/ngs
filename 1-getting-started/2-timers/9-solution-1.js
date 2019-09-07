/*const greeting = delay =>
  setTimeout(() => {
    console.log('Hello World. ' + delay);
    greeting(delay + 1);
  }, delay * 1000);

greeting(1);

const saludo= i =>setTimeout(
  ()=>{
    console.log('Hello World after' +i +'seconds');
    saludo(i+1);
    
  },i*1000
);
saludo(1);*/


cont=0;
boo=true;
const delay =(s)=> new Promise (resolve=>(setTimeout(resolve,s)))
async function greeting() {
  do {
    console.log('Hello World'+ cont)
    await delay(cont*1000)
    cont ++

    
  }while(boo==true);

  
}
greeting()