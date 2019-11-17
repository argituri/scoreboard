function send(){
    var name = Document.getElementById("nameInput").value;
    var score = Document.getElementById("scoreInput").value;
    console.log("Adding to db: " + name + ", " + score);
    $.post('localhost:3000/data',{name, score},(val, err) => {
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