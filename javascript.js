var quotes=['sbv','shd','sdfg','sdfgkkuij'];


function myFunction() {

    // console.log(Math);
    // console.log(quotes);

   var randomNumber = Math.floor(Math.random()*(quotes.length));
//    console.log(randomNumber);
   document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];


  }