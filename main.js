//difficult to iterate through the json because the API is paginated. could probably do it with a lot more time and effort, but it doesn't seem worth it.

$(document).ready(function() {

    $('img').click(function() {
        console.log('clicked image');
        var houseName = $(this).attr('fullName');
        console.log(houseName)
        $.get("https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50",        function(res) {
            var htmlStr = "<h1>House Details</h1>";
            for(var i=0;i<res.length;i++) {
                console.log(res);
                if(houseName == res[i].name) {
                    console.log("true");
                    htmlStr += "<p>Name: " + res[i].name + "</p>";
                    console.log(res.name);
                    htmlStr += "<p>Words: " + res[i].words + "</p>";
                    htmlStr += "<p>Titles: "
                    for(var j=0;j<res[i].titles.length;j++) {
                        if(res[i].titles.length == 0) {
                            htmlStr += "None</p>";
                        }
                        else if(j == res[i].titles.length - 1){
                            htmlStr += res[i].titles[j]
                        }
                        else {
                            htmlStr += res[i].titles[j] + ", "
                        }
                    }
                }
                else {console.log("false")}
            }
            $('.info-box').html(htmlStr);
            return false;
        }, "json")

    })

})