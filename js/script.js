$(document).ready(() =>{

    $(".contact-page-link").on("click", () =>{
        $("#contact-form").show()
        $("#main-text").hide()
    })

    $(".about-page-link").on("click", () =>{
        $("#contact-form").hide()
        $("#main-text").show()
    })
})