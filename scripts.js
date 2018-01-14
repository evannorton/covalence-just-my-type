let $keyUpper = $("#keyboard-upper-container");
let $keyLower = $("#keyboard-lower-container");

$(document).keydown(function (e1) {
    let $shifted = e1.shiftKey;
    if (e1.shiftKey) {
        $($keyUpper).css("display", "block");
        $($keyLower).css("display", "none");
        console.log("shift pressed");
        $(document).keyup(function (e2) {
            console.log(e2.which);
            if (e2.which === 16) {
                $($keyUpper).css("display", "none");
                $($keyLower).css("display", "block");
            }
        });
    }
});