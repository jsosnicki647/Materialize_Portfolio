$(document).ready(() =>{

    $(".contact-page-link").on("click", () =>{
        $("#portfolio-text").hide()
        $("#main-text").hide()
        $("#contact-form").show()
        console.log("click")
    })

    $(".about-page-link").on("click", () =>{
        $("#contact-form").hide()
        $("#portfolio-text").hide()
        $("#main-text").show()
    })

    $(".portfolio-page-link").on("click", () =>{
        $("#contact-form").hide()
        $("#main-text").hide()
        $("#portfolio-text").show()
    })


})