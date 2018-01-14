let $keyUpper = $("#keyboard-upper-container");
let $keyLower = $("#keyboard-lower-container");

$(document).keydown(function (event) {
    let $key = event.which;
    if ($key === 16) {
        $($keyUpper).css("display", "block");
        $($keyLower).css("display", "none");
        console.log("shift");
        $(document).keyup(function() {
            $($keyUpper).css("display", "none");
            $($keyLower).css("display", "block");
        });
    }
});