//vars
let $playButton = $("#play-button");
let $content = $("#target");
let $highlight = $("#yellow-block");
let $highlightPosition = 0;
let $keyUpper = $("#keyboard-upper-container");
let $keyLower = $("#keyboard-lower-container");
let $sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let $sentenceNumber = 0;
let $sentence = $sentences[$sentenceNumber];
let $charNumber = 0;
let $letter = $sentence.substring($charNumber, $charNumber + 1);

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
                if (e2.which === 16) {
                    $($keyUpper).css("display", "none");
                    $($keyLower).css("display", "block");
                }
            });
        }
    });

    //highlight keys
    $(document).keypress(function (e) {
        let $key = $("#" + e.which);
        $($key).css("background-color", "yellow");
        $(document).keyup(function (e) {
            $($key).css("background-color", "#f5f5f5");
        });
    });

    //typing test

    $("#sentence").text($sentence);
    $("#target-letter").text($letter);
    $(document).keypress(function (e) {
        if (e.which == $sentences[$sentenceNumber].charCodeAt($charNumber)) {
            $highlightPosition += 21;
            $($highlight).css("margin-left", $highlightPosition + "px");
            $charNumber++;
            $letter = $sentence.substring($charNumber, $charNumber + 1);
            $("#target-letter").text($letter);
            if ($charNumber === $sentence.length) {
                $sentenceNumber++;
                if ($sentenceNumber === $sentences.length) {
                    console.log("done");
                } else {
                    $sentence = $sentences[$sentenceNumber];
                    $("#sentence").text($sentence);
                    $charNumber = 0;
                    $letter = $sentence.substring($charNumber, $charNumber + 1);
                    $("#target-letter").text($letter);
                    $highlightPosition = 0;
                    $($highlight).css("margin-left", $highlightPosition + "px");
                }
            }
        }
    });
});