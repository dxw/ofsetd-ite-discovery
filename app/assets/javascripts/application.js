/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


$(document).ready(function () {
    $("#accept").click(function () {
        $("#accept").fadeOut(function () {
            $("#accept").text(($("#accept").text() == 'Accept') ? 'Accepted' : 'Accept').fadeIn();
            $("#accept").toggleClass("accepted-active");
        })
    }),
    $("#accept-2").click(function () {
        $("#accept-2").fadeOut(function () {
            $("#accept-2").text(($("#accept-2").text() == 'Accept') ? 'Accepted' : 'Accept').fadeIn();
            $("#accept-2").toggleClass("accepted-active");
        })
    }),
    $("#accept-3").click(function () {
        $("#accept-3").fadeOut(function () {
            $("#accept-3").text(($("#accept-3").text() == 'Accept') ? 'Accepted' : 'Accept').fadeIn();
            $("#accept-3").toggleClass("accepted-active");
        })
    })
});
