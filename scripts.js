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
let $mistakes = 0;
let $isTimeCounting = false;
let $startDate;
let $startTime;

//load page with button
$($playButton).click(function () {
    $($content).css("display", "block");
    $("#menu").css("display", "none");

    //read for keydown
    $(document).keydown(function (e1) {
        //if pressed key == shift
        if (e1.which === 16) {
            //show uppercase keyboard
            $($keyUpper).css("display", "block");
            $($keyLower).css("display", "none");
            //read for keyup
            $(document).keyup(function (e2) {
                //if released key == shift
                if (e2.which === 16) {
                    //show lowercase keyboard
                    $($keyUpper).css("display", "none");
                    $($keyLower).css("display", "block");
                }
            });
        }
    });

    //read for keypress
    $(document).keypress(function (e) {
        //highlight pressed key
        let $key = $("#" + e.which);
        $($key).css("background-color", "yellow");
        //read for keyup
        $(document).keyup(function (e) {
            //unhighlight released key
            $($key).css("background-color", "#f5f5f5");
        });
    });

    //show current sentence on screen
    $("#sentence").text($sentence);
    //show target letter on screen
    $("#target-letter").text($letter);
    //read for keypress
    $(document).keypress(function (e) {
        //set start time
        if ($isTimeCounting === false) {
            $startDate = new Date();
            $startTime = $startDate.getTime();
            $isTimeCounting = true;
        }
        //if pressed key == desired key
        if (e.which == $sentences[$sentenceNumber].charCodeAt($charNumber)) {
            //make a green checkmark
            let $right = $("<span>✔</span>");
            $($right).addClass('green');
            $($right).appendTo("#feedback");
            //move highlight along sentence
            $highlightPosition += 21;
            $($highlight).css("margin-left", $highlightPosition + "px");
            //select and display next desired character
            $charNumber++;
            $letter = $sentence.substring($charNumber, $charNumber + 1);
            $("#target-letter").text($letter);
            //if sentence is complete
            if ($charNumber === $sentence.length) {
                //increment sentence number
                $sentenceNumber++;
                //if all sentences have been typed
                if ($sentenceNumber === $sentences.length) {
                    //set end time
                    let $endDate = new Date();
                    let $endTime = $endDate.getTime();
                    let $minutes = ($endTime - $startTime) / 60000;
                    //calculate words per minute
                    $wpm = Math.round(54 / $minutes - 2 * $mistakes);
                    //display results
                    var r = confirm("You type " + $wpm + " words per minute. Would you like to try again?");
                    //if user clicks okay
                    if (r == true) {
                        //reload page
                        location.reload();
                    }
                } else {
                    //go to next sentence
                    $sentence = $sentences[$sentenceNumber];
                    $("#sentence").text($sentence);
                    //go to first character
                    $charNumber = 0;
                    $letter = $sentence.substring($charNumber, $charNumber + 1);
                    $("#target-letter").text($letter);
                    //move highlighter back to beginning
                    $highlightPosition = 0;
                    $($highlight).css("margin-left", $highlightPosition + "px");
                    $("#feedback").text("");
                }
            }
        } else {
            //make a red X
            let $wrong = $("<span>✗</span>");
            $($wrong).addClass('red');
            $($wrong).appendTo("#feedback");
            //increment mistake counter
            $mistakes++;
        }
    });
});