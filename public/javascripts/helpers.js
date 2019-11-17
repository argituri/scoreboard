
function send(addr, port){
    var name = document.getElementById("nameInput").value;
    var score = document.getElementById("scoreInput").value;
    var url = 'http://' + addr +  ':' + port + '/data'
    console.log("Adding to db: " + name + ", " + score);
    console.log("To url : " + url);
    $.post(url, {name, score}, "json")
        .always(function(response) {
            console.log(response);
            $('#scoreTable').ajax.reload();
        })
    /*$.post(, {name, score})
        .done(function( data ) {
            console.log( "call made " + data );
        });
    /*$.post('http://' + addr +  ': ' + port + '/data',{name, score},(val, err) => {
        console.log("JQuery db adding callback activated")
        if (err){
            console.log("Err: " + err)
            alert(err);
        } else {
            console.log("val : " + val);
        }
    });*/

}

function test(word){
    console.log(word);
}