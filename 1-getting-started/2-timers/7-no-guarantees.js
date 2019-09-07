/*const test1= () => {console.log('Hello after 0.5 seconds. MAYBE!')}
const test=setTimeout(test1,500);

for (let i = 0; i < 1e10; i++) {
  console.log(test1);
  
}*/


/*const test=setTimeout(
  () => console.log('Hello after 0.5 seconds. MAYBE!'),
  500,
);

for (let i = 0; i < 1e10; i++) {
   console.log(test);
}
*/
const test3 = n => setTimeout(
  ()=>console.log('Hello after 0.5 seconds.MAYBE'),n*500,
  
);

for (let i=0;i<10;i++){
  test3(i);
}