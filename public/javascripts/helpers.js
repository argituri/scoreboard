
function send(port){
    var name = document.getElementById("nameInput").value;
    var score = document.getElementById("scoreInput").value;
    console.log("Adding to db: " + name + ", " + score);
    $.post('http://localhost: ' + port + '/data',{name, score},(val, err) => {
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