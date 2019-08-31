const theOneFunc = () => {
    console.log('Hello after 4 seconds');
    setTimeout(
        () => {
          console.log('Hello after 8 seconds');
        },
        4 * 1000
      );
      

};

setTimeout(theOneFunc, 4 * 1000);

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
