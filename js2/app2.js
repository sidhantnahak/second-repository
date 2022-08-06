console.log('we are at project2')

// constructor
function Book(name, author, type) {
    this.name = name
    this.author = author
    this.type = type
}

// display construstor
function Display() {

}

// add methods to display prototype
Display.prototype.add=function(book){
    // console.log('adding the book')
    tablebody=document.getElementById('tablebody')
    let uistring=`<tr>
    <td>${book.name}</td>
   <td>${book.author}</td>
   <td>${book.type}</td>
</tr>`
tablebody.innerHTML+=uistring
}
Display.prototype.clear=function(){
    let libraryform=document.getElementById('libraryform')
    libraryform.reset()
    // console.log('form cleared')
}


//add submit event listener to form
let libraryform = document.getElementById('libraryform')
libraryform.addEventListener('submit', libraryformsubmit)
function libraryformsubmit(e) {
    console.log('you are submitted the form')
    e.preventDefault();

    let name = document.getElementById('bookname').value
    let author = document.getElementById('author').value
    let type;
    let fiction = document.getElementById('bookname')
    let programming = document.getElementById('programming')
    let cooking = document.getElementById('cooking')

    if (fiction.checked) {
        type = fiction
    }
    else if (programming.checked) {
        type = programming
    }
    else if (cooking.checked) {
        type = cooking
    }
    let book = new Book(name, author, type)
    console.log(book)
     let display=new Display()
     display.add(book)
     display.clear()
}