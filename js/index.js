
var messages = [
    "Welcome!",
    
    "This is an interactive text instantiation of the book",

    "The goal of this book-object is to draw on user interface "+
    "aspects fromearlier technologies in a webpage to"+
    "explore what it means to be a book-object or a text",

    "The original intention of these  was to service"+
    "functionality, however",
    
    "I wrote a paper earlier on in the year that explores how skeuomorphs are subverted"+
    "by the Gutenberg Project (see below) to produce non-effective skeuomorphs",
    
    "The goal of this project is to take that idea further and develop "+
    "so-called anti-skeuomorphs that use motifs from old technology to hinder, "+
    "rather than aid, the users' understanding",
    
    "",

    "It's named Stiles because of this: after some digging it seems the earliest record of grading is attributable to a president of Yale, Ezra Stiles"
];


function display_messages(){
    for(let i = 0; i< messages.length; i++){
        alert(messages[i]);
    }
}

// Couldn't get the right behavior from the window.onload event, or by using jquery or a defer tag
// So I've resorted to this hacky fix
 
setTimeout(() => {display_messages()}, 100); 
