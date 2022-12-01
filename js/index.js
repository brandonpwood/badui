
var messages = [
    "Welcome!",

    "This is an interactive text instantiation of the book Introductioun to Graph Algorithms by Cormen, Leiserson, Rivest, and Stein",

    "The goal of this book-object is to draw on user interface " +
    "aspects fromearlier technologies in a webpage to" +
    "explore what it means to be a book-object or a text",

    "The original intention of these  was to service " +
    "functionality, however",

    "I wrote a paper earlier on in the year that explores how skeuomorphs are subverted" +
    " by the Gutenberg Project (see below) to produce non-effective skeuomorphs",

    "The goal of this project is to take that idea further and develop " +
    "so-called anti-skeuomorphs that use motifs from old technology to hinder, " +
    "rather than aid, the users' understanding",

    "As a result, each page draws on some print or manuscript technology to " +
    "produce an antagonistic user experience",

    "The overall navigation scheme is, after a random amount of time, a random " +
    "is selected. I encourage some exploration of the concepts explored here, and " +
    "if you're really bored, to try to piece together what the flow of the chapter is",


    // "I wanted the overall experience to be unified in some way, and I thought there wouldn't"+
    // "be a better way than to impede a reading experience than to model page navigation"+
    // "after a univeristy course",

    // "While this isn't quite an anti-skeuomorph, the pedagogical methods are so outdated"+
    // "and so out of touch that, were they an art project labeled as an anti-skeuomorph,"+
    // " I'd believe you",

    // "Thus, page navigation is conducted at random, both in terms of reading time and"+
    // "which page occurs next",

    // "It may feel at times like you have to memorize parts of each page and recall that information at random to"+
    // "progress through the book",

    // "This is because you'll be expected to learn the content at a pace that matches that of your peers"+
    // "and we, here at Cornell, believe that exposure to a broad range of ideas and concepts"+
    // "is fundamental to a genuine education",

    // "It's named Stiles because, after some digging, it seems the earliest record of grading is attributable to a president of Yale, Ezra Stiles",
    "Please forgive me"
];


function display_messages() {
    for (let i = 0; i < messages.length; i++) {
        alert(messages[i]);
    }
}

// Couldn't get the right behavior from the window.onload event, or by using jquery or a defer tag
// So I've resorted to this hacky fix

setTimeout(() => { display_messages() }, 100); 
