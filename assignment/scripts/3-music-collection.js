console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];
console.log(myCollection);
//function displayCollection(primesCollectionInput)  {
  //let primesCollectionList = document.querySelector('#prime-collection');
  //primesCollectionList.innerHTML = '';
  //for (let primesCollection of primesCollectionInput) {
   // console.log(primesCollection);
    //collectionsList.innerHTML += `
    //<div class = "the-collection">

     // <h2> ${myCollection.collection}</h2>
     // <p> Title: ${myCollection.title}</p>
     // <p> By Artist: ${myCollection.artist}</p>
      ////<p> Published: ${myCollection.yearPublished}</p>
//</div>`;
 // }
//}
//displayCollection(primesCollection);
//const primesCollection = myCollection;
//const myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
let collectionToAdd = {
  title: title,
  artist: artist,
  yearPublished: yearPublished,
};
  collection.push(collectionToAdd);
return collectionToAdd;
}
addToCollection(myCollection, 'Self Love', 'Coi Leray', 2023);
addToCollection(myCollection,'Sorry Mama','Lil Uzi Vert', 2023,);
addToCollection(myCollection, 'Return of the Mac','Mark Morrison', 1996,);
addToCollection(myCollection, 'Me & U','Casssie', 2006,);
addToCollection(myCollection, 'Candy','Cameo', 2023,);
addToCollection(myCollection, 'U Not Like Me','50 Cent', 2003,);

console.log(myCollection);

//Create a function named `showCollection`. This function should:
//- Take in a `collection` parameter. (This allows it to be reused to show any array of album objects!)
//- Loop over the `collection` and `console.log` each album's information formatted **within a single string**, like: `TITLE by ARTIST, published in YEAR`.

console.log('@function',)
function showCollection(myCollection) {
  for(let i = 0; i < myCollection.length; i++) {
    console.log(myCollection[i].title + ' by ' + myCollection[i].artist + ', published in '  + myCollection[i].yearPublished)
  }
};
showCollection(myCollection);

//- Add a function named `findByArtist`. This function should:
  //- Take in a `collection` parameter. Remember, we want to be able to search any collection!
 // - Take in an `artist` (string) parameter
 // - Create an empty array to hold any matching results, if any
  //- Loop through the `collection` and add any album objects with a matching artist to the array.
 // - Return the array with the matching results. (If no results are found, an empty array should be returned.)


 function findByArtist(myCollection, artist) {
let result = [];
for(let i = 0; i < myCollection.length; i++) {
  if (myCollection[i].artist == artist){
    addToCollection(result, myCollection[i].title, myCollection[i].artist, myCollection[i].yearPublished)
  }
}
console.log(result);

return result ;

 }
findByArtist(myCollection, '50 Cent');
//for(let key in myCollection) {
  //console.log(key);
 // console.log(myCollection[key]);
//}
  //function showCollection(myCollection){
   // for (let i = 0; i < myCollection.length; i++) {
//console.log( myCollection[i]);
//console.log(`${myCollection.title} by ${myCollection.artist}, published in ${myCollection.yearPublished}`) ;   
//if (i < myCollection.length){
    //for( i = 1; i<= object.keys(myCollection).length; i++){
      //console.log(myCollection [i]);
      
    
//if ( myCollection[i]= '') {
  //console.log( myCollection[i]);
  //console.log(`${myCollection.title} by ${myCollection.artist}, published in ${myCollection.yearPublished}`) ; 
//}
   // }
  //};
 ////showCollection(myCollection);


  
//} else {  (myCollection > myCollection.length)
 //return false
  


    //let newCollection = ['title' + 'artist' + 'yearPublished'];
    //for (i in newCollection){ 
      //console.log( newCollection[i]);

   // }

    

   // for (let collection of myCollection) {
      //console.log(collection);
     // console.log(myCollection[collection]);
      
    //}
  
  // your code here...
 








// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
