var nodemailer = require('nodemailer')

$(document).ready(() => {

    $(".contact-page-link").on("click", () => {
        $("#portfolio-text").hide()
        $("#main-text").hide()
        $("#contact-form").show()
        console.log("click")
    })

    $(".about-page-link").on("click", () => {
        $("#contact-form").hide()
        $("#portfolio-text").hide()
        $("#main-text").show()
    })

    $(".portfolio-page-link").on("click", () => {
        $("#contact-form").hide()
        $("#main-text").hide()
        $("#portfolio-text").show()
    })

    $("#btn-email-submit").on("click", () => {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'jesse.sosnicki@gmail.com',
                pass: 'Romaglia89'
            }
        })

        var mailOptions = {
            from: $("#input-email").val(),
            to: 'jesse.sosnicki@gmail.com',
            subject: $("#input-subject").val(),
            text: $("#text-area").val()
        }

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })
    })
})