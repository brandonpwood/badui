function gen_random_page(page_list, weights){
    var new_list = [];
    for(let i =0; i < weights.length; i++){
        for(let j = 0; j < weights[i]; j++){
            new_list.push(page_list[i]);
        }
    }
    var selector = Math.floor(Math.random()*(new_list.length));
    return new_list[selector];
}

function get_random_page(){
    var pages = ["index.html", "font.html", "audio.html", "scroll.html", "pali.html", "appendix.html"]
    var weights = [1, 4, 2, 2, 2, 1]
    window.location.href = gen_random_page(pages, weights);
}
var reading_time = Math.ceil(Math.random()*15000);
console.log(reading_time);
setTimeout(() => {get_random_page();}, reading_time); 