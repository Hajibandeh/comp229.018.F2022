
// function hello () {
//     document.getelementrybyID("demo").innerhtml += "Hello world";
// }

var hello;
hello=() => {
    document.getelementrybyID("demo").innerhtml += "this";
}
// A button object calles the function
// document.getElementById("btn").addEventListener("click", hello);
// document.getElementById("btn").addEventListener("click", () => {
//     document.getelementrybyID("demo").innerhtml += "this";
// });
////////////////////////////////////////////////////////////////////////

// var numberes = [1,2,3,4,5];
// const squares = numberes.map(n => n * n);
// document.write(squares);
// document.write("<br>");
// var evens = new ArrayBuffer();
// numberes.forEach(n => {

//     if (n % 2 === 0) {
 
//        evens.push(n);
 
//     }
 
//  });
//  document.write(evens);
//////////////////////////////////////////

const author = {

    fullName: "Bob Alice",
 
    books: [],
 
    printBooks() {
 
      this.books.forEach(book => console.log(book + ' by ' +
 
         this.fullName));
 
    }
    print books 1() {
    function printvalue(book) {
        document.write(book+ 'by' + this.fullname +'<br>');
    },
    printbook2()
    } 
 
 };