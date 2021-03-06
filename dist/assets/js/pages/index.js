(function($) {
    window.optly = window.optly || {};
    window.optly.mrkt = window.optly.mrkt || {};
    try {
        window.optly.mrktEng.index.testItOut = function(editURL) {
            window.location = "https://www.optimizely.com/edit?url=" + editURL;
        };
        $('input[type="text"]').focus();
        $("form").submit(function(e) {
            var inputVal = $('input[type="text"]').val();
            if (inputVal) {
                window.optly.mrktEng.index.testItOut(inputVal);
            } else {
                $('input[type="text"]').focus();
                console.log("");
            }
            e.preventDefault();
        });
    } catch (error) {
        window.console.log("js error: " + error);
    }
})(jQuery);