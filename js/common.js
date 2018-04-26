$('.sl').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    responsive: [{breakpoint: 700, settings: {arrows: false,}},]
});

function checkForm(form) {
    re = /^[а-я,і,І,А-Я,'`a-z,A-Z,\-]+$/;
    if (form.user_name.value == "") {
        alert("Помилка: Імя не може бути порожнім!");
        form.user_name.style.border = "3px solid red";
        form.user_name.style.borderColor = "red";
        form.user_name.focus();
        return false
    }
    if (!re.test(form.user_name.value)) {
        alert("Помилка: Недопустимий символ!");
        form.user_name.style.border = "3px solid red";
        form.user_name.style.borderColor = "red";
        form.user_name.focus();
        return false
    }
    form.user_name.style.border = "3px solid black";
    form.user_name.style.borderColor = "black";
    mf = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (form.email.value == "") {
        alert("Email не може бути порожнім");
        form.email.style.border = "3px solid red";
        form.email.style.borderColor = "red";
        form.email.focus();
        return false
    }
    if (!mf.test(form.email.value)) {
        alert("Ви ввели неправильну адресу електронної пошти!");
        form.email.style.border = "3px solid red";
        form.email.style.borderColor = "red";
        form.email.focus();
        return false
    }
    form.email.style.border = "3px solid black";
    form.email.style.borderColor = "black";
    if (form.comment.value == "") {
        alert("Помилка: Комментарій не може бути порожнім!");
        form.comment.style.border = "3px solid red";
        form.comment.style.borderColor = "red";
        form.comment.focus();
        return false
    }
    form.comment.style.border = "3px solid black";
    form.comment.style.borderColor = "black";
    alert("Thank you! Check your email for further details on data submitted.");
    form.thank - you - message.focus()
}

$(document).ready(function () {
    var textShowing = true;
    $(".open-menu").click(function () {
        if (textShowing) {
            $(".open-menu").hide(function () {
                textShowing = false
            });
            $(".non").show(function () {
                textShowing = false
            })
        }
    });
    $(".close-menu").click(function () {
        if (textShowing) {
            $(".non").hide(function () {
                textShowing = true
            })
        } else {
            $(".open-menu").show(function () {
                textShowing = true
            });
            $(".non").hide(function () {
                textShowing = true
            })
        }
    })
});
$(window).scroll(function () {
    $('.mov').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass('zoomIn')
        }
    })
});
$(window).scroll(function () {
    $('.ven').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass('wobble')
        }
    })
});
$(window).scroll(function () {
    $('.rotate').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass('rollIn')
        }
    })
});
$(window).scroll(function () {
    $('.vver').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass('slideInDown')
        }
    })
});
$(window).scroll(function () {
    $('.slideup').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass('slideInUp')
        }
    })
});
$(window).scroll(function () {
    $('.slideInLeftt').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass('bounceInLeft')
        }
    })
});
$(window).scroll(function () {
    $('.slideInRightt').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass('slideInRight')
        }
    })
});
$(window).scroll(function () {
    $('.flipp').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass('flipInX')
        }
    })
});
$(document).ready(function () {
    $(".top-menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'), top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000)
    })
});