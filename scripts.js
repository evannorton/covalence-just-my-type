let $keyUpper = $("#keyboard-upper-container");
let $keyLower = $("#keyboard-lower-container");

//reads shift
$(document).keydown(function (e1) {
    if (e1.which === 16) {
        $($keyUpper).css("display", "block");
        $($keyLower).css("display", "none");
        $(document).keyup(function (e2) {
            console.log(e2.which);
            if (e2.which === 16) {
                $($keyUpper).css("display", "none");
                $($keyLower).css("display", "block");
            }
        });
    }
});

//reads keys
$(document).keypress(function (e3) {
    console.log(e3.which);
    let $key = $("#" + e3.which);
    $($key).css("background-color", "yellow");
    $(document).keyup(function (e3) {
        $($key).css("background-color", "#f5f5f5");
    });
});