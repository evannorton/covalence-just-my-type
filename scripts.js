//vars
let $playButton = $("#play-button");
let $content = $("#target");
let $keyUpper = $("#keyboard-upper-container");
let $keyLower = $("#keyboard-lower-container");
let $sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];


//load page with button
$($playButton).click(function () {
    $($content).css("display", "block");
    $($playButton).css("display", "none");

    //toggle keyboards
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

    //highlight keys
    $(document).keypress(function (e) {
        console.log(e.which);
        let $key = $("#" + e.which);
        $($key).css("background-color", "yellow");
        $(document).keyup(function (e) {
            $($key).css("background-color", "#f5f5f5");
        });
    });
});