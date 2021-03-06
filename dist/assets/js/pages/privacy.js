(function($) {
    window.optly = window.optly || {};
    window.optly.mrkt = window.optly.mrkt || {};
    try {
        window.optly.mrkt.checkRemarketingState = function() {
            if ($.cookie("remarketing")) {
                $("body").toggleClass("remarketing-opt-out");
                $("#remarketing-remove").addClass("disabled");
            }
        };
        window.optly.mrkt.checkRemarketingState();
        $("body").delegate("#remarketing-remove", "click", function() {
            $.cookie("remarketing", "true", {
                expires: 365,
                path: "/"
            });
            window.optly.mrkt.checkRemarketingState();
            $(this).addClass("disabled");
        });
    } catch (error) {
        window.console.log("js error: " + error);
    }
})(jQuery);