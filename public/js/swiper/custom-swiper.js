var swiper = new Swiper("#hp-slider",{
    autoplay: {
        delay: 8e3,
        disableOnInteraction: !1
    },
    loop: !0,
    pagination: {
        el: ".swiper-pagination",
        clickable: !0
    }
});
swiper = new Swiper("#gallery-slider",{
    slidesPerView: 4,
    spaceBetween: 0,
    freeMode: !0,
    autoplay: {
        delay: 3800,
        disableOnInteraction: !1
    },
    loop: !0,
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 0
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
}),
swiper = new Swiper("#video-gallery-slider",{
    slidesPerView: 1,
    spaceBetween: 0
}),
jQuery(document).ready(function() {
    jQuery(".grivances-btn").click(function() {
        jQuery(".grivances-btn-nav").show(),
        jQuery(".ombudsman-btn-nav").hide(),
        jQuery(".info-btn-nav").hide(),
        jQuery(document).mouseup(function(e) {
            var t = jQuery(".grivances-btn-nav");
            t.is(e.target) || 0 !== t.has(e.target).length || t.fadeOut()
        })
    }),
    jQuery(".ombudsman-btn").click(function() {
        jQuery(".grivances-btn-nav").hide(),
        jQuery(".ombudsman-btn-nav").show(),
        jQuery(".info-btn-nav").hide(),
        jQuery(document).mouseup(function(e) {
            var t = jQuery(".ombudsman-btn-nav");
            t.is(e.target) || 0 !== t.has(e.target).length || t.fadeOut()
        })
    }),
    jQuery(".info-btn").click(function() {
        jQuery(".grivances-btn-nav").hide(),
        jQuery(".ombudsman-btn-nav").hide(),
        jQuery(".info-btn-nav").show(),
        jQuery(document).mouseup(function(e) {
            var t = jQuery(".info-btn-nav");
            t.is(e.target) || 0 !== t.has(e.target).length || t.fadeOut()
        })
    }),
    jQuery(".search-box-cls-contact-page").on("keyup", function() {
        var e = jQuery(this).val().toLowerCase();
        null !== e && "" !== e ? (jQuery(".for-search-functionality table tbody tr").filter(function() {
            jQuery(this).toggle(jQuery(this).text().toLowerCase().indexOf(e) > -1)
        }),
        jQuery(".not-search-functionality").hide(),
        jQuery(".for-search-functionality").show()) : (jQuery(".for-search-functionality").hide(),
        jQuery(".not-search-functionality").show())
    })
}),
jQuery(function() {
    var e = function(e, t) {
        this.el = e || {},
        this.multiple = t || !1,
        this.el.find(".link").on("click", {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    };
    e.prototype.dropdown = function(e) {
        var t = e.data.el;
        jQuerythis = jQuery(this),
        jQuerynext = jQuerythis.next(),
        jQuerynext.slideToggle(),
        jQuerythis.parent().toggleClass("open"),
        e.data.multiple || t.find(".submenu").not(jQuerynext).slideUp().parent().removeClass("open")
    }
    ,
    new e(jQuery(".hp_nav_accordion"),!1)
}),
jQuery(document).ready(function() {
    jQuery("#check").click(function() {
        jQuery(".basic-srch-btn").show(),
        jQuery("#check-box").slideDown("slow", function() {})
    }),
    jQuery(".basic-srch-btn").click(function() {
        jQuery("#check-box").slideUp("slow"),
        jQuery(".basic-srch-btn").hide()
    }),
    jQuery("#menu-item-39248 ul.sub-menu").addClass("right-menu"),
    jQuery("#menu-item-39248 ul").css("right", "100%"),
    jQuery("#menu-item-39249 ul.sub-menu").addClass("right-menu"),
    jQuery("#menu-item-39249 ul").css("right", "100%")
}),
swiper = new Swiper("div#logo-sliders",{
    slidesPerView: 8,
    spaceBetween: 15,
    loop: !0,
    freeMode: !0,
    speed: 5e3,
    keyboard: {
        enabled: !0,
        onlyInViewport: !1
    },
    mousewheel: {
        invert: !0
    },
    autoplay: {
        delay: 1e3,
        disableOnInteraction: !0
    },
    breakpoints: {
        1024: {
            slidesPerView: 8,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        481: {
            slidesPerView: 2,
            spaceBetween: 15
        }
    }
}),
jQuery("div#logo-sliders").each(function(e, t) {
    var a = t.swiper;
    jQuery(this).hover(function() {
        a.autoplay.stop()
    }, function() {
        a.autoplay.start()
    })
}),
swiper = new Swiper("#minster-slider",{
    pagination: {
        el: ".swiper-pagination"
    },
    autoplay: {
        delay: 1e4,
        disableOnInteraction: !1
    },
    slidesPerView: "auto",
    autoHeight: !1,
    autoWidth: !1,
    loop: !1
}),
swiper = new Swiper("#glance-slider",{
    pagination: {
        el: ".swiper-pagination"
    },
    autoplay: {
        delay: 3800,
        disableOnInteraction: !1
    },
    slidesPerView: "auto",
    autoHeight: !1,
    autoWidth: !1,
    loop: !1
}),
swiper = new Swiper("#banner-slider",{
    slidesPerView: 1,
    freeMode: !1,
    autoplay: {
        delay: 3800,
        disableOnInteraction: !0
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    loop: !0
}),
jQuery(document).ready(function() {
    jQuery(".notifi-btn").click(function() {
        jQuery(".circular-btn").removeClass("notification-active"),
        jQuery(this).addClass("notification-active")
    }),
    jQuery(".circular-btn").click(function() {
        jQuery(".notifi-btn").removeClass("notification-active"),
        jQuery(this).addClass("notification-active")
    }),
    jQuery("body.page-template-template_wing_division a.pdf_url").attr("target", "_blank"),
    jQuery("body.page-template-template_archive_wings_division a.pdf_url").attr("target", "_blank")
}),
jQuery(document).ready(function() {
    jQuery(".notifi-btn").click(function() {
        jQuery("#circular").css("display", "none"),
        jQuery("#notification").css("display", "block")
    }),
    jQuery(".circular-btn").click(function() {
        jQuery("#notification").css("display", "none"),
        jQuery("#circular").css("display", "block")
    })
}),
jQuery(document).ready(function() {
    jQuery("#logo-slider2").hover(function() {
        this.swiper.autoplay.stop()
    }, function() {
        this.swiper.autoplay.start()
    })
}),
swiper = new Swiper("div#logo-slider",{
    slidesPerView: 8,
    spaceBetween: 15,
    freeMode: !0,
    autoplay: {
        delay: 3800,
        disableOnInteraction: !1
    },
    loop: !0,
    breakpoints: {
        1024: {
            slidesPerView: 5,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});
var timeoutId, slideImage = function(e) {
    null == e && (e = 1),
    clearTimeout(timeoutId);
    var t = jQuery(".item:visible").index(".item");
    0 != e && jQuery(".item:visible").fadeOut(),
    (t += e) >= jQuery(".item").length ? t = 0 : t < 0 && (t = jQuery(".item").length - 1),
    0 != e && jQuery(".item:eq(" + t + ")").fadeIn(),
    timeoutId = setTimeout(slideImage, 9e3)
};
slideImage(0),
jQuery("#prev").click(function() {
    slideImage(-1)
}),
jQuery("#next").click(function() {
    slideImage(1)
}),
jQuery("#pause").click(function() {
    clearTimeout(timeoutId),
    jQuery(this).hide(),
    jQuery("#play").show()
}),
jQuery("#play").click(function() {
    slideImage(0),
    jQuery(this).hide(),
    jQuery("#pause").show()
});
