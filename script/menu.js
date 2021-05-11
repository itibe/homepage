function get_menu_content(file){
    fetch(file)
        .then(x => x.text())
        .then(y => document.querySelector('#content').innerHTML = y);
}