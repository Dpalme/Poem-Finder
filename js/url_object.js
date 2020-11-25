function url_object(){
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('o')){
        var id = urlParams.get('o');
        objects.forEach(object => {
            if (object.id == id) {
                document.getElementById("random-t").value = object.type;
                change_type(object.type);
                set_data(object);
            }
        })
    } else {
        change_type("album");
    }
}