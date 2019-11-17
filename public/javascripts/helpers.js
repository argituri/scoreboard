
function send(addr, port){
    var name = document.getElementById("nameInput").value;
    var score = document.getElementById("scoreInput").value;
    console.log("Adding to db: " + name + ", " + score);
    $.post('http://' + addr +  ': ' + port + '/data',{name, score},(val, err) => {
        console.log("JQuery db adding callback activated")
        if (err){
            console.log("Err: " + err)
            alert(err);
        } else {
            console.log("val : " + val);
        }
    });

}

function test(word){
    console.log(word);
}