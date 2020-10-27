$(document).ready(function(){

//$('img').fadeOut("slow","linear");

//$('img').fadeIn("slow","linear");
loopInfinitely($('img'));

function loopInfinitely(elems) {
    var rand = 1 + Math.floor(Math.random() * 4) * 1000;//max of random 4 seconds
    setTimeout(function() {
        var i = 0;
        (function advanceElem() {
            if (elems.length <= i) {
                loopInfinitely(elems);
                return;
            }
            elems.eq(i).fadeIn(rand).delay(300).fadeOut(rand);
            setTimeout(advanceElem, rand*3+300);
            i++;
        })();
    }, rand);
}
});
