
$(document).ready(() => {

    $(".contact-page-link").on("click", () => {
        $("#portfolio-text").hide()
        $("#main-text").hide()
        $("#contact-form").show()
    })

    $(".about-page-link").on("click", () => {
        $("#contact-form").hide()
        $("#portfolio-text").hide()
        $("#main-text").show()
        $("#page-title").text("Jesse Sosnicki | About")

    })

    $(".portfolio-page-link").on("click", () => {
        $("#contact-form").hide()
        $("#main-text").hide()
        $("#portfolio-text").show()
        $("#page-title").text("Jesse Sosnicki | Portfolio")
    })

    $("#nav-mobile").on("click", () => {
        $(".sidenav-overlay").click()
    })
})