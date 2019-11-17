
function send(addr, port){
    var name = document.getElementById("nameInput").value;
    var score = document.getElementById("scoreInput").value;
    var url = 'http://' + addr +  ':' + port + '/data'
    console.log("Adding to db: " + name + ", " + score);
    console.log("To url : " + url);
    $.post(url, {name, score}, "json")
        .always(function(response) {
            console.log(response);
            //$('#scoreTable').ajax.reload();   Reload only table for higher efficiency
            location.reload();
        })

}

function test(word){
    console.log(word);
}