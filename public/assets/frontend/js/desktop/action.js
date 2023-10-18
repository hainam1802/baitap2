// function HideReview(n, t) {
//     confirm("Bạn có muốn ẩn đánh giá này!") && $.post("/api/review/hide", {
//         id: n
//     }, function(n) {
//         if (n.Errors) $.toast({
//             heading: "Có lỗi xảy ra.",
//             text: n.Title,
//             showHideTransition: "fade",
//             icon: "error",
//             hideAfter: 15e3
//         });
//         else {
//             $.toast({
//                 heading: n.Title,
//                 showHideTransition: "fade",
//                 icon: "success",
//                 hideAfter: 5e3
//             });
//             var r = $(t).parent().find("input[name=commentReq]").val(),
//                 i = JSON.parse(r);
//             console.log(i);
//             $.post(i.path, i, function(n) {
//                 $(t).parent().html(n)
//             })
//         }
//     })
// }
//
// function RemoveReview(n, t) {
//     confirm("Bạn có muốn xóa đánh giá này!") && $.post("/api/review/remove", {
//         id: n
//     }, function(n) {
//         if (n.Errors) $.toast({
//             heading: "Có lỗi xảy ra.",
//             text: n.Title,
//             showHideTransition: "fade",
//             icon: "error",
//             hideAfter: 15e3
//         });
//         else {
//             $.toast({
//                 heading: n.Title,
//                 showHideTransition: "fade",
//                 icon: "success",
//                 hideAfter: 5e3
//             });
//             var r = $(t).parent().find("input[name=commentReq]").val(),
//                 i = JSON.parse(r);
//             console.log(i);
//             $.post(i.path, i, function(n) {
//                 $(t).parent().html(n)
//             })
//         }
//     })
// }
//
// function HideComment(n, t) {
//     confirm("Bạn có muốn ẩn bình luận này!") && $.post("/api/comment/hide", {
//         id: n
//     }, function(n) {
//         if (n.Errors) $.toast({
//             heading: "Có lỗi xảy ra.",
//             text: n.Title,
//             showHideTransition: "fade",
//             icon: "error",
//             hideAfter: 15e3
//         });
//         else {
//             $.toast({
//                 heading: n.Title,
//                 showHideTransition: "fade",
//                 icon: "success",
//                 hideAfter: 5e3
//             });
//             var r = $(t).parent().find("input[name=commentReq]").val(),
//                 i = JSON.parse(r);
//             console.log(i);
//             $.post(i.path, i, function(n) {
//                 $(t).parent().html(n)
//             })
//         }
//     })
// }
//
// function RemoveComment(n, t) {
//     confirm("Bạn có muốn xóa bình luận này!") && $.post("/api/comment/remove", {
//         id: n
//     }, function(n) {
//         if (n.Errors) $.toast({
//             heading: "Có lỗi xảy ra.",
//             text: n.Title,
//             showHideTransition: "fade",
//             icon: "error",
//             hideAfter: 15e3
//         });
//         else {
//             $.toast({
//                 heading: n.Title,
//                 showHideTransition: "fade",
//                 icon: "success",
//                 hideAfter: 5e3
//             });
//             var r = $(t).parent().find("input[name=commentReq]").val(),
//                 i = JSON.parse(r);
//             console.log(i);
//             $.post(i.path, i, function(n) {
//                 $(t).parent().html(n)
//             })
//         }
//     })
// }

function scrollTopFunction() {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? $("#backtoTop").show() : $("#backtoTop").hide()
}

function timer(n, t, i) {
    var u = new Date(i).getTime(),
        f = new Date(t).getTime(),
        r = (u - f) / 1e3,
        e = setInterval(function() {
            var t;
            r--;
            totalSeconds = r;
            t = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            var u = Math.floor(totalSeconds / 60),
                f = totalSeconds % 60,
                s = t > 9 ? t : "0" + t,
                h = u > 9 ? u : "0" + u,
                c = f > 9 ? f : "0" + f,
                i = s + ":" + h + ":" + c,
                o = "";
            for (let n = 0; n < i.split("").length; n++) o += i[n] == ":" ? "<span> " + i[n] + " <\/span>" : "<strong> " + i[n] + " <\/strong>";
            document.getElementById(n).innerHTML = o;
            r < 0 && (clearInterval(e), document.getElementById(n).innerHTML = "")
        }, 1e3)
}

// function init_Review() {
//     var t = $("#reviewForm"),
//         n = $(t).serializeObject(),
//         i;
//     ajaxLoadReview(n.ModelID, n.SystemTypeID, 1, $("#reviews .review-content"));
//     i = {
//         max_value: 5,
//         step_size: .5,
//         selected_symbol_type: "hhicon",
//         cursor: "default",
//         readonly: !1,
//         change_once: !1
//     };
//     $(".rating").rate(i);
//     $(".rating").on("change", function(i, r) {
//         var u = validateForm(t);
//         u == "" ? ($(t).find("input[name=Rate]").val(r.to), n = $(t).serializeObject(), $.post("/api/review", n, function(i) {
//             i.Errors ? $.toast({
//                 heading: "Có lỗi khi gửi review.",
//                 text: i.Message,
//                 showHideTransition: "fade",
//                 icon: "error",
//                 hideAfter: 15e3
//             }) : ($.toast({
//                 heading: i.Title,
//                 showHideTransition: "fade",
//                 icon: "success",
//                 hideAfter: 15e3
//             }), $(t).find("textarea").val(""), ajaxLoadReview(n.ModelID, n.SystemTypeID, 1, $("#reviewContent")))
//         })) : $.toast({
//             heading: "Bạn cần kiểm tra lại thông tin.",
//             text: u,
//             showHideTransition: "fade",
//             icon: "error",
//             hideAfter: 15e3
//         })
//     })
// }

function init_Comment() {
    var t = $("#comments form"),
        n = $(t).serializeObject();
    ajaxLoadComment(n.ModelID, n.SystemTypeID, 1, $("#commentContent"), 0, !0)
}

function ajaxLoadReview(n, t, i, r) {
    var u = {
        path: "/ajax/review",
        modelId: n,
        systemTypeId: t,
        p: 1
    };
    $.post(u.path, u, function(n) {
        $(r).html(n)
    })
}

function ajaxLoadComment(n, t, i, r, u, f) {
    var e = {
        path: "/ajax/comment",
        modelId: n,
        systemTypeId: t,
        parent: u,
        child: f,
        p: 1
    };
    $.post(e.path, e, function(n) {
        $(r).html(n)
    })
}

function displayRate(n) {
    $(n).rate({
        max_value: 5,
        step_size: .5,
        selected_symbol_type: "hhicon",
        cursor: "default",
        readonly: !0
    })
}

function init_cityChange(n) {
    $("#SystemCityID").change(function() {
        var t = $(this).val(),
            i = n,
            r = "/Ajax/District?CityID=" + t + "&DistrictID=" + i;
        $.get(r, function(n) {
            $("#SystemDistrictID").html(n)
        })
    });
    var t = $.cookie("_city");
    t && $("#SystemCityID").val(t);
    $("#SystemCityID").change()
}

function init_cityMarketChange(n) {
    $("#MKSystemCityID").change(function() {
        var t = $(this).val(),
            i = n,
            r = "/Ajax/Market?CityID=" + t + "&MarketID=" + i;
        $.get(r, function(n) {
            $("#SystemMarketID").html(n)
        })
    });
    var t = $.cookie("_city");
    t && $("#MKSystemCityID").val(t);
    $("#MKSystemCityID").change()
}

function validatePhone(n) {
    return /((09|03|07|08|05)+([0-9]{8})\b)/g.test(n)
}

function validateEmail(n) {
    return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(n) == !1 ? !1 : !0
}

// function updateViewProduct(n) {
//     $.post("/api/product/updateview/" + n)
// }
//
// function updateViewRepair(n) {
//     $.post("/api/repair/updateview/" + n)
// }

function validateForm(n) {
    var e = $(n).serializeObject(),
        o = "";
    for (var t in e) {
        var r = "",
            u = e[t],
            s = u != "",
            h = $(n).find(" *[name=" + t + "]").attr("placeholder"),
            i = $(n).find(" *[name=" + t + "]").attr("title"),
            c = $(n).find("*[name=" + t + "]").attr("data-required"),
            f = $(n).find("*[name=" + t + "]").attr("data-minlength"),
            l = $(n).find("*[name=" + t + "]").attr("type") == "tel",
            a = $(n).find("*[name=" + t + "]").attr("type") == "email",
            v = $(n).find("*[name=" + t + "]").attr("type") == "number";
        i = i ? i : h;
        i = i ? i : t;
        c && u == "" ? r += "Bạn cần nhập " + i + "<br />" : l && s && !validatePhone(u) ? r += i + " không đúng định dạng<br />" : a && s && !validateEmail(u) ? r += i + " không đúng định dạng<br />" : f != "" && parseInt(f) > 0 && parseInt(f) > u.length && u != "" && (r += i + " Cần nhập tối thiêu " + f + " ký tự<br />");
        r != "" ? ($(n).find("*[name=" + t + "]").addClass("errors"), $(n).find("*[name=" + t + "]").parent().addClass("errors")) : $(n).find("*[name=" + t + "]").parent().removeClass("errors");
        o += r
    }
    return o
}

function submitSearch(n) {
    var t = $(n).find("#kwd").val();
    if (t == "") return $.toast({
        heading: "Chú ý.!",
        text: "Vui lòng nhập từ khóa tìm kiếm.",
        icon: "error"
    }), !1
}

function submitSubscription(n) {
    var t = $(n).find("#email").val();
    return validateEmail(t) ? $.post("/Ajax/AddSubScription", $(n).serialize(), function(t) {
        t.Errors ? $.toast({
            heading: "Lỗi",
            text: t.Message,
            icon: "error"
        }) : ($.toast({
            heading: "Đăng ký thành công.!",
            text: t.Message,
            icon: "success"
        }), $(n).find("#email").val(""))
    }) : $.toast({
        heading: "Lỗi",
        text: "Email không hợp lệ, vui lòng kiểm tra lại.",
        icon: "error"
    }), !1
}

// function compareAutocomplete(n) {
//     $("#kwdCompare").autocomplete({
//         serviceUrl: "/api/search?template=" + n.template + "&ptype=" + n.ptype + "&ignore=" + n.ignore,
//         deferRequestBy: 200,
//         maxHeight: 350,
//         formatResult: autoComplateFormat
//     })
// }

function autoComplateFormat(n) {
    var t = '<div class="search-item" onclick="location.href=\'' + n.data.uid + "'\">";
    return t += '<div class="img"><img src="' + n.data.image + '" /><\/a><\/div>', t += '   <div class="info">', t += '       <h2><a href="' + n.data.uid + '">' + n.data.title + "<\/a><\/h2>", t += "       <h3><strike>" + n.data.lastprice + "<\/strike> " + n.data.price + "<\/h3>", t += "   <\/div>", t += "<\/div>", t + "<\/div>"
}

function init_quickSub() {
    $(".quick-order-form .options .option a").click(function() {
        var n = $(this).attr("data-id");
        n = n ? n : 0;
        $("#colorId").val(n);
        $("a.selectedOption").find("i.icon-checked").addClass("icon-border").removeClass("icon-checked");
        $("a.selectedOption").addClass("changeOption").removeClass("selectedOption");
        $(this).addClass("selectedOption").removeClass("changeOption");
        $(this).find("i.icon-border").addClass("icon-checked").removeClass("icon-border")
    });
    var n = Math.max.apply(null, $(".options .option a").map(function() {
        return $(this).width()
    }).get());
    $(".options .option a").width(n)
}

function init_quickOrder() {
    $("a.changeOption").click(function() {
        var i = $(this).attr("data-sku"),
            n = $(this).attr("data-id"),
            t;
        n = n ? n : 0;
        t = "/ajax/quickorder?skuId=" + i + "&colorId=" + n;
        postValue = $("#quickForm").serializeObject();
        $.post(t, postValue, function(n) {
            $("#popup-modal").html(n).modal({
                escapeClose: !1,
                clickClose: !1,
                closeClass: "icon-minutes",
                closeText: " "
            })
        })
    });
    $("input.cart-promote:not(:checked)").click(function() {
        var n = [];
        $("input.cart-promote:checked").each(function() {
            n.push($(this).val())
        });
        var t = n.join(","),
            i = $("#quickForm input[name=SKU]").val(),
            r = $("#quickForm input[name=COLOR]").val(),
            u = "/ajax/quickorder?skuId=" + i + "&colorId=" + r + "&offerId=" + t;
        postValue = $("#quickForm").serializeObject();
        $.post(u, postValue, function(n) {
            $("#popup-modal").html(n).modal({
                escapeClose: !1,
                clickClose: !1,
                closeClass: "icon-minutes",
                closeText: " "
            })
        })
    });
    $(".control #btnMinutes").click(function() {
        var n = $(".control #Number").val(),
            t, i;
        return n = n > 1 ? n - 1 : n, $(".control #Number").val(n), t = $("#quickOrderPrice").attr("data-value"), i = t * n, $("#quickOrderPrice").text((new Intl.NumberFormat).format(i)), t = $("#quickOrderPriceLast").attr("data-value"), i = t * n, $("#quickOrderPriceLast").text((new Intl.NumberFormat).format(i)), !1
    });
    $(".control #btnPlus").click(function() {
        var n = $(".control #Number").val(),
            t, i;
        return n++, $(".control #Number").val(n), t = $("#quickOrderPrice").attr("data-value"), i = t * n, $("#quickOrderPrice").text((new Intl.NumberFormat).format(i)), t = $("#quickOrderPriceLast").attr("data-value"), i = t * n, $("#quickOrderPriceLast").text((new Intl.NumberFormat).format(i)), !1
    });
    $(".cart-paymentTypeId").click(function() {
        var n = $(this).val();
        $(".payment-opt").removeClass("payment-selected");
        n == 1 ? ($("#payType_1").addClass("payment-selected"), $("#f_payType_1").show(), $("#f_payType_5").hide(), $("#SystemCityID, #SystemDistrictID, #Address").attr("data-required", 1), $("#SystemMarketID").removeAttr("data-required")) : ($("#payType_5").addClass("payment-selected"), $("#f_payType_5").show(), $("#f_payType_1").hide(), $("#SystemMarketID").attr("data-required", 1), $("#SystemCityID, #SystemDistrictID, #Address").removeAttr("data-required"));
        $("#SystemCityID").change();
        $("#MKSystemCityID").change()
    });
    $(".cart-paymentTypeId:checked").click();
    var n = Math.max.apply(null, $(".options .option a").map(function() {
        return $(this).width()
    }).get());
    $(".options .option a").width(n)
}

// function wishProduct(n, t) {
//     var i = '<div class="cart-msg">';
//     t ? $.post("/api/account/wish", {
//         ID: n
//     }, function(n) {
//         n.Errors || $(".love-this-button a").toggleClass("inlist");
//         i += '<p><i class="icon-checked text-red"><\/i> <span>' + n.Title + "<\/span><\/p>";
//         i += '<a class="button button-red" href="/account/wishlist">Quản lý danh sách<\/a>';
//         i += "<\/div>";
//         $.toast({
//             text: i,
//             position: "bottom-center",
//             stack: !1,
//             loader: !1,
//             hideAfter: 5e3
//         })
//     }) : (i += '<p><i class="icon-minutes text-red"><\/i> <span>Bạn cần đăng nhập để sử dụng chức năng này<\/span><\/p>', i += '<a class="button button-red" href="/account/login">Đăng nhập/Đăng ký<\/a>', i += "<\/div>", $.toast({
//         text: i,
//         position: "bottom-center",
//         stack: !1,
//         loader: !1,
//         hideAfter: 5e3
//     }))
// }

// function checkWarranty(n) {
//     var t = $(n),
//         i = validateForm(t),
//         r = $(n).parent().find(".warranty-info");
//     return i == "" ? (postValue = $(t).serializeObject(), $.post("/api/warranty", postValue, function(n) {
//         n.type ? location.href = n.url : n.ok ? ($.toast({
//             text: "Tìm thấy thông tin bảo hành.",
//             showHideTransition: "fade",
//             hideAfter: 5e3
//         }), $(".container .title").text(n.title), $(".container .imei").text(n.imei), $(".container .buyDate").text(n.buyDate), $(".container .expiryDate").text(n.expiryDate), $(".container .store").text(n.store), $(".container .found").show(), $(".container .not-found").hide()) : ($.toast({
//             text: "Không tìm thấy thông tin bảo hành.",
//             showHideTransition: "fade",
//             hideAfter: 5e3
//         }), $(".container .imei").text(postValue.IMEI), $(".container .found").hide(), $(".container .not-found").show())
//     })) : $.toast({
//         heading: "Bạn cần nhập mã IEMI của sản phẩm.",
//         text: i,
//         showHideTransition: "fade",
//         icon: "error",
//         hideAfter: 5e3
//     }), !1
// }

// function validFormCheckOrder(n) {
//     var t = $(n),
//         i = validateForm(t);
//     return i == "" ? (postValue = $(t).serializeObject(), $.post("/api/order/check", postValue, function(n) {
//         n.Errors ? $.toast({
//             text: n.Title,
//             showHideTransition: "fade",
//             icon: "error",
//             hideAfter: 15e3
//         }) : ($.toast({
//             text: n.Title,
//             showHideTransition: "fade",
//             icon: "success",
//             hideAfter: 5e3
//         }), setTimeout(function() {
//             location.href = n.Message
//         }, 500))
//     })) : $.toast({
//         heading: "Bạn cần nhập mã đơn hàng.",
//         text: i,
//         showHideTransition: "fade",
//         icon: "error",
//         hideAfter: 15e3
//     }), !1
// }

// function validFormQuickSub(n) {
//     var t = $(n),
//         i = validateForm(t);
//     return i == "" ? (postValue = $(t).serializeObject(), $.post("/api/cart/quicksub", postValue, function(n) {
//         n.Errors ? $.toast({
//             heading: "Có lỗi khi gửi thông tin đăng ký.",
//             text: n.Message,
//             showHideTransition: "fade",
//             icon: "error",
//             hideAfter: 1e4
//         }) : ($.toast({
//             heading: n.Title,
//             text: n.Message,
//             showHideTransition: "fade",
//             icon: "success",
//             position: "bottom-center",
//             hideAfter: 1e4
//         }), $("#popup-modal a.close-modal").click())
//     })) : $.toast({
//         heading: "Bạn cần kiểm tra lại thông tin.",
//         text: i,
//         showHideTransition: "fade",
//         icon: "error",
//         hideAfter: 1e4
//     }), !1
// }

function validFormQuickOrder(n) {
    var i = $(n),
        r = validateForm(i),
        u = $("#quickForm button[type=submit]").attr("disabled"),
        t;
    return r != "" || u ? $.toast({
        heading: "Bạn cần kiểm tra lại thông tin.",
        text: r,
        showHideTransition: "fade",
        icon: "error",
        hideAfter: 1e4
    }) : (t = [], $("#quickFormPromote").find(":checked").each(function() {
        t.push($(this).val())
    }), $("#quickForm #Promote").val(t.join(",")), postValue = $(i).serializeObject(), $("#quickForm button[type=submit]").text("ĐANG GỬI THÔNG TIN...").attr("disabled", "disabled"), $.post("/api/cart/quickorder", postValue, function(n) {
        n.Errors ? $.toast({
            heading: "Có lỗi khi gửi thông tin đơn hàng.",
            text: n.Message,
            showHideTransition: "fade",
            icon: "error",
            hideAfter: 1e4
        }) : ($.toast({
            heading: n.Title,
            text: n.Message,
            showHideTransition: "fade",
            icon: "success",
            position: "bottom-center",
            hideAfter: 1e4
        }), $("#popup-modal a.close-modal").click(), setTimeout(function() {
            location.href = n.Link + "?success=1"
        }, 1e3));
        $("#quickForm button[type=submit]").text("TIẾN HÀNH ĐẶT HÀNG").removeAttr("disabled")
    })), !1
}

// function validFormOrder(n) {
//     var t = $(n),
//         i = validateForm(t);
//     return i == "" ? (postValue = $(t).serializeObject(), $.post("/api/cart/checkout", postValue, function(n) {
//         n.Errors ? $.toast({
//             heading: "Có lỗi khi gửi thông tin đơn hàng.",
//             text: n.Message,
//             showHideTransition: "fade",
//             icon: "error",
//             hideAfter: 15e3
//         }) : ($.toast({
//             heading: n.Title,
//             showHideTransition: "fade",
//             icon: "success",
//             hideAfter: 15e3
//         }), location.href = "/cart/checkout")
//     })) : $.toast({
//         heading: "Bạn cần kiểm tra lại thông tin.",
//         text: i,
//         showHideTransition: "fade",
//         icon: "error",
//         hideAfter: 15e3
//     }), !1
// }

function cartGetCookie() {
    var t = [],
        n = $.cookie("_cart");
    return n && n != "null" && (t = JSON.parse(n)), t
}

function cartChangeOffer(n) {
    var t = cartGetCookie(),
        r = t.findIndex(t => t.sku == n),
        i;
    r >= 0 && (i = [], $("#of_" + n).find(":checked").each(function() {
        i.push($(this).val())
    }), t[r].offer = i);
    $.cookie("_cart", JSON.stringify(t), {
        path: "/"
    });
    console.log(t);
    cartReload()
}

function cartMinutes(n) {
    var t = cartGetCookie(),
        i = t.findIndex(t => t.sku == n);
    if (i >= 0) {
        if (t[i].number == 1) {
            cartDelete(n);
            return
        }
        t[i].number--;
        $.cookie("_cart", JSON.stringify(t), {
            path: "/"
        })
    }
    cartReload()
}

function cartPlus(n) {
    var t = cartGetCookie(),
        i = t.findIndex(t => t.sku == n);
    i >= 0 && (t[i].number++, $.cookie("_cart", JSON.stringify(t), {
        path: "/"
    }));
    cartReload()
}

function cartChange() {
    cartReload()
}

function cartDelete(n) {
    var t = cartGetCookie(),
        i = t.findIndex(t => t.sku == n);
    i >= 0 && (t.splice(i, 1), $.cookie("_cart", JSON.stringify(t), {
        path: "/"
    }));
    cartReload()
}

function cartEdit() {
    cartReload()
}

function cartReload() {
    var t = cartGetCookie(),
        n;
    t.length > 0 ? (n = "/Ajax/CartItems", $.get(n, function(n) {
        $("#cartInfo").html(n)
    })) : location.href = "/gio-hang"
}

function btnInstallment() {
    $(".btnInstallment").click(function() {
        var n = $(".btnInstallment").hasClass("disabled") || $(".btnQuickOrder").hasClass("btn-outstock");
        if (n) return !1
    })
}

// function AddCart() {
//     $(".add-cart").not(".disabled").not(".btn-outstock").click(function(n) {
//         var o = $(this),
//             s = $(".add-cart").hasClass("disabled") || $(".btnQuickOrder").hasClass("btn-outstock"),
//             t, i;
//         if (!s) {
//             var u = [],
//                 f = $(this).attr("data-sku"),
//                 r = $("#colorOptions .selected").attr("data-id"),
//                 e = $(this).attr("data-colorid");
//             f.indexOf(",") > 0 ? u = f.split(",") : u.push(f);
//             t = cartGetCookie();
//             u.forEach(function(n) {
//                 if (t) {
//                     var i = t.findIndex(t => t.sku == n);
//                     r && e != "-1" && (i = t.findIndex(t => t.sku == n && t.color == r));
//                     i >= 0 ? t[i].number++ : (t.push({
//                         sku: n,
//                         number: 1,
//                         color: e ? e : r
//                     }), flyToElement(o, $("#cart-total")))
//                 } else t.push({
//                     sku: n,
//                     number: 1,
//                     color: r
//                 })
//             });
//             $.cookie("_cart", JSON.stringify(t), {
//                 path: "/"
//             });
//             checkTotalCart();
//             n.preventDefault();
//             this.blur();
//             i = '<div class="cart-msg">';
//             i += '<p><i class="icon-checked"><\/i> <span>Thêm giỏ hàng thành công<\/span><\/p>';
//             i += '<a class="button" href="/gio-hang">Xem giỏ hàng và thanh toán<\/a>';
//             i += "<\/div>";
//             $.toast({
//                 text: i,
//                 position: "bottom-center",
//                 stack: !1,
//                 loader: !1,
//                 hideAfter: 1e4
//             })
//         }
//     });
//     checkTotalCart()
// }

function checkTotalCart() {
    var t = 0,
        n = cartGetCookie();
    n && n.length > 0 && (t = n.reduce(function(n, t) {
        return n + t.number
    }, 0));
    $("#cart-total").text(t)
}

// function outStockMessage() {
//     var n = $(".check-stock .store ul li.instock").not(".hide").length <= 0,
//         t = $("#colorOptions .selected").attr("data-buyonline") == "false",
//         i = $("#colorOptions .selected").attr("data-name");
//     $("p span.colorName").text(" - " + i);
//     n || t ? t && !n ? ($("p.out-noonline").show(), $("p.out-stock").hide()) : n && ($("p.out-stock").show(), $("p.out-noonline").hide()) : ($("p.out-stock").hide(), $("p.out-noonline").hide());
//     $(".product-action .btnbuy").removeClass("btn-outstock")
// }

function replyCommentReview() {
    $(".replyReviewHolder input").focus(function() {
        var i = $(this).attr("data-id"),
            r = $(this).parent(),
            t, n;
        $(r).hide();
        t = $("#replyReviewTemplate").html();
        n = $(this).parent().parent().find(".form-container");
        $(n).html(t);
        $(n).find("input[name=ModelID]").val(i);
        $(n).find("textarea").focus()
    });
    commentReviewPager()
}

function replyCommentComment() {
    $(".replyCommentHolder input").focus(function() {
        var i = $(this).attr("data-id"),
            r = $(this).parent(),
            t, n;
        $(r).hide();
        t = $("#replyCommentTemplate").html();
        n = $(this).parent().parent().find(".form-container");
        $(n).html(t);
        $(n).find("input[name=SupportCommentID]").val(i);
        $(n).find("textarea").focus()
    });
    commentReviewPager()
}

function commentReviewPager() {
    $(".review-content ol li a").not(".active").off();
    $(".review-content ol li a").not(".active").click(function() {
        var n = $(this).attr("data-req"),
            t, i;
        return n && (n = decodeURIComponent(n), t = $(this).parent().parent().parent(), i = JSON.parse(n), $.post(i.path, i, function(n) {
            $(t).html(n);
            scrollTo($(t))
        })), !1
    })
}

// function replyComment(n) {
//     var t = $(n),
//         i = validateForm(t),
//         r = $(n).attr("data-container"),
//         u = $(n).attr("data-child") == "true",
//         f = $(n).parent().parent().find(r);
//     return i == "" ? (postValue = $(t).serializeObject(), $.post("/api/comment", postValue, function(n) {
//         if (n.Errors) $.toast({
//             heading: "Có lỗi khi gửi bình luận.",
//             text: n.Message,
//             showHideTransition: "fade",
//             icon: "error",
//             hideAfter: 15e3
//         });
//         else {
//             $.toast({
//                 heading: n.Title,
//                 showHideTransition: "fade",
//                 icon: "success",
//                 hideAfter: 15e3
//             });
//             $(t).find("textarea").val("");
//             var i = postValue.SupportCommentID ? postValue.SupportCommentID : 0;
//             ajaxLoadComment(postValue.ModelID, postValue.SystemTypeID, 1, f, i, u)
//         }
//     })) : $.toast({
//         heading: "Bạn cần kiểm tra lại thông tin.",
//         text: i,
//         showHideTransition: "fade",
//         icon: "error",
//         hideAfter: 15e3
//     }), !1
// }

function showSticker(n) {
    var t = $.cookie("sticker_" + n),
        i;
    (t == "undefined" || t == null) && (i = "/Ajax/AdsStickerFooter/" + n, $.post(i, function(n) {
        $("#sticker-modal").html(n)
    }))
}

function showPopup(n) {
    var t = $.cookie("popup_" + n),
        i;
    (t == "undefined" || t == null) && (i = "/Ajax/AdsPopup/" + n, $.post(i, function(n) {
        n != "" && $("#popup-modal").html(n).modal({
            closeClass: "icon-minutes",
            closeText: " "
        })
    }))
}

function scrollTo(n) {
    $("html, body").animate({
        scrollTop: $(n).offset().top - 50
    }, 500)
}

function flyToElement(n, t) {
    var e = $(this),
        r = 3,
        i = $(n).clone(),
        u, f;
    $(i).css({
        position: "absolute",
        top: $(n).offset().top + "px",
        left: $(n).offset().left + "px",
        opacity: 1,
        "z-index": 1e3
    });
    $("body").append($(i));
    u = $(t).offset().left + $(t).width() / 2 - $(n).width() / r / 2;
    f = $(t).offset().top + $(t).height() / 2 - $(n).height() / r / 2;
    $(i).animate({
        opacity: .4,
        left: u,
        top: f,
        width: $(n).width() / r,
        height: $(n).height() / r
    }, 500, function() {
        $(t).fadeOut("fast", function() {
            $(t).fadeIn("fast", function() {
                $(i).fadeOut("fast", function() {
                    $(i).remove()
                })
            })
        })
    })
}

function hh_home() {
    $(".lr-slider").owlCarousel({
        items: 5,
        nav: !0,
        itemClass: "lr-item",
        loop: !1,
        autoplay: !0,
        autoplayHoverPause: !0
    });
    window.jssor_1_slider_init = function() {
        function n() {
            var f = t.$Elmt.parentNode,
                i = f.clientWidth,
                u;
            i ? (u = Math.min(r || i, i), t.$ScaleWidth(u)) : window.setTimeout(n, 30)
        }
        var i = {
                $class: $JssorSlideshowRunner$,
                $AutoPlay: 1,
                $FillMode: 2,
                $SlideDuration: 500,
                $Idle: 1e4,
                $ArrowNavigatorOptions: {
                    $Class: $JssorArrowNavigator$
                },
                $ThumbnailNavigatorOptions: {
                    $Loop: !1,
                    $Class: $JssorThumbnailNavigator$,
                    $ChanceToShow: 4,
                    $ActionMode: 1,
                    $SpacingX: 0,
                    $ParkingPosition: 0,
                    $NoDrag: !0,
                    $Align: 2
                }
            },
            t = new $JssorSlider$("jssor_1", i),
            r = 1200;
        n();
        $Jssor$.$AddEvent(window, "load", n);
        $Jssor$.$AddEvent(window, "resize", n);
        $Jssor$.$AddEvent(window, "orientationchange", n)
    };
    jssor_1_slider_init();
    testimonial_init()
}

// function quickOrder() {
//     $(".btnQuickOrder").click(function(n) {
//         var u = $(".btnQuickOrder").hasClass("disabled") || $(".btnQuickOrder").hasClass("btn-outstock");
//         if (!u) {
//             var t = $(this).attr("data-sku"),
//                 i = $("#colorOptions .selected").attr("data-id"),
//                 r = "/ajax/quickorder?skuId=" + t;
//             i && (r = "/ajax/quickorder?skuId=" + t + "&colorId=" + i);
//             n.preventDefault();
//             this.blur();
//             $.get(r, function(n) {
//                 $("#popup-modal").html(n).modal({
//                     escapeClose: !1,
//                     clickClose: !1,
//                     closeClass: "icon-minutes",
//                     closeText: " "
//                 })
//             })
//         }
//     });
//     $(".btnQuickRefOrder").click(function(n) {
//         var u = $(".btnQuickRefOrder").hasClass("disabled") || $(".btnQuickRefOrder").hasClass("btn-outstock");
//         if (!u) {
//             var t = $(this).attr("data-sku"),
//                 i = $("#colorOptions .selected").attr("data-id"),
//                 r = "/ajax/quickorder?ref=true&skuId=" + t;
//             i && (r = "/ajax/quickorder?ref=true&skuId=" + t + "&colorId=" + i);
//             n.preventDefault();
//             this.blur();
//             $.get(r, function(n) {
//                 $("#popup-modal").html(n).modal({
//                     escapeClose: !1,
//                     clickClose: !1,
//                     closeClass: "icon-minutes",
//                     closeText: " "
//                 })
//             })
//         }
//     })
// }

// function quickSub() {
//     $(".btnQuickSubscription").click(function(n) {
//         var i = $("#versionOption").attr("data-id"),
//             t, r, u;
//         i = i ? i : 0;
//         t = $("#colorOptions div.selected").attr("data-id");
//         t = t ? t : 0;
//         r = $(this).attr("data-id");
//         u = "/ajax/quickSub?productId=" + r + "&versionId=" + i + "&colorId=" + t;
//         n.preventDefault();
//         this.blur();
//         $.get(u, function(n) {
//             $("#popup-modal").html(n).modal({
//                 escapeClose: !1,
//                 clickClose: !1,
//                 closeClass: "icon-minutes",
//                 closeText: " "
//             })
//         })
//     })
// }
var specsHeight, setProductContentHeighWithSpecs, inStock;
! function(n, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document) throw new Error("jQuery requires a window with a document");
        return t(n)
    } : t(n)
}("undefined" != typeof window ? window : this, function(n, t) {
    "use strict";

    function br(n, t, i) {
        var r, e, u = (i = i || f).createElement("script");
        if (u.text = n, t)
            for (r in oe)(e = t[r] || t.getAttribute && t.getAttribute(r)) && u.setAttribute(r, e);
        i.head.appendChild(u).parentNode.removeChild(u)
    }

    function ut(n) {
        return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ri[pr.call(n)] || "object" : typeof n
    }

    function pi(n) {
        var t = !!n && "length" in n && n.length,
            i = ut(n);
        return !u(n) && !rt(n) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in n)
    }

    function c(n, t) {
        return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
    }

    function bi(n, t, r) {
        return u(t) ? i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        }) : t.nodeType ? i.grep(n, function(n) {
            return n === t !== r
        }) : "string" != typeof t ? i.grep(n, function(n) {
            return -1 < ii.call(t, n) !== r
        }) : i.filter(t, n, r)
    }

    function uu(n, t) {
        while ((n = n[t]) && 1 !== n.nodeType);
        return n
    }

    function et(n) {
        return n
    }

    function fi(n) {
        throw n;
    }

    function fu(n, t, i, r) {
        var f;
        try {
            n && u(f = n.promise) ? f.call(n).done(t).fail(i) : n && u(f = n.then) ? f.call(n, t, i) : t.apply(void 0, [n].slice(r))
        } catch (n) {
            i.apply(void 0, [n])
        }
    }

    function oi() {
        f.removeEventListener("DOMContentLoaded", oi);
        n.removeEventListener("load", oi);
        i.ready()
    }

    function ce(n, t) {
        return t.toUpperCase()
    }

    function y(n) {
        return n.replace(se, "ms-").replace(he, ce)
    }

    function bt() {
        this.expando = i.expando + bt.uid++
    }

    function ou(n, t, i) {
        var u, r;
        if (void 0 === i && 1 === n.nodeType)
            if (u = "data-" + t.replace(ae, "-$&").toLowerCase(), "string" == typeof(i = n.getAttribute(u))) {
                try {
                    i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : le.test(r) ? JSON.parse(r) : r)
                } catch (n) {}
                o.set(n, t, i)
            } else i = void 0;
        return i
    }

    function hu(n, t, r, u) {
        var s, h, c = 20,
            l = u ? function() {
                return u.cur()
            } : function() {
                return i.css(n, t, "")
            },
            o = l(),
            e = r && r[3] || (i.cssNumber[t] ? "" : "px"),
            f = n.nodeType && (i.cssNumber[t] || "px" !== e && +o) && kt.exec(i.css(n, t));
        if (f && f[3] !== e) {
            for (o /= 2, e = e || f[3], f = +o || 1; c--;) i.style(n, t, f + e), (1 - h) * (1 - (h = l() / o || .5)) <= 0 && (c = 0), f /= h;
            f *= 2;
            i.style(n, t, f + e);
            r = r || []
        }
        return r && (f = +f || +o || 0, s = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = e, u.start = f, u.end = s)), s
    }

    function ht(n, t) {
        for (var h, f, a, s, c, l, e, o = [], u = 0, v = n.length; u < v; u++)(f = n[u]).style && (h = f.style.display, t ? ("none" === h && (o[u] = r.get(f, "display") || null, o[u] || (f.style.display = "")), "" === f.style.display && dt(f) && (o[u] = (e = c = s = void 0, c = (a = f).ownerDocument, l = a.nodeName, (e = ki[l]) || (s = c.body.appendChild(c.createElement(l)), e = i.css(s, "display"), s.parentNode.removeChild(s), "none" === e && (e = "block"), ki[l] = e)))) : "none" !== h && (o[u] = "none", r.set(f, "display", h)));
        for (u = 0; u < v; u++) null != o[u] && (n[u].style.display = o[u]);
        return n
    }

    function s(n, t) {
        var r;
        return r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [], void 0 === t || t && c(n, t) ? i.merge([n], r) : r
    }

    function di(n, t) {
        for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }

    function vu(n, t, r, u, f) {
        for (var e, o, p, a, w, v, c = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
            if ((e = n[l]) || 0 === e)
                if ("object" === ut(e)) i.merge(y, e.nodeType ? [e] : e);
                else if (au.test(e)) {
                    for (o = o || c.appendChild(t.createElement("div")), p = (cu.exec(e) || ["", ""])[1].toLowerCase(), a = h[p] || h._default, o.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) o = o.lastChild;
                    i.merge(y, o.childNodes);
                    (o = c.firstChild).textContent = ""
                } else y.push(t.createTextNode(e));
        for (c.textContent = "", l = 0; e = y[l++];)
            if (u && -1 < i.inArray(e, u)) f && f.push(e);
            else if (w = st(e), o = s(c.appendChild(e), "script"), w && di(o), r)
                for (v = 0; e = o[v++];) lu.test(e.type || "") && r.push(e);
        return c
    }

    function ct() {
        return !0
    }

    function lt() {
        return !1
    }

    function we(n, t) {
        return n === function() {
            try {
                return f.activeElement
            } catch (n) {}
        }() == ("focus" === t)
    }

    function gi(n, t, r, u, f, e) {
        var o, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof r && (u = u || r, r = void 0), t) gi(n, s, r, u, t[s], e);
            return n
        }
        if (null == u && null == f ? (f = r, u = r = void 0) : null == f && ("string" == typeof r ? (f = u, u = void 0) : (f = u, u = r, r = void 0)), !1 === f) f = lt;
        else if (!f) return n;
        return 1 === e && (o = f, (f = function(n) {
            return i().off(n), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = i.guid++)), n.each(function() {
            i.event.add(this, t, f, u, r)
        })
    }

    function hi(n, t, u) {
        u ? (r.set(n, t, !1), i.event.add(n, t, {
            namespace: !1,
            handler: function(n) {
                var o, e, f = r.get(this, t);
                if (1 & n.isTrigger && this[t]) {
                    if (f.length)(i.event.special[t] || {}).delegateType && n.stopPropagation();
                    else if (f = k.call(arguments), r.set(this, t, f), o = u(this, t), this[t](), f !== (e = r.get(this, t)) || o ? r.set(this, t, !1) : e = {}, f !== e) return n.stopImmediatePropagation(), n.preventDefault(), e.value
                } else f.length && (r.set(this, t, {
                    value: i.event.trigger(i.extend(f[0], i.Event.prototype), f.slice(1), this)
                }), n.stopImmediatePropagation())
            }
        })) : void 0 === r.get(n, t) && i.event.add(n, t, ct)
    }

    function pu(n, t) {
        return c(n, "table") && c(11 !== t.nodeType ? t : t.firstChild, "tr") && i(n).children("tbody")[0] || n
    }

    function ge(n) {
        return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n
    }

    function no(n) {
        return "true/" === (n.type || "").slice(0, 5) ? n.type = n.type.slice(5) : n.removeAttribute("type"), n
    }

    function wu(n, t) {
        var u, s, f, h, c, e;
        if (1 === t.nodeType) {
            if (r.hasData(n) && (e = r.get(n).events))
                for (f in r.remove(t, "handle events"), e)
                    for (u = 0, s = e[f].length; u < s; u++) i.event.add(t, f, e[f][u]);
            o.hasData(n) && (h = o.access(n), c = i.extend({}, h), o.set(t, c))
        }
    }

    function at(n, t, f, o) {
        t = yr(t);
        var a, b, l, v, h, y, c = 0,
            p = n.length,
            d = p - 1,
            w = t[0],
            k = u(w);
        if (k || 1 < p && "string" == typeof w && !e.checkClone && ke.test(w)) return n.each(function(i) {
            var r = n.eq(i);
            k && (t[0] = w.call(this, i, r.html()));
            at(r, t, f, o)
        });
        if (p && (b = (a = vu(t, n[0].ownerDocument, !1, n, o)).firstChild, 1 === a.childNodes.length && (a = b), b || o)) {
            for (v = (l = i.map(s(a, "script"), ge)).length; c < p; c++) h = a, c !== d && (h = i.clone(h, !0, !0), v && i.merge(l, s(h, "script"))), f.call(n[c], h, c);
            if (v)
                for (y = l[l.length - 1].ownerDocument, i.map(l, no), c = 0; c < v; c++) h = l[c], lu.test(h.type || "") && !r.access(h, "globalEval") && i.contains(y, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? i._evalUrl && !h.noModule && i._evalUrl(h.src, {
                    nonce: h.nonce || h.getAttribute("nonce")
                }, y) : br(h.textContent.replace(de, ""), h, y))
        }
        return n
    }

    function bu(n, t, r) {
        for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++) r || 1 !== u.nodeType || i.cleanData(s(u)), u.parentNode && (r && st(u) && di(s(u, "script")), u.parentNode.removeChild(u));
        return n
    }

    function ni(n, t, r) {
        var o, s, h, f, u = n.style;
        return (r = r || ci(n)) && ("" !== (f = r.getPropertyValue(t) || r[t]) || st(n) || (f = i.style(n, t)), !e.pixelBoxStyles() && nr.test(f) && to.test(t) && (o = u.width, s = u.minWidth, h = u.maxWidth, u.minWidth = u.maxWidth = u.width = f, f = r.width, u.width = o, u.minWidth = s, u.maxWidth = h)), void 0 !== f ? f + "" : f
    }

    function du(n, t) {
        return {
            get: function() {
                if (!n()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function tr(n) {
        var t = i.cssProps[n] || tf[n];
        return t || (n in nf ? n : tf[n] = function(n) {
            for (var i = n[0].toUpperCase() + n.slice(1), t = gu.length; t--;)
                if ((n = gu[t] + i) in nf) return n
        }(n) || n)
    }

    function ff(n, t, i) {
        var r = kt.exec(t);
        return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
    }

    function ir(n, t, r, u, f, e) {
        var o = "width" === t ? 1 : 0,
            h = 0,
            s = 0;
        if (r === (u ? "border" : "content")) return 0;
        for (; o < 4; o += 2) "margin" === r && (s += i.css(n, r + b[o], !0, f)), u ? ("content" === r && (s -= i.css(n, "padding" + b[o], !0, f)), "margin" !== r && (s -= i.css(n, "border" + b[o] + "Width", !0, f))) : (s += i.css(n, "padding" + b[o], !0, f), "padding" !== r ? s += i.css(n, "border" + b[o] + "Width", !0, f) : h += i.css(n, "border" + b[o] + "Width", !0, f));
        return !u && 0 <= e && (s += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - .5)) || 0), s
    }

    function ef(n, t, r) {
        var f = ci(n),
            o = (!e.boxSizingReliable() || r) && "border-box" === i.css(n, "boxSizing", !1, f),
            s = o,
            u = ni(n, t, f),
            h = "offset" + t[0].toUpperCase() + t.slice(1);
        if (nr.test(u)) {
            if (!r) return u;
            u = "auto"
        }
        return (!e.boxSizingReliable() && o || !e.reliableTrDimensions() && c(n, "tr") || "auto" === u || !parseFloat(u) && "inline" === i.css(n, "display", !1, f)) && n.getClientRects().length && (o = "border-box" === i.css(n, "boxSizing", !1, f), (s = h in n) && (u = n[h])), (u = parseFloat(u) || 0) + ir(n, t, r || (o ? "border" : "content"), s, f, u) + "px"
    }

    function a(n, t, i, r, u) {
        return new a.prototype.init(n, t, i, r, u)
    }

    function rr() {
        li && (!1 === f.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(rr) : n.setTimeout(rr, i.fx.interval), i.fx.tick())
    }

    function cf() {
        return n.setTimeout(function() {
            vt = void 0
        }), vt = Date.now()
    }

    function ai(n, t) {
        var u, r = 0,
            i = {
                height: n
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (u = b[r])] = i["padding" + u] = n;
        return t && (i.opacity = i.width = n), i
    }

    function lf(n, t, i) {
        for (var u, f = (v.tweeners[t] || []).concat(v.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function v(n, t, r) {
        var o, s, h = 0,
            a = v.prefilters.length,
            e = i.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var o = vt || cf(), t = Math.max(0, f.startTime + f.duration - o), i = 1 - (t / f.duration || 0), r = 0, u = f.tweens.length; r < u; r++) f.tweens[r].run(i);
                return e.notifyWith(n, [f, i, t]), i < 1 && u ? t : (u || e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f]), !1)
            },
            f = e.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {},
                    easing: i.easing._default
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: vt || cf(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var u = i.Tween(n, f.opts, t, r, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(u), u
                },
                stop: function(t) {
                    var i = 0,
                        r = t ? f.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < r; i++) f.tweens[i].run(1);
                    return t ? (e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f, t])) : e.rejectWith(n, [f, t]), this
                }
            }),
            c = f.props;
        for (! function(n, t) {
            var r, f, e, u, o;
            for (r in n)
                if (e = t[f = y(r)], u = n[r], Array.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), (o = i.cssHooks[f]) && "expand" in o)
                    for (r in u = o.expand(u), delete n[f], u) r in n || (n[r] = u[r], t[r] = e);
                else t[f] = e
        }(c, f.opts.specialEasing); h < a; h++)
            if (o = v.prefilters[h].call(f, n, c, f.opts)) return u(o.stop) && (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)), o;
        return i.map(c, lf, f), u(f.opts.start) && f.opts.start.call(n, f), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always), i.fx.timer(i.extend(l, {
            elem: n,
            anim: f,
            queue: f.opts.queue
        })), f
    }

    function tt(n) {
        return (n.match(l) || []).join(" ")
    }

    function it(n) {
        return n.getAttribute && n.getAttribute("class") || ""
    }

    function ur(n) {
        return Array.isArray(n) ? n : "string" == typeof n && n.match(l) || []
    }

    function sr(n, t, r, u) {
        var f;
        if (Array.isArray(t)) i.each(t, function(t, i) {
            r || uo.test(n) ? u(n, i) : sr(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u)
        });
        else if (r || "object" !== ut(t)) u(n, t);
        else
            for (f in t) sr(n + "[" + f + "]", t[f], r, u)
    }

    function gf(n) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var r, f = 0,
                e = t.toLowerCase().match(l) || [];
            if (u(i))
                while (r = e[f++]) "+" === r[0] ? (r = r.slice(1) || "*", (n[r] = n[r] || []).unshift(i)) : (n[r] = n[r] || []).push(i)
        }
    }

    function ne(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
            }), h
        }
        var f = {},
            o = n === hr;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function lr(n, t) {
        var r, u, f = i.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n
    }
    var p = [],
        vr = Object.getPrototypeOf,
        k = p.slice,
        yr = p.flat ? function(n) {
            return p.flat.call(n)
        } : function(n) {
            return p.concat.apply([], n)
        },
        yi = p.push,
        ii = p.indexOf,
        ri = {},
        pr = ri.toString,
        ui = ri.hasOwnProperty,
        wr = ui.toString,
        ee = wr.call(Object),
        e = {},
        u = function(n) {
            return "function" == typeof n && "number" != typeof n.nodeType
        },
        rt = function(n) {
            return null != n && n === n.window
        },
        f = n.document,
        oe = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        },
        kr = "3.5.1",
        i = function(n, t) {
            return new i.fn.init(n, t)
        },
        d, wi, nu, tu, iu, ru, l, eu, ei, ot, dt, ki, h, au, vt, li, yt, of , sf, hf, af, pt, vf, yf, pf, fr, er, te, wt, ie, ar, vi, re, ue, fe;
    i.fn = i.prototype = {
        jquery: kr,
        constructor: i,
        length: 0,
        toArray: function() {
            return k.call(this)
        },
        get: function(n) {
            return null == n ? k.call(this) : n < 0 ? this[n + this.length] : this[n]
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t
        },
        each: function(n) {
            return i.each(this, n)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(k.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(i.grep(this, function(n, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(i.grep(this, function(n, t) {
                return t % 2
            }))
        },
        eq: function(n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(0 <= t && t < i ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: yi,
        sort: p.sort,
        splice: p.splice
    };
    i.extend = i.fn.extend = function() {
        var s, f, e, t, o, c, n = arguments[0] || {},
            r = 1,
            l = arguments.length,
            h = !1;
        for ("boolean" == typeof n && (h = n, n = arguments[r] || {}, r++), "object" == typeof n || u(n) || (n = {}), r === l && (n = this, r--); r < l; r++)
            if (null != (s = arguments[r]))
                for (f in s) t = s[f], "__proto__" !== f && n !== t && (h && t && (i.isPlainObject(t) || (o = Array.isArray(t))) ? (e = n[f], c = o && !Array.isArray(e) ? [] : o || i.isPlainObject(e) ? e : {}, o = !1, n[f] = i.extend(h, c, t)) : void 0 !== t && (n[f] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (kr + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isPlainObject: function(n) {
            var t, i;
            return !(!n || "[object Object]" !== pr.call(n)) && (!(t = vr(n)) || "function" == typeof(i = ui.call(t, "constructor") && t.constructor) && wr.call(i) === ee)
        },
        isEmptyObject: function(n) {
            for (var t in n) return !1;
            return !0
        },
        globalEval: function(n, t, i) {
            br(n, {
                nonce: t && t.nonce
            }, i)
        },
        each: function(n, t) {
            var r, i = 0;
            if (pi(n)) {
                for (r = n.length; i < r; i++)
                    if (!1 === t.call(n[i], i, n[i])) break
            } else
                for (i in n)
                    if (!1 === t.call(n[i], i, n[i])) break;
            return n
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (pi(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : yi.call(r, n)), r
        },
        inArray: function(n, t, i) {
            return null == t ? -1 : ii.call(t, n, i)
        },
        merge: function(n, t) {
            for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
            return n.length = r, n
        },
        grep: function(n, t, i) {
            for (var u = [], r = 0, f = n.length, e = !i; r < f; r++) !t(n[r], r) !== e && u.push(n[r]);
            return u
        },
        map: function(n, t, i) {
            var e, u, r = 0,
                f = [];
            if (pi(n))
                for (e = n.length; r < e; r++) null != (u = t(n[r], r, i)) && f.push(u);
            else
                for (r in n) null != (u = t(n[r], r, i)) && f.push(u);
            return yr(f)
        },
        guid: 1,
        support: e
    });
    "function" == typeof Symbol && (i.fn[Symbol.iterator] = p[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
        ri["[object " + t + "]"] = t.toLowerCase()
    });
    d = function(n) {
        function u(n, t, r, u) {
            var s, y, c, l, p, w, d, v = t && t.ownerDocument,
                a = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof n || !n || 1 !== a && 9 !== a && 11 !== a) return r;
            if (!u && (b(t), t = t || i, h)) {
                if (11 !== a && (p = ar.exec(n)))
                    if (s = p[1]) {
                        if (9 === a) {
                            if (!(c = t.getElementById(s))) return r;
                            if (c.id === s) return r.push(c), r
                        } else if (v && (c = v.getElementById(s)) && et(t, c) && c.id === s) return r.push(c), r
                    } else {
                        if (p[2]) return k.apply(r, t.getElementsByTagName(n)), r;
                        if ((s = p[3]) && f.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(s)), r
                    } if (f.qsa && !lt[n + " "] && (!o || !o.test(n)) && (1 !== a || "object" !== t.nodeName.toLowerCase())) {
                    if (d = n, v = t, 1 === a && (er.test(n) || yi.test(n))) {
                        for ((v = ti.test(n) && ri(t.parentNode) || t) === t && f.scope || ((l = t.getAttribute("id")) ? l = l.replace(pi, wi) : t.setAttribute("id", l = e)), y = (w = ft(n)).length; y--;) w[y] = (l ? "#" + l : ":scope") + " " + pt(w[y]);
                        d = w.join(",")
                    }
                    try {
                        return k.apply(r, v.querySelectorAll(d)), r
                    } catch (t) {
                        lt(n, !0)
                    } finally {
                        l === e && t.removeAttribute("id")
                    }
                }
            }
            return si(n.replace(at, "$1"), t, r, u)
        }

        function yt() {
            var n = [];
            return function i(r, u) {
                return n.push(r + " ") > t.cacheLength && delete i[n.shift()], i[r + " "] = u
            }
        }

        function l(n) {
            return n[e] = !0, n
        }

        function a(n) {
            var t = i.createElement("fieldset");
            try {
                return !!n(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ii(n, i) {
            for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i
        }

        function ki(n, t) {
            var i = t && n,
                r = i && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function yr(n) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === n
            }
        }

        function pr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }

        function di(n) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && vr(t) === n : t.disabled === n : "label" in t && t.disabled === n
            }
        }

        function it(n) {
            return l(function(t) {
                return t = +t, l(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }

        function ri(n) {
            return n && "undefined" != typeof n.getElementsByTagName && n
        }

        function gi() {}

        function pt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
            return i
        }

        function wt(n, t, i) {
            var r = t.dir,
                u = t.next,
                f = u || r,
                o = i && "parentNode" === f,
                s = nr++;
            return t.first ? function(t, i, u) {
                while (t = t[r])
                    if (1 === t.nodeType || o) return n(t, i, u);
                return !1
            } : function(t, i, h) {
                var c, l, a, y = [v, s];
                if (h) {
                    while (t = t[r])
                        if ((1 === t.nodeType || o) && n(t, i, h)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            if (l = (a = t[e] || (t[e] = {}))[t.uniqueID] || (a[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((c = l[f]) && c[0] === v && c[1] === s) return y[2] = c[2];
                                if ((l[f] = y)[2] = n(t, i, h)) return !0
                            } return !1
            }
        }

        function ui(n) {
            return 1 < n.length ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function bt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)(e = n[f]) && (i && !i(e, r, u) || (o.push(e), h && t.push(f)));
            return o
        }

        function fi(n, t, i, r, f, o) {
            return r && !r[e] && (r = fi(r)), f && !f[e] && (f = fi(f, o)), l(function(e, o, s, h) {
                var a, l, v, w = [],
                    p = [],
                    b = o.length,
                    d = e || function(n, t, i) {
                        for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
                        return i
                    }(t || "*", s.nodeType ? [s] : s, []),
                    y = !n || !e && t ? d : bt(d, w, n, s, h),
                    c = i ? f || (e ? n : b || r) ? [] : o : y;
                if (i && i(y, c, s, h), r)
                    for (a = bt(c, p), r(a, [], s, h), l = a.length; l--;)(v = a[l]) && (c[p[l]] = !(y[p[l]] = v));
                if (e) {
                    if (f || n) {
                        if (f) {
                            for (a = [], l = c.length; l--;)(v = c[l]) && a.push(y[l] = v);
                            f(null, c = [], a, h)
                        }
                        for (l = c.length; l--;)(v = c[l]) && -1 < (a = f ? nt(e, v) : w[l]) && (e[a] = !(o[a] = v))
                    }
                } else c = bt(c === o ? c.splice(b, c.length) : c), f ? f(null, o, c, h) : k.apply(o, c)
            })
        }

        function ei(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = wt(function(n) {
                return n === o
            }, c, !0), a = wt(function(n) {
                return -1 < nt(o, n)
            }, c, !0), f = [function(n, t, i) {
                var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                return o = null, r
            }]; i < s; i++)
                if (u = t.relative[n[i].type]) f = [wt(ui(f), u)];
                else {
                    if ((u = t.filter[n[i].type].apply(null, n[i].matches))[e]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type]) break;
                        return fi(1 < i && ui(f), 1 < i && pt(n.slice(0, i - 1).concat({
                            value: " " === n[i - 2].type ? "*" : ""
                        })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && pt(n))
                    }
                    f.push(u)
                } return ui(f)
        }
        var rt, f, t, st, oi, ft, kt, si, ht, w, ut, b, i, s, h, o, d, ct, et, e = "sizzle" + 1 * new Date,
            c = n.document,
            v = 0,
            nr = 0,
            hi = yt(),
            ci = yt(),
            li = yt(),
            lt = yt(),
            dt = function(n, t) {
                return n === t && (ut = !0), 0
            },
            tr = {}.hasOwnProperty,
            g = [],
            ir = g.pop,
            rr = g.push,
            k = g.push,
            ai = g.slice,
            nt = function(n, t) {
                for (var i = 0, r = n.length; i < r; i++)
                    if (n[i] === t) return i;
                return -1
            },
            gt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            r = "[\\x20\\t\\r\\n\\f]",
            tt = "(?:\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            vi = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
            ni = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + vi + ")*)|.*)\\)|)",
            ur = new RegExp(r + "+", "g"),
            at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
            fr = new RegExp("^" + r + "*," + r + "*"),
            yi = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
            er = new RegExp(r + "|>"),
            or = new RegExp(ni),
            sr = new RegExp("^" + tt + "$"),
            vt = {
                ID: new RegExp("^#(" + tt + ")"),
                CLASS: new RegExp("^\\.(" + tt + ")"),
                TAG: new RegExp("^(" + tt + "|[*])"),
                ATTR: new RegExp("^" + vi),
                PSEUDO: new RegExp("^" + ni),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + gt + ")$", "i"),
                needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
            },
            hr = /HTML$/i,
            cr = /^(?:input|select|textarea|button)$/i,
            lr = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            ar = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ti = /[+~]/,
            y = new RegExp("\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\([^\\r\\n\\f])", "g"),
            p = function(n, t) {
                var i = "0x" + n.slice(1) - 65536;
                return t || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320))
            },
            pi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            wi = function(n, t) {
                return t ? "\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
            },
            bi = function() {
                b()
            },
            vr = wt(function(n) {
                return !0 === n.disabled && "fieldset" === n.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            k.apply(g = ai.call(c.childNodes), c.childNodes);
            g[c.childNodes.length].nodeType
        } catch (rt) {
            k = {
                apply: g.length ? function(n, t) {
                    rr.apply(n, ai.call(t))
                } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        for (rt in f = u.support = {}, oi = u.isXML = function(n) {
            var i = n.namespaceURI,
                t = (n.ownerDocument || n).documentElement;
            return !hr.test(i || t && t.nodeName || "HTML")
        }, b = u.setDocument = function(n) {
            var v, u, l = n ? n.ownerDocument || n : c;
            return l != i && 9 === l.nodeType && l.documentElement && (s = (i = l).documentElement, h = !oi(i), c != i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", bi, !1) : u.attachEvent && u.attachEvent("onunload", bi)), f.scope = a(function(n) {
                return s.appendChild(n).appendChild(i.createElement("div")), "undefined" != typeof n.querySelectorAll && !n.querySelectorAll(":scope fieldset div").length
            }), f.attributes = a(function(n) {
                return n.className = "i", !n.getAttribute("className")
            }), f.getElementsByTagName = a(function(n) {
                return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
            }), f.getElementsByClassName = ot.test(i.getElementsByClassName), f.getById = a(function(n) {
                return s.appendChild(n).id = e, !i.getElementsByName || !i.getElementsByName(e).length
            }), f.getById ? (t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }, t.find.ID = function(n, t) {
                if ("undefined" != typeof t.getElementById && h) {
                    var i = t.getElementById(n);
                    return i ? [i] : []
                }
            }) : (t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }, t.find.ID = function(n, t) {
                if ("undefined" != typeof t.getElementById && h) {
                    var r, u, f, i = t.getElementById(n);
                    if (i) {
                        if ((r = i.getAttributeNode("id")) && r.value === n) return [i];
                        for (f = t.getElementsByName(n), u = 0; i = f[u++];)
                            if ((r = i.getAttributeNode("id")) && r.value === n) return [i]
                    }
                    return []
                }
            }), t.find.TAG = f.getElementsByTagName ? function(n, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : f.qsa ? t.querySelectorAll(n) : void 0
            } : function(n, t) {
                var i, r = [],
                    f = 0,
                    u = t.getElementsByTagName(n);
                if ("*" === n) {
                    while (i = u[f++]) 1 === i.nodeType && r.push(i);
                    return r
                }
                return u
            }, t.find.CLASS = f.getElementsByClassName && function(n, t) {
                if ("undefined" != typeof t.getElementsByClassName && h) return t.getElementsByClassName(n)
            }, d = [], o = [], (f.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                var t;
                s.appendChild(n).innerHTML = "<a id='" + e + "'><\/a><select id='" + e + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + gt + ")");
                n.querySelectorAll("[id~=" + e + "-]").length || o.push("~=");
                (t = i.createElement("input")).setAttribute("name", "");
                n.appendChild(t);
                n.querySelectorAll("[name='']").length || o.push("\\[" + r + "*name" + r + "*=" + r + "*(?:''|\"\")");
                n.querySelectorAll(":checked").length || o.push(":checked");
                n.querySelectorAll("a#" + e + "+*").length || o.push(".#.+[+~]");
                n.querySelectorAll("\\\f");
                o.push("[\\r\\n\\f]")
            }), a(function(n) {
                n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                2 !== n.querySelectorAll(":enabled").length && o.push(":enabled", ":disabled");
                s.appendChild(n).disabled = !0;
                2 !== n.querySelectorAll(":disabled").length && o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })), (f.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                f.disconnectedMatch = ct.call(n, "*");
                ct.call(n, "[s!='']:x");
                d.push("!=", ni)
            }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) {
                var r = 9 === n.nodeType ? n.documentElement : n,
                    i = t && t.parentNode;
                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
            } : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n) return !0;
                return !1
            }, dt = v ? function(n, t) {
                if (n === t) return ut = !0, 0;
                var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (n.ownerDocument || n) == (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(n) === r ? n == i || n.ownerDocument == c && et(c, n) ? -1 : t == i || t.ownerDocument == c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1)
            } : function(n, t) {
                if (n === t) return ut = !0, 0;
                var r, u = 0,
                    o = n.parentNode,
                    s = t.parentNode,
                    f = [n],
                    e = [t];
                if (!o || !s) return n == i ? -1 : t == i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                if (o === s) return ki(n, t);
                for (r = n; r = r.parentNode;) f.unshift(r);
                for (r = t; r = r.parentNode;) e.unshift(r);
                while (f[u] === e[u]) u++;
                return u ? ki(f[u], e[u]) : f[u] == c ? -1 : e[u] == c ? 1 : 0
            }), i
        }, u.matches = function(n, t) {
            return u(n, null, null, t)
        }, u.matchesSelector = function(n, t) {
            if (b(n), f.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try {
                var r = ct.call(n, t);
                if (r || f.disconnectedMatch || n.document && 11 !== n.document.nodeType) return r
            } catch (n) {
                lt(t, !0)
            }
            return 0 < u(t, i, null, [n]).length
        }, u.contains = function(n, t) {
            return (n.ownerDocument || n) != i && b(n), et(n, t)
        }, u.attr = function(n, r) {
            (n.ownerDocument || n) != i && b(n);
            var e = t.attrHandle[r.toLowerCase()],
                u = e && tr.call(t.attrHandle, r.toLowerCase()) ? e(n, r, !h) : void 0;
            return void 0 !== u ? u : f.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
        }, u.escape = function(n) {
            return (n + "").replace(pi, wi)
        }, u.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        }, u.uniqueSort = function(n) {
            var r, u = [],
                t = 0,
                i = 0;
            if (ut = !f.detectDuplicates, w = !f.sortStable && n.slice(0), n.sort(dt), ut) {
                while (r = n[i++]) r === n[i] && (t = u.push(i));
                while (t--) n.splice(u[t], 1)
            }
            return w = null, n
        }, st = u.getText = function(n) {
            var r, i = "",
                u = 0,
                t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent) return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                } else if (3 === t || 4 === t) return n.nodeValue
            } else
                while (r = n[u++]) i += st(r);
            return i
        }, (t = u.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: vt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
                },
                PSEUDO: function(n) {
                    var i, t = !n[6] && n[2];
                    return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && or.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(y, p).toLowerCase();
                    return "*" === n ? function() {
                        return !0
                    } : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = hi[n + " "];
                    return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
                        return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return null == f ? "!=" === t : !t || (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && -1 < f.indexOf(i) : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? -1 < (" " + f.replace(ur, " ") + " ").indexOf(i) : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3),
                        o = "last" !== n.slice(-4),
                        f = "of-type" === t;
                    return 1 === r && 0 === u ? function(n) {
                        return !!n.parentNode
                    } : function(t, i, h) {
                        var p, d, y, c, a, w, b = s !== o ? "nextSibling" : "previousSibling",
                            k = t.parentNode,
                            nt = f && t.nodeName.toLowerCase(),
                            g = !h && !f,
                            l = !1;
                        if (k) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b];)
                                        if (f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) return !1;
                                    w = b = "only" === n && !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [o ? k.firstChild : k.lastChild], o && g) {
                                for (l = (a = (p = (d = (y = (c = k)[e] || (c[e] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]) && p[2], c = a && k.childNodes[a]; c = ++a && c && c[b] || (l = a = 0) || w.pop();)
                                    if (1 === c.nodeType && ++l && c === t) {
                                        d[n] = [v, a, l];
                                        break
                                    }
                            } else if (g && (l = a = (p = (d = (y = (c = t)[e] || (c[e] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]), !1 === l)
                                while (c = ++a && c && c[b] || (l = a = 0) || w.pop())
                                    if ((f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && ((d = (y = c[e] || (c[e] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] = [v, l]), c === t)) break;
                            return (l -= u) === r || l % r == 0 && 0 <= l / r
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var f, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return r[e] ? r(i) : 1 < r.length ? (f = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
                        for (var e, u = r(n, i), f = u.length; f--;) n[e = nt(n, u[f])] = !(t[e] = u[f])
                    }) : function(n) {
                        return r(n, 0, f)
                    }) : r
                }
            },
            pseudos: {
                not: l(function(n) {
                    var t = [],
                        r = [],
                        i = kt(n.replace(at, "$1"));
                    return i[e] ? l(function(n, t, r, u) {
                        for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
                    }) : function(n, u, f) {
                        return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                    }
                }),
                has: l(function(n) {
                    return function(t) {
                        return 0 < u(n, t).length
                    }
                }),
                contains: l(function(n) {
                    return n = n.replace(y, p),
                        function(t) {
                            return -1 < (t.textContent || st(t)).indexOf(n)
                        }
                }),
                lang: l(function(n) {
                    return sr.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === s
                },
                focus: function(n) {
                    return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: di(!1),
                disabled: di(!0),
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && !!n.checked || "option" === t && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex, !0 === n.selected
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6) return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return lr.test(n.nodeName)
                },
                input: function(n) {
                    return cr.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && "button" === n.type || "button" === t
                },
                text: function(n) {
                    var t;
                    return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: it(function() {
                    return [0]
                }),
                last: it(function(n, t) {
                    return [t - 1]
                }),
                eq: it(function(n, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: it(function(n, t) {
                    for (var i = 0; i < t; i += 2) n.push(i);
                    return n
                }),
                odd: it(function(n, t) {
                    for (var i = 1; i < t; i += 2) n.push(i);
                    return n
                }),
                lt: it(function(n, t, i) {
                    for (var r = i < 0 ? i + t : t < i ? t : i; 0 <= --r;) n.push(r);
                    return n
                }),
                gt: it(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                    return n
                })
            }
        }).pseudos.nth = t.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) t.pseudos[rt] = yr(rt);
        for (rt in {
            submit: !0,
            reset: !0
        }) t.pseudos[rt] = pr(rt);
        return gi.prototype = t.filters = t.pseudos, t.setFilters = new gi, ft = u.tokenize = function(n, i) {
            var e, f, s, o, r, h, c, l = ci[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (r = n, h = [], c = t.preFilter; r;) {
                for (o in e && !(f = fr.exec(r)) || (f && (r = r.slice(f[0].length) || r), h.push(s = [])), e = !1, (f = yi.exec(r)) && (e = f.shift(), s.push({
                    value: e,
                    type: f[0].replace(at, " ")
                }), r = r.slice(e.length)), t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), r = r.slice(e.length));
                if (!e) break
            }
            return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
        }, kt = u.compile = function(n, r) {
            var s, c, a, o, y, p, w = [],
                d = [],
                f = li[n + " "];
            if (!f) {
                for (r || (r = ft(n)), s = r.length; s--;)(f = ei(r[s]))[e] ? w.push(f) : d.push(f);
                (f = li(n, (c = d, o = 0 < (a = w).length, y = 0 < c.length, p = function(n, r, f, e, s) {
                    var l, nt, d, g = 0,
                        p = "0",
                        tt = n && [],
                        w = [],
                        it = ht,
                        rt = n || y && t.find.TAG("*", s),
                        ut = v += null == it ? 1 : Math.random() || .1,
                        ft = rt.length;
                    for (s && (ht = r == i || r || s); p !== ft && null != (l = rt[p]); p++) {
                        if (y && l) {
                            for (nt = 0, r || l.ownerDocument == i || (b(l), f = !h); d = c[nt++];)
                                if (d(l, r || i, f)) {
                                    e.push(l);
                                    break
                                } s && (v = ut)
                        }
                        o && ((l = !d && l) && g--, n && tt.push(l))
                    }
                    if (g += p, o && p !== g) {
                        for (nt = 0; d = a[nt++];) d(tt, w, r, f);
                        if (n) {
                            if (0 < g)
                                while (p--) tt[p] || w[p] || (w[p] = ir.call(e));
                            w = bt(w)
                        }
                        k.apply(e, w);
                        s && !n && 0 < w.length && 1 < g + a.length && u.uniqueSort(e)
                    }
                    return s && (v = ut, ht = it), tt
                }, o ? l(p) : p))).selector = n
            }
            return f
        }, si = u.select = function(n, i, r, u) {
            var o, f, e, l, a, c = "function" == typeof n && n,
                s = !u && ft(n = c.selector || n);
            if (r = r || [], 1 === s.length) {
                if (2 < (f = s[0] = s[0].slice(0)).length && "ID" === (e = f[0]).type && 9 === i.nodeType && h && t.relative[f[1].type]) {
                    if (!(i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0])) return r;
                    c && (i = i.parentNode);
                    n = n.slice(f.shift().value.length)
                }
                for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) {
                    if (e = f[o], t.relative[l = e.type]) break;
                    if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ti.test(f[0].type) && ri(i.parentNode) || i))) {
                        if (f.splice(o, 1), !(n = u.length && pt(f))) return k.apply(r, u), r;
                        break
                    }
                }
            }
            return (c || kt(n, s))(u, i, !h, r, !i || ti.test(n) && ri(i.parentNode) || i), r
        }, f.sortStable = e.split("").sort(dt).join("") === e, f.detectDuplicates = !!ut, b(), f.sortDetached = a(function(n) {
            return 1 & n.compareDocumentPosition(i.createElement("fieldset"))
        }), a(function(n) {
            return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href")
        }) || ii("type|href|height|width", function(n, t, i) {
            if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), f.attributes && a(function(n) {
            return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
        }) || ii("value", function(n, t, i) {
            if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue
        }), a(function(n) {
            return null == n.getAttribute("disabled")
        }) || ii(gt, function(n, t, i) {
            var r;
            if (!i) return !0 === n[t] ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }), u
    }(n);
    i.find = d;
    i.expr = d.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = d.uniqueSort;
    i.text = d.getText;
    i.isXMLDoc = d.isXML;
    i.contains = d.contains;
    i.escapeSelector = d.escape;
    var ft = function(n, t, r) {
            for (var u = [], f = void 0 !== r;
                 (n = n[t]) && 9 !== n.nodeType;)
                if (1 === n.nodeType) {
                    if (f && i(n).is(r)) break;
                    u.push(n)
                } return u
        },
        dr = function(n, t) {
            for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
            return i
        },
        gr = i.expr.match.needsContext;
    wi = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return 1 === n.nodeType
        }))
    };
    i.fn.extend({
        find: function(n) {
            var t, r, u = this.length,
                f = this;
            if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(f[t], this)) return !0
            }));
            for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
            return 1 < u ? i.uniqueSort(r) : r
        },
        filter: function(n) {
            return this.pushStack(bi(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(bi(this, n || [], !0))
        },
        is: function(n) {
            return !!bi(this, "string" == typeof n && gr.test(n) ? i(n) : n || [], !1).length
        }
    });
    tu = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (i.fn.init = function(n, t, r) {
        var e, o;
        if (!n) return this;
        if (r = r || nu, "string" == typeof n) {
            if (!(e = "<" === n[0] && ">" === n[n.length - 1] && 3 <= n.length ? [null, n, null] : tu.exec(n)) || !e[1] && t) return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
            if (e[1]) {
                if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0)), wi.test(e[1]) && i.isPlainObject(t))
                    for (e in t) u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
                return this
            }
            return (o = f.getElementById(e[2])) && (this[0] = o, this.length = 1), this
        }
        return n.nodeType ? (this[0] = n, this.length = 1, this) : u(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this)
    }).prototype = i.fn;
    nu = i(f);
    iu = /^(?:parents|prev(?:Until|All))/;
    ru = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        has: function(n) {
            var t = i(n, this),
                r = t.length;
            return this.filter(function() {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n])) return !0
            })
        },
        closest: function(n, t) {
            var r, f = 0,
                o = this.length,
                u = [],
                e = "string" != typeof n && i(n);
            if (!gr.test(n))
                for (; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? -1 < e.index(r) : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        } return this.pushStack(1 < u.length ? i.uniqueSort(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? ii.call(i(n), this[0]) : ii.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return ft(n, "parentNode")
        },
        parentsUntil: function(n, t, i) {
            return ft(n, "parentNode", i)
        },
        next: function(n) {
            return uu(n, "nextSibling")
        },
        prev: function(n) {
            return uu(n, "previousSibling")
        },
        nextAll: function(n) {
            return ft(n, "nextSibling")
        },
        prevAll: function(n) {
            return ft(n, "previousSibling")
        },
        nextUntil: function(n, t, i) {
            return ft(n, "nextSibling", i)
        },
        prevUntil: function(n, t, i) {
            return ft(n, "previousSibling", i)
        },
        siblings: function(n) {
            return dr((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return dr(n.firstChild)
        },
        contents: function(n) {
            return null != n.contentDocument && vr(n.contentDocument) ? n.contentDocument : (c(n, "template") && (n = n.content || n), i.merge([], n.childNodes))
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), 1 < this.length && (ru[n] || i.uniqueSort(f), iu.test(n) && f.reverse()), this.pushStack(f)
        }
    });
    l = /[^\x20\t\r\n\f]+/g;
    i.Callbacks = function(n) {
        var a, h;
        n = "string" == typeof n ? (a = n, h = {}, i.each(a.match(l) || [], function(n, t) {
            h[t] = !0
        }), h) : i.extend({}, n);
        var o, r, v, f, t = [],
            s = [],
            e = -1,
            y = function() {
                for (f = f || n.once, v = o = !0; s.length; e = -1)
                    for (r = s.shift(); ++e < t.length;) !1 === t[e].apply(r[0], r[1]) && n.stopOnFalse && (e = t.length, r = !1);
                n.memory || (r = !1);
                o = !1;
                f && (t = r ? [] : "")
            },
            c = {
                add: function() {
                    return t && (r && !o && (e = t.length - 1, s.push(r)), function f(r) {
                        i.each(r, function(i, r) {
                            u(r) ? n.unique && c.has(r) || t.push(r) : r && r.length && "string" !== ut(r) && f(r)
                        })
                    }(arguments), r && !o && y()), this
                },
                remove: function() {
                    return i.each(arguments, function(n, r) {
                        for (var u; - 1 < (u = i.inArray(r, t, u));) t.splice(u, 1), u <= e && e--
                    }), this
                },
                has: function(n) {
                    return n ? -1 < i.inArray(n, t) : 0 < t.length
                },
                empty: function() {
                    return t && (t = []), this
                },
                disable: function() {
                    return f = s = [], t = r = "", this
                },
                disabled: function() {
                    return !t
                },
                lock: function() {
                    return f = s = [], r || o || (t = r = ""), this
                },
                locked: function() {
                    return !!f
                },
                fireWith: function(n, t) {
                    return f || (t = [n, (t = t || []).slice ? t.slice() : t], s.push(t), o || y()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!v
                }
            };
        return c
    };
    i.extend({
        Deferred: function(t) {
            var f = [
                    ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                    ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                e = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    "catch": function(n) {
                        return e.then(null, n)
                    },
                    pipe: function() {
                        var n = arguments;
                        return i.Deferred(function(t) {
                            i.each(f, function(i, f) {
                                var e = u(n[f[4]]) && n[f[4]];
                                r[f[1]](function() {
                                    var n = e && e.apply(this, arguments);
                                    n && u(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    then: function(t, r, e) {
                        function s(t, r, f, e) {
                            return function() {
                                var h = this,
                                    c = arguments,
                                    l = function() {
                                        var n, i;
                                        if (!(t < o)) {
                                            if ((n = f.apply(h, c)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                            i = n && ("object" == typeof n || "function" == typeof n) && n.then;
                                            u(i) ? e ? i.call(n, s(o, r, et, e), s(o, r, fi, e)) : (o++, i.call(n, s(o, r, et, e), s(o, r, fi, e), s(o, r, et, r.notifyWith))) : (f !== et && (h = void 0, c = [n]), (e || r.resolveWith)(h, c))
                                        }
                                    },
                                    a = e ? l : function() {
                                        try {
                                            l()
                                        } catch (l) {
                                            i.Deferred.exceptionHook && i.Deferred.exceptionHook(l, a.stackTrace);
                                            o <= t + 1 && (f !== fi && (h = void 0, c = [l]), r.rejectWith(h, c))
                                        }
                                    };
                                t ? a() : (i.Deferred.getStackHook && (a.stackTrace = i.Deferred.getStackHook()), n.setTimeout(a))
                            }
                        }
                        var o = 0;
                        return i.Deferred(function(n) {
                            f[0][3].add(s(0, n, u(e) ? e : et, n.notifyWith));
                            f[1][3].add(s(0, n, u(t) ? t : et));
                            f[2][3].add(s(0, n, u(r) ? r : fi))
                        }).promise()
                    },
                    promise: function(n) {
                        return null != n ? i.extend(n, e) : e
                    }
                },
                r = {};
            return i.each(f, function(n, t) {
                var i = t[2],
                    u = t[5];
                e[t[1]] = i.add;
                u && i.add(function() {
                    o = u
                }, f[3 - n][2].disable, f[3 - n][3].disable, f[0][2].lock, f[0][3].lock);
                i.add(t[3].fire);
                r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                };
                r[t[0] + "With"] = i.fireWith
            }), e.promise(r), t && t.call(r, r), r
        },
        when: function(n) {
            var e = arguments.length,
                t = e,
                o = Array(t),
                f = k.call(arguments),
                r = i.Deferred(),
                s = function(n) {
                    return function(t) {
                        o[n] = this;
                        f[n] = 1 < arguments.length ? k.call(arguments) : t;
                        --e || r.resolveWith(o, f)
                    }
                };
            if (e <= 1 && (fu(n, r.done(s(t)).resolve, r.reject, !e), "pending" === r.state() || u(f[t] && f[t].then))) return r.then();
            while (t--) fu(f[t], s(t), r.reject);
            return r.promise()
        }
    });
    eu = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(t, i) {
        n.console && n.console.warn && t && eu.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    };
    i.readyException = function(t) {
        n.setTimeout(function() {
            throw t;
        })
    };
    ei = i.Deferred();
    i.fn.ready = function(n) {
        return ei.then(n)["catch"](function(n) {
            i.readyException(n)
        }), this
    };
    i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(n) {
            (!0 === n ? --i.readyWait : i.isReady) || (i.isReady = !0) !== n && 0 < --i.readyWait || ei.resolveWith(f, [i])
        }
    });
    i.ready.then = ei.then;
    "complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll ? n.setTimeout(i.ready) : (f.addEventListener("DOMContentLoaded", oi), n.addEventListener("load", oi));
    var w = function(n, t, r, f, e, o, s) {
            var h = 0,
                l = n.length,
                c = null == r;
            if ("object" === ut(r))
                for (h in e = !0, r) w(n, t, h, r[h], !0, o, s);
            else if (void 0 !== f && (e = !0, u(f) || (s = !0), c && (s ? (t.call(n, f), t = null) : (c = t, t = function(n, t, r) {
                return c.call(i(n), r)
            })), t))
                for (; h < l; h++) t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r)));
            return e ? n : c ? t.call(n) : l ? t(n[0], r) : o
        },
        se = /^-ms-/,
        he = /-([a-z])/g;
    ot = function(n) {
        return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
    };
    bt.uid = 1;
    bt.prototype = {
        cache: function(n) {
            var t = n[this.expando];
            return t || (t = {}, ot(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(n, t, i) {
            var r, u = this.cache(n);
            if ("string" == typeof t) u[y(t)] = i;
            else
                for (r in t) u[y(r)] = t[r];
            return u
        },
        get: function(n, t) {
            return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][y(t)]
        },
        access: function(n, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i), void 0 !== i ? i : t)
        },
        remove: function(n, t) {
            var u, r = n[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t)
                    for (u = (t = Array.isArray(t) ? t.map(y) : (t = y(t)) in r ? [t] : t.match(l) || []).length; u--;) delete r[t[u]];
                (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
            }
        },
        hasData: function(n) {
            var t = n[this.expando];
            return void 0 !== t && !i.isEmptyObject(t)
        }
    };
    var r = new bt,
        o = new bt,
        le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ae = /[A-Z]/g;
    i.extend({
        hasData: function(n) {
            return o.hasData(n) || r.hasData(n)
        },
        data: function(n, t, i) {
            return o.access(n, t, i)
        },
        removeData: function(n, t) {
            o.remove(n, t)
        },
        _data: function(n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function(n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, i = this[0],
                s = i && i.attributes;
            if (void 0 === n) {
                if (this.length && (e = o.get(i), 1 === i.nodeType && !r.get(i, "hasDataAttrs"))) {
                    for (f = s.length; f--;) s[f] && 0 === (u = s[f].name).indexOf("data-") && (u = y(u.slice(5)), ou(i, u, e[u]));
                    r.set(i, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof n ? this.each(function() {
                o.set(this, n)
            }) : w(this, function(t) {
                var r;
                if (i && void 0 === t) return void 0 !== (r = o.get(i, n)) ? r : void 0 !== (r = ou(i, n)) ? r : void 0;
                this.each(function() {
                    o.set(this, n, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(n) {
            return this.each(function() {
                o.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, u) {
            var f;
            if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t);
            "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, function() {
                i.dequeue(n, t)
            }, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function() {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function() {
                    --e || o.resolveWith(f, [f])
                };
            for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;)(u = r.get(f[s], n + "queueHooks")) && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(t)
        }
    });
    var su = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        kt = new RegExp("^(?:([+-])=|)(" + su + ")([a-z%]*)$", "i"),
        b = ["Top", "Right", "Bottom", "Left"],
        g = f.documentElement,
        st = function(n) {
            return i.contains(n.ownerDocument, n)
        },
        ve = {
            composed: !0
        };
    g.getRootNode && (st = function(n) {
        return i.contains(n.ownerDocument, n) || n.getRootNode(ve) === n.ownerDocument
    });
    dt = function(n, t) {
        return "none" === (n = t || n).style.display || "" === n.style.display && st(n) && "none" === i.css(n, "display")
    };
    ki = {};
    i.fn.extend({
        show: function() {
            return ht(this, !0)
        },
        hide: function() {
            return ht(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                dt(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    var nt, si, gt = /^(?:checkbox|radio)$/i,
        cu = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        lu = /^$|^module$|\/(?:java|ecma)script/i;
    nt = f.createDocumentFragment().appendChild(f.createElement("div"));
    (si = f.createElement("input")).setAttribute("type", "radio");
    si.setAttribute("checked", "checked");
    si.setAttribute("name", "t");
    nt.appendChild(si);
    e.checkClone = nt.cloneNode(!0).cloneNode(!0).lastChild.checked;
    nt.innerHTML = "<textarea>x<\/textarea>";
    e.noCloneChecked = !!nt.cloneNode(!0).lastChild.defaultValue;
    nt.innerHTML = "<option><\/option>";
    e.option = !!nt.lastChild;
    h = {
        thead: [1, "<table>", "<\/table>"],
        col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        _default: [0, "", ""]
    };
    h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
    h.th = h.td;
    e.option || (h.optgroup = h.option = [1, "<select multiple='multiple'>", "<\/select>"]);
    au = /<|&#?\w+;/;
    var ye = /^key/,
        pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        yu = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var p, a, k, v, w, h, s, c, o, b, d, y = r.get(n);
            if (ot(n))
                for (u.handler && (u = (p = u).handler, e = p.selector), e && i.find.matchesSelector(g, e), u.guid || (u.guid = i.guid++), (v = y.events) || (v = y.events = Object.create(null)), (a = y.handle) || (a = y.handle = function(t) {
                    if ("undefined" != typeof i && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments)
                }), w = (t = (t || "").match(l) || [""]).length; w--;) o = d = (k = yu.exec(t[w]) || [])[1], b = (k[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i.extend({
                    type: o,
                    origType: d,
                    data: f,
                    handler: u,
                    guid: u.guid,
                    selector: e,
                    needsContext: e && i.expr.match.needsContext.test(e),
                    namespace: b.join(".")
                }, p), (c = v[o]) || ((c = v[o] = []).delegateCount = 0, s.setup && !1 !== s.setup.call(n, f, b, a) || n.addEventListener && n.addEventListener(o, a)), s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, h) : c.push(h), i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var y, k, c, v, p, s, h, a, o, b, d, w = r.hasData(n) && r.get(n);
            if (w && (v = w.events)) {
                for (p = (t = (t || "").match(l) || [""]).length; p--;)
                    if (o = d = (c = yu.exec(t[p]) || [])[1], b = (c[2] || "").split(".").sort(), o) {
                        for (h = i.event.special[o] || {}, a = v[o = (f ? h.delegateType : h.bindType) || o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--;) s = a[y], !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(y, 1), s.selector && a.delegateCount--, h.remove && h.remove.call(n, s));
                        k && !a.length && (h.teardown && !1 !== h.teardown.call(n, b, w.handle) || i.removeEvent(n, o, w.handle), delete v[o])
                    } else
                        for (o in v) i.event.remove(n, o + t[p], u, f, !0);
                i.isEmptyObject(v) && r.remove(n, "handle events")
            }
        },
        dispatch: function(n) {
            var u, h, c, e, f, l, s = new Array(arguments.length),
                t = i.event.fix(n),
                a = (r.get(this, "events") || Object.create(null))[t.type] || [],
                o = i.event.special[t.type] || {};
            for (s[0] = t, u = 1; u < arguments.length; u++) s[u] = arguments[u];
            if (t.delegateTarget = this, !o.preDispatch || !1 !== o.preDispatch.call(this, t)) {
                for (l = i.event.handlers.call(this, t, a), u = 0;
                     (e = l[u++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = e.elem, h = 0;
                         (f = e.handlers[h++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !1 !== f.namespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f, t.data = f.data, void 0 !== (c = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, s)) && !1 === (t.result = c) && (t.preventDefault(), t.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(n, t) {
            var f, h, u, e, o, c = [],
                s = t.delegateCount,
                r = n.target;
            if (s && r.nodeType && !("click" === n.type && 1 <= n.button))
                for (; r !== this; r = r.parentNode || this)
                    if (1 === r.nodeType && ("click" !== n.type || !0 !== r.disabled)) {
                        for (e = [], o = {}, f = 0; f < s; f++) void 0 === o[u = (h = t[f]).selector + " "] && (o[u] = h.needsContext ? -1 < i(u, this).index(r) : i.find(u, this, null, [r]).length), o[u] && e.push(h);
                        e.length && c.push({
                            elem: r,
                            handlers: e
                        })
                    } return r = this, s < t.length && c.push({
                elem: r,
                handlers: t.slice(s)
            }), c
        },
        addProp: function(n, t) {
            Object.defineProperty(i.Event.prototype, n, {
                enumerable: !0,
                configurable: !0,
                get: u(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[n]
                },
                set: function(t) {
                    Object.defineProperty(this, n, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(n) {
            return n[i.expando] ? n : new i.Event(n)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(n) {
                    var t = this || n;
                    return gt.test(t.type) && t.click && c(t, "input") && hi(t, "click", ct), !1
                },
                trigger: function(n) {
                    var t = this || n;
                    return gt.test(t.type) && t.click && c(t, "input") && hi(t, "click"), !0
                },
                _default: function(n) {
                    var t = n.target;
                    return gt.test(t.type) && t.click && c(t, "input") && r.get(t, "click") || c(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        }
    };
    i.removeEvent = function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i)
    };
    i.Event = function(n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && !1 === n.returnValue ? ct : lt, this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || Date.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: lt,
        isPropagationStopped: lt,
        isImmediatePropagationStopped: lt,
        isSimulated: !1,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = ct;
            n && !this.isSimulated && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = ct;
            n && !this.isSimulated && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = ct;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(n) {
            var t = n.button;
            return null == n.which && ye.test(n.type) ? null != n.charCode ? n.charCode : n.keyCode : !n.which && void 0 !== t && pe.test(n.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : n.which
        }
    }, i.event.addProp);
    i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        i.event.special[n] = {
            setup: function() {
                return hi(this, n, we), !1
            },
            trigger: function() {
                return hi(this, n), !0
            },
            delegateType: t
        }
    });
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, r = n.relatedTarget,
                    f = n.handleObj;
                return r && (r === this || i.contains(this, r)) || (n.type = f.origType, u = f.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    i.fn.extend({
        on: function(n, t, i, r) {
            return gi(this, n, t, i, r)
        },
        one: function(n, t, i, r) {
            return gi(this, n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
            if ("object" == typeof n) {
                for (f in n) this.off(f, t, n[f]);
                return this
            }
            return !1 !== t && "function" != typeof t || (r = t, t = void 0), !1 === r && (r = lt), this.each(function() {
                i.event.remove(this, n, r, t)
            })
        }
    });
    var be = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        de = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    i.extend({
        htmlPrefilter: function(n) {
            return n
        },
        clone: function(n, t, r) {
            var u, c, o, f, l, a, v, h = n.cloneNode(!0),
                y = st(n);
            if (!(e.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (f = s(h), u = 0, c = (o = s(n)).length; u < c; u++) l = o[u], a = f[u], void 0, "input" === (v = a.nodeName.toLowerCase()) && gt.test(l.type) ? a.checked = l.checked : "input" !== v && "textarea" !== v || (a.defaultValue = l.defaultValue);
            if (t)
                if (r)
                    for (o = o || s(n), f = f || s(h), u = 0, c = o.length; u < c; u++) wu(o[u], f[u]);
                else wu(n, h);
            return 0 < (f = s(h, "script")).length && di(f, !y && s(n, "script")), h
        },
        cleanData: function(n) {
            for (var u, t, f, s = i.event.special, e = 0; void 0 !== (t = n[e]); e++)
                if (ot(t)) {
                    if (u = t[r.expando]) {
                        if (u.events)
                            for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = void 0
                    }
                    t[o.expando] && (t[o.expando] = void 0)
                }
        }
    });
    i.fn.extend({
        detach: function(n) {
            return bu(this, n, !0)
        },
        remove: function(n) {
            return bu(this, n)
        },
        text: function(n) {
            return w(this, function(n) {
                return void 0 === n ? i.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n)
                })
            }, null, n, arguments.length)
        },
        append: function() {
            return at(this, arguments, function(n) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || pu(this, n).appendChild(n)
            })
        },
        prepend: function() {
            return at(this, arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = pu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return at(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return at(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(s(n, !1)), n.textContent = "");
            return this
        },
        clone: function(n, t) {
            return n = null != n && n, t = null == t ? n : t, this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return w(this, function(n) {
                var t = this[0] || {},
                    r = 0,
                    u = this.length;
                if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof n && !be.test(n) && !h[(cu.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; r < u; r++) 1 === (t = this[r] || {}).nodeType && (i.cleanData(s(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (n) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return at(this, arguments, function(t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(s(this)), r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), yi.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    var nr = new RegExp("^(" + su + ")(?!px)[a-z%]+$", "i"),
        ci = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = n), i.getComputedStyle(t)
        },
        ku = function(n, t, i) {
            var u, r, f = {};
            for (r in t) f[r] = n.style[r], n.style[r] = t[r];
            for (r in u = i.call(n), t) n.style[r] = f[r];
            return u
        },
        to = new RegExp(b.join("|"), "i");
    ! function() {
        function r() {
            if (t) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                g.appendChild(s).appendChild(t);
                var i = n.getComputedStyle(t);
                h = "1%" !== i.top;
                v = 12 === u(i.marginLeft);
                t.style.right = "60%";
                a = 36 === u(i.right);
                c = 36 === u(i.width);
                t.style.position = "absolute";
                l = 12 === u(t.offsetWidth / 3);
                g.removeChild(s);
                t = null
            }
        }

        function u(n) {
            return Math.round(parseFloat(n))
        }
        var h, c, l, a, o, v, s = f.createElement("div"),
            t = f.createElement("div");
        t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === t.style.backgroundClip, i.extend(e, {
            boxSizingReliable: function() {
                return r(), c
            },
            pixelBoxStyles: function() {
                return r(), a
            },
            pixelPosition: function() {
                return r(), h
            },
            reliableMarginLeft: function() {
                return r(), v
            },
            scrollboxSize: function() {
                return r(), l
            },
            reliableTrDimensions: function() {
                var t, i, r, u;
                return null == o && (t = f.createElement("table"), i = f.createElement("tr"), r = f.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", i.style.height = "1px", r.style.height = "9px", g.appendChild(t).appendChild(i).appendChild(r), u = n.getComputedStyle(i), o = 3 < parseInt(u.height), g.removeChild(t)), o
            }
        }))
    }();
    var gu = ["Webkit", "Moz", "ms"],
        nf = f.createElement("div").style,
        tf = {};
    var io = /^(none|table(?!-c[ea]).+)/,
        rf = /^--/,
        ro = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        uf = {
            letterSpacing: "0",
            fontWeight: "400"
        };
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = ni(n, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(n, t, r, u) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var f, h, o, c = y(t),
                    l = rf.test(t),
                    s = n.style;
                if (l || (t = tr(c)), o = i.cssHooks[t] || i.cssHooks[c], void 0 === r) return o && "get" in o && void 0 !== (f = o.get(n, !1, u)) ? f : s[t];
                "string" == (h = typeof r) && (f = kt.exec(r)) && f[1] && (r = hu(n, t, f), h = "number");
                null != r && r == r && ("number" !== h || l || (r += f && f[3] || (i.cssNumber[c] ? "" : "px")), e.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (s[t] = "inherit"), o && "set" in o && void 0 === (r = o.set(n, r, u)) || (l ? s.setProperty(t, r) : s[t] = r))
            }
        },
        css: function(n, t, r, u) {
            var f, e, o, s = y(t);
            return rf.test(t) || (t = tr(s)), (o = i.cssHooks[t] || i.cssHooks[s]) && "get" in o && (f = o.get(n, !0, r)), void 0 === f && (f = ni(n, t, u)), "normal" === f && t in uf && (f = uf[t]), "" === r || r ? (e = parseFloat(f), !0 === r || isFinite(e) ? e || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return !io.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? ef(n, t, u) : ku(n, ro, function() {
                    return ef(n, t, u)
                })
            },
            set: function(n, r, u) {
                var s, f = ci(n),
                    h = !e.scrollboxSize() && "absolute" === f.position,
                    c = (h || u) && "border-box" === i.css(n, "boxSizing", !1, f),
                    o = u ? ir(n, t, u, c, f) : 0;
                return c && h && (o -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(f[t]) - ir(n, t, "border", !1, f) - .5)), o && (s = kt.exec(r)) && "px" !== (s[3] || "px") && (n.style[t] = r, r = i.css(n, t)), ff(0, r, o)
            }
        }
    });
    i.cssHooks.marginLeft = du(e.reliableMarginLeft, function(n, t) {
        if (t) return (parseFloat(ni(n, "marginLeft")) || n.getBoundingClientRect().left - ku(n, {
            marginLeft: 0
        }, function() {
            return n.getBoundingClientRect().left
        })) + "px"
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++) f[n + b[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        "margin" !== n && (i.cssHooks[n + t].set = ff)
    });
    i.fn.extend({
        css: function(n, t) {
            return w(this, function(n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (Array.isArray(t)) {
                    for (f = ci(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, 1 < arguments.length)
        }
    });
    ((i.Tween = a).prototype = {
        constructor: a,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = a.propHooks[this.prop];
            return n && n.get ? n.get(this) : a.propHooks._default.get(this)
        },
        run: function(n) {
            var t, r = a.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : a.propHooks._default.set(this), this
        }
    }).init.prototype = a.prototype;
    (a.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || !i.cssHooks[n.prop] && null == n.elem.style[tr(n.prop)] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit)
            }
        }
    }).scrollTop = a.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        },
        _default: "swing"
    };
    i.fx = a.prototype.init;
    i.fx.step = {};
    sf = /^(?:toggle|show|hide)$/;
    hf = /queueHooks$/;
    i.Animation = i.extend(v, {
        tweeners: {
            "*": [function(n, t) {
                var i = this.createTween(n, t);
                return hu(i.elem, n, kt.exec(t), i), i
            }]
        },
        tweener: function(n, t) {
            u(n) ? (t = n, n = ["*"]) : n = n.match(l);
            for (var i, r = 0, f = n.length; r < f; r++) i = n[r], v.tweeners[i] = v.tweeners[i] || [], v.tweeners[i].unshift(t)
        },
        prefilters: [function(n, t, u) {
            var f, y, w, c, b, h, o, l, k = "width" in t || "height" in t,
                v = this,
                p = {},
                s = n.style,
                a = n.nodeType && dt(n),
                e = r.get(n, "fxshow");
            for (f in u.queue || (null == (c = i._queueHooks(n, "fx")).unqueued && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function() {
                c.unqueued || b()
            }), c.unqueued++, v.always(function() {
                v.always(function() {
                    c.unqueued--;
                    i.queue(n, "fx").length || c.empty.fire()
                })
            })), t)
                if (y = t[f], sf.test(y)) {
                    if (delete t[f], w = w || "toggle" === y, y === (a ? "hide" : "show")) {
                        if ("show" !== y || !e || void 0 === e[f]) continue;
                        a = !0
                    }
                    p[f] = e && e[f] || i.style(n, f)
                } if ((h = !i.isEmptyObject(t)) || !i.isEmptyObject(p))
                for (f in k && 1 === n.nodeType && (u.overflow = [s.overflow, s.overflowX, s.overflowY], null == (o = e && e.display) && (o = r.get(n, "display")), "none" === (l = i.css(n, "display")) && (o ? l = o : (ht([n], !0), o = n.style.display || o, l = i.css(n, "display"), ht([n]))), ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (h || (v.done(function() {
                    s.display = o
                }), null == o && (l = s.display, o = "none" === l ? "" : l)), s.display = "inline-block")), u.overflow && (s.overflow = "hidden", v.always(function() {
                    s.overflow = u.overflow[0];
                    s.overflowX = u.overflow[1];
                    s.overflowY = u.overflow[2]
                })), h = !1, p) h || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", {
                    display: o
                }), w && (e.hidden = !a), a && ht([n], !0), v.done(function() {
                    for (f in a || ht([n]), r.remove(n, "fxshow"), p) i.style(n, f, p[f])
                })), h = lf(a ? e[f] : 0, f, v), f in e || (e[f] = h.start, a && (h.end = h.start, h.start = 0))
        }],
        prefilter: function(n, t) {
            t ? v.prefilters.unshift(n) : v.prefilters.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var f = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || u(n) && n,
            duration: n,
            easing: r && t || t && !u(t) && t
        };
        return i.fx.off ? f.duration = 0 : "number" != typeof f.duration && (f.duration = f.duration in i.fx.speeds ? i.fx.speeds[f.duration] : i.fx.speeds._default), null != f.queue && !0 !== f.queue || (f.queue = "fx"), f.old = f.complete, f.complete = function() {
            u(f.old) && f.old.call(this);
            f.queue && i.dequeue(this, f.queue)
        }, f
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(dt).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function() {
                    var t = v(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0)
                };
            return e.finish = e, s || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return "string" != typeof n && (u = t, t = n, n = void 0), t && this.queue(n || "fx", []), this.each(function() {
                var s = !0,
                    t = null != n && n + "queueHooks",
                    o = i.timers,
                    e = r.get(this);
                if (t) e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e) e[t] && e[t].stop && hf.test(t) && f(e[t]);
                for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                !s && u || i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return !1 !== n && (n = n || "fx"), this.each(function() {
                var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0;
                for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ai(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: ai("show"),
        slideUp: ai("hide"),
        slideToggle: ai("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0,
            t = i.timers;
        for (vt = Date.now(); n < t.length; n++)(r = t[n])() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        vt = void 0
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        i.fx.start()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        li || (li = !0, rr())
    };
    i.fx.stop = function() {
        li = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(t, r) {
        return t = i.fx && i.fx.speeds[t] || t, r = r || "fx", this.queue(r, function(i, r) {
            var u = n.setTimeout(i, t);
            r.stop = function() {
                n.clearTimeout(u)
            }
        })
    };
    yt = f.createElement("input"); of = f.createElement("select").appendChild(f.createElement("option"));
    yt.type = "checkbox";
    e.checkOn = "" !== yt.value;
    e.optSelected = of .selected;
    (yt = f.createElement("input")).value = "t";
    yt.type = "radio";
    e.radioValue = "t" === yt.value;
    pt = i.expr.attrHandle;
    i.fn.extend({
        attr: function(n, t) {
            return w(this, i.attr, n, t, 1 < arguments.length)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (u = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? af : void 0)), void 0 !== r ? null === r ? void i.removeAttr(n, t) : u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : u && "get" in u && null !== (f = u.get(n, t)) ? f : null == (f = i.find.attr(n, t)) ? void 0 : f)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!e.radioValue && "radio" === t && c(n, "input")) {
                        var i = n.value;
                        return n.setAttribute("type", t), i && (n.value = i), t
                    }
                }
            }
        },
        removeAttr: function(n, t) {
            var i, u = 0,
                r = t && t.match(l);
            if (r && 1 === n.nodeType)
                while (i = r[u++]) n.removeAttribute(i)
        }
    });
    af = {
        set: function(n, t, r) {
            return !1 === t ? i.removeAttr(n, r) : n.setAttribute(r, r), r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = pt[t] || i.find.attr;
        pt[t] = function(n, t, i) {
            var f, e, u = t.toLowerCase();
            return i || (e = pt[u], pt[u] = f, f = null != r(n, t, i) ? u : null, pt[u] = e), f
        }
    });
    vf = /^(?:input|select|textarea|button)$/i;
    yf = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return w(this, i.prop, n, t, 1 < arguments.length)
        },
        removeProp: function(n) {
            return this.each(function() {
                delete this[i.propFix[n] || n]
            })
        }
    });
    i.extend({
        prop: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e) return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : vf.test(n.nodeName) || yf.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    e.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(n) {
            var t = n.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, f, e, s, h, c = 0;
            if (u(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t, it(this)))
            });
            if ((o = ur(n)).length)
                while (t = this[c++])
                    if (f = it(t), r = 1 === t.nodeType && " " + tt(f) + " ") {
                        for (s = 0; e = o[s++];) r.indexOf(" " + e + " ") < 0 && (r += e + " ");
                        f !== (h = tt(r)) && t.setAttribute("class", h)
                    } return this
        },
        removeClass: function(n) {
            var o, r, t, f, e, s, h, c = 0;
            if (u(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t, it(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((o = ur(n)).length)
                while (r = this[c++])
                    if (f = it(r), t = 1 === r.nodeType && " " + tt(f) + " ") {
                        for (s = 0; e = o[s++];)
                            while (-1 < t.indexOf(" " + e + " ")) t = t.replace(" " + e + " ", " ");
                        f !== (h = tt(t)) && r.setAttribute("class", h)
                    } return this
        },
        toggleClass: function(n, t) {
            var f = typeof n,
                e = "string" === f || Array.isArray(n);
            return "boolean" == typeof t && e ? t ? this.addClass(n) : this.removeClass(n) : u(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, it(this), t), t)
            }) : this.each(function() {
                var t, o, u, s;
                if (e)
                    for (o = 0, u = i(this), s = ur(n); t = s[o++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else void 0 !== n && "boolean" !== f || ((t = it(this)) && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === n ? "" : r.get(this, "__className__") || ""))
            })
        },
        hasClass: function(n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                if (1 === t.nodeType && -1 < (" " + tt(it(t)) + " ").indexOf(i)) return !0;
            return !1
        }
    });
    pf = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, e, f = this[0];
            return arguments.length ? (e = u(n), this.each(function(r) {
                var u;
                1 === this.nodeType && (null == (u = e ? n.call(this, r, i(this).val()) : n) ? u = "" : "number" == typeof u ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) {
                    return null == n ? "" : n + ""
                })), (t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : f ? (t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]) && "get" in t && void 0 !== (r = t.get(f, "value")) ? r : "string" == typeof(r = f.value) ? r.replace(pf, "") : null == r ? "" : r : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t : tt(i.text(n))
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, u = n.selectedIndex, f = "select-one" === n.type, s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
                        if (((t = o[r]).selected || r === u) && !t.disabled && (!t.parentNode.disabled || !c(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(), f) return e;
                            s.push(e)
                        } return s
                },
                set: function(n, t) {
                    for (var r, u, f = n.options, e = i.makeArray(t), o = f.length; o--;)((u = f[o]).selected = -1 < i.inArray(i.valHooks.option.get(u), e)) && (r = !0);
                    return r || (n.selectedIndex = -1), e
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (Array.isArray(t)) return n.checked = -1 < i.inArray(i(n).val(), t)
            }
        };
        e.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on" : n.value
        })
    });
    e.focusin = "onfocusin" in n;
    fr = /^(?:focusinfocus|focusoutblur)$/;
    er = function(n) {
        n.stopPropagation()
    };
    i.extend(i.event, {
        trigger: function(t, e, o, s) {
            var k, c, l, d, v, y, a, p, w = [o || f],
                h = ui.call(t, "type") ? t.type : t,
                b = ui.call(t, "namespace") ? t.namespace.split(".") : [];
            if (c = p = l = o = o || f, 3 !== o.nodeType && 8 !== o.nodeType && !fr.test(h + i.event.triggered) && (-1 < h.indexOf(".") && (h = (b = h.split(".")).shift(), b.sort()), v = h.indexOf(":") < 0 && "on" + h, (t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), e = null == e ? [t] : i.makeArray(e, [t]), a = i.event.special[h] || {}, s || !a.trigger || !1 !== a.trigger.apply(o, e))) {
                if (!s && !a.noBubble && !rt(o)) {
                    for (d = a.delegateType || h, fr.test(d + h) || (c = c.parentNode); c; c = c.parentNode) w.push(c), l = c;
                    l === (o.ownerDocument || f) && w.push(l.defaultView || l.parentWindow || n)
                }
                for (k = 0;
                     (c = w[k++]) && !t.isPropagationStopped();) p = c, t.type = 1 < k ? d : a.bindType || h, (y = (r.get(c, "events") || Object.create(null))[t.type] && r.get(c, "handle")) && y.apply(c, e), (y = v && c[v]) && y.apply && ot(c) && (t.result = y.apply(c, e), !1 === t.result && t.preventDefault());
                return t.type = h, s || t.isDefaultPrevented() || a._default && !1 !== a._default.apply(w.pop(), e) || !ot(o) || v && u(o[h]) && !rt(o) && ((l = o[v]) && (o[v] = null), i.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, er), o[h](), t.isPropagationStopped() && p.removeEventListener(h, er), i.event.triggered = void 0, l && (o[v] = l)), t.result
            }
        },
        simulate: function(n, t, r) {
            var u = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0
            });
            i.event.trigger(u, null, t)
        }
    });
    i.fn.extend({
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    e.focusin || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n))
        };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this.document || this,
                    f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this.document || this,
                    f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
            }
        }
    });
    var ti = n.location,
        wf = {
            guid: Date.now()
        },
        or = /\?/;
    i.parseXML = function(t) {
        var r;
        if (!t || "string" != typeof t) return null;
        try {
            r = (new n.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            r = void 0
        }
        return r && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r
    };
    var uo = /\[\]$/,
        bf = /\r?\n/g,
        fo = /^(?:submit|button|image|reset|file)$/i,
        eo = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, f = [],
            e = function(n, t) {
                var i = u(t) ? t() : t;
                f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (null == n) return "";
        if (Array.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
            e(this.name, this.value)
        });
        else
            for (r in n) sr(r, n[r], t, e);
        return f.join("&")
    };
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && eo.test(this.nodeName) && !fo.test(n) && (this.checked || !gt.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : Array.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(bf, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(bf, "\r\n")
                }
            }).get()
        }
    });
    var oo = /%20/g,
        so = /#.*$/,
        ho = /([?&])_=[^&]*/,
        co = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        lo = /^(?:GET|HEAD)$/,
        ao = /^\/\//,
        kf = {},
        hr = {},
        df = "*/".concat("*"),
        cr = f.createElement("a");
    return cr.href = ti.href, i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ti.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ti.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": df,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? lr(lr(n, i.ajaxSettings), t) : lr(i.ajaxSettings, n)
        },
        ajaxPrefilter: gf(kf),
        ajaxTransport: gf(hr),
        ajax: function(t, r) {
            function b(t, r, f, c) {
                var v, rt, b, p, g, l = r;
                s || (s = !0, d && n.clearTimeout(d), a = void 0, k = c || "", e.readyState = 0 < t ? 4 : 0, v = 200 <= t && t < 300 || 304 === t, f && (p = function(n, t, i) {
                    for (var e, u, f, o, s = n.contents, r = n.dataTypes;
                         "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
                    if (e)
                        for (u in s)
                            if (s[u] && s[u].test(e)) {
                                r.unshift(u);
                                break
                            } if (r[0] in i) f = r[0];
                    else {
                        for (u in i) {
                            if (!r[0] || n.converters[u + " " + r[0]]) {
                                f = u;
                                break
                            }
                            o || (o = u)
                        }
                        f = f || o
                    }
                    if (f) return f !== r[0] && r.unshift(f), i[f]
                }(u, e, f)), !v && -1 < i.inArray("script", u.dataTypes) && (u.converters["text script"] = function() {}), p = function(n, t, i, r) {
                    var h, u, f, s, e, o = {},
                        c = n.dataTypes.slice();
                    if (c[1])
                        for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
                    for (u = c.shift(); u;)
                        if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                            if ("*" === u) u = e;
                            else if ("*" !== e && e !== u) {
                                if (!(f = o[e + " " + u] || o["* " + u]))
                                    for (h in o)
                                        if ((s = h.split(" "))[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                                            !0 === f ? f = o[h] : !0 !== o[h] && (u = s[0], c.unshift(s[1]));
                                            break
                                        } if (!0 !== f)
                                    if (f && n.throws) t = f(t);
                                    else try {
                                        t = f(t)
                                    } catch (n) {
                                        return {
                                            state: "parsererror",
                                            error: f ? n : "No conversion from " + e + " to " + u
                                        }
                                    }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(u, p, e, v), v ? (u.ifModified && ((g = e.getResponseHeader("Last-Modified")) && (i.lastModified[o] = g), (g = e.getResponseHeader("etag")) && (i.etag[o] = g)), 204 === t || "HEAD" === u.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = p.state, rt = p.data, v = !(b = p.error))) : (b = l, !t && l || (l = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || l) + "", v ? tt.resolveWith(h, [rt, l, e]) : tt.rejectWith(h, [e, l, b]), e.statusCode(w), w = void 0, y && nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : b]), it.fireWith(h, [e, l]), y && (nt.trigger("ajaxComplete", [e, u]), --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (r = t, t = void 0);
            r = r || {};
            var a, o, k, v, d, c, s, y, g, p, u = i.ajaxSetup({}, r),
                h = u.context || u,
                nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                w = u.statusCode || {},
                rt = {},
                ut = {},
                ft = "canceled",
                e = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (s) {
                            if (!v)
                                for (v = {}; t = co.exec(k);) v[t[1].toLowerCase() + " "] = (v[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = v[n.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return s ? k : null
                    },
                    setRequestHeader: function(n, t) {
                        return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this
                    },
                    overrideMimeType: function(n) {
                        return null == s && (u.mimeType = n), this
                    },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (s) e.always(n[e.status]);
                            else
                                for (t in n) w[t] = [w[t], n[t]];
                        return this
                    },
                    abort: function(n) {
                        var t = n || ft;
                        return a && a.abort(t), b(0, t), this
                    }
                };
            if (tt.promise(e), u.url = ((t || u.url || ti.href) + "").replace(ao, ti.protocol + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = (u.dataType || "*").toLowerCase().match(l) || [""], null == u.crossDomain) {
                c = f.createElement("a");
                try {
                    c.href = u.url;
                    c.href = c.href;
                    u.crossDomain = cr.protocol + "//" + cr.host != c.protocol + "//" + c.host
                } catch (t) {
                    u.crossDomain = !0
                }
            }
            if (u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)), ne(kf, u, r, e), s) return e;
            for (g in (y = i.event && u.global) && 0 == i.active++ && i.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !lo.test(u.type), o = u.url.replace(so, ""), u.hasContent ? u.data && u.processData && 0 === (u.contentType || "").indexOf("application/x-www-form-urlencoded") && (u.data = u.data.replace(oo, "+")) : (p = u.url.slice(o.length), u.data && (u.processData || "string" == typeof u.data) && (o += (or.test(o) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (o = o.replace(ho, "$1"), p = (or.test(o) ? "&" : "?") + "_=" + wf.guid++ + p), u.url = o + p), u.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o])), (u.data && u.hasContent && !1 !== u.contentType || r.contentType) && e.setRequestHeader("Content-Type", u.contentType), e.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + df + "; q=0.01" : "") : u.accepts["*"]), u.headers) e.setRequestHeader(g, u.headers[g]);
            if (u.beforeSend && (!1 === u.beforeSend.call(h, e, u) || s)) return e.abort();
            if (ft = "abort", it.add(u.complete), e.done(u.success), e.fail(u.error), a = ne(hr, u, r, e)) {
                if (e.readyState = 1, y && nt.trigger("ajaxSend", [e, u]), s) return e;
                u.async && 0 < u.timeout && (d = n.setTimeout(function() {
                    e.abort("timeout")
                }, u.timeout));
                try {
                    s = !1;
                    a.send(rt, b)
                } catch (t) {
                    if (s) throw t;
                    b(-1, t)
                }
            } else b(-1, "No Transport");
            return e
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, void 0, t, "script")
        }
    }), i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, f, e) {
            return u(r) && (e = e || f, f = r, r = void 0), i.ajax(i.extend({
                url: n,
                type: t,
                dataType: e,
                data: r,
                success: f
            }, i.isPlainObject(n) && n))
        }
    }), i.ajaxPrefilter(function(n) {
        for (var t in n.headers) "content-type" === t.toLowerCase() && (n.contentType = n.headers[t] || "")
    }), i._evalUrl = function(n, t, r) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(n) {
                i.globalEval(n, t, r)
            }
        })
    }, i.fn.extend({
        wrapAll: function(n) {
            var t;
            return this[0] && (u(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                return n
            }).append(this)), this
        },
        wrapInner: function(n) {
            return u(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = u(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function(n) {
            return this.parent(n).not("body").each(function() {
                i(this).replaceWith(this.childNodes)
            }), this
        }
    }), i.expr.pseudos.hidden = function(n) {
        return !i.expr.pseudos.visible(n)
    }, i.expr.pseudos.visible = function(n) {
        return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
    }, i.ajaxSettings.xhr = function() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }, te = {
        0: 200,
        1223: 204
    }, wt = i.ajaxSettings.xhr(), e.cors = !!wt && "withCredentials" in wt, e.ajax = wt = !!wt, i.ajaxTransport(function(t) {
        var i, r;
        if (e.cors || wt && !t.crossDomain) return {
            send: function(u, f) {
                var o, e = t.xhr();
                if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) e[o] = t.xhrFields[o];
                for (o in t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType), t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest"), u) e.setRequestHeader(o, u[o]);
                i = function(n) {
                    return function() {
                        i && (i = r = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null, "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(te[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {
                            binary: e.response
                        } : {
                            text: e.responseText
                        }, e.getAllResponseHeaders()))
                    }
                };
                e.onload = i();
                r = e.onerror = e.ontimeout = i("error");
                void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function() {
                    4 === e.readyState && n.setTimeout(function() {
                        i && r()
                    })
                };
                i = i("abort");
                try {
                    e.send(t.hasContent && t.data || null)
                } catch (u) {
                    if (i) throw u;
                }
            },
            abort: function() {
                i && i()
            }
        }
    }), i.ajaxPrefilter(function(n) {
        n.crossDomain && (n.contents.script = !1)
    }), i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n), n
            }
        }
    }), i.ajaxPrefilter("script", function(n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }), i.ajaxTransport("script", function(n) {
        var r, t;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(u, e) {
                r = i("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", t = function(n) {
                    r.remove();
                    t = null;
                    n && e("error" === n.type ? 404 : 200, n.type)
                });
                f.head.appendChild(r[0])
            },
            abort: function() {
                t && t()
            }
        }
    }), ar = [], vi = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = ar.pop() || i.expando + "_" + wf.guid++;
            return this[n] = !0, n
        }
    }), i.ajaxPrefilter("json jsonp", function(t, r, f) {
        var e, o, s, h = !1 !== t.jsonp && (vi.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && vi.test(t.data) && "data");
        if (h || "jsonp" === t.dataTypes[0]) return e = t.jsonpCallback = u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, h ? t[h] = t[h].replace(vi, "$1" + e) : !1 !== t.jsonp && (t.url += (or.test(t.url) ? "&" : "?") + t.jsonp + "=" + e), t.converters["script json"] = function() {
            return s || i.error(e + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = n[e], n[e] = function() {
            s = arguments
        }, f.always(function() {
            void 0 === o ? i(n).removeProp(e) : n[e] = o;
            t[e] && (t.jsonpCallback = r.jsonpCallback, ar.push(e));
            s && u(o) && o(s[0]);
            s = o = void 0
        }), "script"
    }), e.createHTMLDocument = ((ie = f.implementation.createHTMLDocument("").body).innerHTML = "<form><\/form><form><\/form>", 2 === ie.childNodes.length), i.parseHTML = function(n, t, r) {
        return "string" != typeof n ? [] : ("boolean" == typeof t && (r = t, t = !1), t || (e.createHTMLDocument ? ((s = (t = f.implementation.createHTMLDocument("")).createElement("base")).href = f.location.href, t.head.appendChild(s)) : t = f), u = !r && [], (o = wi.exec(n)) ? [t.createElement(o[1])] : (o = vu([n], t, u), u && u.length && i(u).remove(), i.merge([], o.childNodes)));
        var s, o, u
    }, i.fn.load = function(n, t, r) {
        var f, s, h, e = this,
            o = n.indexOf(" ");
        return -1 < o && (f = tt(n.slice(o)), n = n.slice(0, o)), u(t) ? (r = t, t = void 0) : t && "object" == typeof t && (s = "POST"), 0 < e.length && i.ajax({
            url: n,
            type: s || "GET",
            dataType: "html",
            data: t
        }).done(function(n) {
            h = arguments;
            e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
        }).always(r && function(n, t) {
            e.each(function() {
                r.apply(this, h || [n.responseText, t, n])
            })
        }), this
    }, i.expr.pseudos.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }, i.offset = {
        setOffset: function(n, t, r) {
            var v, o, s, h, e, c, l = i.css(n, "position"),
                a = i(n),
                f = {};
            "static" === l && (n.style.position = "relative");
            e = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            ("absolute" === l || "fixed" === l) && -1 < (s + c).indexOf("auto") ? (h = (v = a.position()).top, o = v.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            u(t) && (t = t.call(n, r, i.extend({}, e)));
            null != t.top && (f.top = t.top - e.top + h);
            null != t.left && (f.left = t.left - e.left + o);
            "using" in t ? t.using.call(n, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), a.css(f))
        }
    }, i.fn.extend({
        offset: function(n) {
            if (arguments.length) return void 0 === n ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
            var r, u, t = this[0];
            if (t) return t.getClientRects().length ? (r = t.getBoundingClientRect(), u = t.ownerDocument.defaultView, {
                top: r.top + u.pageYOffset,
                left: r.left + u.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var n, r, u, t = this[0],
                    f = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === i.css(t, "position")) r = t.getBoundingClientRect();
                else {
                    for (r = this.offset(), u = t.ownerDocument, n = t.offsetParent || u.documentElement; n && (n === u.body || n === u.documentElement) && "static" === i.css(n, "position");) n = n.parentNode;
                    n && n !== t && 1 === n.nodeType && ((f = i(n).offset()).top += i.css(n, "borderTopWidth", !0), f.left += i.css(n, "borderLeftWidth", !0))
                }
                return {
                    top: r.top - f.top - i.css(t, "marginTop", !0),
                    left: r.left - f.left - i.css(t, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent; n && "static" === i.css(n, "position");) n = n.offsetParent;
                return n || g
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function(i) {
            return w(this, function(n, i, u) {
                var f;
                if (rt(n) ? f = n : 9 === n.nodeType && (f = n.defaultView), void 0 === u) return f ? f[t] : n[i];
                f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u
            }, n, i, arguments.length)
        }
    }), i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = du(e.pixelPosition, function(n, r) {
            if (r) return r = ni(n, t), nr.test(r) ? i(n).position()[t] + "px" : r
        })
    }), i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(f, e) {
                var o = arguments.length && (r || "boolean" != typeof f),
                    s = r || (!0 === f || !0 === e ? "margin" : "border");
                return w(this, function(t, r, f) {
                    var e;
                    return rt(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s)
                }, t, o ? f : void 0, o)
            }
        })
    }), i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }), i.fn.extend({
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        },
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    }), i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return 0 < arguments.length ? this.on(t, null, n, i) : this.trigger(t)
        }
    }), re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, i.proxy = function(n, t) {
        var r, f, e;
        if ("string" == typeof t && (r = n[t], t = n, n = r), u(n)) return f = k.call(arguments, 2), (e = function() {
            return n.apply(t || this, f.concat(k.call(arguments)))
        }).guid = n.guid = n.guid || i.guid++, e
    }, i.holdReady = function(n) {
        n ? i.readyWait++ : i.ready(!0)
    }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = c, i.isFunction = u, i.isWindow = rt, i.camelCase = y, i.type = ut, i.now = Date.now, i.isNumeric = function(n) {
        var t = i.type(n);
        return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n))
    }, i.trim = function(n) {
        return null == n ? "" : (n + "").replace(re, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    }), ue = n.jQuery, fe = n.$, i.noConflict = function(t) {
        return n.$ === i && (n.$ = fe), t && n.jQuery === i && (n.jQuery = ue), i
    }, "undefined" == typeof t && (n.jQuery = n.$ = i), i
}),
    function(n) {
        n.isScrollToFixed = function(t) {
            return !!n(t).data("ScrollToFixed")
        };
        n.ScrollToFixed = function(t, i) {
            function ot() {
                r.trigger("preUnfixed.ScrollToFixed");
                f();
                r.trigger("unfixed.ScrollToFixed");
                v = -1;
                w = r.offset().top;
                c = r.offset().left;
                u.options.offsets && (c += r.offset().left - r.position().left);
                ft == -1 && (ft = c);
                s = r.css("position");
                p = !0;
                u.options.bottom != -1 && (r.trigger("preFixed.ScrollToFixed"), b(), r.trigger("fixed.ScrollToFixed"))
            }

            function nt() {
                var n = u.options.limit;
                return n ? typeof n == "function" ? n.apply(r) : n : 0
            }

            function l() {
                return s === "fixed"
            }

            function tt() {
                return s === "absolute"
            }

            function e() {
                return !(l() || tt())
            }

            function b() {
                if (!l()) {
                    var n = r[0].getBoundingClientRect();
                    h.css({
                        display: r.css("display"),
                        width: n.width,
                        height: n.height,
                        float: r.css("float")
                    });
                    cssOptions = {
                        "z-index": u.options.zIndex,
                        position: "fixed",
                        top: u.options.bottom == -1 ? y() : "",
                        bottom: u.options.bottom == -1 ? "" : u.options.bottom,
                        "margin-left": "0px"
                    };
                    u.options.dontSetWidth || (cssOptions.width = r.css("width"));
                    r.css(cssOptions);
                    r.addClass(u.options.baseClassName);
                    u.options.className && r.addClass(u.options.className);
                    s = "fixed"
                }
            }

            function it() {
                var n = nt(),
                    t = c;
                u.options.removeOffsets && (t = "", n = n - w);
                cssOptions = {
                    position: "absolute",
                    top: n,
                    left: t,
                    "margin-left": "0px",
                    bottom: ""
                };
                u.options.dontSetWidth || (cssOptions.width = r.css("width"));
                r.css(cssOptions);
                s = "absolute"
            }

            function f() {
                e() || (v = -1, h.css("display", "none"), r.css({
                    "z-index": ut,
                    width: "",
                    position: d,
                    left: "",
                    top: rt,
                    "margin-left": ""
                }), r.removeClass("scroll-to-fixed-fixed"), u.options.className && r.removeClass(u.options.className), s = null)
            }

            function k(n) {
                n != v && (r.css("left", c - n), v = n)
            }

            function y() {
                var n = u.options.marginTop;
                return n ? typeof n == "function" ? n.apply(r) : n : 0
            }

            function a() {
                var t, a;
                if (n.isScrollToFixed(r) && !r.is(":hidden")) {
                    t = p;
                    a = e();
                    p ? e() && (w = r.offset().top, c = r.offset().left) : ot();
                    var s = n(window).scrollLeft(),
                        h = n(window).scrollTop(),
                        i = nt();
                    u.options.minWidth && n(window).width() < u.options.minWidth ? e() && t || (o(), r.trigger("preUnfixed.ScrollToFixed"), f(), r.trigger("unfixed.ScrollToFixed")) : u.options.maxWidth && n(window).width() > u.options.maxWidth ? e() && t || (o(), r.trigger("preUnfixed.ScrollToFixed"), f(), r.trigger("unfixed.ScrollToFixed")) : u.options.bottom == -1 ? i > 0 && h >= i - y() ? a || tt() && t || (o(), r.trigger("preAbsolute.ScrollToFixed"), it(), r.trigger("unfixed.ScrollToFixed")) : h >= w - y() ? (l() && t || (o(), r.trigger("preFixed.ScrollToFixed"), b(), v = -1, r.trigger("fixed.ScrollToFixed")), k(s)) : e() && t || (o(), r.trigger("preUnfixed.ScrollToFixed"), f(), r.trigger("unfixed.ScrollToFixed")) : i > 0 ? h + n(window).height() - r.outerHeight(!0) >= i - (y() || -st()) ? l() && (o(), r.trigger("preUnfixed.ScrollToFixed"), d === "absolute" ? it() : f(), r.trigger("unfixed.ScrollToFixed")) : (l() || (o(), r.trigger("preFixed.ScrollToFixed"), b()), k(s), r.trigger("fixed.ScrollToFixed")) : k(s)
                }
            }

            function st() {
                return u.options.bottom ? u.options.bottom : 0
            }

            function o() {
                var n = r.css("position");
                n == "absolute" ? r.trigger("postAbsolute.ScrollToFixed") : n == "fixed" ? r.trigger("postFixed.ScrollToFixed") : r.trigger("postUnfixed.ScrollToFixed")
            }
            var u = this;
            u.$el = n(t);
            u.el = t;
            u.$el.data("ScrollToFixed", u);
            var p = !1,
                r = u.$el,
                s, d, ht, rt, ut, w = 0,
                c = 0,
                ft = -1,
                v = -1,
                h = null,
                g = function() {
                    r.is(":visible") ? (p = !1, a()) : f()
                },
                et = function() {
                    window.requestAnimationFrame ? requestAnimationFrame(a) : a()
                },
                lt = function() {
                    var n = document.body,
                        t, i, r, u, f;
                    return document.createElement && n && n.appendChild && n.removeChild ? (t = document.createElement("div"), !t.getBoundingClientRect) ? null : (t.innerHTML = "x", t.style.cssText = "position:fixed;top:100px;", n.appendChild(t), i = n.style.height, r = n.scrollTop, n.style.height = "3000px", n.scrollTop = 500, u = t.getBoundingClientRect().top, n.style.height = i, f = u === 100, n.removeChild(t), n.scrollTop = r, f) : null
                },
                ct = function(n) {
                    n = n || window.event;
                    n.preventDefault && n.preventDefault();
                    n.returnValue = !1
                };
            u.init = function() {
                u.options = n.extend({}, n.ScrollToFixed.defaultOptions, i);
                ut = r.css("z-index");
                u.$el.css("z-index", u.options.zIndex);
                h = n("<div />");
                s = r.css("position");
                d = r.css("position");
                ht = r.css("float");
                rt = r.css("top");
                e() && u.$el.after(h);
                n(window).bind("resize.ScrollToFixed", g);
                n(window).bind("scroll.ScrollToFixed", et);
                "ontouchmove" in window && n(window).bind("touchmove.ScrollToFixed", a);
                u.options.preFixed && r.bind("preFixed.ScrollToFixed", u.options.preFixed);
                u.options.postFixed && r.bind("postFixed.ScrollToFixed", u.options.postFixed);
                u.options.preUnfixed && r.bind("preUnfixed.ScrollToFixed", u.options.preUnfixed);
                u.options.postUnfixed && r.bind("postUnfixed.ScrollToFixed", u.options.postUnfixed);
                u.options.preAbsolute && r.bind("preAbsolute.ScrollToFixed", u.options.preAbsolute);
                u.options.postAbsolute && r.bind("postAbsolute.ScrollToFixed", u.options.postAbsolute);
                u.options.fixed && r.bind("fixed.ScrollToFixed", u.options.fixed);
                u.options.unfixed && r.bind("unfixed.ScrollToFixed", u.options.unfixed);
                u.options.spacerClass && h.addClass(u.options.spacerClass);
                r.bind("resize.ScrollToFixed", function() {
                    h.height(r.height())
                });
                r.bind("scroll.ScrollToFixed", function() {
                    r.trigger("preUnfixed.ScrollToFixed");
                    f();
                    r.trigger("unfixed.ScrollToFixed");
                    a()
                });
                r.bind("detach.ScrollToFixed", function(t) {
                    ct(t);
                    r.trigger("preUnfixed.ScrollToFixed");
                    f();
                    r.trigger("unfixed.ScrollToFixed");
                    n(window).unbind("resize.ScrollToFixed", g);
                    n(window).unbind("scroll.ScrollToFixed", et);
                    r.unbind(".ScrollToFixed");
                    h.remove();
                    u.$el.removeData("ScrollToFixed")
                });
                g()
            };
            u.init()
        };
        n.ScrollToFixed.defaultOptions = {
            marginTop: 0,
            limit: 0,
            bottom: -1,
            zIndex: 1e3,
            baseClassName: "scroll-to-fixed-fixed"
        };
        n.fn.scrollToFixed = function(t) {
            return this.each(function() {
                new n.ScrollToFixed(this, t)
            })
        }
    }(jQuery);
! function(n, t, i, r) {
    function u(t, i) {
        this.settings = null;
        this.options = n.extend({}, u.Defaults, i);
        this.$element = n(t);
        this._handlers = {};
        this._plugins = {};
        this._supress = {};
        this._current = null;
        this._speed = null;
        this._coordinates = [];
        this._breakpoint = null;
        this._width = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._widths = [];
        this._invalidated = {};
        this._pipe = [];
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        };
        this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        };
        n.each(["onResize", "onThrottledResize"], n.proxy(function(t, i) {
            this._handlers[i] = n.proxy(this[i], this)
        }, this));
        n.each(u.Plugins, n.proxy(function(n, t) {
            this._plugins[n.charAt(0).toLowerCase() + n.slice(1)] = new t(this)
        }, this));
        n.each(u.Workers, n.proxy(function(t, i) {
            this._pipe.push({
                filter: i.filter,
                run: n.proxy(i.run, this)
            })
        }, this));
        this.setup();
        this.initialize()
    }
    u.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: t,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    };
    u.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    };
    u.Type = {
        Event: "event",
        State: "state"
    };
    u.Plugins = {};
    u.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            n.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var t = this.settings.margin || "",
                u = !this.settings.autoWidth,
                i = this.settings.rtl,
                r = {
                    width: "auto",
                    "margin-left": i ? t : "",
                    "margin-right": i ? "" : t
                };
            u || this.$stage.children().css(r);
            n.css = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var r = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                t = null,
                i = this._items.length,
                f = !this.settings.autoWidth,
                u = [];
            for (n.items = {
                merge: !1,
                width: r
            }; i--;) t = this._mergers[i], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, n.items.merge = t > 1 || n.items.merge, u[i] = f ? r * t : this._items[i].width();
            this._widths = u
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = [],
                i = this._items,
                r = this.settings,
                e = Math.max(2 * r.items, 4),
                s = 2 * Math.ceil(i.length / 2),
                u = r.loop && i.length ? r.rewind ? e : Math.max(e, s) : 0,
                o = "",
                f = "";
            for (u /= 2; u > 0;) t.push(this.normalize(t.length / 2, !0)), o += i[t[t.length - 1]][0].outerHTML, t.push(this.normalize(i.length - 1 - (t.length - 1) / 2, !0)), f = i[t[t.length - 1]][0].outerHTML + f, u -= 1;
            this._clones = t;
            n(o).addClass("cloned").appendTo(this.$stage);
            n(f).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var u = this.settings.rtl ? 1 : -1, f = this._clones.length + this._items.length, n = -1, i = 0, r = 0, t = []; ++n < f;) i = t[n - 1] || 0, r = this._widths[this.relative(n)] + this.settings.margin, t.push(i + r * u);
            this._coordinates = t
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var n = this.settings.stagePadding,
                t = this._coordinates,
                i = {
                    width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * n,
                    "padding-left": n || "",
                    "padding-right": n || ""
                };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var t = this._coordinates.length,
                i = !this.settings.autoWidth,
                r = this.$stage.children();
            if (i && n.items.merge)
                for (; t--;) n.css.width = this._widths[this.relative(t)], r.eq(t).css(n.css);
            else i && (n.css.width = n.items.width, r.css(n.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            n.current = n.current ? this.$stage.children().index(n.current) : 0;
            n.current = Math.max(this.minimum(), Math.min(this.maximum(), n.current));
            this.reset(n.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            for (var t, i, f = this.settings.rtl ? 1 : -1, e = 2 * this.settings.stagePadding, r = this.coordinates(this.current()) + e, o = r + this.width() * f, s = [], n = 0, u = this._coordinates.length; n < u; n++) t = this._coordinates[n - 1] || 0, i = Math.abs(this._coordinates[n]) + e * f, (this.op(t, "<=", r) && this.op(t, ">", o) || this.op(i, "<", r) && this.op(i, ">", o)) && s.push(n);
            this.$stage.children(".active").removeClass("active");
            this.$stage.children(":eq(" + s.join("), :eq(") + ")").addClass("active");
            this.$stage.children(".center").removeClass("center");
            this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }];
    u.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass);
        this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = n("<" + this.settings.stageElement + ">", {
            "class": this.settings.stageClass
        }).wrap(n("<div/>", {
            "class": this.settings.stageOuterClass
        })), this.$element.append(this.$stage.parent()))
    };
    u.prototype.initializeItems = function() {
        var t = this.$element.find(".owl-item");
        if (t.length) return this._items = t.get().map(function(t) {
            return n(t)
        }), this._mergers = this._items.map(function() {
            return 1
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent()));
        this.isVisible() ? this.refresh() : this.invalidate("width");
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    };
    u.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var n, t, i;
            n = this.$element.find("img");
            t = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r;
            i = this.$element.children(t).width();
            n.length && i <= 0 && this.preloadAutoWidthImages(n)
        }
        this.initializeStage();
        this.initializeItems();
        this.registerEventHandlers();
        this.leave("initializing");
        this.trigger("initialized")
    };
    u.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    };
    u.prototype.setup = function() {
        var u = this.viewport(),
            r = this.options.responsive,
            i = -1,
            t = null;
        r ? (n.each(r, function(n) {
            n <= u && n > i && (i = Number(n))
        }), t = n.extend({}, this.options, r[i]), "function" == typeof t.stagePadding && (t.stagePadding = t.stagePadding()), delete t.responsive, t.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : t = n.extend({}, this.options);
        this.trigger("change", {
            property: {
                name: "settings",
                value: t
            }
        });
        this._breakpoint = i;
        this.settings = t;
        this.invalidate("settings");
        this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    };
    u.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    };
    u.prototype.prepare = function(t) {
        var i = this.trigger("prepare", {
            content: t
        });
        return i.data || (i.data = n("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
            content: i.data
        }), i.data
    };
    u.prototype.update = function() {
        for (var t = 0, i = this._pipe.length, r = n.proxy(function(n) {
            return this[n]
        }, this._invalidated), u = {}; t < i;)(this._invalidated.all || n.grep(this._pipe[t].filter, r).length > 0) && this._pipe[t].run(u), t++;
        this._invalidated = {};
        this.is("valid") || this.enter("valid")
    };
    u.prototype.width = function(n) {
        switch (n = n || u.Width.Default) {
            case u.Width.Inner:
            case u.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    };
    u.prototype.refresh = function() {
        this.enter("refreshing");
        this.trigger("refresh");
        this.setup();
        this.optionsLogic();
        this.$element.addClass(this.options.refreshClass);
        this.update();
        this.$element.removeClass(this.options.refreshClass);
        this.leave("refreshing");
        this.trigger("refreshed")
    };
    u.prototype.onThrottledResize = function() {
        t.clearTimeout(this.resizeTimer);
        this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    };
    u.prototype.onResize = function() {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    };
    u.prototype.registerEventHandlers = function() {
        n.support.transition && this.$stage.on(n.support.transition.end + ".owl.core", n.proxy(this.onTransitionEnd, this));
        !1 !== this.settings.responsive && this.on(t, "resize", this._handlers.onThrottledResize);
        this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", n.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        }));
        this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", n.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", n.proxy(this.onDragEnd, this)))
    };
    u.prototype.onDragStart = function(t) {
        var r = null;
        3 !== t.which && (n.support.transform ? (r = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), r = {
            x: r[16 === r.length ? 12 : 4],
            y: r[16 === r.length ? 13 : 5]
        }) : (r = this.$stage.position(), r = {
            x: this.settings.rtl ? r.left + this.$stage.width() - this.width() + this.settings.margin : r.left,
            y: r.top
        }), this.is("animating") && (n.support.transform ? this.animate(r.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = n(t.target), this._drag.stage.start = r, this._drag.stage.current = r, this._drag.pointer = this.pointer(t), n(i).on("mouseup.owl.core touchend.owl.core", n.proxy(this.onDragEnd, this)), n(i).one("mousemove.owl.core touchmove.owl.core", n.proxy(function(t) {
            var r = this.difference(this._drag.pointer, this.pointer(t));
            n(i).on("mousemove.owl.core touchmove.owl.core", n.proxy(this.onDragMove, this));
            Math.abs(r.x) < Math.abs(r.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    };
    u.prototype.onDragMove = function(n) {
        var t = null,
            i = null,
            u = null,
            f = this.difference(this._drag.pointer, this.pointer(n)),
            r = this.difference(this._drag.stage.start, f);
        this.is("dragging") && (n.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - t, r.x = ((r.x - t) % i + i) % i + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), u = this.settings.pullDrag ? f.x / -5 : 0, r.x = Math.max(Math.min(r.x, t + u), i + u)), this._drag.stage.current = r, this.animate(r.x))
    };
    u.prototype.onDragEnd = function(t) {
        var r = this.difference(this._drag.pointer, this.pointer(t)),
            f = this._drag.stage.current,
            u = r.x > 0 ^ this.settings.rtl ? "left" : "right";
        n(i).off(".owl.core");
        this.$element.removeClass(this.options.grabClass);
        (0 !== r.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(f.x, 0 !== r.x ? u : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = u, (Math.abs(r.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        }));
        this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    };
    u.prototype.closest = function(t, i) {
        var u = -1,
            e = 30,
            o = this.width(),
            f = this.coordinates();
        return this.settings.freeDrag || n.each(f, n.proxy(function(n, s) {
            return "left" === i && t > s - e && t < s + e ? u = n : "right" === i && t > s - o - e && t < s - o + e ? u = n + 1 : this.op(t, "<", s) && this.op(t, ">", f[n + 1] !== r ? f[n + 1] : s - o) && (u = "left" === i ? n + 1 : n), -1 === u
        }, this)), this.settings.loop || (this.op(t, ">", f[this.minimum()]) ? u = t = this.minimum() : this.op(t, "<", f[this.maximum()]) && (u = t = this.maximum())), u
    };
    u.prototype.animate = function(t) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd();
        i && (this.enter("animating"), this.trigger("translate"));
        n.support.transform3d && n.support.transition ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : i ? this.$stage.animate({
            left: t + "px"
        }, this.speed(), this.settings.fallbackEasing, n.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: t + "px"
        })
    };
    u.prototype.is = function(n) {
        return this._states.current[n] && this._states.current[n] > 0
    };
    u.prototype.current = function(n) {
        if (n === r) return this._current;
        if (0 === this._items.length) return r;
        if (n = this.normalize(n), this._current !== n) {
            var t = this.trigger("change", {
                property: {
                    name: "position",
                    value: n
                }
            });
            t.data !== r && (n = this.normalize(t.data));
            this._current = n;
            this.invalidate("position");
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    };
    u.prototype.invalidate = function(t) {
        return "string" === n.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), n.map(this._invalidated, function(n, t) {
            return t
        })
    };
    u.prototype.reset = function(n) {
        (n = this.normalize(n)) !== r && (this._speed = 0, this._current = n, this.suppress(["translate", "translated"]), this.animate(this.coordinates(n)), this.release(["translate", "translated"]))
    };
    u.prototype.normalize = function(n, t) {
        var i = this._items.length,
            u = t ? 0 : this._clones.length;
        return !this.isNumeric(n) || i < 1 ? n = r : (n < 0 || n >= i + u) && (n = ((n - u / 2) % i + i) % i + u / 2), n
    };
    u.prototype.relative = function(n) {
        return n -= this._clones.length / 2, this.normalize(n, !0)
    };
    u.prototype.maximum = function(n) {
        var t, u, f, i = this.settings,
            r = this._coordinates.length;
        if (i.loop) r = this._clones.length / 2 + this._items.length - 1;
        else if (i.autoWidth || i.merge) {
            if (t = this._items.length)
                for (u = this._items[--t].width(), f = this.$element.width(); t-- && !((u += this._items[t].width() + this.settings.margin) > f););
            r = t + 1
        } else r = i.center ? this._items.length - 1 : this._items.length - i.items;
        return n && (r -= this._clones.length / 2), Math.max(r, 0)
    };
    u.prototype.minimum = function(n) {
        return n ? 0 : this._clones.length / 2
    };
    u.prototype.items = function(n) {
        return n === r ? this._items.slice() : (n = this.normalize(n, !0), this._items[n])
    };
    u.prototype.mergers = function(n) {
        return n === r ? this._mergers.slice() : (n = this.normalize(n, !0), this._mergers[n])
    };
    u.prototype.clones = function(t) {
        var i = this._clones.length / 2,
            f = i + this._items.length,
            u = function(n) {
                return n % 2 == 0 ? f + n / 2 : i - (n + 1) / 2
            };
        return t === r ? n.map(this._clones, function(n, t) {
            return u(t)
        }) : n.map(this._clones, function(n, i) {
            return n === t ? u(i) : null
        })
    };
    u.prototype.speed = function(n) {
        return n !== r && (this._speed = n), this._speed
    };
    u.prototype.coordinates = function(t) {
        var i, f = 1,
            u = t - 1;
        return t === r ? n.map(this._coordinates, n.proxy(function(n, t) {
            return this.coordinates(t)
        }, this)) : (this.settings.center ? (this.settings.rtl && (f = -1, u = t + 1), i = this._coordinates[t], i += (this.width() - i + (this._coordinates[u] || 0)) / 2 * f) : i = this._coordinates[u] || 0, i = Math.ceil(i))
    };
    u.prototype.duration = function(n, t, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(t - n), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    };
    u.prototype.to = function(n, t) {
        var u = this.current(),
            f = null,
            i = n - this.relative(u),
            s = (i > 0) - (i < 0),
            e = this._items.length,
            o = this.minimum(),
            r = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(i) > e / 2 && (i += -1 * s * e), n = u + i, (f = ((n - o) % e + e) % e + o) !== n && f - i <= r && f - i > 0 && (u = f - i, n = f, this.reset(u))) : this.settings.rewind ? (r += 1, n = (n % r + r) % r) : n = Math.max(o, Math.min(r, n));
        this.speed(this.duration(u, n, t));
        this.current(n);
        this.isVisible() && this.update()
    };
    u.prototype.next = function(n) {
        n = n || !1;
        this.to(this.relative(this.current()) + 1, n)
    };
    u.prototype.prev = function(n) {
        n = n || !1;
        this.to(this.relative(this.current()) - 1, n)
    };
    u.prototype.onTransitionEnd = function(n) {
        if (n !== r && (n.stopPropagation(), (n.target || n.srcElement || n.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating");
        this.trigger("translated")
    };
    u.prototype.viewport = function() {
        var r;
        return this.options.responsiveBaseElement !== t ? r = n(this.options.responsiveBaseElement).width() : t.innerWidth ? r = t.innerWidth : i.documentElement && i.documentElement.clientWidth ? r = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), r
    };
    u.prototype.replace = function(t) {
        this.$stage.empty();
        this._items = [];
        t && (t = t instanceof jQuery ? t : n(t));
        this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector));
        t.filter(function() {
            return 1 === this.nodeType
        }).each(n.proxy(function(n, t) {
            t = this.prepare(t);
            this.$stage.append(t);
            this._items.push(t);
            this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this));
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate("items")
    };
    u.prototype.add = function(t, i) {
        var u = this.relative(this._current);
        i = i === r ? this._items.length : this.normalize(i, !0);
        t = t instanceof jQuery ? t : n(t);
        this.trigger("add", {
            content: t,
            position: i
        });
        t = this.prepare(t);
        0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[i - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(t), this._items.splice(i, 0, t), this._mergers.splice(i, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1));
        this._items[u] && this.reset(this._items[u].index());
        this.invalidate("items");
        this.trigger("added", {
            content: t,
            position: i
        })
    };
    u.prototype.remove = function(n) {
        (n = this.normalize(n, !0)) !== r && (this.trigger("remove", {
            content: this._items[n],
            position: n
        }), this._items[n].remove(), this._items.splice(n, 1), this._mergers.splice(n, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: n
        }))
    };
    u.prototype.preloadAutoWidthImages = function(t) {
        t.each(n.proxy(function(t, i) {
            this.enter("pre-loading");
            i = n(i);
            n(new Image).one("load", n.proxy(function(n) {
                i.attr("src", n.target.src);
                i.css("opacity", 1);
                this.leave("pre-loading");
                !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    };
    u.prototype.destroy = function() {
        this.$element.off(".owl.core");
        this.$stage.off(".owl.core");
        n(i).off(".owl.core");
        !1 !== this.settings.responsive && (t.clearTimeout(this.resizeTimer), this.off(t, "resize", this._handlers.onThrottledResize));
        for (var r in this._plugins) this._plugins[r].destroy();
        this.$stage.children(".cloned").remove();
        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$stage.remove();
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    };
    u.prototype.op = function(n, t, i) {
        var r = this.settings.rtl;
        switch (t) {
            case "<":
                return r ? n > i : n < i;
            case ">":
                return r ? n < i : n > i;
            case ">=":
                return r ? n <= i : n >= i;
            case "<=":
                return r ? n >= i : n <= i
        }
    };
    u.prototype.on = function(n, t, i, r) {
        n.addEventListener ? n.addEventListener(t, i, r) : n.attachEvent && n.attachEvent("on" + t, i)
    };
    u.prototype.off = function(n, t, i, r) {
        n.removeEventListener ? n.removeEventListener(t, i, r) : n.detachEvent && n.detachEvent("on" + t, i)
    };
    u.prototype.trigger = function(t, i, r) {
        var o = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            e = n.camelCase(n.grep(["on", t, r], function(n) {
                return n
            }).join("-").toLowerCase()),
            f = n.Event([t, "owl", r || "carousel"].join(".").toLowerCase(), n.extend({
                relatedTarget: this
            }, o, i));
        return this._supress[t] || (n.each(this._plugins, function(n, t) {
            t.onTrigger && t.onTrigger(f)
        }), this.register({
            type: u.Type.Event,
            name: t
        }), this.$element.trigger(f), this.settings && "function" == typeof this.settings[e] && this.settings[e].call(this, f)), f
    };
    u.prototype.enter = function(t) {
        n.each([t].concat(this._states.tags[t] || []), n.proxy(function(n, t) {
            this._states.current[t] === r && (this._states.current[t] = 0);
            this._states.current[t]++
        }, this))
    };
    u.prototype.leave = function(t) {
        n.each([t].concat(this._states.tags[t] || []), n.proxy(function(n, t) {
            this._states.current[t]--
        }, this))
    };
    u.prototype.register = function(t) {
        if (t.type === u.Type.Event) {
            if (n.event.special[t.name] || (n.event.special[t.name] = {}), !n.event.special[t.name].owl) {
                var i = n.event.special[t.name]._default;
                n.event.special[t.name]._default = function(n) {
                    return !i || !i.apply || n.namespace && -1 !== n.namespace.indexOf("owl") ? n.namespace && n.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                };
                n.event.special[t.name].owl = !0
            }
        } else t.type === u.Type.State && (this._states.tags[t.name] = this._states.tags[t.name] ? this._states.tags[t.name].concat(t.tags) : t.tags, this._states.tags[t.name] = n.grep(this._states.tags[t.name], n.proxy(function(i, r) {
            return n.inArray(i, this._states.tags[t.name]) === r
        }, this)))
    };
    u.prototype.suppress = function(t) {
        n.each(t, n.proxy(function(n, t) {
            this._supress[t] = !0
        }, this))
    };
    u.prototype.release = function(t) {
        n.each(t, n.proxy(function(n, t) {
            delete this._supress[t]
        }, this))
    };
    u.prototype.pointer = function(n) {
        var i = {
            x: null,
            y: null
        };
        return n = n.originalEvent || n || t.event, n = n.touches && n.touches.length ? n.touches[0] : n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, n.pageX ? (i.x = n.pageX, i.y = n.pageY) : (i.x = n.clientX, i.y = n.clientY), i
    };
    u.prototype.isNumeric = function(n) {
        return !isNaN(parseFloat(n))
    };
    u.prototype.difference = function(n, t) {
        return {
            x: n.x - t.x,
            y: n.y - t.y
        }
    };
    n.fn.owlCarousel = function(t) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var f = n(this),
                r = f.data("owl.carousel");
            r || (r = new u(this, "object" == typeof t && t), f.data("owl.carousel", r), n.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, i) {
                r.register({
                    type: u.Type.Event,
                    name: i
                });
                r.$element.on(i + ".owl.carousel.core", n.proxy(function(n) {
                    n.namespace && n.relatedTarget !== this && (this.suppress([i]), r[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, r))
            }));
            "string" == typeof t && "_" !== t.charAt(0) && r[t].apply(r, i)
        })
    };
    n.fn.owlCarousel.Constructor = u
}(window.Zepto || window.jQuery, window, document),
    function(n, t) {
        var i = function(t) {
            this._core = t;
            this._interval = null;
            this._visible = null;
            this._handlers = {
                "initialized.owl.carousel": n.proxy(function(n) {
                    n.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            };
            this._core.options = n.extend({}, i.Defaults, this._core.options);
            this._core.$element.on(this._handlers)
        };
        i.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        };
        i.prototype.watch = function() {
            this._interval || (this._visible = this._core.isVisible(), this._interval = t.setInterval(n.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        };
        i.prototype.refresh = function() {
            this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
        };
        i.prototype.destroy = function() {
            var n, i;
            t.clearInterval(this._interval);
            for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        };
        n.fn.owlCarousel.Constructor.Plugins.AutoRefresh = i
    }(window.Zepto || window.jQuery, window, document),
    function(n, t, i, r) {
        var u = function(t) {
            this._core = t;
            this._loaded = [];
            this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": n.proxy(function(t) {
                    if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) {
                        var i = this._core.settings,
                            u = i.center && Math.ceil(i.items / 2) || i.items,
                            e = i.center && -1 * u || 0,
                            f = (t.property && t.property.value !== r ? t.property.value : this._core.current()) + e,
                            o = this._core.clones().length,
                            s = n.proxy(function(n, t) {
                                this.load(t)
                            }, this);
                        for (i.lazyLoadEager > 0 && (u += i.lazyLoadEager, i.loop && (f -= i.lazyLoadEager, u++)); e++ < u;) this.load(o / 2 + this._core.relative(f)), o && n.each(this._core.clones(this._core.relative(f)), s), f++
                    }
                }, this)
            };
            this._core.options = n.extend({}, u.Defaults, this._core.options);
            this._core.$element.on(this._handlers)
        };
        u.Defaults = {
            lazyLoad: !1,
            lazyLoadEager: 0
        };
        u.prototype.load = function(i) {
            var r = this._core.$stage.children().eq(i),
                u = r && r.find(".owl-lazy");
            !u || n.inArray(r.get(0), this._loaded) > -1 || (u.each(n.proxy(function(i, r) {
                var e, u = n(r),
                    f = t.devicePixelRatio > 1 && u.attr("data-src-retina") || u.attr("data-src") || u.attr("data-srcset");
                this._core.trigger("load", {
                    element: u,
                    url: f
                }, "lazy");
                u.is("img") ? u.one("load.owl.lazy", n.proxy(function() {
                    u.css("opacity", 1);
                    this._core.trigger("loaded", {
                        element: u,
                        url: f
                    }, "lazy")
                }, this)).attr("src", f) : u.is("source") ? u.one("load.owl.lazy", n.proxy(function() {
                    this._core.trigger("loaded", {
                        element: u,
                        url: f
                    }, "lazy")
                }, this)).attr("srcset", f) : (e = new Image, e.onload = n.proxy(function() {
                    u.css({
                        "background-image": 'url("' + f + '")',
                        opacity: "1"
                    });
                    this._core.trigger("loaded", {
                        element: u,
                        url: f
                    }, "lazy")
                }, this), e.src = f)
            }, this)), this._loaded.push(r.get(0)))
        };
        u.prototype.destroy = function() {
            var n, t;
            for (n in this.handlers) this._core.$element.off(n, this.handlers[n]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        };
        n.fn.owlCarousel.Constructor.Plugins.Lazy = u
    }(window.Zepto || window.jQuery, window, document),
    function(n, t) {
        var i = function(r) {
            this._core = r;
            this._previousHeight = null;
            this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": n.proxy(function(n) {
                    n.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": n.proxy(function(n) {
                    n.namespace && this._core.settings.autoHeight && "position" === n.property.name && this.update()
                }, this),
                "loaded.owl.lazy": n.proxy(function(n) {
                    n.namespace && this._core.settings.autoHeight && n.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            };
            this._core.options = n.extend({}, i.Defaults, this._core.options);
            this._core.$element.on(this._handlers);
            this._intervalId = null;
            var u = this;
            n(t).on("load", function() {
                u._core.settings.autoHeight && u.update()
            });
            n(t).resize(function() {
                u._core.settings.autoHeight && (null != u._intervalId && clearTimeout(u._intervalId), u._intervalId = setTimeout(function() {
                    u.update()
                }, 250))
            })
        };
        i.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        };
        i.prototype.update = function() {
            var i = this._core._current,
                u = i + this._core.settings.items,
                f = this._core.settings.lazyLoad,
                e = this._core.$stage.children().toArray().slice(i, u),
                r = [],
                t = 0;
            n.each(e, function(t, i) {
                r.push(n(i).height())
            });
            t = Math.max.apply(null, r);
            t <= 1 && f && this._previousHeight && (t = this._previousHeight);
            this._previousHeight = t;
            this._core.$stage.parent().height(t).addClass(this._core.settings.autoHeightClass)
        };
        i.prototype.destroy = function() {
            var n, t;
            for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        };
        n.fn.owlCarousel.Constructor.Plugins.AutoHeight = i
    }(window.Zepto || window.jQuery, window, document),
    function(n, t, i) {
        var r = function(t) {
            this._core = t;
            this._videos = {};
            this._playing = null;
            this._handlers = {
                "initialized.owl.carousel": n.proxy(function(n) {
                    n.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": n.proxy(function(n) {
                    n.namespace && this._core.settings.video && this.isInFullScreen() && n.preventDefault()
                }, this),
                "refreshed.owl.carousel": n.proxy(function(n) {
                    n.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": n.proxy(function(n) {
                    n.namespace && "position" === n.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": n.proxy(function(t) {
                    if (t.namespace) {
                        var i = n(t.content).find(".owl-video");
                        i.length && (i.css("display", "none"), this.fetch(i, n(t.content)))
                    }
                }, this)
            };
            this._core.options = n.extend({}, r.Defaults, this._core.options);
            this._core.$element.on(this._handlers);
            this._core.$element.on("click.owl.video", ".owl-video-play-icon", n.proxy(function(n) {
                this.play(n)
            }, this))
        };
        r.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        };
        r.prototype.fetch = function(n, t) {
            var u = function() {
                    return n.attr("data-vimeo-id") ? "vimeo" : n.attr("data-vzaar-id") ? "vzaar" : "youtube"
                }(),
                i = n.attr("data-vimeo-id") || n.attr("data-youtube-id") || n.attr("data-vzaar-id"),
                f = n.attr("data-width") || this._core.settings.videoWidth,
                e = n.attr("data-height") || this._core.settings.videoHeight,
                r = n.attr("href");
            if (!r) throw new Error("Missing video URL.");
            if (i = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), i[3].indexOf("youtu") > -1) u = "youtube";
            else if (i[3].indexOf("vimeo") > -1) u = "vimeo";
            else {
                if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                u = "vzaar"
            }
            i = i[6];
            this._videos[r] = {
                type: u,
                id: i,
                width: f,
                height: e
            };
            t.attr("data-video", r);
            this.thumbnail(n, this._videos[r])
        };
        r.prototype.thumbnail = function(t, i) {
            var e, o, r, c = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
                f = t.find("img"),
                s = "src",
                h = "",
                l = this._core.settings,
                u = function(i) {
                    o = '<div class="owl-video-play-icon"><\/div>';
                    e = l.lazyLoad ? n("<div/>", {
                        "class": "owl-video-tn " + h,
                        srcType: i
                    }) : n("<div/>", {
                        "class": "owl-video-tn",
                        style: "opacity:1;background-image:url(" + i + ")"
                    });
                    t.after(e);
                    t.after(o)
                };
            if (t.wrap(n("<div/>", {
                "class": "owl-video-wrapper",
                style: c
            })), this._core.settings.lazyLoad && (s = "data-src", h = "owl-lazy"), f.length) return u(f.attr(s)), f.remove(), !1;
            "youtube" === i.type ? (r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(r)) : "vimeo" === i.type ? n.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(n) {
                    r = n[0].thumbnail_large;
                    u(r)
                }
            }) : "vzaar" === i.type && n.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(n) {
                    r = n.framegrab_url;
                    u(r)
                }
            })
        };
        r.prototype.stop = function() {
            this._core.trigger("stop", null, "video");
            this._playing.find(".owl-video-frame").remove();
            this._playing.removeClass("owl-video-playing");
            this._playing = null;
            this._core.leave("playing");
            this._core.trigger("stopped", null, "video")
        };
        r.prototype.play = function(t) {
            var r, f = n(t.target),
                u = f.closest("." + this._core.settings.itemClass),
                i = this._videos[u.attr("data-video")],
                e = i.width || "100%",
                o = i.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), u = this._core.items(this._core.relative(u.index())), this._core.reset(u.index()), r = n('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ><\/iframe>'), r.attr("height", o), r.attr("width", e), "youtube" === i.type ? r.attr("src", "//www.youtube.com/embed/" + i.id + "?autoplay=1&rel=0&v=" + i.id) : "vimeo" === i.type ? r.attr("src", "//player.vimeo.com/video/" + i.id + "?autoplay=1") : "vzaar" === i.type && r.attr("src", "//view.vzaar.com/" + i.id + "/player?autoplay=true"), n(r).wrap('<div class="owl-video-frame" />').insertAfter(u.find(".owl-video")), this._playing = u.addClass("owl-video-playing"))
        };
        r.prototype.isInFullScreen = function() {
            var t = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
            return t && n(t).parent().hasClass("owl-video-frame")
        };
        r.prototype.destroy = function() {
            var n, t;
            this._core.$element.off("click.owl.video");
            for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        };
        n.fn.owlCarousel.Constructor.Plugins.Video = r
    }(window.Zepto || window.jQuery, window, document),
    function(n, t, i, r) {
        var u = function(t) {
            this.core = t;
            this.core.options = n.extend({}, u.Defaults, this.core.options);
            this.swapping = !0;
            this.previous = r;
            this.next = r;
            this.handlers = {
                "change.owl.carousel": n.proxy(function(n) {
                    n.namespace && "position" == n.property.name && (this.previous = this.core.current(), this.next = n.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": n.proxy(function(n) {
                    n.namespace && (this.swapping = "translated" == n.type)
                }, this),
                "translate.owl.carousel": n.proxy(function(n) {
                    n.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            };
            this.core.$element.on(this.handlers)
        };
        u.Defaults = {
            animateOut: !1,
            animateIn: !1
        };
        u.prototype.swap = function() {
            if (1 === this.core.settings.items && n.support.animation && n.support.transition) {
                this.core.speed(0);
                var t, i = n.proxy(this.clear, this),
                    f = this.core.$stage.children().eq(this.previous),
                    e = this.core.$stage.children().eq(this.next),
                    r = this.core.settings.animateIn,
                    u = this.core.settings.animateOut;
                this.core.current() !== this.previous && (u && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), f.one(n.support.animation.end, i).css({
                    left: t + "px"
                }).addClass("animated owl-animated-out").addClass(u)), r && e.one(n.support.animation.end, i).addClass("animated owl-animated-in").addClass(r))
            }
        };
        u.prototype.clear = function(t) {
            n(t.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
            this.core.onTransitionEnd()
        };
        u.prototype.destroy = function() {
            var n, t;
            for (n in this.handlers) this.core.$element.off(n, this.handlers[n]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        };
        n.fn.owlCarousel.Constructor.Plugins.Animate = u
    }(window.Zepto || window.jQuery, window, document),
    function(n, t, i) {
        var r = function(t) {
            this._core = t;
            this._call = null;
            this._time = 0;
            this._timeout = 0;
            this._paused = !0;
            this._handlers = {
                "changed.owl.carousel": n.proxy(function(n) {
                    n.namespace && "settings" === n.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : n.namespace && "position" === n.property.name && this._paused && (this._time = 0)
                }, this),
                "initialized.owl.carousel": n.proxy(function(n) {
                    n.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": n.proxy(function(n, t, i) {
                    n.namespace && this.play(t, i)
                }, this),
                "stop.owl.autoplay": n.proxy(function(n) {
                    n.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": n.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": n.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": n.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": n.proxy(function() {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            };
            this._core.$element.on(this._handlers);
            this._core.options = n.extend({}, r.Defaults, this._core.options)
        };
        r.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        };
        r.prototype._next = function(r) {
            this._call = t.setTimeout(n.proxy(this._next, this, r), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read());
            this._core.is("interacting") || i.hidden || this._core.next(r || this._core.settings.autoplaySpeed)
        };
        r.prototype.read = function() {
            return (new Date).getTime() - this._time
        };
        r.prototype.play = function(i, r) {
            var u;
            this._core.is("rotating") || this._core.enter("rotating");
            i = i || this._core.settings.autoplayTimeout;
            u = Math.min(this._time % (this._timeout || i), i);
            this._paused ? (this._time = this.read(), this._paused = !1) : t.clearTimeout(this._call);
            this._time += this.read() % i - u;
            this._timeout = i;
            this._call = t.setTimeout(n.proxy(this._next, this, r), i - u)
        };
        r.prototype.stop = function() {
            this._core.is("rotating") && (this._time = 0, this._paused = !0, t.clearTimeout(this._call), this._core.leave("rotating"))
        };
        r.prototype.pause = function() {
            this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, t.clearTimeout(this._call))
        };
        r.prototype.destroy = function() {
            var n, t;
            this.stop();
            for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        };
        n.fn.owlCarousel.Constructor.Plugins.autoplay = r
    }(window.Zepto || window.jQuery, window, document),
    function(n) {
        "use strict";
        var t = function(i) {
            this._core = i;
            this._initialized = !1;
            this._pages = [];
            this._controls = {};
            this._templates = [];
            this.$element = this._core.$element;
            this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            };
            this._handlers = {
                "prepared.owl.carousel": n.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + n(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "<\/div>")
                }, this),
                "added.owl.carousel": n.proxy(function(n) {
                    n.namespace && this._core.settings.dotsData && this._templates.splice(n.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": n.proxy(function(n) {
                    n.namespace && this._core.settings.dotsData && this._templates.splice(n.position, 1)
                }, this),
                "changed.owl.carousel": n.proxy(function(n) {
                    n.namespace && "position" == n.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": n.proxy(function(n) {
                    n.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": n.proxy(function(n) {
                    n.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }, this)
            };
            this._core.options = n.extend({}, t.Defaults, this._core.options);
            this.$element.on(this._handlers)
        };
        t.Defaults = {
            nav: !1,
            navText: ['<span aria-label="Previous"><i class="fas fa-caret-left"></i><\/span>', '<span aria-label="Next"><i class="fas fa-caret-right"></i><\/span>'],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        };
        t.prototype.initialize = function() {
            var i, t = this._core.settings;
            this._controls.$relative = (t.navContainer ? n(t.navContainer) : n("<div>").addClass(t.navContainerClass).appendTo(this.$element)).addClass("disabled");
            this._controls.$previous = n("<" + t.navElement + ">").addClass(t.navClass[0]).html(t.navText[0]).prependTo(this._controls.$relative).on("click", n.proxy(function() {
                this.prev(t.navSpeed)
            }, this));
            this._controls.$next = n("<" + t.navElement + ">").addClass(t.navClass[1]).html(t.navText[1]).appendTo(this._controls.$relative).on("click", n.proxy(function() {
                this.next(t.navSpeed)
            }, this));
            t.dotsData || (this._templates = [n('<button role="button">').addClass(t.dotClass).append(n("<span>")).prop("outerHTML")]);
            this._controls.$absolute = (t.dotsContainer ? n(t.dotsContainer) : n("<div>").addClass(t.dotsClass).appendTo(this.$element)).addClass("disabled");
            this._controls.$absolute.on("click", "button", n.proxy(function(i) {
                var r = n(i.target).parent().is(this._controls.$absolute) ? n(i.target).index() : n(i.target).parent().index();
                i.preventDefault();
                this.to(r, t.dotsSpeed)
            }, this));
            for (i in this._overrides) this._core[i] = n.proxy(this[i], this)
        };
        t.prototype.destroy = function() {
            var t, n, i, r, u = this._core.settings;
            for (t in this._handlers) this.$element.off(t, this._handlers[t]);
            for (n in this._controls) "$relative" === n && u.navContainer ? this._controls[n].html("") : this._controls[n].remove();
            for (r in this.overides) this._core[r] = this._overrides[r];
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        };
        t.prototype.update = function() {
            var t, i, f, r = this._core.clones().length / 2,
                o = r + this._core.items().length,
                u = this._core.maximum(!0),
                n = this._core.settings,
                e = n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items;
            if ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)), n.dots || "page" == n.slideBy)
                for (this._pages = [], t = r, i = 0, f = 0; t < o; t++) {
                    if (i >= e || 0 === i) {
                        if (this._pages.push({
                            start: Math.min(u, t - r),
                            end: t - r + e - 1
                        }), Math.min(u, t - r) === u) break;
                        i = 0;
                        ++f
                    }
                    i += this._core.mergers(this._core.relative(t))
                }
        };
        t.prototype.draw = function() {
            var i, t = this._core.settings,
                r = this._core.items().length <= t.items,
                u = this._core.relative(this._core.current()),
                f = t.loop || t.rewind;
            this._controls.$relative.toggleClass("disabled", !t.nav || r);
            t.nav && (this._controls.$previous.toggleClass("disabled", !f && u <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && u >= this._core.maximum(!0)));
            this._controls.$absolute.toggleClass("disabled", !t.dots || r);
            t.dots && (i = this._pages.length - this._controls.$absolute.children().length, t.dotsData && 0 !== i ? this._controls.$absolute.html(this._templates.join("")) : i > 0 ? this._controls.$absolute.append(new Array(i + 1).join(this._templates[0])) : i < 0 && this._controls.$absolute.children().slice(i).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(n.inArray(this.current(), this._pages)).addClass("active"))
        };
        t.prototype.onTrigger = function(t) {
            var i = this._core.settings;
            t.page = {
                index: n.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
            }
        };
        t.prototype.current = function() {
            var t = this._core.relative(this._core.current());
            return n.grep(this._pages, n.proxy(function(n) {
                return n.start <= t && n.end >= t
            }, this)).pop()
        };
        t.prototype.getPosition = function(t) {
            var i, r, u = this._core.settings;
            return "page" == u.slideBy ? (i = n.inArray(this.current(), this._pages), r = this._pages.length, t ? ++i : --i, i = this._pages[(i % r + r) % r].start) : (i = this._core.relative(this._core.current()), r = this._core.items().length, t ? i += u.slideBy : i -= u.slideBy), i
        };
        t.prototype.next = function(t) {
            n.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
        };
        t.prototype.prev = function(t) {
            n.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
        };
        t.prototype.to = function(t, i, r) {
            var u;
            !r && this._pages.length ? (u = this._pages.length, n.proxy(this._overrides.to, this._core)(this._pages[(t % u + u) % u].start, i)) : n.proxy(this._overrides.to, this._core)(t, i)
        };
        n.fn.owlCarousel.Constructor.Plugins.Navigation = t
    }(window.Zepto || window.jQuery, window, document),
    function(n, t, i, r) {
        "use strict";
        var u = function(i) {
            this._core = i;
            this._hashes = {};
            this.$element = this._core.$element;
            this._handlers = {
                "initialized.owl.carousel": n.proxy(function(i) {
                    i.namespace && "URLHash" === this._core.settings.startPosition && n(t).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": n.proxy(function(t) {
                    if (t.namespace) {
                        var i = n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!i) return;
                        this._hashes[i] = t.content
                    }
                }, this),
                "changed.owl.carousel": n.proxy(function(i) {
                    if (i.namespace && "position" === i.property.name) {
                        var u = this._core.items(this._core.relative(this._core.current())),
                            r = n.map(this._hashes, function(n, t) {
                                return n === u ? t : null
                            }).join();
                        if (!r || t.location.hash.slice(1) === r) return;
                        t.location.hash = r
                    }
                }, this)
            };
            this._core.options = n.extend({}, u.Defaults, this._core.options);
            this.$element.on(this._handlers);
            n(t).on("hashchange.owl.navigation", n.proxy(function() {
                var i = t.location.hash.substring(1),
                    u = this._core.$stage.children(),
                    n = this._hashes[i] && u.index(this._hashes[i]);
                n !== r && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
            }, this))
        };
        u.Defaults = {
            URLhashListener: !1
        };
        u.prototype.destroy = function() {
            var i, r;
            n(t).off("hashchange.owl.navigation");
            for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
            for (r in Object.getOwnPropertyNames(this)) "function" != typeof this[r] && (this[r] = null)
        };
        n.fn.owlCarousel.Constructor.Plugins.Hash = u
    }(window.Zepto || window.jQuery, window, document),
    function(n, t, i, r) {
        function u(t, i) {
            var u = !1,
                f = t.charAt(0).toUpperCase() + t.slice(1);
            return n.each((t + " " + h.join(f + " ") + f).split(" "), function(n, t) {
                if (s[t] !== r) return u = !i || t, !1
            }), u
        }

        function e(n) {
            return u(n, !0)
        }
        var s = n("<support>").get(0).style,
            h = "Webkit Moz O ms".split(" "),
            o = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend"
                    }
                }
            },
            f = {
                csstransforms: function() {
                    return !!u("transform")
                },
                csstransforms3d: function() {
                    return !!u("perspective")
                },
                csstransitions: function() {
                    return !!u("transition")
                },
                cssanimations: function() {
                    return !!u("animation")
                }
            };
        f.csstransitions() && (n.support.transition = new String(e("transition")), n.support.transition.end = o.transition.end[n.support.transition]);
        f.cssanimations() && (n.support.animation = new String(e("animation")), n.support.animation.end = o.animation.end[n.support.animation]);
        f.csstransforms() && (n.support.transform = new String(e("transform")), n.support.transform3d = f.csstransforms3d())
    }(window.Zepto || window.jQuery, window, document);
! function(n, t, i, r, u, f, e) {
    function b(n) {
        return function(t) {
            return s.$Round(t * n) / n
        }
    }

    function nt(n, t, i) {
        function e(n) {
            return n * s.u / 180
        }

        function v(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct) {
            return [n * w + t * g + i * rt + r * ot, n * b + t * nt + i * ut + r * st, n * k + t * tt + i * ft + r * ht, n * d + t * it + i * et + r * ct, u * w + f * g + e * rt + o * ot, u * b + f * nt + e * ut + o * st, u * k + f * tt + e * ft + o * ht, u * d + f * it + e * et + o * ct, s * w + h * g + c * rt + l * ot, s * b + h * nt + c * ut + l * st, s * k + h * tt + c * ft + l * ht, s * d + h * it + c * et + l * ct, a * w + v * g + y * rt + p * ot, a * b + v * nt + y * ut + p * st, a * k + v * tt + y * ft + p * ht, a * d + v * it + y * et + p * ct]
        }

        function o(n, t) {
            return v.apply(r, (t || u).concat(n))
        }
        var f = this,
            u = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n || 0, t || 0, i || 0, 1],
            h = s.gb,
            c = s.Cb,
            l = s.Oe;
        f.$Scale = function(n, t, i) {
            (n != 1 || t != 1 || i != 1) && (u = o([n, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1]))
        };
        f.$Move = function(n, t, i) {
            u[12] += n || 0;
            u[13] += t || 0;
            u[14] += i || 0
        };
        f.$RotateX = function(n) {
            if (n) {
                a = e(n);
                var t = c(a),
                    i = h(a);
                u = o([1, 0, 0, 0, 0, t, i, 0, 0, -i, t, 0, 0, 0, 0, 1])
            }
        };
        f.$RotateY = function(n) {
            if (n) {
                a = e(n);
                var t = c(a),
                    i = h(a);
                u = o([t, 0, -i, 0, 0, 1, 0, 0, i, 0, t, 0, 0, 0, 0, 1])
            }
        };
        f.Cg = function(n) {
            f.Vg(e(n))
        };
        f.Vg = function(n) {
            if (n) {
                var t = c(n),
                    i = h(n);
                u = o([t, i, 0, 0, -i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
            }
        };
        f.Ug = function(i, r) {
            (i || r) && (n = e(i), t = e(r), u = o([1, l(t), 0, 0, l(n), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]))
        };
        f.Sg = function() {
            return "matrix3d(" + u.join(",") + ")"
        };
        f.Og = function() {
            return "matrix(" + [u[0], u[1], u[4], u[5], u[12], u[13]].join(",") + ")"
        }
    }

    function y() {
        function s(n, t) {
            i.push({
                ec: n,
                gc: t
            })
        }

        function h(n, t) {
            o.f(i, function(r, u) {
                r.ec == n && r.gc === t && i.splice(u, 1)
            })
        }

        function c() {
            i = []
        }

        function e() {
            o.f(r, function(n) {
                o.$RemoveEvent(n.Ne, n.ec, n.gc, n.Xe)
            });
            r = []
        }
        var t = this,
            f, i = [],
            r = [];
        t.Oc = function() {
            return f
        };
        t.a = function(n, t, i, u) {
            o.$AddEvent(n, t, i, u);
            r.push({
                Ne: n,
                ec: t,
                gc: i,
                Xe: u
            })
        };
        t.T = function(n, t, i, u) {
            o.f(r, function(f, e) {
                f.Ne === n && f.ec == t && f.gc === i && f.Xe == u && (o.$RemoveEvent(n, t, i, u), r.splice(e, 1))
            })
        };
        t.Ve = e;
        t.$On = t.addEventListener = s;
        t.$Off = t.removeEventListener = h;
        t.k = function(t) {
            var r = [].slice.call(arguments, 1);
            o.f(i, function(i) {
                i.ec == t && i.gc.apply(n, r)
            })
        };
        t.$Destroy = function() {
            f || (f = u, e(), c())
        }
    }

    function p(n, t, i) {
        var r = this;
        o.W(r, y);
        l.call(r, 0, i.$Idle);
        r.qc = 0;
        r.fd = i.$Idle
    }
    var s, h, o, l, d, g, c;
    new function() {};
    s = {
        u: i.PI,
        l: i.max,
        j: i.min,
        H: i.ceil,
        G: i.floor,
        P: i.abs,
        gb: i.sin,
        Cb: i.cos,
        Oe: i.tan,
        Xf: i.atan,
        Yf: i.atan2,
        xb: i.sqrt,
        B: i.pow,
        dd: i.random,
        $Round: i.round,
        Y: function(n, t) {
            var i = s.B(10, t || 0);
            return s.$Round(n * i) / i
        }
    };
    h = n.$Jease$ = {
        $Swing: function(n) {
            return -s.Cb(n * s.u) / 2 + .5
        },
        $Linear: function(n) {
            return n
        },
        $InQuad: function(n) {
            return n * n
        },
        $OutQuad: function(n) {
            return -n * (n - 2)
        },
        $InOutQuad: function(n) {
            return (n *= 2) < 1 ? 1 / 2 * n * n : -1 / 2 * (--n * (n - 2) - 1)
        },
        $InCubic: function(n) {
            return n * n * n
        },
        $OutCubic: function(n) {
            return (n -= 1) * n * n + 1
        },
        $InOutCubic: function(n) {
            return (n *= 2) < 1 ? 1 / 2 * n * n * n : 1 / 2 * ((n -= 2) * n * n + 2)
        },
        $InQuart: function(n) {
            return n * n * n * n
        },
        $OutQuart: function(n) {
            return -((n -= 1) * n * n * n - 1)
        },
        $InOutQuart: function(n) {
            return (n *= 2) < 1 ? 1 / 2 * n * n * n * n : -1 / 2 * ((n -= 2) * n * n * n - 2)
        },
        $InQuint: function(n) {
            return n * n * n * n * n
        },
        $OutQuint: function(n) {
            return (n -= 1) * n * n * n * n + 1
        },
        $InOutQuint: function(n) {
            return (n *= 2) < 1 ? 1 / 2 * n * n * n * n * n : 1 / 2 * ((n -= 2) * n * n * n * n + 2)
        },
        $InSine: function(n) {
            return 1 - s.Cb(s.u / 2 * n)
        },
        $OutSine: function(n) {
            return s.gb(s.u / 2 * n)
        },
        $InOutSine: function(n) {
            return -1 / 2 * (s.Cb(s.u * n) - 1)
        },
        $InExpo: function(n) {
            return n == 0 ? 0 : s.B(2, 10 * (n - 1))
        },
        $OutExpo: function(n) {
            return n == 1 ? 1 : -s.B(2, -10 * n) + 1
        },
        $InOutExpo: function(n) {
            return n == 0 || n == 1 ? n : (n *= 2) < 1 ? 1 / 2 * s.B(2, 10 * (n - 1)) : 1 / 2 * (-s.B(2, -10 * --n) + 2)
        },
        $InCirc: function(n) {
            return -(s.xb(1 - n * n) - 1)
        },
        $OutCirc: function(n) {
            return s.xb(1 - (n -= 1) * n)
        },
        $InOutCirc: function(n) {
            return (n *= 2) < 1 ? -1 / 2 * (s.xb(1 - n * n) - 1) : 1 / 2 * (s.xb(1 - (n -= 2) * n) + 1)
        },
        $InElastic: function(n) {
            if (!n || n == 1) return n;
            return -(s.B(2, 10 * (n -= 1)) * s.gb((n - .075) * 2 * s.u / .3))
        },
        $OutElastic: function(n) {
            if (!n || n == 1) return n;
            return s.B(2, -10 * n) * s.gb((n - .075) * 2 * s.u / .3) + 1
        },
        $InOutElastic: function(n) {
            if (!n || n == 1) return n;
            var t = .45,
                i = .1125;
            return (n *= 2) < 1 ? -.5 * s.B(2, 10 * (n -= 1)) * s.gb((n - i) * 2 * s.u / t) : s.B(2, -10 * (n -= 1)) * s.gb((n - i) * 2 * s.u / t) * .5 + 1
        },
        $InBack: function(n) {
            var t = 1.70158;
            return n * n * ((t + 1) * n - t)
        },
        $OutBack: function(n) {
            var t = 1.70158;
            return (n -= 1) * n * ((t + 1) * n + t) + 1
        },
        $InOutBack: function(n) {
            var t = 1.70158;
            return (n *= 2) < 1 ? 1 / 2 * n * n * (((t *= 1.525) + 1) * n - t) : 1 / 2 * ((n -= 2) * n * (((t *= 1.525) + 1) * n + t) + 2)
        },
        $InBounce: function(n) {
            return 1 - h.$OutBounce(1 - n)
        },
        $OutBounce: function(n) {
            return n < 1 / 2.75 ? 7.5625 * n * n : n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
        },
        $InOutBounce: function(n) {
            return n < 1 / 2 ? h.$InBounce(n * 2) * .5 : h.$OutBounce(n * 2 - 1) * .5 + .5
        },
        $GoBack: function() {
            return 1 - s.P(1)
        },
        $InWave: function(n) {
            return 1 - s.Cb(n * s.u * 2)
        },
        $OutWave: function(n) {
            return s.gb(n * s.u * 2)
        },
        $OutJump: function(n) {
            return 1 - ((n *= 2) < 1 ? (n = 1 - n) * n * n : (n -= 1) * n * n)
        },
        $InJump: function(n) {
            return (n *= 2) < 1 ? n * n * n : (n = 2 - n) * n * n
        },
        $Early: s.H,
        $Late: s.G,
        $Mid: s.$Round,
        $Mid2: b(2),
        $Mid3: b(3),
        $Mid4: b(4),
        $Mid5: b(5),
        $Mid6: b(6)
    };
    o = n.$Jssor$ = new function() {
        function tt(n, t, i) {
            return n.indexOf(t, i)
        }

        function er() {
            if (!yt) {
                yt = {
                    td: "ontouchstart" in n || "createTouch" in t
                };
                var i;
                (pt.pointerEnabled || (i = pt.msPointerEnabled)) && (yt.re = i ? "msTouchAction" : "touchAction")
            }
            return yt
        }

        function wt(t) {
            var r, o, i;
            if (!w)
                if (w = -1, ci != "Microsoft Internet Explorer" || !n.attachEvent || !n.ActiveXObject)
                    if (ci != "Netscape" || !n.addEventListener) i = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(v), i && (w = si, b = k(i[2]));
                    else {
                        var f = tt(v, "Firefox"),
                            u = tt(v, "Safari"),
                            s = tt(v, "Chrome"),
                            e = tt(v, "AppleWebKit");
                        f >= 0 ? (w = ur, b = k(v.substring(f + 8))) : u >= 0 ? (o = v.substring(0, u).lastIndexOf("/"), w = s >= 0 ? fr : oi, b = k(v.substring(o + 1, u))) : (i = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(v), i && (w = vt, b = k(i[1])));
                        e >= 0 && (hi = k(v.substring(e + 12)))
                    }
                else r = tt(v, "MSIE"), w = vt, b = k(v.substring(r + 5, tt(v, ";", r)));
            return t == w
        }

        function or() {
            return wt(vt)
        }

        function sr() {
            return wt(oi)
        }

        function hr() {
            return wt(si)
        }

        function st() {
            return wt(), hi > 537 || b > 42 || w == vt && b >= 11
        }

        function cr(n) {
            var t;
            return function(i) {
                if (!t) {
                    var r = n.substr(0, 1).toUpperCase() + n.substr(1);
                    t = c(["", "WebKit", "ms", "Moz", "O", "webkit"], function(t) {
                        var u = t + (t ? r : n);
                        return i.style[u] != e && u
                    }) || n
                }
                return t
            }
        }

        function ht(n) {
            return n
        }

        function lr(t) {
            return n.SVGElement && t instanceof n.SVGElement
        }

        function ar(n) {
            return {}.toString.call(n)
        }

        function c(n, t) {
            var i, r;
            if (bt(n)) {
                for (i = 0; i < a(n); i++)
                    if (r = t(n[i], i, n)) return r
            } else
                for (i in n)
                    if (r = t(n[i], i, n)) return r
        }

        function kt(n) {
            return n == r ? String(n) : ai[ar(n)] || "object"
        }

        function gt(n) {
            for (var t in n) return u
        }

        function rt(n) {
            try {
                return kt(n) == "object" && !n.nodeType && n != n.window && (!n.constructor || {}.hasOwnProperty.call(n.constructor.prototype, "isPrototypeOf"))
            } catch (t) {}
        }

        function vr(n, t) {
            return {
                x: n,
                y: t
            }
        }

        function yr(n, t) {
            setTimeout(n, t || 0)
        }

        function p(n, t) {
            return n === e ? t : n
        }

        function ni(n) {
            n.constructor === ni.caller && n.F && n.F.apply(n, ni.caller.arguments)
        }

        function it(t) {
            return t || n.event
        }

        function ut(t, i, u) {
            if (u !== e) t.style[i] = u == e ? "" : u;
            else {
                var f = t.currentStyle || t.style;
                return u = f[i], u == "" && n.getComputedStyle && (f = t.ownerDocument.defaultView.getComputedStyle(t, r), f && (u = f.getPropertyValue(i) || f[i])), u
            }
        }

        function pr(n, t, i, u) {
            if (i === e) return i = k(ut(n, t)), isNaN(i) && (i = r), i;
            u && i != r && (i += u);
            ut(n, t, i)
        }

        function l(n, t, i, u) {
            var f, e;
            return t & 2 && (f = "px"), t & 4 && (f = "%"), t & 16 && (f = "em"), e = t & 8 && cr(n), t &= -9, u = u || (t ? pr : ut),
                function(t, o) {
                    i && o && (o *= i);
                    var s = u(t, e ? e(t) : n, o, f);
                    return i && s != r ? s / i : s
                }
        }

        function ft(n) {
            return function(t, i) {
                d(t, n, i)
            }
        }

        function wr(n) {
            var t = "";
            return n && (c(n, function(n, i) {
                var r = vi[i],
                    u;
                r && (u = r[1] || 0, nr[i] != n && (t += " " + r[0] + "(" + n + ["deg", "px", ""][u] + ")"))
            }), st() && (n.tX || n.tY || n.tZ != e) && (t += " translate3d(" + (n.tX || 0) + "px," + (n.tY || 0) + "px," + (n.tZ || 0) + "px)")), t
        }

        function yi(n) {
            return "rect(" + n.y + "px " + n.t + "px " + n.m + "px " + n.x + "px)"
        }

        function pi(n, t, i, u) {
            for (u = u || "u", n = n ? n.firstChild : r; n; n = n.nextSibling)
                if (n.nodeType == 1) {
                    if (ct(n, u) == t) return n;
                    if (!i) {
                        var f = pi(n, t, i, u);
                        if (f) return f
                    }
                }
        }

        function wi(n, t, i, u) {
            var f, e;
            for (u = u || "u", f = [], n = n ? n.firstChild : r; n; n = n.nextSibling) n.nodeType == 1 && (ct(n, u) == t && f.push(n), i || (e = wi(n, t, i, u), a(e) && (f = f.concat(e))));
            return f
        }

        function g() {
            for (var s, i = arguments, f = 1 & i[0], r = 1 + f, o = i[r - 1] || {}, u, t, n; r < a(i); r++)
                if (u = i[r])
                    for (t in u) n = u[t], n !== e && (n = u[t], s = o[t], o[t] = f && (rt(s) || rt(n)) ? g(f, {}, s, n) : n);
            return o
        }

        function ti(n, t) {
            var o = {},
                r, i, u, e;
            for (r in n) i = n[r], u = t[r], i !== u && (e = f, rt(i) && rt(u) && (i = ti(i, u), e = !gt(i)), e || (o[r] = i));
            return o
        }

        function bi(n) {
            return t.createElement(n)
        }

        function d(n, t, i, u) {
            if (i === e) return n.getAttribute(t);
            i = i == r ? "" : u ? i + u : i;
            n.setAttribute(t, i)
        }

        function ct(n, t) {
            return d(n, t) || d(n, "data-" + t)
        }

        function lt(n, t) {
            return d(n, "class", t) || ""
        }

        function ii(n) {
            var t = {};
            return c(n, function(n) {
                n != e && (t[n] = n)
            }), t
        }

        function ri(n, t) {
            return n && n.match(t || rr) || r
        }

        function ui(n, t) {
            return ii(ri(n || "", t))
        }

        function fi(n, t) {
            var i = "";
            return c(t, function(t) {
                i && (i += n);
                i += t
            }), i
        }

        function br(n, t, i) {
            lt(n, fi(" ", g(ti(ui(lt(n)), ui(t)), ui(i))))
        }

        function ki() {
            c([].slice.call(arguments, 0), function(n) {
                i.Md(n) ? ki.apply(r, n) : n && n.$Destroy && n.$Destroy()
            })
        }

        function ei(n, t, r) {
            var u = n.cloneNode(!t);
            return r || i.Oh(u, "id"), u
        }

        function kr() {
            function a() {
                br(f, w, (s[l || h & 2 || h] || "") + " " + (s[v] || ""));
                i.lc(f, l ? "none" : "")
            }

            function u() {
                v = 0;
                r.T(n, "mouseup", u);
                r.T(t, "mouseup", u);
                r.T(t, "touchend", u);
                r.T(t, "touchcancel", u);
                r.T(n, "blur", u);
                a()
            }

            function b() {
                v = 4;
                a();
                r.a(n, "mouseup", u);
                r.a(t, "mouseup", u);
                r.a(t, "touchend", u);
                r.a(t, "touchcancel", u);
                r.a(n, "blur", u)
            }
            var r = this;
            o.W(r, y);
            var f, p = "",
                k = ["av", "pv", "ds", "dn"],
                s = [],
                w, v = 0,
                h = 0,
                l = 0;
            r.Ye = function(n) {
                if (n === e) return h;
                h = n & 2 || n & 1;
                a()
            };
            r.$Enable = function(n) {
                if (n === e) return !l;
                l = n ? 0 : 3;
                a()
            };
            r.F = function(n) {
                r.$Elmt = f = i.$GetElement(n);
                d(f, "data-jssor-button", "1");
                var t = o.Ud(lt(f));
                t && (p = t.shift());
                c(k, function(n) {
                    s.push(p + n)
                });
                w = fi(" ", s);
                s.unshift("");
                r.a(f, "mousedown", b);
                r.a(f, "touchstart", b)
            };
            o.F(r)
        }

        function di(n, t, i, r, u, f, e) {
            var h, o, c, v, l, a;
            return u && (h = u[0], o = u[1], e && (c = s.l(o * 2, 1), v = c * (e - 1) + 1, i = (i * v - h) / c, i > 0 && (o /= c, h = 0, l = s.H(i) - 1, i = i - l, i > o && l < e - 1 && (i = 1 - i))), i = (i - h) / o, i = s.j(s.l(i, 0), 1)), f && (i = i * f, a = s.G(i), i - a && (i -= a), i = s.j(s.l(i, 0), 1)), (u || f) && (i = s.Y(i, 3)), n + t * r(i)
        }

        function dr(n, t, r, u) {
            function l(t) {
                f[t] = n[t]
            }

            function a() {
                f.cc = n.x;
                r && !t && (f.cc -= r)
            }

            function v() {
                f.Wb = n.y;
                u && !t && (f.Wb -= u)
            }
            var s, f, h, o;
            return n = n || {}, s = {}, f = {}, h = {
                cc: 0,
                Wb: 0,
                sX: 1,
                sY: 1,
                r: 0,
                rX: 0,
                rY: 0,
                tX: 0,
                tY: 0,
                tZ: 0,
                kX: 0,
                kY: 0
            }, o = {}, (!st() || t) && (o.tZ = i.Kc, o.tX = i.Kc, o.tY = i.Kc), (st() || t) && (o.x = a, o.y = v), c(n, function(n, t) {
                (o[t] || l)(t)
            }), c(f, function(n, t) {
                h[t] != e && (s[t] = n, delete f[t])
            }), gt(s) && (f.Kd = s), f
        }

        function gi(n, t) {
            var r = [],
                e = t & 1,
                o, i, u, f, h;
            for (t & 2 && (e = !e), o = s.H(n / 2), i = 0; i < n; i++) u = i, t & 4 ? (f = s.G(s.dd() * n), u = p(r[i], i), r[i] = p(r[f], f), r[f] = u) : (t & 2 && (u = i < o ? i * 2 : (n - i - 1) * 2 + 1, r[u] = i), t & 32 && (u = s.G(i / 2) + (i % 2 ? s.H(o) : 0)), r[u] = i);
            return e && r.reverse(), h = [], c(r, function(n, t) {
                h[n] = t
            }), h
        }

        function gr(n, t, i, r) {
            for (var o, f = [], h = i ? s.H((n + r) / 2) : n, e = 1 / (t * (h - 1) + 1), u = 0; u < n; u++) o = i ? s.G((u + r) / 2) : u, f[u] = [o * t * e, e];
            return f
        }

        function nu(n, t, r) {
            function rt(n, t) {
                var r = n[0],
                    u = n[1],
                    f = n[2],
                    o = n[3],
                    s = n[4],
                    h = n[5],
                    c = n[6],
                    l = n[7];
                t === e && (t = .5);
                var i = 1 - t,
                    a = i * r + t * f,
                    v = i * u + t * o,
                    y = i * f + t * s,
                    p = i * o + t * h,
                    w = i * s + t * c,
                    b = i * h + t * l,
                    k = i * a + t * y,
                    d = i * v + t * p,
                    g = i * y + t * w,
                    nt = i * p + t * b,
                    tt = i * k + t * g,
                    it = i * d + t * nt;
                return [
                    [r, u, a, v, k, d, tt, it],
                    [tt, it, g, nt, w, b, c, l]
                ]
            }

            function ut(n, t) {
                for (var u = 0, f = 0, i = 0, r = t ? 6 : 0; r < a(n); r += 6) u += n[r], f += n[r + 1], i++;
                return {
                    x: i ? u / i : e,
                    y: i ? f / i : e
                }
            }

            function u(n) {
                function r(t) {
                    return {
                        x: n[t],
                        y: n[t + 1]
                    }
                }

                function o(n, t, u) {
                    var f = i.Ue(n, t),
                        o, h;
                    e[u] = i.xh(f.x, f.y);
                    !e[u] && u % 6 && (o = u % 6 < 3 ? 2 : -2, f = i.Ue(r(u + o), t));
                    h = s.Yf(f.y, f.x);
                    l[u] = h
                }
                for (var u, h = a(n), c = n[0] == n[h - 2] && n[1] == n[h - 1], f = ut(n, c), l = [], e = [], t = 0; t < a(n); t += 6) u = r(t), o(u, f, t), o(r(t - 2), u, t - 2), o(r(t + 2), u, t + 2);
                return {
                    lb: n,
                    qb: (a(n) - 2) / 6,
                    kc: f.x,
                    ic: f.y,
                    Nc: l,
                    Vc: e,
                    vc: c
                }
            }

            function w(n) {
                function h(n) {
                    return n.replace(/[\^\s]*([mhvlzcsqta]|\-?\d*\.?\d+)[,\$\s]*/gi, " $1").replace(/([mhvlzcsqta])/gi, " $1").trim().split("  ").map(l)
                }

                function l(n) {
                    return n.split(" ").map(v)
                }

                function v(n, t) {
                    return t === 0 ? n : +n
                }

                function o(n) {
                    f = n[a(n) - 2];
                    e = n[a(n) - 1];
                    t = t.concat(n)
                }
                var s = [],
                    t, y = h(n || ""),
                    i, r, f, e;
                return c(y, function(n) {
                    var h = n.shift();
                    switch (h) {
                        case "M":
                            t && s.push(u(t));
                            t = [];
                            i = n[0];
                            r = n[1];
                            o(n);
                            break;
                        case "L":
                            o([f, e, n[0], n[1], n[0], n[1]]);
                            break;
                        case "C":
                            o(n);
                            break;
                        case "Z":
                        case "z":
                            (f != i || e != r) && o([f, e, i, r, i, r])
                    }
                }), t && s.push(u(t)), s
            }

            function o(n, t) {
                return s.Y(n, 2) + "," + s.Y(t, 2)
            }

            function et(n) {
                for (var i = "M" + o(n[0], n[1]), t = 2; t < a(n) - 2; t += 6) i += "C", i += o(n[t], n[t + 1]) + " ", i += o(n[t + 2], n[t + 3]) + " ", i += o(n[t + 4], n[t + 5]);
                return i
            }

            function ot(n) {
                var t = "";
                return c(n, function(n) {
                    t += et(n)
                }), t
            }

            function st(n) {
                for (var i = [], t = 0; t < a(n) - 2; t += 6) i.push(u(n.slice(t, t + 8)));
                return i
            }

            function ht(n) {
                var t = [];
                return c(n, function(n, i) {
                    var r = n.lb;
                    i || t.push(r[0], r[1]);
                    t = t.concat(r.slice(2))
                }), u(t)
            }

            function b(n, t) {
                function v(i) {
                    return t.Nc[i] - n.Nc[i]
                }

                function o(n, t) {
                    return t = t || 0, s.Y((n - t + s.u * 101) % (s.u * 2) - s.u + t, 8)
                }

                function c(i, r) {
                    var f = n.Vc[i],
                        e = t.Vc[i],
                        s = e - f,
                        u = v(i);
                    return u = o(u, r), b[i] = s, k[i] = u, u
                }
                for (var u, e, l, p, w, b = t.gf = [], k = t.bf = [], r = t.qb + (!n.vc || !n.vc), y = 0, i = 0; i < r; i++) y += o(v(i * 6));
                for (u = o(y / r), f && (e = f > 0 ? 1 : -1, u = ((u + s.u * 2 * e) % (s.u * 2) || s.u * 2 * e) + s.u * 2 * (f - e)), i = 0; i < a(n.lb); i += 6) l = c(i, u), c(i - 2, l), c(i + 2, l);
                p = gr(r, it);
                w = gi(r, h.o);
                t.ad = function(n, i) {
                    if (n >= 0 && n <= t.qb) return di(0, 1, i, nt, p[w[n % r]])
                }
            }

            function k(n, t, i, r, f) {
                function w(n) {
                    for (var r, t = [0, .2, 0, .09, .09, 0, .2, 0, .31, 0, .4, .09, .4, .2, .4, .31, .31, .4, .2, .4, .09, .4, 0, .31, 0, .2], i = 0; i < a(t); i += 2) t[i] += n.kc - .2, t[i + 1] += n.ic - .2;
                    return r = u(t), r.vc = n.vc, r
                }
                var e, o, nt, h, v;
                if (n = i[f] = n || w(t), t = r[f] = t || w(n), e = n.qb, o = t && t.qb, e < o) return k(t, n, r, i, f);
                if (o < e) {
                    for (var d = st(t.lb), g = e / o, y = e - o, l = 0, p = 0; p < 10 && l < y; p++) nt = g + g * p / 10, h = 0, c(d, function(n, t) {
                        var r, i;
                        return h += n.qb, r = s.$Round((t + 1) * nt), h < r && (i = s.j(r - h, y - l), n.qb += i, l += i, h += i), y < l
                    });
                    v = [];
                    c(d, function(n) {
                        for (var t = n.qb, i = n.lb, r; t - 1;) r = rt(i, 1 / t), v.push(u(r[0])), i = r[1], t--;
                        v.push(u(i))
                    });
                    t = r[f] = ht(v)
                }
                b(n, t);
                b(t, n)
            }

            function g(n, t) {
                if (a(n) < a(t)) return g(t, n);
                c(n, function(i, r) {
                    k(i, t[r], n, t, r)
                })
            }

            function y(n, t, i, r, u, f) {
                var e = n.lb,
                    c, o, h;
                if (u >= 0 && u < a(n.lb)) {
                    if (c = t.lb, tt) o = e[u] + (c[u] - e[u]) * r, h = e[u + 1] + (c[u + 1] - e[u + 1]) * r;
                    else {
                        var y = n.Vc[u],
                            p = t.gf[u],
                            w = n.Nc[u],
                            b = t.bf[u],
                            l = y + p * r,
                            v = w + b * r;
                        o = l * s.Cb(v) + i.x;
                        h = l * s.gb(v) + i.y
                    }
                    return f[u] = o, f[u + 1] = h, {
                        x: o,
                        y: h
                    }
                }
            }
            var l, v;
            n = n || {
                d: r.$Elmt ? d(r.$Elmt, "d") : ""
            };
            var nt = r.$Easing,
                h = r.Bd || {},
                f = h.r,
                tt = f == 0,
                it = h.dl || 0;
            return l = w(n.d), v = w(t.d), g(l, v), {
                E: function(i) {
                    if (!i) return n;
                    if (i == 1) return t;
                    var r = [];
                    return c(l, function(n, t) {
                        for (var o = [], u = v[t], f = 0; f < a(n.lb); f += 6) {
                            var e = u.ad(f / 6, i),
                                h = p(u.ad(f / 6 - 1, i), e),
                                c = p(u.ad(f / 6 + 1, i), e),
                                l = {
                                    x: n.kc + (u.kc - n.kc) * e,
                                    y: n.ic + (u.ic - n.ic) * e
                                },
                                s = y(n, u, l, e, f, o);
                            y(n, u, s, (e + h) / 2, f - 2, o);
                            y(n, u, s, (e + c) / 2, f + 2, o)
                        }
                        r.push(o)
                    }), {
                        d: ot(r)
                    }
                },
                X: function(n) {
                    return n && n.d || ""
                },
                sb: ft("d")
            }
        }

        function tu(n) {
            return g({
                wc: i.Ph(n) ? n : h.$Linear
            }, n)
        }

        function et(n, t, f, v, y) {
            function ri(n) {
                var t = kt[n] || {};
                return o.v({}, f, {
                    $Easing: lt[n] || lt.wc || r,
                    Pc: ni[n] || r,
                    Bd: t,
                    $During: dt[n] || r,
                    $Round: gt[n] || r,
                    Mf: t.rd,
                    Yc: i.Nd(tt) ? tt : tt && tt[n],
                    le: 0
                })
            }

            function it(n) {
                return a(n) % 2 ? n.concat(n) : n
            }

            function w(n, t, i) {
                return n = v ? dr(n, wt, i && f.Lf, i && f.Of) : n || {}, y ? g({}, t, n) : n
            }

            function b(n, t) {
                function i(n) {
                    return n == "transparent" ? r : n || t
                }

                function u(n, t) {
                    return n = i(n), t = i(t), !n && t && (n = t.slice(0), n[3] = 0), n || [0, 0, 0, 0]
                }
                return function(t, i, r) {
                    i = u(i, t);
                    t = u(t, i);
                    var f = et(t, i, o.v({
                        Yc: [0, 0, 0, 4]
                    }, r));
                    return {
                        E: function(n) {
                            return f.E(n)
                        },
                        X: function(n) {
                            return "rgba(" + n.join(",") + ")"
                        },
                        sb: n
                    }
                }
            }

            function ui(n, t, i) {
                n = n || 0;
                var r = i.$Easing || h.$Linear,
                    u = i.$During,
                    f = i.$Round,
                    e = i.Mf,
                    o = t - n,
                    c = p(i.Yc, 2);
                return {
                    E: function(t) {
                        return s.Y(di(n, o, t, r, u, f, e), c)
                    },
                    X: ht,
                    sb: i.Pc
                }
            }

            function vt(n, t, i, r) {
                return {
                    E: et(n, t, i).E,
                    X: function(n) {
                        return n.join(",")
                    },
                    sb: r
                }
            }

            function fi(n, t, i) {
                return vt(it(n || [0]), it(t), i, ft("stdDeviation"))
            }

            function ei(n, t, i) {
                function o(n) {
                    for (var t = n; a(t) < u * f / e;) t = t.concat(n);
                    return t
                }
                var f = a(t),
                    u, e, r;
                for (t = it(t), n || (n = t.slice(0), c(n, function(t, i) {
                    i % 2 && (n[i] = 0)
                })), n = it(n), u = a(n), r = 1; r <= u && r <= f; r++) u % r || f % r || (e = r);
                return vt(o(n), o(t), i, ft("stroke-dasharray"))
            }

            function oi(n, t, i) {
                return {
                    E: et(n, t, i).E,
                    X: function(n) {
                        return (n.y || n.x || n.m - i.$OriginalHeight || n.t - i.$OriginalWidth) && yi(n) || ""
                    },
                    sb: l("clip")
                }
            }

            function si(n, t, i) {
                function f(n) {
                    var i = (n.rX || 0) % 360,
                        u = (n.rY || 0) % 360,
                        f = (n.r || 0) % 360,
                        e = p(n.sX, 1),
                        o = p(n.sY, 1),
                        s = p(n.sZ, 1),
                        t = new nt(n.tX, n.tY, n.tZ || 0);
                    return r && t.$Move(-r.x, -r.y), t.$Scale(e, o, s), t.Ug(n.kX, n.kY), t.$RotateX(i), t.$RotateY(u), t.Cg(f), r && t.$Move(r.x, r.y), t.$Move(n.cc, n.Wb), t
                }
                var r = i.Nf,
                    u;
                return i.Ib ? (ct = ft("transform"), u = function(n) {
                    return f(n).Og()
                }) : (ct = li, u = ti ? function(n) {
                    return f(n).Sg()
                } : wr), {
                    E: et(n, t, i).E,
                    sb: ct,
                    X: u || ht
                }
            }

            function hi() {
                var n = 1e-5;
                return {
                    E: ht,
                    X: ht,
                    sb: function(t) {
                        n *= -1;
                        i.cb(t, s.Y(i.cb(t), 4) + n)
                    }
                }
            }
            n = n || {};
            f = g({}, f);
            var yt = f.$Elmt,
                k = {},
                pt = {},
                ut, ct, d = f.le,
                wt = f.Ib,
                lt = w(tu(f.$Easing)),
                kt = w(f.Bd),
                dt = w(f.$During),
                gt = w(f.$Round),
                ni = w(f.Pc, ot),
                at = bt(t);
            n = w(n, e, u);
            t = w(t, e, u);
            var ti = st(),
                ii = y ? {
                    c: oi,
                    Kd: si,
                    pt: nu,
                    bl: fi,
                    da: ei,
                    fc: b(ft("fill"), [0, 0, 0, 1]),
                    sc: b(ft("stroke")),
                    cl: b(l("color"), [0, 0, 0, 1]),
                    bgc: b(l("backgroundColor")),
                    bdc: b(l("borderColor")),
                    rp: hi
                } : {},
                tt = f.Yc || y && {
                    o: 4,
                    so: 4,
                    Kd: 4,
                    ls: 4,
                    lh: 4,
                    sX: 4,
                    sY: 4
                };
            return c(t, function(t, i) {
                var r = n && n[i] || 0,
                    u;
                (at || t !== r) && (u = y && ii[i] || (rt(t) ? et : ui), k[i] = u(r, t, ri(i)))
            }), ut = function(n) {
                var t;
                return c(k, function(i, r) {
                    var u = i.E(n);
                    i.sb(i.$Elmt || yt, i.X(u));
                    r == "o" && (t = u)
                }), t
            }, d && o.f(k, function(n, t) {
                for (var r = [], i = 0; i < d + 1; i++) r[i] = n.X(n.E(i / d));
                pt[t] = r;
                n.E = function(n) {
                    return r[s.$Round(n * d)]
                };
                n.X = ht
            }), ut.E = function(t) {
                var i = g(u, at ? [] : {}, n);
                return o.f(k, function(n, r) {
                    i[r] = n.E(t)
                }), i
            }, ut
        }

        function at(n, t) {
            c(t, function(t, i) {
                ot[i] && ot[i](n, t)
            })
        }

        function ir(n) {
            var t;
            return o.Nd(n) ? t = tr[n] : o.Sh(n) && (t = {}, c(n, function(n, i) {
                t[i] = ir(n)
            })), t || n
        }

        function a(n) {
            return n.length
        }
        var i = this,
            rr = /\S+/g,
            vt = 1,
            ur = 2,
            oi = 3,
            fr = 4,
            si = 5,
            yt, w = 0,
            b = 0,
            hi = 0,
            pt = navigator,
            ci = pt.appName,
            v = pt.userAgent,
            k = parseFloat,
            li = l("transform", 8),
            bt = Array.isArray || function(n) {
                return kt(n) == "array"
            },
            ai = {},
            vi, dt, ot, nr, tr;
        c(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(n) {
            ai["[object " + n + "]"] = n.toLowerCase()
        });
        i.ud = er;
        i.ue = or;
        i.He = sr;
        i.gg = st;
        i.Cd = function() {
            return b
        };
        i.$Delay = yr;
        i.wc = p;
        i.W = function(n, t) {
            return t.call(n), g({}, n)
        };
        i.F = ni;
        i.$GetElement = function(n) {
            return i.ag(n) && (n = t.getElementById(n)), n
        };
        i.xc = function(n) {
            var t = [];
            return c(n, function(n) {
                var r = i.$GetElement(n);
                r && t.push(r)
            }), t
        };
        i.Zf = it;
        i.$EvtSrc = function(n) {
            n = it(n);
            var r = n.target || n.srcElement || t;
            return r.nodeType == 3 && (r = i.Lb(r)), r
        };
        i.Fe = function(n) {
            return n = it(n), n.relatedTarget || n.toElement
        };
        i.Je = function(n) {
            return n = it(n), n.which || [0, 1, 3, 0, 2][n.button] || n.charCode || n.keyCode
        };
        i.Tc = function(n) {
            return n = it(n), {
                x: n.clientX || 0,
                y: n.clientY || 0
            }
        };
        i.Ue = function(n, t) {
            return vr(n.x - t.x, n.y - t.y)
        };
        i.eg = function(n, t) {
            return n.x >= t.x && n.x <= t.t && n.y >= t.y && n.y <= t.m
        };
        i.Ie = function(n, t) {
            var r = o.dg(t),
                u = o.Tc(n);
            return i.eg(u, r)
        };
        i.Ib = function(n) {
            return lr(i.Lb(n))
        };
        vi = {
            r: ["rotate"],
            sX: ["scaleX", 2],
            sY: ["scaleY", 2],
            tX: ["translateX", 1],
            tY: ["translateY", 1],
            kX: ["skewX"],
            kY: ["skewY"]
        };
        i.ug = l("transformOrigin", 8);
        i.tg = l("backfaceVisibility", 8);
        i.Jc = l("transformStyle", 8);
        i.yg = l("perspective", 10);
        i.xg = l("perspectiveOrigin", 8);
        i.we = function(n, t) {
            li(n, t == 1 ? "" : "scale(" + t + ")")
        };
        i.$AddEvent = function(n, t, r, u) {
            n = i.$GetElement(n);
            n.addEventListener(t, r, u)
        };
        i.$RemoveEvent = function(n, t, r, u) {
            n = i.$GetElement(n);
            n.removeEventListener(t, r, u)
        };
        i.$CancelEvent = function(n) {
            n = it(n);
            n.preventDefault && n.preventDefault();
            n.cancel = u;
            n.returnValue = f
        };
        i.$StopEvent = function(n) {
            n = it(n);
            n.stopPropagation && n.stopPropagation();
            n.cancelBubble = u
        };
        i.Z = function(n, t) {
            var i = [].slice.call(arguments, 2);
            return function() {
                var r = i.concat([].slice.call(arguments, 0));
                return t.apply(n, r)
            }
        };
        i.bd = function(n, r) {
            if (r == e) return n.textContent || n.innerText;
            var u = t.createTextNode(r);
            i.Rb(n);
            n.appendChild(u)
        };
        i.ng = function(n, t) {
            if (t == e) return n.innerHTML;
            n.innerHTML = t
        };
        i.dg = function(n) {
            var t = n.getBoundingClientRect();
            return {
                x: t.left,
                y: t.top,
                w: t.right - t.left,
                h: t.bottom - t.top,
                t: t.right,
                m: t.bottom
            }
        };
        i.jb = function(n, t) {
            for (var r = [], i = n.firstChild; i; i = i.nextSibling)(t || i.nodeType == 1) && r.push(i);
            return r
        };
        i.$FindChild = pi;
        i.rg = function(n, t) {
            return n.getElementsByTagName(t)
        };
        i.kb = function(n, i, r, u) {
            var e, f;
            r = r || "u";
            do {
                if (n.nodeType == 1 && (r && (f = ct(n, r)), f && f == p(i, f) || u == n.tagName)) {
                    e = n;
                    break
                }
                n = o.Lb(n)
            } while (n && n != t.body);
            return e
        };
        i.qe = function(n) {
            return ii(["INPUT", "TEXTAREA", "SELECT"])[n.tagName]
        };
        i.v = g;
        i.Zg = ti;
        i.Pd = function(n, t) {
            if (n) {
                var i;
                return c(t, function(t) {
                    n[t] != e && ((i = i || {})[t] = n[t]);
                    delete n[t]
                }), i
            }
        };
        i.Ph = function(n) {
            return kt(n) == "function"
        };
        i.Md = bt;
        i.ag = function(n) {
            return kt(n) == "string"
        };
        i.Nd = function(n) {
            return !bt(n) && !isNaN(k(n)) && isFinite(n)
        };
        i.f = c;
        i.Th = gt;
        i.Sh = rt;
        i.bc = function() {
            return bi("DIV")
        };
        i.Rd = function() {
            return bi("SPAN")
        };
        i.Kc = function() {};
        i.g = d;
        i.hb = ct;
        i.q = function(n, t, r) {
            var u = i.od(ct(n, t));
            return isNaN(u) && (u = r), u
        };
        i.Hc = function(n, t, i) {
            return ri(d(n, t), i)
        };
        i.Fd = ii;
        i.Ud = ri;
        i.mg = function(n) {
            return n && (n = n.toLowerCase()), n
        };
        i.je = fi;
        i.Lb = function(n) {
            return n.parentNode
        };
        i.Fc = function(n) {
            i.nb(n, "none")
        };
        i.mb = function(n, t) {
            i.nb(n, p(t, u) ? "" : "none")
        };
        i.Oh = function(n, t) {
            n.removeAttribute(t)
        };
        i.kh = function(n, t) {
            n.style.clip = yi(t)
        };
        i.Tb = function() {
            return +new Date
        };
        i.O = function(n, t) {
            n.appendChild(t)
        };
        i.ph = function(n, t) {
            c(t, function(t) {
                i.O(n, t)
            })
        };
        i.pb = function(n, t, i) {
            (i || t.parentNode).insertBefore(n, t)
        };
        i.oh = function(n, t, i) {
            n.insertAdjacentHTML(t, i)
        };
        i.ib = function(n, t) {
            t = t || n.parentNode;
            t && t.removeChild(n)
        };
        i.ch = function(n, t) {
            c(n, function(n) {
                i.ib(n, t)
            })
        };
        i.Rb = function(n) {
            i.ch(i.jb(n, u), n)
        };
        i.$Destroy = ki;
        i.Uc = function(n, t) {
            var u = i.Lb(n);
            t & 1 && (i.U(n, (i.K(u) - i.K(n)) / 2), i.Vd(n, r));
            t & 2 && (i.V(n, (i.J(u) - i.J(n)) / 2), i.be(n, r))
        };
        dt = {
            $Top: r,
            $Right: r,
            $Bottom: r,
            $Left: r,
            Eb: r,
            Gb: r
        };
        i.Ch = function(n) {
            var t = i.bc(),
                u, f, r;
            return at(t, {
                Me: "block",
                Pb: i.db(n),
                $Top: 0,
                $Left: 0,
                Eb: 0,
                Gb: 0
            }), u = i.ve(n, dt), i.pb(t, n), i.O(t, n), f = i.ve(n, dt), r = {}, c(u, function(n, t) {
                n == f[t] && (r[t] = n)
            }), at(t, dt), at(t, r), at(n, {
                $Top: 0,
                $Left: 0
            }), r
        };
        i.Fh = function(n, t) {
            return parseInt(n, t || 10)
        };
        i.od = k;
        i.Ae = function(n, i) {
            for (var r = t.body; i && n !== i && r !== i;) i = i.parentNode;
            return n === i
        };
        i.ab = ei;
        i.Vb = function(n, t) {
            function f(n, u) {
                i.$RemoveEvent(r, "load", f);
                i.$RemoveEvent(r, "abort", e);
                i.$RemoveEvent(r, "error", e);
                t && t(r, u)
            }

            function e(n) {
                f(n, u)
            }
            var r = new Image;
            hr() && b < 11.6 || !n ? f(!n) : (i.$AddEvent(r, "load", f), i.$AddEvent(r, "abort", e), i.$AddEvent(r, "error", e), r.src = n)
        };
        i.Eh = function(n, t, r) {
            function f(n) {
                u--;
                t && n && n.src == t.src && (t = n);
                !u && r && r(t)
            }
            var u = 1;
            c(n, function(n) {
                var t = o.hb(n, "src");
                t && (u++, i.Vb(t, f))
            });
            f()
        };
        i.Ce = function(n, t, i, r) {
            var u, e, f, s;
            for (r && (n = ei(n)), u = wi(n, t), a(u) || (u = o.rg(n, t)), e = a(u) - 1; e > -1; e--) f = u[e], s = ei(i), lt(s, lt(f)), o.th(s, f.style.cssText), o.pb(s, f), o.ib(f);
            return n
        };
        i.Lc = function(n) {
            return new kr(n)
        };
        i.xh = function(n, t) {
            return s.xb(n * n + t * t)
        };
        i.R = ut;
        l("backgroundColor");
        i.Fb = l("overflow");
        i.lc = l("pointerEvents");
        i.V = l("top", 2);
        i.U = l("left", 2);
        i.cb = l("opacity", 1);
        i.N = l("zIndex", 1);
        i.Kf = et;
        i.Zd = gi;
        i.K = l("width", 2);
        i.J = l("height", 2);
        i.Vd = l("right", 2);
        i.be = l("bottom", 2);
        l("marginLeft", 2);
        l("marginTop", 2);
        i.db = l("position");
        i.nb = l("display");
        i.th = function(n, t) {
            if (t != e) n.style.cssText = t;
            else return n.style.cssText
        };
        i.Jf = function(n, t) {
            if (t === e) {
                t = ut(n, "backgroundImage") || "";
                var i = /\burl\s*\(\s*["']?([^"'\r\n,]+)["']?\s*\)/gi.exec(t) || [];
                return i[1]
            }
            ut(n, "backgroundImage", t ? "url('" + t + "')" : "")
        };
        i.If = ot = {
            $Opacity: i.cb,
            $Top: i.V,
            $Right: i.Vd,
            $Bottom: i.be,
            $Left: i.U,
            Eb: i.K,
            Gb: i.J,
            Pb: i.db,
            Me: i.nb,
            $ZIndex: i.N,
            o: i.cb,
            x: i.U,
            y: i.V,
            i: i.N,
            dO: l("stroke-dashoffset", 1),
            ls: l("letterSpacing", 16),
            lh: l("lineHeight", 1),
            so: l("startOffset", 4, 100, d)
        };
        i.ve = function(n, t) {
            var i = {};
            return c(t, function(t, r) {
                ot[r] && (i[r] = ot[r](n))
            }), i
        };
        i.rb = at;
        nr = {
            cc: 0,
            Wb: 0,
            sX: 1,
            sY: 1,
            r: 0,
            rX: 0,
            rY: 0,
            tX: 0,
            tY: 0,
            tZ: 0,
            kX: 0,
            kY: 0
        };
        tr = [h.$Linear, h.$Swing, h.$InQuad, h.$OutQuad, h.$InOutQuad, h.$InCubic, h.$OutCubic, h.$InOutCubic, h.$InQuart, h.$OutQuart, h.$InOutQuart, h.$InQuint, h.$OutQuint, h.$InOutQuint, h.$InSine, h.$OutSine, h.$InOutSine, h.$InExpo, h.$OutExpo, h.$InOutExpo, h.$InCirc, h.$OutCirc, h.$InOutCirc, h.$InElastic, h.$OutElastic, h.$InOutElastic, h.$InBack, h.$OutBack, h.$InOutBack, h.$InBounce, h.$OutBounce, h.$InOutBounce, h.$Early, h.$Late, h.$Mid, h.$Mid2, h.$Mid3, h.$Mid4, h.$Mid5, h.$Mid6];
        i.Ld = ir;
        i.A = a;
        i.Qd = tt;
        i.Vf = function(n, t, i, r) {
            function l(n) {
                var i = [],
                    r = o.jb(n, u);
                return o.f(r, function(n) {
                    var f, u, e, r;
                    if (n.nodeType == 3) {
                        for (f = o.bd(n), u = 0; u < o.A(f); u++) e = f[u], r = o.Rd(), o.nb(r, "inline-block"), o.db(r, "relative"), e == " " ? o.ng(r, "&nbsp;") : o.bd(r, e), o.pb(r, n), i.push(r), o.cb(r, t);
                        o.ib(n)
                    } else i = i.concat(l(n))
                }), i
            }

            function y(n) {
                function h(n, t, i) {
                    var r = i ? f : t,
                        u = 0;
                    return n.Sd & 2 && (r = s.H(r / 2), n.$Reverse || (u = (r + 1) % 2 * n.ed, r += u)), r
                }

                function i(n) {
                    var r = n & 1,
                        u = n & 2 || 1,
                        t = 0,
                        i;
                    return n & 2 && (t = f % 2), i = n == 68 ? c : o.Zd(f, n), {
                        Sd: n,
                        ed: t,
                        $Reverse: r,
                        Od: i,
                        Le: function(n) {
                            return s.G((i[n] + t * !r) / u)
                        }
                    }
                }

                function l(n, t, i, r) {
                    var f = h(n, t, i),
                        u = 1 / (r * (f - 1) + 1);
                    return {
                        nc: function(i) {
                            return n.Od[i] < t && [n.Le(i) * r * u, u]
                        }
                    }
                }

                function a(n) {
                    return {
                        Pe: function(t) {
                            return n.Od[t] % 2 ? 1 : -1
                        }
                    }
                }

                function v(n, t, i, r, u) {
                    function c(n) {
                        return s.B(1 - n / e, r)
                    }
                    var e = h(n, t, i),
                        o = 0;
                    return n.Sd & 2 && (e = s.H(f / 2) - n.ed, o = c(e - 1) / 2 * !n.ed), {
                        Se: function(t) {
                            return t = n.Le(t), u && (t = e - t - 1), c(t) - o
                        }
                    }
                }
                var r = this,
                    c = o.Zd(f, 4),
                    t = o.Pd(n, ["b", "d", "e", "p", "dr"]) || {},
                    u = {};
                r.Uf = t;
                r.Rf = function(n) {
                    var h = u[n];
                    if (!h) {
                        var r = t.p && t.p[n] || {},
                            k = o.wc(r.dl, .5),
                            d = r.o || 0,
                            g = r.r || 1,
                            c = r.c,
                            w = r.d,
                            y = o.wc(r.dO, 8),
                            b = s.$Round(f * g),
                            p = i(d),
                            nt = l(p, b, r.dlc, k),
                            tt = c & 8 ? p : i(c),
                            it = a(tt),
                            rt = y & 8 ? p : i(y),
                            ut = v(rt, b, r.dc, w, y == 9);
                        h = u[n] = {
                            nc: nt.nc,
                            Qf: function(n) {
                                return (c != e ? it.Pe(n) : 1) * (w ? ut.Se(n) : 1)
                            }
                        }
                    }
                    return h
                }
            }
            var c, h;
            o.cb(n, 1);
            c = {
                o: {
                    j: 0,
                    l: 1
                }
            };
            h = {
                x: 0,
                y: 0,
                o: 1,
                r: 0,
                rX: 0,
                rY: 0,
                sX: 1,
                sY: 1,
                tZ: 0,
                kX: 0,
                kY: 0
            };
            var a = l(n),
                f = o.A(a),
                v = [];
            o.f(a, function(n, u) {
                var f = [],
                    e = o.v({}, h),
                    l = o.v({}, h, {
                        o: t
                    });
                o.f(i, function(n, t) {
                    var i = {},
                        r = {},
                        a = v[t] = v[t] || new y(n);
                    o.f(n, function(n, t) {
                        var y = a.Rf(t),
                            p = y.nc(u),
                            f, o, v;
                        p && (o = s.Y(n - e[t], 8), o ? (o = s.Y(n - h[t], 8), o *= y.Qf(u), f = s.Y(o + h[t], 4), v = c[t], v && (f = s.l(f, v.j), f = s.j(f, v.l))) : f = n, f - l[t] && (i[t] = f, r[t] = p))
                    });
                    o.v(e, n);
                    o.v(l, i);
                    o.Th(i) && (o.v(i, a.Uf), i.dr = r, f.push(i))
                });
                o.A(f) && r(n, f)
            })
        }
    };
    l = function(t, i, r, h, c, l) {
        function dt(n) {
            y += n;
            v += n;
            tt += n;
            p += n;
            nt += n;
            ut += n
        }

        function ct(n) {
            var f = n,
                t, st, l, c, w, b, k, rt;
            it && (!et && (f >= v || f < y) || et && f >= y) && (f = ((f - y) % it + it) % it + y);
            (!ft || g || p != f) && (t = s.j(f, v), t = s.l(t, y), r.$Reverse && (t = v - t + y), (!ft || g || t != nt) && (d && (st = (t - tt) / (i || 1), l = d(st), pt && (w = t > y && t < v, w != wt && (c = wt = w)), c || l == e || (b = !l, b != yt && (c = yt = b)), c != e && (c && o.lc(h, "none"), c || o.lc(h, o.g(h, "data-events")))), k = nt, rt = nt = t, o.f(ot, function(n, i) {
                var r = !ft && et || f <= p ? ot[o.A(ot) - i - 1] : n;
                r.L(t - ut)
            }), p = f, ft = u, a.kd(k - tt, rt - tt), a.zc(k, rt)))
        }

        function lt(n, t, i) {
            t && n.$Shift(v);
            i || (y = s.j(y, n.yc() + ut), v = s.l(v, n.vb() + ut));
            ot.push(n)
        }

        function bt() {
            var t, i, n;
            w && (t = o.Tb(), i = t - st, st = t, n = p + i * k * vt, n * k >= b * k && (n = b), ct(n), !g && n * k >= b * k ? kt(ht) : rt(bt))
        }

        function at(n, t, i) {
            w || (w = u, g = i, ht = t, n = s.l(n, y), n = s.j(n, v), b = n, k = b < p ? -1 : 1, a.Qc(), st = o.Tb(), rt(bt))
        }

        function kt(n) {
            w && (g = w = ht = f, a.Rc(), n && n())
        }
        var rt;
        t = t || 0;
        var a = this,
            d, w, b, k, g, st = 0,
            vt = 1,
            ht, ut = 0,
            p = 0,
            nt = 0,
            ft, tt, y, v, it, et, ot = [],
            yt = f,
            pt, wt = f;
        rt = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.msRequestAnimationFrame;
        (o.He() && o.Cd() < 7 || !rt) && (rt = function(n) {
            o.$Delay(n, r.$Interval)
        });
        a.$Play = function(n, t, i) {
            at(n ? p + n : v, t, i)
        };
        a.tc = at;
        a.Ff = function(n, t) {
            at(v, n, t)
        };
        a.S = kt;
        a.Be = function() {
            return p
        };
        a.Ee = function() {
            return b
        };
        a.z = function() {
            return nt
        };
        a.L = ct;
        a.uf = function() {
            ct(v, u)
        };
        a.$IsPlaying = function() {
            return w
        };
        a.De = function(n) {
            vt = n
        };
        a.$Shift = dt;
        a.je = lt;
        a.M = function(n, t) {
            lt(n, 0, t)
        };
        a.zd = function(n) {
            lt(n, 1)
        };
        a.qd = function(n) {
            v += n
        };
        a.yc = function() {
            return y
        };
        a.vb = function() {
            return v
        };
        a.zc = a.Qc = a.Rc = a.kd = o.Kc;
        o.Tb();
        a.nf = function() {
            return d && d.E(1)
        };
        r = o.v({
            $Interval: 16
        }, r);
        h && (pt = o.g(h, "data-inactive"));
        it = r.hc;
        et = r.pf;
        y = tt = t;
        v = t + i;
        r.$Elmt = h;
        h && (d = o.Kf(c, l, r, u, u))
    };
    d = n.$JssorSlideshowFormations$ = new function() {
        function ut(n) {
            return (n & b) == b
        }

        function ft(n) {
            return (n & k) == k
        }

        function f(n, t, i) {
            i.push(t);
            n[t] = n[t] || [];
            n[t].push(i)
        }
        var e = this,
            n = 0,
            t = 1,
            i = 2,
            r = 3,
            d = 1,
            b = 2,
            k = 4,
            g = 8,
            nt = 256,
            tt = 512,
            it = 1024,
            rt = 2048,
            h = rt + d,
            c = rt + b,
            l = tt + d,
            a = tt + b,
            v = nt + k,
            y = nt + g,
            p = it + k,
            w = it + g;
        e.$FormationStraight = function(n) {
            for (var u = n.$Cols, e = n.$Rows, k = n.$Assembly, d = n.mc, s = [], t = 0, i = 0, w = u - 1, b = e - 1, o = d - 1, r, i = 0; i < e; i++)
                for (t = 0; t < u; t++) {
                    switch (k) {
                        case h:
                            r = o - (t * e + (b - i));
                            break;
                        case p:
                            r = o - (i * u + (w - t));
                            break;
                        case l:
                            r = o - (t * e + i);
                        case v:
                            r = o - (i * u + t);
                            break;
                        case c:
                            r = t * e + i;
                            break;
                        case y:
                            r = i * u + (w - t);
                            break;
                        case a:
                            r = t * e + (b - i);
                            break;
                        default:
                            r = i * u + t
                    }
                    f(s, r, [i, t])
                }
            return s
        };
        e.$FormationSwirl = function(e) {
            var tt = e.$Cols,
                it = e.$Rows,
                et = e.$Assembly,
                ot = e.mc,
                rt = [],
                ut = [],
                g = 0,
                s = 0,
                w = 0,
                k = tt - 1,
                d = it - 1,
                nt, b, ft = 0;
            switch (et) {
                case h:
                    s = k;
                    w = 0;
                    b = [i, t, r, n];
                    break;
                case p:
                    s = 0;
                    w = d;
                    b = [n, r, t, i];
                    break;
                case l:
                    s = k;
                    w = d;
                    b = [r, t, i, n];
                    break;
                case v:
                    s = k;
                    w = d;
                    b = [t, r, n, i];
                    break;
                case c:
                    s = 0;
                    w = 0;
                    b = [i, n, r, t];
                    break;
                case y:
                    s = k;
                    w = 0;
                    b = [t, i, n, r];
                    break;
                case a:
                    s = 0;
                    w = d;
                    b = [r, n, i, t];
                    break;
                default:
                    s = 0;
                    w = 0;
                    b = [n, i, t, r]
            }
            for (g = 0; g < ot;) {
                if (nt = w + "," + s, s >= 0 && s < tt && w >= 0 && w < it && !ut[nt]) ut[nt] = u, f(rt, g++, [w, s]);
                else switch (b[ft++ % o.A(b)]) {
                    case n:
                        s--;
                        break;
                    case i:
                        w--;
                        break;
                    case t:
                        s++;
                        break;
                    case r:
                        w++
                }
                switch (b[ft % o.A(b)]) {
                    case n:
                        s++;
                        break;
                    case i:
                        w++;
                        break;
                    case t:
                        s--;
                        break;
                    case r:
                        w--
                }
            }
            return rt
        };
        e.$FormationZigZag = function(u) {
            var tt = u.$Cols,
                it = u.$Rows,
                ut = u.$Assembly,
                ft = u.mc,
                d = [],
                g = 0,
                e = 0,
                s = 0,
                b = tt - 1,
                k = it - 1,
                rt, w, nt = 0;
            switch (ut) {
                case h:
                    e = b;
                    s = 0;
                    w = [i, t, r, t];
                    break;
                case p:
                    e = 0;
                    s = k;
                    w = [n, r, t, r];
                    break;
                case l:
                    e = b;
                    s = k;
                    w = [r, t, i, t];
                    break;
                case v:
                    e = b;
                    s = k;
                    w = [t, r, n, r];
                    break;
                case c:
                    e = 0;
                    s = 0;
                    w = [i, n, r, n];
                    break;
                case y:
                    e = b;
                    s = 0;
                    w = [t, i, n, i];
                    break;
                case a:
                    e = 0;
                    s = k;
                    w = [r, n, i, n];
                    break;
                default:
                    e = 0;
                    s = 0;
                    w = [n, i, t, i]
            }
            for (g = 0; g < ft;)
                if (rt = s + "," + e, e >= 0 && e < tt && s >= 0 && s < it && typeof d[rt] == "undefined") {
                    f(d, g++, [s, e]);
                    switch (w[nt % o.A(w)]) {
                        case n:
                            e++;
                            break;
                        case i:
                            s++;
                            break;
                        case t:
                            e--;
                            break;
                        case r:
                            s--
                    }
                } else {
                    switch (w[nt++ % o.A(w)]) {
                        case n:
                            e--;
                            break;
                        case i:
                            s--;
                            break;
                        case t:
                            e++;
                            break;
                        case r:
                            s++
                    }
                    switch (w[nt++ % o.A(w)]) {
                        case n:
                            e++;
                            break;
                        case i:
                            s++;
                            break;
                        case t:
                            e--;
                            break;
                        case r:
                            s--
                    }
                } return d
        };
        e.$FormationStraightStairs = function(n) {
            var g = n.$Cols,
                nt = n.$Rows,
                e = n.$Assembly,
                d = n.mc,
                b = [],
                k = 0,
                r = 0,
                u = 0,
                o = g - 1,
                s = nt - 1,
                tt = d - 1,
                t, i;
            switch (e) {
                case h:
                case a:
                case l:
                case c:
                    t = 0;
                    i = 0;
                    break;
                case y:
                case p:
                case v:
                case w:
                    t = o;
                    i = 0;
                    break;
                default:
                    e = w;
                    t = o;
                    i = 0
            }
            for (r = t, u = i; k < d;) {
                ft(e) || ut(e) ? f(b, tt - k++, [u, r]) : f(b, k++, [u, r]);
                switch (e) {
                    case h:
                    case a:
                        r--;
                        u++;
                        break;
                    case l:
                    case c:
                        r++;
                        u--;
                        break;
                    case y:
                    case p:
                        r--;
                        u--;
                        break;
                    case w:
                    case v:
                    default:
                        r++;
                        u++
                }
                if (r < 0 || u < 0 || r > o || u > s) {
                    switch (e) {
                        case h:
                        case a:
                            t++;
                            break;
                        case y:
                        case p:
                        case l:
                        case c:
                            i++;
                            break;
                        case w:
                        case v:
                        default:
                            t--
                    }
                    if (t < 0 || i < 0 || t > o || i > s) {
                        switch (e) {
                            case h:
                            case a:
                                t = o;
                                i++;
                                break;
                            case l:
                            case c:
                                i = s;
                                t++;
                                break;
                            case y:
                            case p:
                                i = s;
                                t--;
                                break;
                            case w:
                            case v:
                            default:
                                t = 0;
                                i++
                        }
                        i > s ? i = s : i < 0 ? i = 0 : t > o ? t = o : t < 0 && (t = 0)
                    }
                    u = i;
                    r = t
                }
            }
            return b
        };
        e.$FormationRectangle = function(n) {
            for (var r = n.$Cols || 1, u = n.$Rows || 1, e = [], i, o = s.$Round(s.j(r / 2, u / 2)) + 1, t = 0; t < r; t++)
                for (i = 0; i < u; i++) f(e, o - s.j(t + 1, i + 1, r - t, u - i), [i, t]);
            return e
        };
        e.$FormationRandom = function(n) {
            for (var r = [], t, i = 0; i < n.$Rows; i++)
                for (t = 0; t < n.$Cols; t++) f(r, s.H(1e5 * s.dd()) % 13, [i, t]);
            return r
        };
        e.$FormationCircle = function(n) {
            for (var r = n.$Cols || 1, u = n.$Rows || 1, e = [], t, o = r / 2 - .5, h = u / 2 - .5, i = 0; i < r; i++)
                for (t = 0; t < u; t++) f(e, s.$Round(s.xb(s.B(i - o, 2) + s.B(t - h, 2))), [t, i]);
            return e
        };
        e.$FormationCross = function(n) {
            for (var r = n.$Cols || 1, u = n.$Rows || 1, e = [], t, o = r / 2 - .5, h = u / 2 - .5, i = 0; i < r; i++)
                for (t = 0; t < u; t++) f(e, s.$Round(s.j(s.P(i - o), s.P(t - h))), [t, i]);
            return e
        };
        e.$FormationRectangleCross = function(n) {
            for (var e = n.$Cols || 1, o = n.$Rows || 1, h = [], t, r = e / 2 - .5, u = o / 2 - .5, c = s.l(r, u) + 1, i = 0; i < e; i++)
                for (t = 0; t < o; t++) f(h, s.$Round(c - s.l(r - s.P(i - r), u - s.P(t - u))) - 1, [t, i]);
            return h
        }
    };
    n.$JssorSlideshowRunner$ = function(n, t, i, e, c, a) {
        function p(n) {
            var t = {
                $Left: "x",
                $Top: "y",
                $Bottom: "m",
                $Right: "t",
                $Rotate: "r",
                $ScaleX: "sX",
                $ScaleY: "sY",
                $TranslateX: "tX",
                $TranslateY: "tY",
                $SkewX: "kX",
                $SkewY: "kY",
                $Opacity: "o",
                $ZIndex: "i",
                $Clip: "c"
            };
            o.f(n, function(i, r) {
                var u = t[r];
                u && (n[u] = i, delete n[r], u == "c" && p(i))
            });
            n.$Zoom && (n.sX = n.sY = n.$Zoom)
        }

        function k(n, t) {
            var i = {
                $Duration: 1,
                $Delay: 0,
                $Cols: 1,
                $Rows: 1,
                $Opacity: 0,
                $Zoom: 0,
                $Clip: 0,
                $Move: f,
                $SlideOut: f,
                $Reverse: f,
                $Formation: d.$FormationRandom,
                $Assembly: 1032,
                $ChessMode: {
                    $Column: 0,
                    $Row: 0
                },
                $Easing: h.$Linear,
                $Round: {},
                Ic: [],
                $During: {}
            };
            return o.v(i, n), i.$Rows == 0 && (i.$Rows = s.$Round(i.$Cols * t)), i.$Easing = o.Ld(i.$Easing), p(i), p(i.$Easing), p(i.$During), p(i.$Round), i.mc = i.$Cols * i.$Rows, i.Af = function(n, t) {
                var f, r, u;
                if (n /= i.$Cols, t /= i.$Rows, f = n + "x" + t, !i.Ic[f])
                    for (i.Ic[f] = {
                        w: n,
                        h: t
                    }, r = 0; r < i.$Cols; r++)
                        for (u = 0; u < i.$Rows; u++) i.Ic[f][u + "," + r] = {
                            y: u * t,
                            t: r * n + n,
                            m: u * t + t,
                            x: r * n
                        };
                return i.Ic[f]
            }, i.$Brother && (i.$Brother = k(i.$Brother, t), i.$SlideOut = u), i
        }

        function g(n, t, i, r, e, h) {
            var y, c, w = i.$ChessMode.$Column || 0,
                b = i.$ChessMode.$Row || 0,
                p = i.Af(e, h),
                d = i.$Formation(i),
                g = i.$SlideOut,
                v, k;
            return t = o.ab(t), o.N(t, 1), o.Fb(t, "hidden"), o.db(t, "absolute"), a(t, 0, 0), i.$Reverse || d.reverse(), v = {
                x: i.c & 1,
                t: i.c & 2,
                y: i.c & 4,
                m: i.c & 8
            }, k = new l(0, 0), o.f(d, function(a, nt) {
                g && (nt = o.A(d) - nt - 1);
                var tt = i.$Delay * nt;
                o.f(a, function(a) {
                    var lt = a[0],
                        at = a[1],
                        ii = lt + "," + at,
                        nt = f,
                        it = f,
                        ut = f,
                        yt, pt, wt, et, d, rt, bt, kt, dt, gt, ni, ti;
                    w && at % 2 && (w & 3 && (nt = !nt), w & 12 && (it = !it), w & 16 && (ut = !ut));
                    b && lt % 2 && (b & 3 && (nt = !nt), b & 12 && (it = !it), b & 16 && (ut = !ut));
                    var ot = it ? v.m : v.y,
                        st = it ? v.y : v.m,
                        ht = nt ? v.t : v.x,
                        ct = nt ? v.x : v.t,
                        vt = ot || st || ht || ct,
                        ft = o.ab(t);
                    c = {
                        x: 0,
                        y: 0,
                        o: 1
                    };
                    y = o.v({}, c);
                    i.o && (c.o = 2 - i.o);
                    yt = i.$Cols * i.$Rows > 1 || vt;
                    (i.sX || i.r) && (pt = u, pt && (c.sX = c.sY = i.sX ? i.sX - 1 : 1, y.sX = y.sY = 1, wt = i.r || 0, c.r = wt * 360 * (ut ? -1 : 1), y.r = 0));
                    yt && (et = p[ii], vt ? (d = {}, rt = i.$ScaleClip || 1, ot && st ? (d.y = p.h / 2 * rt, d.m = -d.y) : ot ? d.m = -p.h * rt : st && (d.y = p.h * rt), ht && ct ? (d.x = p.w / 2 * rt, d.t = -d.x) : ht ? d.t = -p.w * rt : ct && (d.x = p.w * rt), i.$Move && (bt = (d.x || 0) + (d.t || 0), kt = (d.y || 0) + (d.m || 0), c.x += bt, c.y += kt), y.c = et, o.f(d, function(n, t) {
                        d[t] = et[t] + n
                    }), c.c = d) : o.kh(ft, et));
                    dt = nt ? 1 : -1;
                    gt = it ? 1 : -1;
                    i.x && (c.x += e * i.x * dt);
                    i.y && (c.y += h * i.y * gt);
                    ni = {
                        $Elmt: ft,
                        $Easing: i.$Easing,
                        $During: i.$During,
                        $Round: i.$Round,
                        $Move: i.$Move,
                        Eb: e,
                        Gb: h,
                        le: s.$Round(i.$Duration / 4),
                        $Reverse: !g
                    };
                    c = o.Zg(c, y);
                    ti = new l(r + tt, i.$Duration, ni, ft, y, c);
                    k.M(ti);
                    n.Ef(ft)
                })
            }), k.L(-1), k
        }
        var v = this,
            y, b, w, nt = 0,
            tt = e.$TransitionsOrder;
        v.Bf = function() {
            var n = 0,
                t = e.$Transitions,
                i = o.A(t);
            return n = tt ? nt++ % i : s.G(s.dd() * i), t[n] && (t[n].Qb = n), t[n]
        };
        v.Ob = function() {
            n.Ob();
            b = r;
            w = r
        };
        v.Cf = function(r, u, f, e, o, h) {
            y = k(o, h);
            var c = e.Re,
                l = f.Re,
                a = c,
                p = l,
                tt = y,
                d = y.$Brother || k({}, h);
            y.$SlideOut || (a = l, p = c);
            var nt = d.$Shift || 0,
                it = s.l(nt, 0),
                rt = s.l(-nt, 0);
            b = g(n, p, d, it, t, i);
            w = g(n, a, tt, rt, t, i);
            v.Qb = r
        };
        v.of = function() {
            var n = r;
            return w && (n = new l(0, 0), n.M(w), n.M(b), n.ye = y), n
        }
    };
    var v = {
            qf: "data-scale",
            yb: "data-autocenter",
            Dd: "data-nofreeze",
            ze: "data-nodrag"
        },
        w = new function() {
            var n = this;
            n.Ac = function(n, t, i, r) {
                (r || !o.g(n, t)) && o.g(n, t, i)
            };
            n.Cc = function(n) {
                var t = o.q(n, v.yb);
                o.Uc(n, t)
            }
        },
        k = {
            uc: 1
        };
    n.$JssorBulletNavigator$ = function() {
        function et(n) {
            h[n] && h[n].Ye(n == l)
        }

        function ot(t) {
            n.k(k.uc, t * a)
        }
        var n = this,
            st = o.W(n, y),
            i, b, tt, it, d, l = 0,
            t, a, p, rt, ut, f, c, g, nt, ft, h;
        n.Sc = function(n) {
            if (n != d) {
                var i = l,
                    t = s.G(n / a);
                l = t;
                d = n;
                et(i);
                et(t)
            }
        };
        n.id = function(n) {
            o.mb(i, !n)
        };
        n.nd = function(v) {
            var y, st, k;
            o.$Destroy(h);
            d = e;
            n.Ve();
            ft = [];
            h = [];
            o.Rb(i);
            b = s.H(v / a);
            l = 0;
            var ht = g + rt,
                ct = nt + ut,
                et = s.H(b / p) - 1;
            for (tt = g + ht * (f ? p - 1 : et), it = nt + ct * (f ? et : p - 1), o.K(i, tt), o.J(i, it), y = 0; y < b; y++) {
                st = o.Rd();
                o.bd(st, y + 1);
                k = o.Ce(c, "numbertemplate", st, u);
                o.db(k, "absolute");
                var lt = y % (et + 1),
                    at = s.G(y / (et + 1)),
                    vt = t.Yb && !f ? et - lt : lt;
                o.U(k, (f ? at : vt) * ht);
                o.V(k, (f ? vt : at) * ct);
                o.O(i, k);
                ft[y] = k;
                t.$ActionMode & 1 && n.a(k, "click", o.Z(r, ot, y));
                t.$ActionMode & 2 && n.a(k, "mouseenter", o.Z(r, ot, y));
                h[y] = o.Lc(k)
            }
            w.Cc(i)
        };
        n.F = function(r, u) {
            n.$Elmt = i = o.$GetElement(r);
            n.gd = t = o.v({
                $SpacingX: 10,
                $SpacingY: 10,
                $ActionMode: 1
            }, u);
            c = o.$FindChild(i, "prototype");
            g = o.K(c);
            nt = o.J(c);
            o.ib(c, i);
            a = t.$Steps || 1;
            p = t.$Rows || 1;
            rt = t.$SpacingX;
            ut = t.$SpacingY;
            f = t.$Orientation & 2;
            t.$AutoCenter && w.Ac(i, v.yb, t.$AutoCenter)
        };
        n.$Destroy = function() {
            o.$Destroy(h, st)
        };
        o.F(n)
    };
    n.$JssorArrowNavigator$ = function() {
        function b(t) {
            n.k(k.uc, t, u)
        }

        function g(n) {
            o.mb(t, !n);
            o.mb(i, !n)
        }

        function nt() {
            l.$Enable((f.$Loop || !s.lf(e)) && h > 1);
            a.$Enable((f.$Loop || !s.ef(e)) && h > 1)
        }
        var n = this,
            d = o.W(n, y),
            t, i, f, s, p, h, e, c, l, a;
        n.Sc = function(n, t, i) {
            e = t;
            i || nt()
        };
        n.id = g;
        n.nd = function(f) {
            h = f;
            e = 0;
            p || (n.a(t, "click", o.Z(r, b, -c)), n.a(i, "click", o.Z(r, b, c)), l = o.Lc(t), a = o.Lc(i), o.g(t, v.Dd, 1), o.g(i, v.Dd, 1), p = u)
        };
        n.F = function(r, u, e, h) {
            n.gd = f = o.v({
                $Steps: 1
            }, e);
            t = r;
            i = u;
            f.Yb && (t = u, i = r);
            c = f.$Steps;
            s = h;
            f.$AutoCenter && (w.Ac(t, v.yb, f.$AutoCenter), w.Ac(i, v.yb, f.$AutoCenter));
            w.Cc(t);
            w.Cc(i)
        };
        n.$Destroy = function() {
            o.$Destroy(l, a, d)
        };
        o.F(n)
    };
    n.$JssorThumbnailNavigator$ = function() {
        function ht() {
            function v() {
                c.Ye(d == e)
            }

            function a(n) {
                if (n || !b.$LastDragSucceeded()) {
                    var o = t - e % t,
                        i = b.Id((e + o) / t - 1),
                        r = i * t + t - o;
                    i < 0 && (r += it % t);
                    i >= ot && (r -= it % t);
                    h.k(k.uc, r, f, u)
                }
            }
            var i = this,
                e, s, c, l;
            o.W(i, y);
            i.Hd = v;
            i.F = function(t, f) {
                i.Qb = e = f;
                l = t.nh || t.ih || o.bc();
                i.Wc = s = o.Ce(tt, "thumbnailtemplate", l, u);
                c = o.Lc(s);
                n.$ActionMode & 1 && i.a(s, "click", o.Z(r, a, 0));
                n.$ActionMode & 2 && i.a(s, "mouseenter", o.Z(r, a, 1))
            };
            o.F(i)
        }
        var h = this,
            st = o.W(h, y),
            i, et, n, it, ot, d, l = [],
            ut, ft, t, a, p, g, nt, rt, b, tt;
        h.Sc = function(n, i, r) {
            if (n != d) {
                var u = d;
                d = n;
                u != -1 && l[u].Hd();
                l[n] && l[n].Hd()
            }
            r || b.$PlayTo(b.Id(s.G(n / t)))
        };
        h.id = function(n) {
            o.mb(i, !n)
        };
        h.nd = function(r, h) {
            var at, y, vt, yt, k, pt;
            o.$Destroy(b, l);
            d = e;
            l = [];
            at = o.ab(et);
            o.Rb(i);
            n.Yb && o.g(i, "dir", "rtl");
            o.ph(i, o.jb(at));
            y = o.$FindChild(i, "slides", u);
            it = r;
            ot = s.H(it / t);
            d = -1;
            var v = n.$Orientation & 1,
                tt = g + (g + a) * (t - 1) * (1 - v),
                st = nt + (nt + p) * (t - 1) * v,
                ct = (v ? s.l : s.j)(ut, tt),
                lt = (v ? s.j : s.l)(ft, st);
            rt = s.H((ut - a) / (g + a) * v + (ft - p) / (nt + p) * (1 - v));
            vt = tt + (tt + a) * (rt - 1) * v;
            yt = st + (st + p) * (rt - 1) * (1 - v);
            ct = s.j(ct, vt);
            lt = s.j(lt, yt);
            o.K(y, ct);
            o.J(y, lt);
            o.Uc(y, 3);
            k = [];
            o.f(h, function(n, i) {
                var f = new ht(n, i),
                    u = f.Wc,
                    r = s.G(i / t),
                    e = i % t;
                o.U(u, (g + a) * e * (1 - v));
                o.V(u, (nt + p) * e * v);
                k[r] || (k[r] = o.bc(), o.O(y, k[r]));
                o.O(k[r], u);
                l.push(f)
            });
            pt = o.v({
                $AutoPlay: 0,
                $NaviQuitDrag: f,
                $SlideWidth: tt,
                $SlideHeight: st,
                $SlideSpacing: a * v + p * (1 - v),
                $MinDragOffsetToSlide: 12,
                $SlideDuration: 200,
                $PauseOnHover: 1,
                $Cols: rt,
                $PlayOrientation: n.$Orientation,
                $DragOrientation: n.$NoDrag || n.$DisableDrag ? 0 : n.$Orientation
            }, n);
            b = new c(i, pt);
            w.Cc(i)
        };
        h.F = function(r, f, e) {
            i = r;
            h.gd = n = o.v({
                $SpacingX: 0,
                $SpacingY: 0,
                $Orientation: 1,
                $ActionMode: 1
            }, f);
            ut = o.K(i);
            ft = o.J(i);
            var s = o.$FindChild(i, "slides", u);
            tt = o.$FindChild(s, "prototype");
            e = o.ab(e);
            o.pb(e, s);
            g = o.K(tt);
            nt = o.J(tt);
            o.ib(tt, s);
            o.db(s, "absolute");
            o.Fb(s, "hidden");
            t = n.$Rows || 1;
            a = n.$SpacingX;
            p = n.$SpacingY;
            n.$AutoCenter &= n.$Orientation;
            n.$AutoCenter && w.Ac(i, v.yb, n.$AutoCenter);
            et = o.ab(i)
        };
        h.$Destroy = function() {
            o.$Destroy(b, l, st)
        };
        o.F(h)
    };
    p.pc = 21;
    p.Zb = 24;
    g = n.$JssorCaptionSlideo$ = function() {
        function lt(n) {
            var t = ct[n],
                i;
            return t == r && (t = ct[n] = {
                ob: n,
                Zc: [],
                Te: []
            }, i = 0, o.f(d, function(t, r) {
                return i = r, t.ob > n
            }) || i++, d.splice(i, 0, t)), t
        }

        function ti(n, t) {
            var b = o.K(n),
                k = o.J(n),
                a = o.Ib(n),
                h = {
                    x: a ? 0 : o.U(n),
                    y: a ? 0 : o.V(n),
                    cc: 0,
                    Wb: 0,
                    o: o.cb(n),
                    i: o.N(n) || 0,
                    r: 0,
                    rX: 0,
                    rY: 0,
                    sX: 1,
                    sY: 1,
                    tX: 0,
                    tY: 0,
                    tZ: 0,
                    kX: 0,
                    kY: 0,
                    ls: 0,
                    lh: 1,
                    so: 0,
                    c: {
                        y: 0,
                        t: b,
                        m: k,
                        x: 0
                    }
                },
                i, f, v, e, d;
            if (ut && (v = ut[o.q(n, "c")], v && (i = lt(v.r, 0), i.sg = v.e || 0)), e = o.g(n, "data-to"), e && a && (e = o.Ud(e), e = {
                x: o.od(e[0]),
                y: o.od(e[1])
            }), d = {
                $Elmt: n,
                $OriginalWidth: b,
                $OriginalHeight: k,
                Nf: e,
                Lf: h.x,
                Of: h.y,
                Ib: a
            }, o.f(t, function(t) {
                var a = o.v({
                        $Easing: o.Ld(t.e),
                        $During: t.dr,
                        Bd: t.p
                    }, d),
                    e = o.v(u, {}, t),
                    r, c;
                o.Pd(e, ["b", "d", "e", "p", "dr"]);
                r = new l(t.b, t.d, a, n, h, e);
                w = s.l(w, t.b + t.d);
                i ? (f || (f = new l(t.b, 0)), f.M(r)) : (c = lt(t.b, t.b + t.d), c.Zc.push(r));
                h = r.nf()
            }), i && f) {
                f.uf();
                var c = f,
                    y, p = f.yc(),
                    g = f.vb(),
                    nt = s.l(g, i.sg);
                i.ob < g && (i.ob > p ? (c = new l(p, i.ob - p), c.M(f, u)) : c = r, y = new l(i.ob, nt - p, {
                    hc: nt - i.ob,
                    pf: u
                }), y.M(f, u));
                c && i.Zc.push(c);
                y && i.Te.push(y)
            }
            return h
        }

        function at(t, i) {
            o.f(t, function(t) {
                var f = o.q(t, "play"),
                    r, u;
                i && f ? (r = new g(t, v, {
                    xe: f
                }), wt.push(r), n.a(r, p.pc, ci), n.a(r, p.Zb, li)) : (at(o.jb(t).concat(o.xc(o.Hc(t, "data-tchd"))), i + 1), u = o.xc(o.Hc(t, "data-tsep")), u.push(t), o.f(u, function(n) {
                    var t = ht[o.q(n, "t")];
                    t && ti(n, t)
                }))
            })
        }

        function ii(t, i, r) {
            var e = t.b - i,
                f;
            return e && (f = new l(i, e), f.M(k, u), f.$Shift(r), n.M(f)), n.qd(t.d), e
        }

        function ri(t) {
            var i = k.yc(),
                r = 0;
            o.f(t, function(t, u) {
                t = o.v({
                    d: 3e3
                }, t);
                ii(t, i, r);
                i = t.b;
                r += t.d;
                u && t.t != 2 || (n.qc = i, n.fd = i + t.d)
            })
        }

        function et(n, t, i) {
            var u = o.A(t),
                h, r, f, e;
            if (u > 4)
                for (h = s.H(u / 4), r = 0; r < h; r++) f = t.slice(r * 4, s.j(r * 4 + 4, u)), e = new l(f[0].ob, 0), et(e, f, i), n.M(e);
            else o.f(t, function(t) {
                o.f(i ? t.Te : t.Zc, function(t) {
                    i && t.qd(w - t.vb());
                    n.M(t)
                })
            })
        }

        function it(n) {
            return n & 2 || n & 4 && o.ud().td
        }

        function ui() {
            ot || (e & 8 && n.a(t, "keydown", gt), e & 32 && (n.a(t, "mousedown", rt), n.a(t, "touchstart", rt)), ot = u)
        }

        function fi() {
            n.T(t, "keydown", gt);
            n.T(t, "mousedown", rt);
            n.T(t, "touchstart", rt);
            ot = f
        }

        function kt(t) {
            (!b || t) && (b = u, n.S(), t && nt && n.L(0), n.De(1), n.Ff(), ui(), n.k(p.pc, n))
        }

        function a() {
            !st && (b || n.z()) && (st = u, n.S(), n.Be() > n.qc && n.L(n.qc), n.De(yt || 1), n.tc(0))
        }

        function ei() {
            c || a()
        }

        function dt(t) {
            var i = t;
            t < 0 && n.z() && (i = 1);
            i != nt && (nt = i, vt && n.k(p.Zb, n, nt))
        }

        function gt(n) {
            e & 8 && o.Je(n) == 27 && a()
        }

        function oi(n) {
            c && o.Fe(n) !== r && (c = f, e & 16 && o.$Delay(ei, 160))
        }

        function rt(n) {
            e & 32 && !o.Ae(i, o.$EvtSrc(n)) && a()
        }

        function si(n) {
            c || (c = u, h & 1 && o.Ie(n, i) && kt())
        }

        function hi(n) {
            var s = o.$EvtSrc(n),
                t = o.kb(s, r, r, "A"),
                f = t && (o.qe(t) || t === i || o.Ae(i, t));
            b && it(e) ? f || a() : it(h) && (f || kt(u))
        }

        function ci(n) {
            var i = n.wg(),
                t = bt[i];
            t !== n && t && t.vg();
            bt[i] = n
        }

        function li(t, i) {
            n.k(p.Zb, t, i)
        }
        var n = this,
            ni = o.W(n, y);
        l.call(n, 0, 0);
        var i, v, ht, ut, k = new l(0, 0),
            ct = [],
            d = [],
            ft, w = 0;
        var h, vt, nt = 0,
            e, tt, yt, pt, ot, wt = [],
            bt = [],
            b, st, c;
        n.wg = function() {
            return pt || ""
        };
        n.vg = a;
        n.Qc = function() {
            dt(1)
        };
        n.Rc = function() {
            b = f;
            st = f;
            dt(-1);
            n.z() || fi()
        };
        n.zc = function() {
            !c && tt && n.Be() > n.fd && a()
        };
        n.F = function(t, r, f) {
            i = t;
            v = r;
            h = f.xe;
            ft = f.cg;
            ht = v.$Transitions;
            ut = v.$Controls;
            at([i], 0);
            et(k, d);
            h && (n.M(k), ft = u, tt = o.q(i, "idle"), e = o.q(i, "rollback"), yt = o.q(i, "speed", 1), pt = o.hb(i, "group"), (it(h) || it(e)) && n.a(i, "click", hi), (h & 1 || tt) && !o.ud().td && (n.a(i, "mouseenter", si), n.a(i, "mouseleave", oi)), vt = o.q(i, "pause"));
            var c = v.$Breaks || [],
                s = c[o.q(i, "b")] || [],
                l = {
                    b: w,
                    d: o.A(s) ? 0 : f.$Idle || tt || 0
                };
            s = s.concat([l]);
            ri(s);
            n.vb();
            ft && n.qd(1e8);
            w = n.vb();
            et(n, d, u);
            n.L(-1);
            n.L(o.q(i, "initial") || 0)
        };
        n.$Destroy = function() {
            o.$Destroy(ni, wt);
            n.S();
            n.L(-1)
        };
        o.F(n)
    };
    c = n.$JssorSlider$ = (n.module || {}).exports = function() {
        function iu() {
            return !ui && hi & 12
        }

        function bf() {
            return vu || !ui && hi & 3
        }

        function ru() {
            return !rt && !iu() && !ot.$IsPlaying()
        }

        function we() {
            return !bf() && ru()
        }

        function kf() {
            return ut || ni
        }

        function be() {
            return kf() & 2 ? gi : di
        }

        function df(n, t, i) {
            o.U(n, t);
            o.V(n, i)
        }

        function gf(n, t) {
            var i = kf(),
                r = (di * t + au) * (i & 1),
                u = (gi * t + au) * (i & 2) / 2;
            df(n, r, u)
        }

        function ne(n, t) {
            var u, r, i;
            return !rt || ft & 1 || (u = n, n < dt && (u = dt, r = -1), n > ri && (u = ri, r = 1), r && (i = n - u, t ? (i = s.Xf(i) * 2 / s.u, i = s.B(i * r, 1.6)) : (i = s.B(i * r, .625), i = s.Oe(i * s.u / 2)), n = u + i * r)), n
        }

        function te(n) {
            return ne(n, u)
        }

        function ke(n) {
            return ne(n)
        }

        function uu(n, t) {
            if (!(ft & 1)) {
                var i = n - ri + (t || 0),
                    r = dt - n + (t || 0);
                i > 0 && i > r ? n = ri : r > 0 && (n = dt)
            }
            return n
        }

        function ie(n) {
            return !(ft & 1) && n - dt < .0001
        }

        function re(n) {
            return !(ft & 1) && ri - n < .0001
        }

        function or(n) {
            return !(ft & 1) && (n - dt < .0001 || ri - n < .0001)
        }

        function bu(n, t, i) {
            er || o.f(si, function(r) {
                r.Sc(n, t, i)
            })
        }

        function ue(n) {
            var t = n,
                i = or(n);
            return i ? t = uu(t) : (n = it(n), t = n), t = s.G(t), s.l(t, 0)
        }

        function de(n) {
            tt[g];
            cf = g;
            g = n;
            lf = tt[g]
        }

        function fe() {
            ut = 0;
            var n = et.z(),
                t = ue(n);
            bu(t, n);
            (or(n) || n == s.G(n)) && (b & 2 && (li > 0 && t == w - 1 || li < 0 && !t) && (b = 0), de(t), i.k(c.$EVT_PARK, g, cf))
        }

        function ee(n, t) {
            !w || t && ot.$IsPlaying() || (ot.S(), realPosition = te(n), fi.L(realPosition), fe())
        }

        function sr(n) {
            w ? (n = uu(n), n = it(n), yi = f, _IsStandBy = f, rt = f, ee(n)) : bu(0, 0)
        }

        function ge() {
            var t = c.Ke || 0,
                n = rr;
            return c.Ke |= n, oi = n & ~t
        }

        function no() {
            oi && (c.Ke &= ~rr, oi = 0)
        }

        function oe(n) {
            var t = o.bc();
            return o.rb(t, ei), n && o.Fb(t, "hidden"), t
        }

        function it(n, t) {
            return t = t || w || 1, (n % t + t) % t
        }

        function se(n, t, i) {
            b & 8 && (b = 0);
            hr(n, br, t, i)
        }

        function ku() {
            o.f(si, function(n) {
                n.id(n.gd.$ChanceToShow <= ui)
            })
        }

        function to(n) {
            ui || !o.Fe(n) && o.Ie(n, d) || (ui = 1, ku(), rt || (hi & 12 && le(), tt[g] && tt[g].Bc()), i.k(c.$EVT_MOUSE_LEAVE))
        }

        function io() {
            ui && (ui = 0, ku(), !rt && hi & 12 && ce());
            i.k(c.$EVT_MOUSE_ENTER)
        }

        function du(n, t) {
            hr(n, t, u)
        }

        function hr(n, t, i, r) {
            var c, o, l, h, v, y, p;
            !w || rt && !a.$NaviQuitDrag || iu() || isNaN(n) || (c = et.z(), o = n, i && (o = c + n, ft & 2 && (ie(c) && n < 0 && (o = ri), re(c) && n > 0 && (o = dt))), ft & 1 || (o = r ? it(o) : uu(o, .5)), i && !or(o) && (o = s.$Round(o)), l = (o - c) % w, o = c + l, t == e && (t = br), h = s.P(l), v = 0, h && (h < 1 && (h = s.B(h, .5)), h > 1 && (y = be(), p = (ni & 1 ? ar : vr) / y, h = s.j(h, p * 1.5)), v = t * h), er = u, ot.S(), er = f, ot.se(c, o, v))
        }

        function ro(n, t, i) {
            var a = this,
                h = {
                    $Top: 2,
                    $Right: 1,
                    $Bottom: 2,
                    $Left: 1
                },
                y = {
                    $Top: "top",
                    $Right: "right",
                    $Bottom: "bottom",
                    $Left: "left"
                },
                f, r, e, c, l = {};
            a.$Elmt = n;
            a.$ScaleSize = function(a, p, w) {
                var b, k = a,
                    d = p,
                    g;
                e || (e = o.Ch(n), f = n.parentNode, c = {
                    $Scale: o.q(n, v.qf, 1),
                    $AutoCenter: o.q(n, v.yb)
                }, o.f(y, function(t, i) {
                    l[i] = o.q(n, "data-scale-" + t, 1)
                }), r = n, t && (r = o.ab(f, u), o.rb(r, {
                    $Top: 0,
                    $Left: 0
                }), o.O(r, n), o.O(f, r)));
                i ? (b = s.l(a, p), t && w >= 0 && w < 1 && (g = s.j(a, p), b = s.j(b / g, 1 / (1 - w)) * g)) : k = d = b = s.B(pt < wt ? p : a, c.$Scale);
                b *= t && (b != 1 || o.He()) ? 1.001 : 1;
                t && (sf = b);
                o.we(r, b);
                o.K(f, e.Eb * k);
                o.J(f, e.Gb * d);
                var nt = o.ue() && o.Cd() < 9 ? b : 1,
                    tt = (k - nt) * e.Eb / 2,
                    it = (d - nt) * e.Gb / 2;
                o.U(r, tt);
                o.V(r, it);
                o.f(e, function(n, t) {
                    if (h[t] && n) {
                        var i = (h[t] & 1) * s.B(a, l[t]) * n + (h[t] & 2) * s.B(p, l[t]) * n / 2;
                        o.If[t](f, i)
                    }
                });
                o.Uc(f, c.$AutoCenter)
            }
        }

        function uo() {
            var n = this;
            l.call(n, 0, 0, {
                hc: w
            });
            o.f(tt, function(t) {
                n.zd(t);
                t.$Shift(vt / st)
            })
        }

        function fo() {
            var n = this,
                t = tu.$Elmt;
            l.call(n, -1, 2, {
                $Easing: h.$Linear,
                Pc: {
                    Pb: gf
                },
                hc: w,
                $Reverse: pr
            }, t, {
                Pb: 1
            }, {
                Pb: -1
            });
            n.Wc = t
        }

        function eo() {
            var n = this;
            l.call(n, -1e8, 2e8);
            n.zc = function(n, t) {
                var r, f, e;
                s.P(t - n) > 1e-5 && (r = t, f = t, s.G(t) != t && t > n && (ft & 1 || t > ai) && f++, e = ue(f), bu(e, r, u), i.k(c.$EVT_POSITION_CHANGE, it(r), it(n), t, n))
            }
        }

        function oo(n, t) {
            var e = this,
                h, v, o, s, y;
            l.call(e, -1e8, 2e8, {});
            e.Qc = function() {
                yi = u;
                i.k(c.$EVT_SWIPE_START, it(et.z()), fi.z())
            };
            e.Rc = function() {
                yi = f;
                s = f;
                i.k(c.$EVT_SWIPE_END, it(et.z()), fi.z());
                rt || fe()
            };
            e.zc = function(n, t) {
                var i = t,
                    r;
                s ? i = y : o && (r = t / o, i = a.$SlideEasing(r) * (v - h) + h);
                i = te(i);
                fi.L(i)
            };
            e.se = function(n, t, i, r) {
                rt = f;
                o = i || 1;
                h = n;
                v = t;
                er = u;
                fi.L(n);
                er = f;
                e.L(0);
                e.tc(o, r)
            };
            e.Ng = function() {
                s = u;
                s && e.$Play(r, r, u)
            };
            e.Wg = function(n) {
                y = n
            };
            fi = new eo;
            fi.M(n);
            lu && fi.M(t)
        }

        function so() {
            var t = this,
                n = oe();
            o.N(n, 0);
            t.$Elmt = n;
            t.Ef = function(t) {
                o.O(n, t);
                o.mb(n)
            };
            t.Ob = function() {
                o.Fc(n);
                o.Rb(n)
            }
        }

        function ho(n, t) {
            function ri() {
                ut && ut.$Destroy();
                vu -= vt;
                vt = 0;
                ut = new bi.$Class(rt, bi, {
                    $Idle: o.q(rt, "idle", wr),
                    cg: !b
                });
                ut.$On(p.Zb, si)
            }

            function si(n, i) {
                vt += i;
                vu += i;
                t == g && (vt || h.Bc())
            }

            function ui(n, r, e) {
                var w, b;
                if (!bt) {
                    if (bt = u, v && e) {
                        var k = o.q(v, "data-expand", 0) * 2,
                            l = e.width,
                            a = e.height,
                            y = l,
                            p = a;
                        l && a && (ot && (ot & 3 && (!(ot & 4) || l > lt || a > at) && (w = f, b = lt / at * a / l, ot & 1 ? w = b > 1 : ot & 2 && (w = b < 1), y = w ? l * at / a : lt, p = w ? at : a * lt / l), o.K(v, y), o.J(v, p), o.V(v, (at - p) / 2), o.U(v, (lt - y) / 2)), o.we(v, s.l((y + k) / y, (p + k) / p)));
                        o.db(v, "absolute")
                    }
                    i.k(c.$EVT_LOAD_END, t)
                }
                r.Qe(f);
                n && n(h)
            }

            function hi(n, i, r, f) {
                if (f == ct && g == t && b && ru() && !h.Oc()) {
                    var e = it(n);
                    ht.Cf(e, t, i, h, r, at / lt);
                    ur.$Shift(e - ur.yc() - 1);
                    ur.L(e);
                    i.Tg();
                    ee(e, u)
                }
            }

            function ci(i) {
                if (i == ct && g == t && ru() && !h.Oc()) {
                    if (!k) {
                        var u = r;
                        ht && (ht.Qb == t ? u = ht.of() : ht.Ob());
                        k = new co(n, t, u, ut);
                        k.zg(nt)
                    }
                    k.$IsPlaying() || k.sd()
                }
            }

            function dt(n, i, u) {
                if (n == t) n != i ? tt[i] && tt[i].Jd() : !u && k && k.Ag(), nt && nt.$Enable(), ct = o.Tb(), h.Vb(o.Z(r, ci, ct));
                else {
                    var f = s.j(t, n),
                        e = s.l(t, n),
                        c = s.j(e - f, f + w - e),
                        l = kt + a.$LazyLoading - 1;
                    (!pt || c <= l) && h.Vb()
                }
            }

            function ai() {
                g == t && k && (k.S(), nt && nt.$Quit(), nt && nt.$Disable(), k.he())
            }

            function yi() {
                g == t && k && k.S()
            }

            function pi(n) {
                vi || i.k(c.$EVT_CLICK, t, n)
            }

            function fi(n, t) {
                var c, h, i, f, s, l, a;
                if (t || (d = o.$FindChild(n, "bg"), rt = d && o.Lb(d)), !o.g(n, fu) && (t || !d)) {
                    if (c = o.q(n, "data-arr"), c != e) {
                        function t(t, i) {
                            o.g(t, i, o.g(n, i))
                        }
                        h = bi && bi.$Transitions || {};
                        o.Vf(n, o.cb(n), h[c], function(n, i) {
                            o.g(n, "data-t", o.A(h));
                            h.push(i);
                            t(n, "data-to");
                            t(n, "data-bf");
                            t(n, "data-c")
                        });
                        o.g(n, "data-arr", "")
                    }
                    i = o.jb(n);
                    d || (rt = n, d = oe(u), o.g(d, "data-u", "bg"), f = "background", o.R(d, f + "Color", o.R(rt, f + "Color")), o.R(d, f + "Image", o.R(rt, f + "Image")), o.R(rt, f, r), o.A(i) ? o.pb(d, i[0]) : o.O(rt, d));
                    i = i.concat(o.xc(o.Hc(n, "data-tchd")));
                // && o.hb(i, "u") == "image"
                    o.f(i, function(i) {
                        t < 3 && !v && (v = i, v.border = 0, o.rb(v, ei), o.rb(n, ei), o.R(v, "maxWidth", "10000px"), o.O(d, v));
                        fi(i, t + 1)
                    });
                    t && (o.g(n, "data-events", o.lc(n)), o.g(n, "data-display", o.nb(n)), o.Ib(n) || o.ug(n, o.g(n, "data-to")), o.tg(n, o.g(n, "data-bf")), n.tagName == "IMG" && (st.push(n), o.g(n, "src") || (pt = u, o.Fc(n))), s = o.g(n, "data-load"), s && st.push(n) && (pt = pt || !o.Qd(s, "data-")), l = s && o.g(n, s) || o.Jf(n), l && (a = new Image, o.g(a, "data-src", l), st.push(a)), t && o.N(n, (o.N(n) || 0) + 1));
                    o.yg(n, o.q(n, "data-p"));
                    o.xg(n, o.hb(n, "po"));
                    o.Jc(n, o.g(n, "data-ts"))
                }
            }
            var h = this,
                oi = o.W(h, y),
                ut, vt = 0,
                gt, rt, d, ot, yt, v, st = [],
                ni, bt, pt, k, nt, ct, ii, wt;
            l.call(h, -kt, kt + 1, {
                hc: ft & 1 ? w : e,
                $Reverse: pr
            });
            h.Qe = function(t) {
                ii != t && (ii = t, t && o.O(n, yt), t || o.ib(yt))
            };
            h.Vb = function(n, f) {
                f = f || h;
                o.A(st) && !bt ? (f.Qe(u), ni || (ni = u, i.k(c.$EVT_LOAD_START, t), o.f(st, function(n) {
                    var t = o.g(n, "data-load") || "src",
                        i = o.Qd(t, "data-") ? t : t.substring(5),
                        r;
                    o.g(n, i) || (r = o.hb(n, i) || o.hb(n, "src2"), r && (o.g(n, i, r), o.nb(n, o.g(n, "data-display"))))
                })), o.Eh(st, v, o.Z(r, ui, n, f))) : ui(n, f)
            };
            h.Gg = function() {
                var n, i, u;
                if (we())
                    if (w == 1) h.Jd(), dt(t, t);
                    else {
                        if (ht && (n = ht.Bf(w)), n) return ct = o.Tb(), i = t + li, u = tt[it(i)], u.Vb(o.Z(r, hi, i, u, n, ct), h);
                        !ft && or(et.z()) && or(et.z() + li) || du(li)
                    }
            };
            h.Bc = function() {
                dt(t, t, u)
            };
            h.Jd = function() {
                nt && nt.$Quit();
                nt && nt.$Disable();
                h.Wd();
                k && k.Hg();
                k = r;
                ri()
            };
            h.Tg = function() {
                o.Fc(n)
            };
            h.Wd = function() {
                o.mb(n)
            };
            h.kd = function(n, t) {
                var i = kt - t;
                gf(gt, i)
            };
            h.Qb = t;
            fi(n, 0);
            o.rb(n, ei);
            o.Fb(n, "hidden");
            o.Jc(n, "flat");
            ot = o.q(rt, "data-fillmode", a.$FillMode);
            wt = o.$FindChild(rt, "thumb", u);
            wt && (h.nh = o.ab(wt), o.Fc(wt));
            o.mb(n);
            yt = o.ab(ti);
            o.N(yt, 1e3);
            h.a(n, "click", pi);
            ri();
            h.ih = v;
            h.Re = n;
            h.Wc = gt = n;
            h.a(i, 203, dt);
            h.a(i, 28, yi);
            h.a(i, 24, ai);
            h.$Destroy = function() {
                o.$Destroy(oi, ut, k)
            }
        }

        function co(n, t, r, e) {
            function ot() {
                s.sd()
            }

            function st(n) {
                ut = n;
                s.S();
                s.sd()
            }

            function ct() {}
            var s = this,
                et = o.W(s, y),
                w = 0,
                nt = 0,
                v, k, a, h, d, it, ut, ft = tt[t];
            l.call(s, 0, 0);
            s.sd = function() {
                var n, r;
                rt || yi || ut || g != t || s.Oc() || (n = s.z(), n || v && !d && (d = u, s.he(u), i.k(c.$EVT_SLIDESHOW_START, t, nt, w, nt, v, h)), i.k(c.$EVT_STATE_CHANGE, t, n, w, k, a, h), iu() || (n == h ? b && o.$Delay(ft.Gg, 20) : (r = n == a ? h : n ? s.Ee() : a, n == a && bf() || s.tc(r, ot))))
            };
            s.Ag = function() {
                a == h && a == s.z() && s.L(k)
            };
            s.Hg = function() {
                ht && ht.Qb == t && ht.Ob();
                var n = s.z();
                n < h && i.k(c.$EVT_STATE_CHANGE, t, -n - 1, w, k, a, h)
            };
            s.he = function(n) {
                r && o.Fb(ii, n && r.ye.$Outside ? "" : "hidden")
            };
            s.kd = function(n, r) {
                d && r >= v && (d = f, ft.Wd(), ht.Ob(), i.k(c.$EVT_SLIDESHOW_END, t, v, w, nt, v, h));
                i.k(c.$EVT_PROGRESS_CHANGE, t, r, w, k, a, h)
            };
            s.zg = function(n) {
                n && !it && (it = n, n.$On($JssorPlayer$.vf, st))
            };
            s.a(e, p.pc, ct);
            r && s.zd(r);
            v = s.vb();
            s.zd(e);
            k = v + e.qc;
            h = s.vb();
            a = b ? v + e.fd : h;
            s.$Destroy = function() {
                et.$Destroy();
                s.S()
            }
        }

        function he() {
            wu = yi;
            pf = ot.Ee();
            pi = et.z();
            fr = ke(pi)
        }

        function ce() {
            he();
            (rt || iu()) && (ot.S(), i.k(c.kg))
        }

        function le(n) {
            var i;
            if (ru()) {
                var r = et.z(),
                    t = fr,
                    u = 0;
                n && s.P(gt) >= a.$MinDragOffsetToSlide && (t = r, u = nu);
                t = s.H(t);
                t = uu(t + u, .5);
                i = s.P(t - r);
                i < 1 && a.$SlideEasing != h.$Linear && (i = s.B(i, .5));
                vi && n || !wu ? r == t ? lf.Bc() : ot.se(r, t, i * br) : ot.tc(pf)
            }
        }

        function ae(n) {
            o.kb(o.$EvtSrc(n), e, v.ze) || o.$CancelEvent(n)
        }

        function ve(n) {
            kr = f;
            rt = u;
            ce();
            wu || (ut = 0);
            i.k(c.$EVT_DRAG_START, it(pi), pi, n)
        }

        function lo(n) {
            ye(n, 1)
        }

        function ye(n, r) {
            var f, u, s;
            gt = 0;
            gr = 0;
            nu = 0; of = sf;
            r ? (f = n.touches[0], dr = {
                x: f.clientX,
                y: f.clientY
            }) : dr = o.Tc(n);
            u = o.$EvtSrc(n);
            s = o.kb(u, "1", rf);
            s && s !== d || oi || r && o.A(n.touches) != 1 || (nr = o.kb(u, e, v.ze) || !rr || !ge(), i.a(t, r ? "touchmove" : "mousemove", gu), kr = !nr && o.kb(u, e, v.Dd), kr || nr || ve(n, r))
        }

        function gu(n) {
            var t, i, c, l;
            if (n = o.Zf(n), n.type != "mousemove" ? o.A(n.touches) == 1 ? (i = n.touches[0], t = {
                x: i.clientX,
                y: i.clientY
            }) : wi() : t = o.Tc(n), t) {
                var r = t.x - dr.x,
                    f = t.y - dr.y,
                    e = s.P(r),
                    h = s.P(f);
                (ut || e > 1.5 || h > 1.5) && (kr ? ve(n, i) : (s.G(fr) != fr && (ut = ut || ni & oi), (r || f) && !ut && (ut = oi == 3 ? h > e ? 2 : 1 : oi, pu && ut == 1 && h > e * 2.4 && (nr = u)), c = r, l = di, ut == 2 && (c = f, l = gi), (gt - gr) * ir < -1.5 && (nu = 0), (gt - gr) * ir > 1.5 && (nu = -1), gr = gt, gt = c, wf = fr - gt * ir / l / of * a.$DragRatio, gt && ut && !nr && (o.$CancelEvent(n), ot.Ng(u), ot.Wg(wf))))
            }
        }

        function wi() {
            if (no(), i.T(t, "mousemove", gu), i.T(t, "touchmove", gu), vi = gt, rt) {
                vi && b & 8 && (b = 0);
                ot.S();
                rt = f;
                var n = et.z();
                i.k(c.$EVT_DRAG_END, it(n), n, it(pi), pi);
                hi & 12 && he();
                le(u)
            }
        }

        function ao(n) {
            var i = o.$EvtSrc(n),
                t = o.kb(i, "1", fu),
                r;
            d === t && (vi ? (o.$StopEvent(n), t = o.kb(i, e, "data-jssor-button", "A"), t && o.$CancelEvent(n)) : (b & 4 && (b = 0), t = o.kb(i, e, "data-jssor-click"), t && (o.$CancelEvent(n), hitValues = (o.g(t, "data-jssor-click") || "").split(":"), r = o.Fh(hitValues[1]), hitValues[0] == "to" && hr(r - 1), hitValues[0] == "next" && hr(r, e, u))))
        }

        function vo() {
            yu.re && o.R(nt, yu.re, [r, "pan-y", "pan-x", "auto"][rr] || "");
            i.a(d, "click", ao, u);
            i.a(d, "mouseleave", to);
            i.a(d, "mouseenter", io);
            i.a(d, "mousedown", ye);
            i.a(d, "touchstart", lo);
            i.a(d, "dragstart", ae);
            i.a(d, "selectstart", ae);
            i.a(n, "mouseup", wi);
            i.a(t, "mouseup", wi);
            i.a(t, "touchend", wi);
            i.a(t, "touchcancel", wi);
            i.a(n, "blur", wi);
            a.$ArrowKeyNavigation && i.a(t, "keydown", function(n) {
                if (!o.qe(o.$EvtSrc(n))) {
                    var t = o.Je(n);
                    (t == 37 || t == 39) && (b & 8 && (b = 0), se(a.$ArrowKeyNavigation * (t - 38) * ir, u))
                }
            })
        }

        function pe(n) {
            var i, r, t;
            tf.Ve();
            ct = [];
            tt = [];
            i = o.jb(nt);
            r = o.Fd(["DIV", "A", "LI"]);
            o.f(i, function(n) {
                var t = n;
                r[n.tagName.toUpperCase()] && !o.hb(n, "u") && o.nb(n) != "none" && (o.Jc(n, "flat"), o.rb(n, ei), ct.push(n));
                o.N(t, (o.N(t) || 0) + 1)
            });
            w = o.A(ct);
            w && (t = ni & 1 ? ar : vr, o.rb(ti, ei), vt = a.$Align, vt == e && (vt = (t - st + bt) / 2), yr = t / st, kt = s.j(w, a.$Cols || w, s.H(yr)), ft = kt < w ? a.$Loop : 0, w * st - bt <= t && (yr = w - bt / st, vt = (t - st + bt) / 2, au = (t - st * w + bt) / 2), cr && (cu = cr.$Class, lu = !vt && kt == 1 && w > 1 && cu && (!o.ue() || o.Cd() >= 9)), ft & 1 || (ai = vt / st, ai > w - 1 && (ai = w - 1, vt = ai * st), dt = ai, ri = dt + w - yr - bt / st), rr = (kt > 1 || vt ? ni : -1) & a.$DragOrientation, lu && (ht = new cu(tu, lt, at, cr, pu, df)), o.f(ct, function(n, t) {
                tt.push(new ho(n, t))
            }), ur = new fo, et = new uo, ot = new oo(et, ur), vo());
            o.f(si, function(t) {
                t.nd(w, tt);
                n && t.$On(k.uc, se)
            })
        }

        function nf(n, t, i) {
            o.Md(n) && (n = o.je("", n));
            var r, u;
            w && (t == e && (t = w), u = "beforebegin", r = ct[t], r || (u = "afterend", r = ct[w - 1]));
            o.$Destroy(tt);
            n && o.oh(r || nt, u || "afterbegin", n);
            o.f(i, function(n) {
                o.ib(n)
            });
            pe()
        }
        var i = this,
            tf = o.W(i, y),
            fu = "data-jssor-slider",
            rf = "data-jssor-thumb",
            d, a, ni, cr, bi, ki, ci, yt, pt, wt, eu, uf, ff = 1,
            ef = 1,
            of = 1,
            sf = 1,
            hf = {},
            nt, ti, ou, su, hu, lr, ar, vr, ei, ct = [],
            cf, g = -1,
            lf, w, lt, at, bt, di, gi, st, kt, yr, ii, ut, oi, nr, si = [],
            af, vf, yf, b, tr, pr, ir, li, hi, wr, br, cu, lu, vt, au = 0,
            ai = 0,
            ri = Number.MAX_VALUE,
            dt = Number.MIN_VALUE,
            ft, rr, vi, ui = 1,
            vu = 0,
            yi, rt, kr, dr, gt, gr, nu, et, fi, ur, ot, tu, yu = o.ud(),
            pu = yu.td,
            tt = [],
            ht, fr, pi, wu, pf, wf, er;
        i.$SlidesCount = function() {
            return w
        };
        i.$CurrentIndex = function() {
            return g
        };
        i.$CurrentPosition = function() {
            return et.z()
        };
        i.$Idle = function(n) {
            if (n == e) return wr;
            wr = n
        };
        i.$AutoPlay = function(n) {
            if (n == e) return b;
            n != b && (b = n, b && tt[g] && tt[g].Bc())
        };
        i.$IsDragging = function() {
            return rt
        };
        i.$IsSliding = function() {
            return yi
        };
        i.$IsMouseOver = function() {
            return !ui
        };
        i.$LastDragSucceeded = function() {
            return vi
        };
        i.$OriginalWidth = function() {
            return pt
        };
        i.$OriginalHeight = function() {
            return wt
        };
        i.$ScaleHeight = function(n) {
            if (n == e) return uf || wt;
            i.$ScaleSize(n / wt * pt, n)
        };
        i.$ScaleWidth = function(n) {
            if (n == e) return eu || pt;
            i.$ScaleSize(n, n / pt * wt)
        };
        i.$ScaleSize = function(n, t, i) {
            o.K(d, n);
            o.J(d, t);
            ff = n / pt;
            ef = t / wt;
            o.f(hf, function(n) {
                n.$ScaleSize(ff, ef, i)
            });
            eu || (o.pb(ii, nt), o.V(ii, 0), o.U(ii, 0));
            eu = n;
            uf = t
        };
        i.lf = ie;
        i.ef = re;
        i.$PlayTo = hr;
        i.$GoTo = sr;
        i.$Next = function() {
            du(1)
        };
        i.$Prev = function() {
            du(-1)
        };
        i.$Pause = function() {
            b = 0
        };
        i.$Play = function() {
            i.$AutoPlay(b || 1)
        };
        i.$SetSlideshowTransitions = function(n) {
            a.$SlideshowOptions.$Transitions = n
        };
        i.Id = function(n) {
            if (n = it(n), ft & 1) {
                var i = vt / st,
                    t = it(et.z()),
                    r = it(n - t + i),
                    u = it(s.P(n - t));
                r >= kt ? u > w / 2 && (n > t ? n -= w : n += w) : n > t && r < i ? n -= w : n < t && r > i && (n += w)
            }
            return n
        };
        i.$AppendSlides = function(n, t) {
            var r, i;
            t == e && (t = g + 1);
            r = ct[g];
            nf(n, t);
            i = 0;
            o.f(ct, function(n, t) {
                n == r && (i = t)
            });
            sr(i)
        };
        i.$ReloadSlides = function(n) {
            nf(n, r, ct);
            sr(0)
        };
        i.$RemoveSlides = function(n) {
            var t = g,
                i = [];
            o.f(n, function(n) {
                n < w && n >= 0 && (i.push(ct[n]), n < g && t--)
            });
            nf(r, r, i);
            t = s.j(t, w - 1);
            sr(t)
        };
        i.F = function(n, r) {
            i.$Elmt = d = o.$GetElement(n);
            pt = o.K(d);
            wt = o.J(d);
            a = o.v({
                $FillMode: 0,
                $LazyLoading: 1,
                $ArrowKeyNavigation: 1,
                $StartIndex: 0,
                $AutoPlay: 0,
                $Loop: 1,
                $HWA: u,
                $NaviQuitDrag: u,
                $AutoPlaySteps: 1,
                $Idle: 3e3,
                $PauseOnHover: 1,
                $SlideDuration: 500,
                $SlideEasing: h.$OutQuad,
                $MinDragOffsetToSlide: 20,
                $DragRatio: 1,
                $SlideSpacing: 0,
                $UISearchMode: 1,
                $PlayOrientation: 1,
                $DragOrientation: 1
            }, r);
            a.$HWA = a.$HWA && o.gg();
            a.$DisplayPieces != e && (a.$Cols = a.$DisplayPieces);
            a.$ParkingPosition != e && (a.$Align = a.$ParkingPosition);
            b = a.$AutoPlay & 63;
            !a.$UISearchMode;
            li = a.$AutoPlaySteps;
            hi = a.$PauseOnHover;
            hi &= pu ? 10 : 5;
            wr = a.$Idle;
            br = a.$SlideDuration;
            ni = a.$PlayOrientation & 3;
            tr = o.mg(o.g(d, "dir")) == "rtl";
            pr = tr && (ni == 1 || a.$DragOrientation & 1);
            ir = pr ? -1 : 1;
            cr = a.$SlideshowOptions;
            bi = o.v({
                $Class: p
            }, a.$CaptionSliderOptions);
            ki = a.$BulletNavigatorOptions;
            ci = a.$ArrowNavigatorOptions;
            yt = a.$ThumbnailNavigatorOptions;
            var f = o.jb(d);
            o.f(f, function(n, t) {
                var i = o.hb(n, "u");
                i == "loading" ? ti = n : (i == "slides" && (nt = n, o.R(nt, "margin", 0), o.R(nt, "padding", 0), o.Jc(nt, "flat")), i == "navigator" && (ou = n), i == "arrowleft" && (su = n), i == "arrowright" && (hu = n), i == "thumbnavigator" && (lr = n), n.tagName != "STYLE" && n.tagName != "SCRIPT" && (hf[i || t] = new ro(n, i == "slides", o.Fd(["slides", "thumbnavigator"])[i])))
            });
            ti && o.ib(ti);
            ti = ti || o.bc(t);
            ar = o.K(nt);
            vr = o.J(nt);
            lt = a.$SlideWidth || ar;
            at = a.$SlideHeight || vr;
            ei = {
                Eb: lt,
                Gb: at,
                $Top: 0,
                $Left: 0,
                Me: "block",
                Pb: "absolute"
            };
            bt = a.$SlideSpacing;
            di = lt + bt;
            gi = at + bt;
            st = ni & 1 ? di : gi;
            tu = new so;
            o.g(d, fu, "1");
            o.N(nt, o.N(nt) || 0);
            o.db(nt, "absolute");
            ii = o.ab(nt, u);
            o.R(ii, "pointerEvents", "none");
            o.pb(ii, nt);
            o.O(ii, tu.$Elmt);
            o.Fb(nt, "hidden");
            ou && ki && (ki.Yb = tr, af = new ki.$Class(ou, ki, pt, wt), si.push(af));
            ci && su && hu && (ci.Yb = tr, ci.$Loop = a.$Loop, vf = new ci.$Class(su, hu, ci, i), si.push(vf));
            lr && yt && (yt.$StartIndex = a.$StartIndex, yt.$ArrowKeyNavigation = yt.$ArrowKeyNavigation || 0, yt.Yb = tr, yf = new yt.$Class(lr, yt, ti), yt.$NoDrag || o.g(lr, rf, "1"), si.push(yf));
            pe(u);
            i.$ScaleSize(pt, wt);
            ku();
            sr(a.$StartIndex);
            o.R(d, "visibility", "visible")
        };
        i.$Destroy = function() {
            b = 0;
            o.$Destroy(tt, si, tf);
            o.Rb(d)
        };
        o.F(i)
    };
    c.$EVT_CLICK = 21;
    c.$EVT_DRAG_START = 22;
    c.$EVT_DRAG_END = 23;
    c.$EVT_SWIPE_START = 24;
    c.$EVT_SWIPE_END = 25;
    c.$EVT_LOAD_START = 26;
    c.$EVT_LOAD_END = 27;
    c.kg = 28;
    c.$EVT_MOUSE_ENTER = 31;
    c.$EVT_MOUSE_LEAVE = 32;
    c.$EVT_POSITION_CHANGE = 202;
    c.$EVT_PARK = 203;
    c.$EVT_SLIDESHOW_START = 206;
    c.$EVT_SLIDESHOW_END = 207;
    c.$EVT_PROGRESS_CHANGE = 208;
    c.$EVT_STATE_CHANGE = 209
}(window, document, Math, null, !0, !1),
    function(n) {
        typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? n(require("jquery")) : n(jQuery)
    }(function(n) {
        function i(n) {
            return t.raw ? n : encodeURIComponent(n)
        }

        function u(n) {
            return t.raw ? n : decodeURIComponent(n)
        }

        function f(n) {
            return i(t.json ? JSON.stringify(n) : String(n))
        }

        function e(n) {
            n.indexOf('"') === 0 && (n = n.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return n = decodeURIComponent(n.replace(o, " ")), t.json ? JSON.parse(n) : n
            } catch (i) {}
        }

        function r(i, r) {
            var u = t.raw ? i : e(i);
            return n.isFunction(r) ? r(u) : u
        }
        var o = /\+/g,
            t = n.cookie = function(e, o, s) {
                var y, a, h, v, c, p;
                if (o !== undefined && !n.isFunction(o)) return s = n.extend({}, t.defaults, s), typeof s.expires == "number" && (y = s.expires, a = s.expires = new Date, a.setTime(+a + y * 864e5)), document.cookie = [i(e), "=", f(o), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("");
                for (h = e ? undefined : {}, v = document.cookie ? document.cookie.split("; ") : [], c = 0, p = v.length; c < p; c++) {
                    var w = v[c].split("="),
                        b = u(w.shift()),
                        l = w.join("=");
                    if (e && e === b) {
                        h = r(l, o);
                        break
                    }
                    e || (l = r(l)) === undefined || (h[b] = l)
                }
                return h
            };
        t.defaults = {};
        n.removeCookie = function(t, i) {
            return n.cookie(t) === undefined ? !1 : (n.cookie(t, "", n.extend({}, i, {
                expires: -1
            })), !n.cookie(t))
        }
    });
! function(n) {
    "object" == typeof module && "object" == typeof module.exports ? n(require("jquery"), window, document) : n(jQuery, window, document)
}(function(n, t, i) {
    var r = [],
        u = function() {
            return r.length ? r[r.length - 1] : null
        },
        f = function() {
            for (var t = !1, n = r.length - 1; n >= 0; n--) r[n].$blocker && (r[n].$blocker.toggleClass("current", !t).toggleClass("behind", t), t = !0)
        };
    n.modal = function(t, i) {
        var e, f;
        if (this.$body = n("body"), this.options = n.extend({}, n.modal.defaults, i), this.options.doFade = !isNaN(parseInt(this.options.fadeDuration, 10)), this.$blocker = null, this.options.closeExisting)
            for (; n.modal.isActive();) n.modal.close();
        if (r.push(this), t.is("a"))
            if (f = t.attr("href"), this.anchor = t, /^#/.test(f)) {
                if (this.$elm = n(f), 1 !== this.$elm.length) return null;
                this.$body.append(this.$elm);
                this.open()
            } else this.$elm = n("<div>"), this.$body.append(this.$elm), e = function(n, t) {
                t.elm.remove()
            }, this.showSpinner(), t.trigger(n.modal.AJAX_SEND), n.get(f).done(function(i) {
                if (n.modal.isActive()) {
                    t.trigger(n.modal.AJAX_SUCCESS);
                    var r = u();
                    r.$elm.empty().append(i).on(n.modal.CLOSE, e);
                    r.hideSpinner();
                    r.open();
                    t.trigger(n.modal.AJAX_COMPLETE)
                }
            }).fail(function() {
                t.trigger(n.modal.AJAX_FAIL);
                var i = u();
                i.hideSpinner();
                r.pop();
                t.trigger(n.modal.AJAX_COMPLETE)
            });
        else this.$elm = t, this.anchor = t, this.$body.append(this.$elm), this.open()
    };
    n.modal.prototype = {
        constructor: n.modal,
        open: function() {
            var t = this;
            this.block();
            this.anchor.blur();
            this.options.doFade ? setTimeout(function() {
                t.show()
            }, this.options.fadeDuration * this.options.fadeDelay) : this.show();
            n(i).off("keydown.modal").on("keydown.modal", function(n) {
                var t = u();
                27 === n.which && t.options.escapeClose && t.close()
            });
            this.options.clickClose && this.$blocker.click(function(t) {
                t.target === this && n.modal.close()
            })
        },
        close: function() {
            r.pop();
            this.unblock();
            this.hide();
            n.modal.isActive() || n(i).off("keydown.modal")
        },
        block: function() {
            this.$elm.trigger(n.modal.BEFORE_BLOCK, [this._ctx()]);
            this.$body.css("overflow", "hidden");
            this.$blocker = n('<div class="' + this.options.blockerClass + ' blocker current"><\/div>').appendTo(this.$body);
            f();
            this.options.doFade && this.$blocker.css("opacity", 0).animate({
                opacity: 1
            }, this.options.fadeDuration);
            this.$elm.trigger(n.modal.BLOCK, [this._ctx()])
        },
        unblock: function(t) {
            !t && this.options.doFade ? this.$blocker.fadeOut(this.options.fadeDuration, this.unblock.bind(this, !0)) : (this.$blocker.children().appendTo(this.$body), this.$blocker.remove(), this.$blocker = null, f(), n.modal.isActive() || this.$body.css("overflow", ""))
        },
        show: function() {
            this.$elm.trigger(n.modal.BEFORE_OPEN, [this._ctx()]);
            this.options.showClose && (this.closeButton = n('<a href="#close-modal" rel="modal:close" class="close-modal ' + this.options.closeClass + '">' + this.options.closeText + "<\/a>"), this.$elm.append(this.closeButton));
            this.$elm.addClass(this.options.modalClass).appendTo(this.$blocker);
            this.options.doFade ? this.$elm.css({
                opacity: 0,
                display: "inline-block"
            }).animate({
                opacity: 1
            }, this.options.fadeDuration) : this.$elm.css("display", "inline-block");
            this.$elm.trigger(n.modal.OPEN, [this._ctx()])
        },
        hide: function() {
            this.$elm.trigger(n.modal.BEFORE_CLOSE, [this._ctx()]);
            this.closeButton && this.closeButton.remove();
            var t = this;
            this.options.doFade ? this.$elm.fadeOut(this.options.fadeDuration, function() {
                t.$elm.trigger(n.modal.AFTER_CLOSE, [t._ctx()])
            }) : this.$elm.hide(0, function() {
                t.$elm.trigger(n.modal.AFTER_CLOSE, [t._ctx()])
            });
            this.$elm.trigger(n.modal.CLOSE, [this._ctx()])
        },
        showSpinner: function() {
            this.options.showSpinner && (this.spinner = this.spinner || n('<div class="' + this.options.modalClass + '-spinner"><\/div>').append(this.options.spinnerHtml), this.$body.append(this.spinner), this.spinner.show())
        },
        hideSpinner: function() {
            this.spinner && this.spinner.remove()
        },
        _ctx: function() {
            return {
                elm: this.$elm,
                $elm: this.$elm,
                $blocker: this.$blocker,
                options: this.options
            }
        }
    };
    n.modal.close = function(t) {
        if (n.modal.isActive()) {
            t && t.preventDefault();
            var i = u();
            return i.close(), i.$elm
        }
    };
    n.modal.isActive = function() {
        return r.length > 0
    };
    n.modal.getCurrent = u;
    n.modal.defaults = {
        closeExisting: !0,
        escapeClose: !0,
        clickClose: !0,
        closeText: "Close",
        closeClass: "",
        modalClass: "modal",
        blockerClass: "jquery-modal",
        spinnerHtml: '<div class="rect1"><\/div><div class="rect2"><\/div><div class="rect3"><\/div><div class="rect4"><\/div>',
        showSpinner: !0,
        showClose: !0,
        fadeDuration: null,
        fadeDelay: 1
    };
    n.modal.BEFORE_BLOCK = "modal:before-block";
    n.modal.BLOCK = "modal:block";
    n.modal.BEFORE_OPEN = "modal:before-open";
    n.modal.OPEN = "modal:open";
    n.modal.BEFORE_CLOSE = "modal:before-close";
    n.modal.CLOSE = "modal:close";
    n.modal.AFTER_CLOSE = "modal:after-close";
    n.modal.AJAX_SEND = "modal:ajax:send";
    n.modal.AJAX_SUCCESS = "modal:ajax:success";
    n.modal.AJAX_FAIL = "modal:ajax:fail";
    n.modal.AJAX_COMPLETE = "modal:ajax:complete";
    n.fn.modal = function(t) {
        return 1 === this.length && new n.modal(this, t), this
    };
    n(i).on("click.modal", 'a[rel~="modal:close"]', n.modal.close);
    n(i).on("click.modal", 'a[rel~="modal:open"]', function(t) {
        t.preventDefault();
        n(this).modal()
    })
});
"function" != typeof Object.create && (Object.create = function(n) {
    function t() {}
    return t.prototype = n, new t
}),
    function(n, t) {
        "use strict";
        var i = {
            _positionClasses: ["bottom-left", "bottom-right", "top-right", "top-left", "bottom-center", "top-center", "mid-center"],
            _defaultIcons: ["success", "error", "info", "warning"],
            init: function(t) {
                this.prepareOptions(t, n.toast.options);
                this.process()
            },
            prepareOptions: function(t, i) {
                var r = {};
                "string" == typeof t || t instanceof Array ? r.text = t : r = t;
                this.options = n.extend({}, i, r)
            },
            process: function() {
                this.setup();
                this.addToDom();
                this.position();
                this.bindToast();
                this.animate()
            },
            setup: function() {
                var t = "",
                    i;
                if (this._toastEl = this._toastEl || n("<div><\/div>", {
                    "class": "jq-toast-single"
                }), t += '<span class="jq-toast-loader"><\/span>', this.options.allowToastClose && (t += '<span class="close-jq-toast-single">&times;<\/span>'), this.options.text instanceof Array) {
                    for (this.options.heading && (t += '<h2 class="jq-toast-heading">' + this.options.heading + "<\/h2>"), t += '<ul class="jq-toast-ul">', i = 0; i < this.options.text.length; i++) t += '<li class="jq-toast-li" id="jq-toast-item-' + i + '">' + this.options.text[i] + "<\/li>";
                    t += "<\/ul>"
                } else this.options.heading && (t += '<h2 class="jq-toast-heading">' + this.options.heading + "<\/h2>"), t += this.options.text;
                this._toastEl.html(t);
                !1 !== this.options.bgColor && this._toastEl.css("background-color", this.options.bgColor);
                !1 !== this.options.textColor && this._toastEl.css("color", this.options.textColor);
                this.options.textAlign && this._toastEl.css("text-align", this.options.textAlign);
                !1 !== this.options.icon && (this._toastEl.addClass("jq-has-icon"), -1 !== n.inArray(this.options.icon, this._defaultIcons) && this._toastEl.addClass("jq-icon-" + this.options.icon));
                !1 !== this.options.class && this._toastEl.addClass(this.options.class)
            },
            position: function() {
                "string" == typeof this.options.position && -1 !== n.inArray(this.options.position, this._positionClasses) ? "bottom-center" === this.options.position ? this._container.css({
                    left: n(t).outerWidth() / 2 - this._container.outerWidth() / 2,
                    bottom: 20
                }) : "top-center" === this.options.position ? this._container.css({
                    left: n(t).outerWidth() / 2 - this._container.outerWidth() / 2,
                    top: 20
                }) : "mid-center" === this.options.position ? this._container.css({
                    left: n(t).outerWidth() / 2 - this._container.outerWidth() / 2,
                    top: n(t).outerHeight() / 2 - this._container.outerHeight() / 2
                }) : this._container.addClass(this.options.position) : "object" == typeof this.options.position ? this._container.css({
                    top: this.options.position.top ? this.options.position.top : "auto",
                    bottom: this.options.position.bottom ? this.options.position.bottom : "auto",
                    left: this.options.position.left ? this.options.position.left : "auto",
                    right: this.options.position.right ? this.options.position.right : "auto"
                }) : this._container.addClass("bottom-left")
            },
            bindToast: function() {
                var n = this;
                this._toastEl.on("afterShown", function() {
                    n.processLoader()
                });
                this._toastEl.find(".close-jq-toast-single").on("click", function(t) {
                    t.preventDefault();
                    "fade" === n.options.showHideTransition ? (n._toastEl.trigger("beforeHide"), n._toastEl.fadeOut(function() {
                        n._toastEl.trigger("afterHidden")
                    })) : "slide" === n.options.showHideTransition ? (n._toastEl.trigger("beforeHide"), n._toastEl.slideUp(function() {
                        n._toastEl.trigger("afterHidden")
                    })) : (n._toastEl.trigger("beforeHide"), n._toastEl.hide(function() {
                        n._toastEl.trigger("afterHidden")
                    }))
                });
                "function" == typeof this.options.beforeShow && this._toastEl.on("beforeShow", function() {
                    n.options.beforeShow(n._toastEl)
                });
                "function" == typeof this.options.afterShown && this._toastEl.on("afterShown", function() {
                    n.options.afterShown(n._toastEl)
                });
                "function" == typeof this.options.beforeHide && this._toastEl.on("beforeHide", function() {
                    n.options.beforeHide(n._toastEl)
                });
                "function" == typeof this.options.afterHidden && this._toastEl.on("afterHidden", function() {
                    n.options.afterHidden(n._toastEl)
                });
                "function" == typeof this.options.onClick && this._toastEl.on("click", function() {
                    n.options.onClick(n._toastEl)
                })
            },
            addToDom: function() {
                var t = n(".jq-toast-wrap"),
                    i;
                (0 === t.length ? (t = n("<div><\/div>", {
                    "class": "jq-toast-wrap",
                    role: "alert",
                    "aria-live": "polite"
                }), n("body").append(t)) : this.options.stack && !isNaN(parseInt(this.options.stack, 10)) || t.empty(), t.find(".jq-toast-single:hidden").remove(), t.append(this._toastEl), this.options.stack && !isNaN(parseInt(this.options.stack), 10)) && (i = t.find(".jq-toast-single").length - this.options.stack, i > 0 && n(".jq-toast-wrap").find(".jq-toast-single").slice(0, i).remove());
                this._container = t
            },
            canAutoHide: function() {
                return !1 !== this.options.hideAfter && !isNaN(parseInt(this.options.hideAfter, 10))
            },
            processLoader: function() {
                if (!this.canAutoHide() || !1 === this.options.loader) return !1;
                var i = this._toastEl.find(".jq-toast-loader"),
                    t = (this.options.hideAfter - 400) / 1e3 + "s",
                    r = this.options.loaderBg,
                    n = i.attr("style") || "";
                n = n.substring(0, n.indexOf("-webkit-transition"));
                n += "-webkit-transition: width " + t + " ease-in;                       -o-transition: width " + t + " ease-in;                       transition: width " + t + " ease-in;                       background-color: " + r + ";";
                i.attr("style", n).addClass("jq-toast-loaded")
            },
            animate: function() {
                if (n = this, this._toastEl.hide(), this._toastEl.trigger("beforeShow"), "fade" === this.options.showHideTransition.toLowerCase() ? this._toastEl.fadeIn(function() {
                    n._toastEl.trigger("afterShown")
                }) : "slide" === this.options.showHideTransition.toLowerCase() ? this._toastEl.slideDown(function() {
                    n._toastEl.trigger("afterShown")
                }) : this._toastEl.show(function() {
                    n._toastEl.trigger("afterShown")
                }), this.canAutoHide()) {
                    var n = this;
                    t.setTimeout(function() {
                        "fade" === n.options.showHideTransition.toLowerCase() ? (n._toastEl.trigger("beforeHide"), n._toastEl.fadeOut(function() {
                            n._toastEl.trigger("afterHidden")
                        })) : "slide" === n.options.showHideTransition.toLowerCase() ? (n._toastEl.trigger("beforeHide"), n._toastEl.slideUp(function() {
                            n._toastEl.trigger("afterHidden")
                        })) : (n._toastEl.trigger("beforeHide"), n._toastEl.hide(function() {
                            n._toastEl.trigger("afterHidden")
                        }))
                    }, this.options.hideAfter)
                }
            },
            reset: function(t) {
                "all" === t ? n(".jq-toast-wrap").remove() : this._toastEl.remove()
            },
            update: function(n) {
                this.prepareOptions(n, this.options);
                this.setup();
                this.bindToast()
            },
            close: function() {
                this._toastEl.find(".close-jq-toast-single").click()
            }
        };
        n.toast = function(n) {
            var t = Object.create(i);
            return t.init(n, this), {
                reset: function(n) {
                    t.reset(n)
                },
                update: function(n) {
                    t.update(n)
                },
                close: function() {
                    t.close()
                }
            }
        };
        n.toast.options = {
            text: "",
            heading: "",
            showHideTransition: "fade",
            allowToastClose: !0,
            hideAfter: 3e3,
            loader: !0,
            loaderBg: "#9EC600",
            stack: 5,
            position: "bottom-left",
            bgColor: !1,
            textColor: !1,
            textAlign: "left",
            icon: !1,
            beforeShow: function() {},
            afterShown: function() {},
            beforeHide: function() {},
            afterHidden: function() {},
            onClick: function() {}
        }
    }(jQuery, window, document);
! function(n, t, i) {
    "use strict";

    function s(n, t) {
        var u, o, e, r = [],
            s = 0;
        n && n.isDefaultPrevented() || (n.preventDefault(), t = t || {}, n && n.data && (t = f(n.data.options, t)), u = t.$target || i(n.currentTarget).trigger("blur"), (e = i.fancybox.getInstance()) && e.$trigger && e.$trigger.is(u) || (t.selector ? r = i(t.selector) : (o = u.attr("data-fancybox") || "", o ? (r = n.data ? n.data.items : [], r = r.length ? r.filter('[data-fancybox="' + o + '"]') : i('[data-fancybox="' + o + '"]')) : r = [u]), s = i(r).index(u), s < 0 && (s = 0), e = i.fancybox.open(r, t, s), e.$trigger = u))
    }
    if (n.console = n.console || {
        info: function() {}
    }, i) {
        if (i.fn.fancybox) return void console.info("fancyBox already initialized");
        var l = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "slideShow", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: {
                    preload: !1
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""><\/iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                video: {
                    tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download<\/a> and watch with your favorite video player!<\/video>',
                    format: "",
                    autoStart: !0
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"><\/div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index><\/span>&nbsp;/&nbsp;<span data-fancybox-count><\/span><\/div><div class="fancybox-toolbar">{{buttons}}<\/div><div class="fancybox-navigation">{{arrows}}<\/div><div class="fancybox-stage"><\/div><div class="fancybox-caption"><div class="fancybox-caption__body"><\/div><\/div><\/div><\/div>',
                spinnerTpl: '<div class="fancybox-loading"><\/div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<\/p><\/div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/><\/svg><\/a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/><\/svg><\/button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/><\/svg><\/button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/><\/svg><\/div><\/button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/><\/svg><\/div><\/button>',
                    smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/><\/svg><\/button>'
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 3e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                wheel: "auto",
                onInit: i.noop,
                beforeLoad: i.noop,
                afterLoad: i.noop,
                beforeShow: i.noop,
                afterShow: i.noop,
                beforeClose: i.noop,
                afterClose: i.noop,
                onActivate: i.noop,
                onDeactivate: i.noop,
                clickContent: function(n) {
                    return "image" === n.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1,
                    idleTime: !1,
                    clickContent: function(n) {
                        return "image" === n.type && "toggleControls"
                    },
                    clickSlide: function(n) {
                        return "image" === n.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function(n) {
                        return "image" === n.type && "zoom"
                    },
                    dblclickSlide: function(n) {
                        return "image" === n.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schlie&szlig;en",
                        NEXT: "Weiter",
                        PREV: "Zur&uuml;ck",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Vergr&ouml;&szlig;ern"
                    }
                }
            },
            e = i(n),
            r = i(t),
            a = 0,
            v = function(n) {
                return n && n.hasOwnProperty && n instanceof i
            },
            c = function() {
                return n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame || function(t) {
                    return n.setTimeout(t, 1e3 / 60)
                }
            }(),
            y = function() {
                return n.cancelAnimationFrame || n.webkitCancelAnimationFrame || n.mozCancelAnimationFrame || n.oCancelAnimationFrame || function(t) {
                    n.clearTimeout(t)
                }
            }(),
            o = function() {
                var n, r = t.createElement("fakeelement"),
                    i = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (n in i)
                    if (void 0 !== r.style[n]) return i[n];
                return "transitionend"
            }(),
            u = function(n) {
                return n && n.length && n[0].offsetHeight
            },
            f = function(n, t) {
                var r = i.extend(!0, {}, n, t);
                return i.each(t, function(n, t) {
                    i.isArray(t) && (r[n] = t)
                }), r
            },
            p = function(n) {
                var r, u;
                return !(!n || n.ownerDocument !== t) && (i(".fancybox-container").css("pointer-events", "none"), r = {
                    x: n.getBoundingClientRect().left + n.offsetWidth / 2,
                    y: n.getBoundingClientRect().top + n.offsetHeight / 2
                }, u = t.elementFromPoint(r.x, r.y) === n, i(".fancybox-container").css("pointer-events", ""), u)
            },
            h = function(n, t, r) {
                var u = this;
                u.opts = f({
                    index: r
                }, i.fancybox.defaults);
                i.isPlainObject(t) && (u.opts = f(u.opts, t));
                i.fancybox.isMobile && (u.opts = f(u.opts, u.opts.mobile));
                u.id = u.opts.id || ++a;
                u.currIndex = parseInt(u.opts.index, 10) || 0;
                u.prevIndex = null;
                u.prevPos = null;
                u.currPos = 0;
                u.firstRun = !0;
                u.group = [];
                u.slides = {};
                u.addContent(n);
                u.group.length && u.init()
            };
        i.extend(h.prototype, {
            init: function() {
                var f, e, r = this,
                    o = r.group[r.currIndex],
                    u = o.opts;
                u.closeExisting && i.fancybox.close(!0);
                i("body").addClass("fancybox-active");
                !i.fancybox.getInstance() && !1 !== u.hideScrollbar && !i.fancybox.isMobile && t.body.scrollHeight > n.innerHeight && (i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (n.innerWidth - t.documentElement.clientWidth) + "px;}<\/style>"), i("body").addClass("compensate-for-scrollbar"));
                e = "";
                i.each(u.buttons, function(n, t) {
                    e += u.btnTpl[t] || ""
                });
                f = i(r.translate(r, u.baseTpl.replace("{{buttons}}", e).replace("{{arrows}}", u.btnTpl.arrowLeft + u.btnTpl.arrowRight))).attr("id", "fancybox-container-" + r.id).addClass(u.baseClass).data("FancyBox", r).appendTo(u.parentEl);
                r.$refs = {
                    container: f
                };
                ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(n) {
                    r.$refs[n] = f.find(".fancybox-" + n)
                });
                r.trigger("onInit");
                r.activate();
                r.jumpTo(r.currIndex)
            },
            translate: function(n, t) {
                var i = n.opts.i18n[n.opts.lang] || n.opts.i18n.en;
                return t.replace(/\{\{(\w+)\}\}/g, function(n, t) {
                    return void 0 === i[t] ? n : i[t]
                })
            },
            addContent: function(n) {
                var r, t = this,
                    u = i.makeArray(n);
                i.each(u, function(n, r) {
                    var h, o, l, s, c, u = {},
                        e = {};
                    i.isPlainObject(r) ? (u = r, e = r.opts || r) : "object" === i.type(r) && i(r).length ? (h = i(r), e = h.data() || {}, e = i.extend(!0, {}, e, e.options), e.$orig = h, u.src = t.opts.src || e.src || h.attr("href"), u.type || u.src || (u.type = "inline", u.src = r)) : u = {
                        type: "html",
                        src: r + ""
                    };
                    u.opts = i.extend(!0, {}, t.opts, e);
                    i.isArray(e.buttons) && (u.opts.buttons = e.buttons);
                    i.fancybox.isMobile && u.opts.mobile && (u.opts = f(u.opts, u.opts.mobile));
                    o = u.type || u.opts.type;
                    s = u.src || "";
                    !o && s && ((l = s.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (o = "video", u.opts.video.format || (u.opts.video.format = "video/" + ("ogv" === l[1] ? "ogg" : l[1]))) : s.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? o = "image" : s.match(/\.(pdf)((\?|#).*)?$/i) ? (o = "iframe", u = i.extend(!0, u, {
                        contentType: "pdf",
                        opts: {
                            iframe: {
                                preload: !1
                            }
                        }
                    })) : "#" === s.charAt(0) && (o = "inline"));
                    o ? u.type = o : t.trigger("objectNeedsType", u);
                    u.contentType || (u.contentType = i.inArray(u.type, ["html", "inline", "ajax"]) > -1 ? "html" : u.type);
                    u.index = t.group.length;
                    "auto" == u.opts.smallBtn && (u.opts.smallBtn = i.inArray(u.type, ["html", "inline", "ajax"]) > -1);
                    "auto" === u.opts.toolbar && (u.opts.toolbar = !u.opts.smallBtn);
                    u.$thumb = u.opts.$thumb || null;
                    u.opts.$trigger && u.index === t.opts.index && (u.$thumb = u.opts.$trigger.find("img:first"), u.$thumb.length && (u.opts.$orig = u.opts.$trigger));
                    u.$thumb && u.$thumb.length || !u.opts.$orig || (u.$thumb = u.opts.$orig.find("img:first"));
                    u.$thumb && !u.$thumb.length && (u.$thumb = null);
                    u.thumb = u.opts.thumb || (u.$thumb ? u.$thumb[0].src : null);
                    "function" === i.type(u.opts.caption) && (u.opts.caption = u.opts.caption.apply(r, [t, u]));
                    "function" === i.type(t.opts.caption) && (u.opts.caption = t.opts.caption.apply(r, [t, u]));
                    u.opts.caption instanceof i || (u.opts.caption = void 0 === u.opts.caption ? "" : u.opts.caption + "");
                    "ajax" === u.type && (c = s.split(/\s+/, 2), c.length > 1 && (u.src = c.shift(), u.opts.filter = c.shift()));
                    u.opts.modal && (u.opts = i.extend(!0, u.opts, {
                        trapFocus: !0,
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    }));
                    t.group.push(u)
                });
                Object.keys(t.slides).length && (t.updateControls(), (r = t.Thumbs) && r.isActive && (r.create(), r.focus()))
            },
            addEvents: function() {
                var t = this;
                t.removeEvents();
                t.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(n) {
                    n.stopPropagation();
                    n.preventDefault();
                    t.close(n)
                }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(n) {
                    n.stopPropagation();
                    n.preventDefault();
                    t.previous()
                }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(n) {
                    n.stopPropagation();
                    n.preventDefault();
                    t.next()
                }).on("click.fb", "[data-fancybox-zoom]", function() {
                    t[t.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                });
                e.on("orientationchange.fb resize.fb", function(n) {
                    n && n.originalEvent && "resize" === n.originalEvent.type ? (t.requestId && y(t.requestId), t.requestId = c(function() {
                        t.update(n)
                    })) : (t.current && "iframe" === t.current.type && t.$refs.stage.hide(), setTimeout(function() {
                        t.$refs.stage.show();
                        t.update(n)
                    }, i.fancybox.isMobile ? 600 : 250))
                });
                r.on("keydown.fb", function(n) {
                    var f = i.fancybox ? i.fancybox.getInstance() : null,
                        u = f.current,
                        r = n.keyCode || n.which;
                    return 9 == r ? void(u.opts.trapFocus && t.focus(n)) : (!u.opts.keyboard || n.ctrlKey || n.altKey || n.shiftKey || i(n.target).is("input,textarea,video,audio,select")) ? void 0 : 8 === r || 27 === r ? (n.preventDefault(), void t.close(n)) : 37 === r || 38 === r ? (n.preventDefault(), void t.previous()) : 39 === r || 40 === r ? (n.preventDefault(), void t.next()) : void t.trigger("afterKeydown", n, r)
                });
                t.group[t.currIndex].opts.idleTime && (t.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function() {
                    t.idleSecondsCounter = 0;
                    t.isIdle && t.showControls();
                    t.isIdle = !1
                }), t.idleInterval = n.setInterval(function() {
                    ++t.idleSecondsCounter >= t.group[t.currIndex].opts.idleTime && !t.isDragging && (t.isIdle = !0, t.idleSecondsCounter = 0, t.hideControls())
                }, 1e3))
            },
            removeEvents: function() {
                var t = this;
                e.off("orientationchange.fb resize.fb");
                r.off("keydown.fb .fb-idle");
                this.$refs.container.off(".fb-close .fb-prev .fb-next");
                t.idleInterval && (n.clearInterval(t.idleInterval), t.idleInterval = null)
            },
            previous: function(n) {
                return this.jumpTo(this.currPos - 1, n)
            },
            next: function(n) {
                return this.jumpTo(this.currPos + 1, n)
            },
            jumpTo: function(n, t) {
                var s, a, h, f, e, o, v, c, y, r = this,
                    l = r.group.length;
                if (!(r.isDragging || r.isClosing || r.isAnimating && r.firstRun)) {
                    if (n = parseInt(n, 10), !(h = r.current ? r.current.opts.loop : r.opts.loop) && (n < 0 || n >= l)) return !1;
                    if (s = r.firstRun = !Object.keys(r.slides).length, e = r.current, r.prevIndex = r.currIndex, r.prevPos = r.currPos, f = r.createSlide(n), l > 1 && ((h || f.index < l - 1) && r.createSlide(n + 1), (h || f.index > 0) && r.createSlide(n - 1)), r.current = f, r.currIndex = f.index, r.currPos = f.pos, r.trigger("beforeShow", s), r.updateControls(), f.forcedDuration = void 0, i.isNumeric(t) ? f.forcedDuration = t : t = f.opts[s ? "animationDuration" : "transitionDuration"], t = parseInt(t, 10), a = r.isMoved(f), f.$slide.addClass("fancybox-slide--current"), s) return f.opts.animationEffect && t && r.$refs.container.css("transition-duration", t + "ms"), r.$refs.container.addClass("fancybox-is-open").trigger("focus"), r.loadSlide(f), void r.preload("image");
                    o = i.fancybox.getTranslate(e.$slide);
                    v = i.fancybox.getTranslate(r.$refs.stage);
                    i.each(r.slides, function(n, t) {
                        i.fancybox.stop(t.$slide, !0)
                    });
                    e.pos !== f.pos && (e.isComplete = !1);
                    e.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");
                    a ? (y = o.left - (e.pos * o.width + e.pos * e.opts.gutter), i.each(r.slides, function(n, e) {
                        e.$slide.removeClass("fancybox-animated").removeClass(function(n, t) {
                            return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                        });
                        var s = e.pos * o.width + e.pos * e.opts.gutter;
                        i.fancybox.setTranslate(e.$slide, {
                            top: 0,
                            left: s - v.left + y
                        });
                        e.pos !== f.pos && e.$slide.addClass("fancybox-slide--" + (e.pos > f.pos ? "next" : "previous"));
                        u(e.$slide);
                        i.fancybox.animate(e.$slide, {
                            top: 0,
                            left: (e.pos - f.pos) * o.width + (e.pos - f.pos) * e.opts.gutter
                        }, t, function() {
                            e.$slide.css({
                                transform: "",
                                opacity: ""
                            }).removeClass("fancybox-slide--next fancybox-slide--previous");
                            e.pos === r.currPos && r.complete()
                        })
                    })) : t && f.opts.transitionEffect && (c = "fancybox-animated fancybox-fx-" + f.opts.transitionEffect, e.$slide.addClass("fancybox-slide--" + (e.pos > f.pos ? "next" : "previous")), i.fancybox.animate(e.$slide, c, t, function() {
                        e.$slide.removeClass(c).removeClass("fancybox-slide--next fancybox-slide--previous")
                    }, !1));
                    f.isLoaded ? r.revealContent(f) : r.loadSlide(f);
                    r.preload("image")
                }
            },
            createSlide: function(n) {
                var u, r, t = this;
                return r = n % t.group.length, r = r < 0 ? t.group.length + r : r, !t.slides[n] && t.group[r] && (u = i('<div class="fancybox-slide"><\/div>').appendTo(t.$refs.stage), t.slides[n] = i.extend(!0, {}, t.group[r], {
                    pos: n,
                    $slide: u,
                    isLoaded: !1
                }), t.updateSlide(t.slides[n])), t.slides[n]
            },
            scaleToActual: function(n, t, r) {
                var e, o, s, v, y, f = this,
                    u = f.current,
                    p = u.$content,
                    l = i.fancybox.getTranslate(u.$slide).width,
                    a = i.fancybox.getTranslate(u.$slide).height,
                    h = u.width,
                    c = u.height;
                f.isAnimating || f.isMoved() || !p || "image" != u.type || !u.isLoaded || u.hasError || (f.isAnimating = !0, i.fancybox.stop(p), n = void 0 === n ? .5 * l : n, t = void 0 === t ? .5 * a : t, e = i.fancybox.getTranslate(p), e.top -= i.fancybox.getTranslate(u.$slide).top, e.left -= i.fancybox.getTranslate(u.$slide).left, v = h / e.width, y = c / e.height, o = .5 * l - .5 * h, s = .5 * a - .5 * c, h > l && (o = e.left * v - (n * v - n), o > 0 && (o = 0), o < l - h && (o = l - h)), c > a && (s = e.top * y - (t * y - t), s > 0 && (s = 0), s < a - c && (s = a - c)), f.updateCursor(h, c), i.fancybox.animate(p, {
                    top: s,
                    left: o,
                    scaleX: v,
                    scaleY: y
                }, r || 366, function() {
                    f.isAnimating = !1
                }), f.SlideShow && f.SlideShow.isActive && f.SlideShow.stop())
            },
            scaleToFit: function(n) {
                var t, r = this,
                    u = r.current,
                    f = u.$content;
                r.isAnimating || r.isMoved() || !f || "image" != u.type || !u.isLoaded || u.hasError || (r.isAnimating = !0, i.fancybox.stop(f), t = r.getFitPos(u), r.updateCursor(t.width, t.height), i.fancybox.animate(f, {
                    top: t.top,
                    left: t.left,
                    scaleX: t.width / f.width(),
                    scaleY: t.height / f.height()
                }, n || 366, function() {
                    r.isAnimating = !1
                }))
            },
            getFitPos: function(n) {
                var u, f, c, s, l = this,
                    e = n.$content,
                    o = n.$slide,
                    t = n.width || n.opts.width,
                    r = n.height || n.opts.height,
                    h = {};
                return !!(n.isLoaded && e && e.length) && (u = i.fancybox.getTranslate(l.$refs.stage).width, f = i.fancybox.getTranslate(l.$refs.stage).height, u -= parseFloat(o.css("paddingLeft")) + parseFloat(o.css("paddingRight")) + parseFloat(e.css("marginLeft")) + parseFloat(e.css("marginRight")), f -= parseFloat(o.css("paddingTop")) + parseFloat(o.css("paddingBottom")) + parseFloat(e.css("marginTop")) + parseFloat(e.css("marginBottom")), t && r || (t = u, r = f), c = Math.min(1, u / t, f / r), t *= c, r *= c, t > u - .5 && (t = u), r > f - .5 && (r = f), "image" === n.type ? (h.top = Math.floor(.5 * (f - r)) + parseFloat(o.css("paddingTop")), h.left = Math.floor(.5 * (u - t)) + parseFloat(o.css("paddingLeft"))) : "video" === n.contentType && (s = n.opts.width && n.opts.height ? t / r : n.opts.ratio || 16 / 9, r > t / s ? r = t / s : t > r * s && (t = r * s)), h.width = t, h.height = r, h)
            },
            update: function(n) {
                var t = this;
                i.each(t.slides, function(i, r) {
                    t.updateSlide(r, n)
                })
            },
            updateSlide: function(n, t) {
                var r = this,
                    f = n && n.$content,
                    e = n.width || n.opts.width,
                    o = n.height || n.opts.height,
                    u = n.$slide;
                r.adjustCaption(n);
                f && (e || o || "video" === n.contentType) && !n.hasError && (i.fancybox.stop(f), i.fancybox.setTranslate(f, r.getFitPos(n)), n.pos === r.currPos && (r.isAnimating = !1, r.updateCursor()));
                r.adjustLayout(n);
                u.length && (u.trigger("refresh"), n.pos === r.currPos && r.$refs.toolbar.add(r.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", u.get(0).scrollHeight > u.get(0).clientHeight));
                r.trigger("onUpdate", n, t)
            },
            centerSlide: function(n) {
                var r = this,
                    u = r.current,
                    t = u.$slide;
                !r.isClosing && u && (t.siblings().css({
                    transform: "",
                    opacity: ""
                }), t.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), i.fancybox.animate(t, {
                    top: 0,
                    left: 0,
                    opacity: 1
                }, void 0 === n ? 0 : n, function() {
                    t.css({
                        transform: "",
                        opacity: ""
                    });
                    u.isComplete || r.complete()
                }, !1))
            },
            isMoved: function(n) {
                var t, r, u = n || this.current;
                return !!u && (r = i.fancybox.getTranslate(this.$refs.stage), t = i.fancybox.getTranslate(u.$slide), !u.$slide.hasClass("fancybox-animated") && (Math.abs(t.top - r.top) > .5 || Math.abs(t.left - r.left) > .5))
            },
            updateCursor: function(n, t) {
                var o, e, u = this,
                    r = u.current,
                    f = u.$refs.container;
                r && !u.isClosing && u.Guestures && (f.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = u.canPan(n, t), e = !!o || u.isZoomable(), f.toggleClass("fancybox-is-zoomable", e), i("[data-fancybox-zoom]").prop("disabled", !e), o ? f.addClass("fancybox-can-pan") : e && ("zoom" === r.opts.clickContent || i.isFunction(r.opts.clickContent) && "zoom" == r.opts.clickContent(r)) ? f.addClass("fancybox-can-zoomIn") : r.opts.touch && (r.opts.touch.vertical || u.group.length > 1) && "video" !== r.contentType && f.addClass("fancybox-can-swipe"))
            },
            isZoomable: function() {
                var t, i = this,
                    n = i.current;
                return n && !i.isClosing && "image" === n.type && !n.hasError && (!n.isLoaded || (t = i.getFitPos(n)) && (n.width > t.width || n.height > t.height)) ? !0 : !1
            },
            isScaledDown: function(n, t) {
                var e = this,
                    r = !1,
                    u = e.current,
                    f = u.$content;
                return void 0 !== n && void 0 !== t ? r = n < u.width && t < u.height : f && (r = i.fancybox.getTranslate(f), r = r.width < u.width && r.height < u.height), r
            },
            canPan: function(n, t) {
                var e = this,
                    r = e.current,
                    f = null,
                    u = !1;
                return "image" === r.type && (r.isComplete || n && t) && !r.hasError && (u = e.getFitPos(r), void 0 !== n && void 0 !== t ? f = {
                    width: n,
                    height: t
                } : r.isComplete && (f = i.fancybox.getTranslate(r.$content)), f && u && (u = Math.abs(f.width - u.width) > 1.5 || Math.abs(f.height - u.height) > 1.5)), u
            },
            loadSlide: function(n) {
                var u, r, f, t = this;
                if (!n.isLoading && !n.isLoaded) {
                    if (n.isLoading = !0, !1 === t.trigger("beforeLoad", n)) return n.isLoading = !1, !1;
                    switch (u = n.type, r = n.$slide, r.off("refresh").trigger("onReset").addClass(n.opts.slideClass), u) {
                        case "image":
                            t.setImage(n);
                            break;
                        case "iframe":
                            t.setIframe(n);
                            break;
                        case "html":
                            t.setContent(n, n.src || n.content);
                            break;
                        case "video":
                            t.setContent(n, n.opts.video.tpl.replace(/\{\{src\}\}/gi, n.src).replace("{{format}}", n.opts.videoFormat || n.opts.video.format || "").replace("{{poster}}", n.thumb || ""));
                            break;
                        case "inline":
                            i(n.src).length ? t.setContent(n, i(n.src)) : t.setError(n);
                            break;
                        case "ajax":
                            t.showLoading(n);
                            f = i.ajax(i.extend({}, n.opts.ajax.settings, {
                                url: n.src,
                                success: function(i, r) {
                                    "success" === r && t.setContent(n, i)
                                },
                                error: function(i, r) {
                                    i && "abort" !== r && t.setError(n)
                                }
                            }));
                            r.one("onReset", function() {
                                f.abort()
                            });
                            break;
                        default:
                            t.setError(n)
                    }
                    return !0
                }
            },
            setImage: function(n) {
                var u, r = this;
                setTimeout(function() {
                    var t = n.$image;
                    r.isClosing || !n.isLoading || t && t.length && t[0].complete || n.hasError || r.showLoading(n)
                }, 50);
                r.checkSrcset(n);
                n.$content = i('<div class="fancybox-content"><\/div>').addClass("fancybox-is-hidden").appendTo(n.$slide.addClass("fancybox-slide--image"));
                !1 !== n.opts.preload && n.opts.width && n.opts.height && n.thumb && (n.width = n.opts.width, n.height = n.opts.height, u = t.createElement("img"), u.onerror = function() {
                    i(this).remove();
                    n.$ghost = null
                }, u.onload = function() {
                    r.afterLoad(n)
                }, n.$ghost = i(u).addClass("fancybox-image").appendTo(n.$content).attr("src", n.thumb));
                r.setBigImage(n)
            },
            checkSrcset: function(t) {
                var i, r, e, s, o = t.opts.srcset || t.opts.image.srcset,
                    f, u;
                if (o) {
                    for (e = n.devicePixelRatio || 1, s = n.innerWidth * e, r = o.split(",").map(function(n) {
                        var t = {};
                        return n.trim().split(/\s+/).forEach(function(n, i) {
                            var r = parseInt(n.substring(0, n.length - 1), 10);
                            if (0 === i) return t.url = n;
                            r && (t.value = r, t.postfix = n[n.length - 1])
                        }), t
                    }), r.sort(function(n, t) {
                        return n.value - t.value
                    }), f = 0; f < r.length; f++)
                        if (u = r[f], "w" === u.postfix && u.value >= s || "x" === u.postfix && u.value >= e) {
                            i = u;
                            break
                        }! i && r.length && (i = r[r.length - 1]);
                    i && (t.src = i.url, t.width && t.height && "w" == i.postfix && (t.height = t.width / t.height * i.value, t.width = i.value), t.opts.srcset = o)
                }
            },
            setBigImage: function(n) {
                var r = this,
                    f = t.createElement("img"),
                    u = i(f);
                n.$image = u.one("error", function() {
                    r.setError(n)
                }).one("load", function() {
                    var t;
                    n.$ghost || (r.resolveImageSlideSize(n, this.naturalWidth, this.naturalHeight), r.afterLoad(n));
                    r.isClosing || (n.opts.srcset && (t = n.opts.sizes, t && "auto" !== t || (t = (n.width / n.height > 1 && e.width() / e.height() > 1 ? "100" : Math.round(n.width / n.height * 100)) + "vw"), u.attr("sizes", t).attr("srcset", n.opts.srcset)), n.$ghost && setTimeout(function() {
                        n.$ghost && !r.isClosing && n.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, n.height / 1600))), r.hideLoading(n))
                }).addClass("fancybox-image").attr("src", n.src).appendTo(n.$content);
                (f.complete || "complete" == f.readyState) && u.naturalWidth && u.naturalHeight ? u.trigger("load") : f.error && u.trigger("error")
            },
            resolveImageSlideSize: function(n, t, i) {
                var r = parseInt(n.opts.width, 10),
                    u = parseInt(n.opts.height, 10);
                n.width = t;
                n.height = i;
                r > 0 && (n.width = r, n.height = Math.floor(r * i / t));
                u > 0 && (n.width = Math.floor(u * t / i), n.height = u)
            },
            setIframe: function(n) {
                var u, f = this,
                    t = n.opts.iframe,
                    r = n.$slide;
                n.$content = i('<div class="fancybox-content' + (t.preload ? " fancybox-is-hidden" : "") + '"><\/div>').css(t.css).appendTo(r);
                r.addClass("fancybox-slide--" + n.contentType);
                n.$iframe = u = i(t.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(t.attr).appendTo(n.$content);
                t.preload ? (f.showLoading(n), u.on("load.fb error.fb", function() {
                    this.isReady = 1;
                    n.$slide.trigger("refresh");
                    f.afterLoad(n)
                }), r.on("refresh.fb", function() {
                    var s, i, f = n.$content,
                        e = t.css.width,
                        o = t.css.height;
                    if (1 === u[0].isReady) {
                        try {
                            s = u.contents();
                            i = s.find("body")
                        } catch (n) {}
                        i && i.length && i.children().length && (r.css("overflow", "visible"), f.css({
                            width: "100%",
                            "max-width": "100%",
                            height: "9999px"
                        }), void 0 === e && (e = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))), f.css("width", e || "").css("max-width", ""), void 0 === o && (o = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))), f.css("height", o || ""), r.css("overflow", "auto"));
                        f.removeClass("fancybox-is-hidden")
                    }
                })) : f.afterLoad(n);
                u.attr("src", n.src);
                r.one("onReset", function() {
                    try {
                        i(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                    } catch (n) {}
                    i(this).off("refresh.fb").empty();
                    n.isLoaded = !1;
                    n.isRevealed = !1
                })
            },
            setContent: function(n, t) {
                var r = this;
                r.isClosing || (r.hideLoading(n), n.$content && i.fancybox.stop(n.$content), n.$slide.empty(), v(t) && t.parent().length ? ((t.hasClass("fancybox-content") || t.parent().hasClass("fancybox-content")) && t.parents(".fancybox-slide").trigger("onReset"), n.$placeholder = i("<div>").hide().insertAfter(t), t.css("display", "inline-block")) : n.hasError || ("string" === i.type(t) && (t = i("<div>").append(i.trim(t)).contents()), n.opts.filter && (t = i("<div>").html(t).find(n.opts.filter))), n.$slide.one("onReset", function() {
                    i(this).find("video,audio").trigger("pause");
                    n.$placeholder && (n.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(), n.$placeholder = null);
                    n.$smallBtn && (n.$smallBtn.remove(), n.$smallBtn = null);
                    n.hasError || (i(this).empty(), n.isLoaded = !1, n.isRevealed = !1)
                }), i(t).appendTo(n.$slide), i(t).is("video,audio") && (i(t).addClass("fancybox-video"), i(t).wrap("<div><\/div>"), n.contentType = "video", n.opts.width = n.opts.width || i(t).attr("width"), n.opts.height = n.opts.height || i(t).attr("height")), n.$content = n.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), n.$content.siblings().hide(), n.$content.length || (n.$content = n.$slide.wrapInner("<div><\/div>").children().first()), n.$content.addClass("fancybox-content"), n.$slide.addClass("fancybox-slide--" + n.contentType), r.afterLoad(n))
            },
            setError: function(n) {
                n.hasError = !0;
                n.$slide.trigger("onReset").removeClass("fancybox-slide--" + n.contentType).addClass("fancybox-slide--error");
                n.contentType = "html";
                this.setContent(n, this.translate(n, n.opts.errorTpl));
                n.pos === this.currPos && (this.isAnimating = !1)
            },
            showLoading: function(n) {
                var t = this;
                (n = n || t.current) && !n.$spinner && (n.$spinner = i(t.translate(t, t.opts.spinnerTpl)).appendTo(n.$slide).hide().fadeIn("fast"))
            },
            hideLoading: function(n) {
                var t = this;
                (n = n || t.current) && n.$spinner && (n.$spinner.stop().remove(), delete n.$spinner)
            },
            afterLoad: function(n) {
                var t = this;
                t.isClosing || (n.isLoading = !1, n.isLoaded = !0, t.trigger("afterLoad", n), t.hideLoading(n), !n.opts.smallBtn || n.$smallBtn && n.$smallBtn.length || (n.$smallBtn = i(t.translate(n, n.opts.btnTpl.smallBtn)).appendTo(n.$content)), n.opts.protect && n.$content && !n.hasError && (n.$content.on("contextmenu.fb", function(n) {
                    return 2 == n.button && n.preventDefault(), !0
                }), "image" === n.type && i('<div class="fancybox-spaceball"><\/div>').appendTo(n.$content)), t.adjustCaption(n), t.adjustLayout(n), n.pos === t.currPos && t.updateCursor(), t.revealContent(n))
            },
            adjustCaption: function(n) {
                var i, t = this,
                    r = n || t.current,
                    u = r.opts.caption,
                    o = r.opts.preventCaptionOverlap,
                    f = t.$refs.caption,
                    e = !1;
                f.toggleClass("fancybox-caption--separate", o);
                o && u && u.length && (r.pos !== t.currPos ? (i = f.clone().appendTo(f.parent()), i.children().eq(0).empty().html(u), e = i.outerHeight(!0), i.empty().remove()) : t.$caption && (e = t.$caption.outerHeight(!0)), r.$slide.css("padding-bottom", e || ""))
            },
            adjustLayout: function(n) {
                var r, u, f, i, e = this,
                    t = n || e.current;
                t.isLoaded && !0 !== t.opts.disableLayoutFix && (t.$content.css("margin-bottom", ""), t.$content.outerHeight() > t.$slide.height() + .5 && (f = t.$slide[0].style["padding-bottom"], i = t.$slide.css("padding-bottom"), parseFloat(i) > 0 && (r = t.$slide[0].scrollHeight, t.$slide.css("padding-bottom", 0), Math.abs(r - t.$slide[0].scrollHeight) < 1 && (u = i), t.$slide.css("padding-bottom", f))), t.$content.css("margin-bottom", u))
            },
            revealContent: function(n) {
                var r, c, f, h, t = this,
                    s = n.$slide,
                    e = !1,
                    o = !1,
                    l = t.isMoved(n),
                    a = n.isRevealed;
                return n.isRevealed = !0, r = n.opts[t.firstRun ? "animationEffect" : "transitionEffect"], f = n.opts[t.firstRun ? "animationDuration" : "transitionDuration"], f = parseInt(void 0 === n.forcedDuration ? f : n.forcedDuration, 10), !l && n.pos === t.currPos && f || (r = !1), "zoom" === r && (n.pos === t.currPos && f && "image" === n.type && !n.hasError && (o = t.getThumbPos(n)) ? e = t.getFitPos(n) : r = "fade"), "zoom" === r ? (t.isAnimating = !0, e.scaleX = e.width / o.width, e.scaleY = e.height / o.height, h = n.opts.zoomOpacity, "auto" == h && (h = Math.abs(n.width / n.height - o.width / o.height) > .1), h && (o.opacity = .1, e.opacity = 1), i.fancybox.setTranslate(n.$content.removeClass("fancybox-is-hidden"), o), u(n.$content), void i.fancybox.animate(n.$content, e, f, function() {
                    t.isAnimating = !1;
                    t.complete()
                })) : (t.updateSlide(n), r ? (i.fancybox.stop(s), c = "fancybox-slide--" + (n.pos >= t.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + r, s.addClass(c).removeClass("fancybox-slide--current"), n.$content.removeClass("fancybox-is-hidden"), u(s), "image" !== n.type && n.$content.hide().show(0), void i.fancybox.animate(s, "fancybox-slide--current", f, function() {
                    s.removeClass(c).css({
                        transform: "",
                        opacity: ""
                    });
                    n.pos === t.currPos && t.complete()
                }, !0)) : (n.$content.removeClass("fancybox-is-hidden"), a || !l || "image" !== n.type || n.hasError || n.$content.hide().fadeIn("fast"), void(n.pos === t.currPos && t.complete())))
            },
            getThumbPos: function(n) {
                var t, u, e, o, f, s = !1,
                    r = n.$thumb;
                return !(!r || !p(r[0])) && (t = i.fancybox.getTranslate(r), u = parseFloat(r.css("border-top-width") || 0), e = parseFloat(r.css("border-right-width") || 0), o = parseFloat(r.css("border-bottom-width") || 0), f = parseFloat(r.css("border-left-width") || 0), s = {
                    top: t.top + u,
                    left: t.left + f,
                    width: t.width - e - f,
                    height: t.height - u - o,
                    scaleX: 1,
                    scaleY: 1
                }, t.width > 0 && t.height > 0 && s)
            },
            complete: function() {
                var r, n = this,
                    t = n.current,
                    f = {};
                !n.isMoved() && t.isLoaded && (t.isComplete || (t.isComplete = !0, t.$slide.siblings().trigger("onReset"), n.preload("inline"), u(t.$slide), t.$slide.addClass("fancybox-slide--complete"), i.each(n.slides, function(t, r) {
                    r.pos >= n.currPos - 1 && r.pos <= n.currPos + 1 ? f[r.pos] = r : r && (i.fancybox.stop(r.$slide), r.$slide.off().remove())
                }), n.slides = f), n.isAnimating = !1, n.updateCursor(), n.trigger("afterShow"), t.opts.video.autoStart && t.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
                    Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen();
                    n.next()
                }), t.opts.autoFocus && "html" === t.contentType && (r = t.$content.find("input[autofocus]:enabled:visible:first"), r.length ? r.trigger("focus") : n.focus(null, !0)), t.$slide.scrollTop(0).scrollLeft(0))
            },
            preload: function(n) {
                var i, r, t = this;
                t.group.length < 2 || (r = t.slides[t.currPos + 1], i = t.slides[t.currPos - 1], i && i.type === n && t.loadSlide(i), r && r.type === n && t.loadSlide(r))
            },
            focus: function(n, r) {
                var u, e, f = this,
                    o = 'a[href],area[href],input:not([disabled]):not([type="hidden"]):not([aria-hidden]),select:not([disabled]):not([aria-hidden]),textarea:not([disabled]):not([aria-hidden]),button:not([disabled]):not([aria-hidden]),iframe,object,embed,video,audio,[contenteditable],[tabindex]:not([tabindex^="-"])';
                f.isClosing || (u = !n && f.current && f.current.isComplete ? f.current.$slide.find("*:visible" + (r ? ":not(.fancybox-close-small)" : "")) : f.$refs.container.find("*:visible"), u = u.filter(o).filter(function() {
                    return "hidden" !== i(this).css("visibility") && !i(this).hasClass("disabled")
                }), u.length ? (e = u.index(t.activeElement), n && n.shiftKey ? (e < 0 || 0 == e) && (n.preventDefault(), u.eq(u.length - 1).trigger("focus")) : (e < 0 || e == u.length - 1) && (n && n.preventDefault(), u.eq(0).trigger("focus"))) : f.$refs.container.trigger("focus"))
            },
            activate: function() {
                var n = this;
                i(".fancybox-container").each(function() {
                    var t = i(this).data("FancyBox");
                    t && t.id !== n.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), t.isVisible = !1)
                });
                n.isVisible = !0;
                (n.current || n.isIdle) && (n.update(), n.updateControls());
                n.trigger("onActivate");
                n.addEvents()
            },
            close: function(n, t) {
                var o, s, h, l, a, y, e, r = this,
                    f = r.current,
                    v = function() {
                        r.cleanUp(n)
                    };
                return !r.isClosing && (r.isClosing = !0, !1 === r.trigger("beforeClose", n) ? (r.isClosing = !1, c(function() {
                    r.update()
                }), !1) : (r.removeEvents(), h = f.$content, o = f.opts.animationEffect, s = i.isNumeric(t) ? t : o ? f.opts.animationDuration : 0, f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== n ? i.fancybox.stop(f.$slide) : o = !1, f.$slide.siblings().trigger("onReset").remove(), s && r.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", s + "ms"), r.hideLoading(f), r.hideControls(!0), r.updateCursor(), "zoom" !== o || h && s && "image" === f.type && !r.isMoved() && !f.hasError && (e = r.getThumbPos(f)) || (o = "fade"), "zoom" === o ? (i.fancybox.stop(h), l = i.fancybox.getTranslate(h), y = {
                    top: l.top,
                    left: l.left,
                    scaleX: l.width / e.width,
                    scaleY: l.height / e.height,
                    width: e.width,
                    height: e.height
                }, a = f.opts.zoomOpacity, "auto" == a && (a = Math.abs(f.width / f.height - e.width / e.height) > .1), a && (e.opacity = 0), i.fancybox.setTranslate(h, y), u(h), i.fancybox.animate(h, e, s, v), !0) : (o && s ? i.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, s, v) : !0 === n ? setTimeout(v, s) : v(), !0)))
            },
            cleanUp: function(t) {
                var f, e, o, r = this,
                    u = r.current.opts.$orig;
                r.current.$slide.trigger("onReset");
                r.$refs.container.empty().remove();
                r.trigger("afterClose", t);
                r.current.opts.backFocus && (u && u.length && u.is(":visible") || (u = r.$trigger), u && u.length && (e = n.scrollX, o = n.scrollY, u.trigger("focus"), i("html, body").scrollTop(o).scrollLeft(e)));
                r.current = null;
                f = i.fancybox.getInstance();
                f ? f.activate() : (i("body").removeClass("fancybox-active compensate-for-scrollbar"), i("#fancybox-style-noscroll").remove())
            },
            trigger: function(n, t) {
                var o, f = Array.prototype.slice.call(arguments, 1),
                    e = this,
                    u = t && t.opts ? t : e.current;
                if (u ? f.unshift(u) : u = e, f.unshift(e), i.isFunction(u.opts[n]) && (o = u.opts[n].apply(u, f)), !1 === o) return o;
                "afterClose" !== n && e.$refs ? e.$refs.container.trigger(n + ".fb", f) : r.trigger(n + ".fb", f)
            },
            updateControls: function() {
                var n = this,
                    r = n.current,
                    f = r.index,
                    u = n.$refs.container,
                    o = n.$refs.caption,
                    e = r.opts.caption;
                r.$slide.trigger("refresh");
                e && e.length ? (n.$caption = o, o.children().eq(0).html(e)) : n.$caption = null;
                n.hasHiddenControls || n.isIdle || n.showControls();
                u.find("[data-fancybox-count]").html(n.group.length);
                u.find("[data-fancybox-index]").html(f + 1);
                u.find("[data-fancybox-prev]").prop("disabled", !r.opts.loop && f <= 0);
                u.find("[data-fancybox-next]").prop("disabled", !r.opts.loop && f >= n.group.length - 1);
                "image" === r.type ? u.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", r.opts.image.src || r.src).show() : r.opts.toolbar && u.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
                i(t.activeElement).is(":hidden,[disabled]") && n.$refs.container.trigger("focus")
            },
            hideControls: function(n) {
                var i = this,
                    t = ["infobar", "toolbar", "nav"];
                !n && i.current.opts.preventCaptionOverlap || t.push("caption");
                this.$refs.container.removeClass(t.map(function(n) {
                    return "fancybox-show-" + n
                }).join(" "));
                this.hasHiddenControls = !0
            },
            showControls: function() {
                var n = this,
                    t = n.current ? n.current.opts : n.opts,
                    i = n.$refs.container;
                n.hasHiddenControls = !1;
                n.idleSecondsCounter = 0;
                i.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && n.group.length > 1)).toggleClass("fancybox-show-caption", !!n.$caption).toggleClass("fancybox-show-nav", !!(t.arrows && n.group.length > 1)).toggleClass("fancybox-is-modal", !!t.modal)
            },
            toggleControls: function() {
                this.hasHiddenControls ? this.showControls() : this.hideControls()
            }
        });
        i.fancybox = {
            version: "3.5.7",
            defaults: l,
            getInstance: function(n) {
                var t = i('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                    r = Array.prototype.slice.call(arguments, 1);
                return t instanceof h && ("string" === i.type(n) ? t[n].apply(t, r) : "function" === i.type(n) && n.apply(t, r), t)
            },
            open: function(n, t, i) {
                return new h(n, t, i)
            },
            close: function(n) {
                var t = this.getInstance();
                t && (t.close(), !0 === n && this.close(n))
            },
            destroy: function() {
                this.close(!0);
                r.add("body").off("click.fb-start", "**")
            },
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: function() {
                var i = t.createElement("div");
                return n.getComputedStyle && n.getComputedStyle(i) && n.getComputedStyle(i).getPropertyValue("transform") && !(t.documentMode && t.documentMode < 11)
            }(),
            getTranslate: function(n) {
                var t;
                return !(!n || !n.length) && (t = n[0].getBoundingClientRect(), {
                    top: t.top || 0,
                    left: t.left || 0,
                    width: t.width,
                    height: t.height,
                    opacity: parseFloat(n.css("opacity"))
                })
            },
            setTranslate: function(n, t) {
                var i = "",
                    r = {};
                if (n && t) return void 0 === t.left && void 0 === t.top || (i = (void 0 === t.left ? n.position().left : t.left) + "px, " + (void 0 === t.top ? n.position().top : t.top) + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), void 0 !== t.scaleX && void 0 !== t.scaleY ? i += " scale(" + t.scaleX + ", " + t.scaleY + ")" : void 0 !== t.scaleX && (i += " scaleX(" + t.scaleX + ")"), i.length && (r.transform = i), void 0 !== t.opacity && (r.opacity = t.opacity), void 0 !== t.width && (r.width = t.width), void 0 !== t.height && (r.height = t.height), n.css(r)
            },
            animate: function(n, t, r, u, f) {
                var s, e = this;
                i.isFunction(r) && (u = r, r = null);
                e.stop(n);
                s = e.getTranslate(n);
                n.on(o, function(o) {
                    o && o.originalEvent && (!n.is(o.originalEvent.target) || "z-index" == o.originalEvent.propertyName) || (e.stop(n), i.isNumeric(r) && n.css("transition-duration", ""), i.isPlainObject(t) ? void 0 !== t.scaleX && void 0 !== t.scaleY && e.setTranslate(n, {
                        top: t.top,
                        left: t.left,
                        width: s.width * t.scaleX,
                        height: s.height * t.scaleY,
                        scaleX: 1,
                        scaleY: 1
                    }) : !0 !== f && n.removeClass(t), i.isFunction(u) && u(o))
                });
                i.isNumeric(r) && n.css("transition-duration", r + "ms");
                i.isPlainObject(t) ? (void 0 !== t.scaleX && void 0 !== t.scaleY && (delete t.width, delete t.height, n.parent().hasClass("fancybox-slide--image") && n.parent().addClass("fancybox-is-scaling")), i.fancybox.setTranslate(n, t)) : n.addClass(t);
                n.data("timer", setTimeout(function() {
                    n.trigger(o)
                }, r + 33))
            },
            stop: function(n, t) {
                n && n.length && (clearTimeout(n.data("timer")), t && n.trigger(o), n.off(o).css("transition-duration", ""), n.parent().removeClass("fancybox-is-scaling"))
            }
        };
        i.fn.fancybox = function(n) {
            var t;
            return n = n || {}, t = n.selector || !1, t ? i("body").off("click.fb-start", t).on("click.fb-start", t, {
                options: n
            }, s) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: n
            }, s), this
        };
        r.on("click.fb-start", "[data-fancybox]", s);
        r.on("click.fb-start", "[data-fancybox-trigger]", function() {
            i('[data-fancybox="' + i(this).attr("data-fancybox-trigger") + '"]').eq(i(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                $trigger: i(this)
            })
        }),
            function() {
                var n = null;
                r.on("mousedown mouseup focus blur", ".fancybox-button", function(t) {
                    switch (t.type) {
                        case "mousedown":
                            n = i(this);
                            break;
                        case "mouseup":
                            n = null;
                            break;
                        case "focusin":
                            i(".fancybox-button").removeClass("fancybox-focus");
                            i(this).is(n) || i(this).is("[disabled]") || i(this).addClass("fancybox-focus");
                            break;
                        case "focusout":
                            i(".fancybox-button").removeClass("fancybox-focus")
                    }
                })
            }()
    }
}(window, document, jQuery),
    function(n) {
        "use strict";
        var r = {
                youtube: {
                    matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                    params: {
                        autoplay: 1,
                        autohide: 1,
                        fs: 1,
                        rel: 0,
                        hd: 1,
                        wmode: "transparent",
                        enablejsapi: 1,
                        html5: 1
                    },
                    paramPlace: 8,
                    type: "iframe",
                    url: "https://www.youtube-nocookie.com/embed/$4",
                    thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
                },
                vimeo: {
                    matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                    params: {
                        autoplay: 1,
                        hd: 1,
                        show_title: 1,
                        show_byline: 1,
                        show_portrait: 0,
                        fullscreen: 1
                    },
                    paramPlace: 3,
                    type: "iframe",
                    url: "//player.vimeo.com/video/$2"
                },
                instagram: {
                    matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                    type: "image",
                    url: "//$1/p/$2/media/?size=l"
                },
                gmap_place: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                    type: "iframe",
                    url: function(n) {
                        return "//maps.google." + n[2] + "/?ll=" + (n[9] ? n[9] + "&z=" + Math.floor(n[10]) + (n[12] ? n[12].replace(/^\//, "&") : "") : n[12] + "").replace(/\?/, "&") + "&output=" + (n[12] && n[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                    }
                },
                gmap_search: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                    type: "iframe",
                    url: function(n) {
                        return "//maps.google." + n[2] + "/maps?q=" + n[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                    }
                }
            },
            t = function(t, i, r) {
                if (t) return r = r || "", "object" === n.type(r) && (r = n.param(r, !0)), n.each(i, function(n, i) {
                    t = t.replace("$" + n, i || "")
                }), r.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + r), t
            },
            i;
        n(document).on("objectNeedsType.fb", function(i, u, f) {
            var v, y, s, c, e, a, l, o = f.src || "",
                h = !1;
            v = n.extend(!0, {}, r, f.opts.media);
            n.each(v, function(i, r) {
                var u, v;
                if (s = o.match(r.matcher)) {
                    if (h = r.type, l = i, a = {}, r.paramPlace && s[r.paramPlace])
                        for (e = s[r.paramPlace], "?" == e[0] && (e = e.substring(1)), e = e.split("&"), u = 0; u < e.length; ++u) v = e[u].split("=", 2), 2 == v.length && (a[v[0]] = decodeURIComponent(v[1].replace(/\+/g, " ")));
                    return c = n.extend(!0, {}, r.params, f.opts[i], a), o = "function" === n.type(r.url) ? r.url.call(this, s, c, f) : t(r.url, s, c), y = "function" === n.type(r.thumb) ? r.thumb.call(this, s, c, f) : t(r.thumb, s), "youtube" === i ? o = o.replace(/&t=((\d+)m)?(\d+)s/, function(n, t, i, r) {
                        return "&start=" + ((i ? 60 * parseInt(i, 10) : 0) + parseInt(r, 10))
                    }) : "vimeo" === i && (o = o.replace("&%23", "#")), !1
                }
            });
            h ? (f.opts.thumb || f.opts.$thumb && f.opts.$thumb.length || (f.opts.thumb = y), "iframe" === h && (f.opts = n.extend(!0, f.opts, {
                iframe: {
                    preload: !1,
                    attr: {
                        scrolling: "no"
                    }
                }
            })), n.extend(f, {
                type: h,
                src: o,
                origSrc: f.src,
                contentSource: l,
                contentType: "image" === h ? "image" : "gmap_place" == l || "gmap_search" == l ? "map" : "video"
            })) : o && (f.type = f.opts.defaultType)
        });
        i = {
            youtube: {
                src: "https://www.youtube.com/iframe_api",
                "class": "YT",
                loading: !1,
                loaded: !1
            },
            vimeo: {
                src: "https://player.vimeo.com/api/player.js",
                "class": "Vimeo",
                loading: !1,
                loaded: !1
            },
            load: function(n) {
                var t, i = this;
                if (this[n].loaded) return void setTimeout(function() {
                    i.done(n)
                });
                this[n].loading || (this[n].loading = !0, t = document.createElement("script"), t.type = "text/javascript", t.src = this[n].src, "youtube" === n ? window.onYouTubeIframeAPIReady = function() {
                    i[n].loaded = !0;
                    i.done(n)
                } : t.onload = function() {
                    i[n].loaded = !0;
                    i.done(n)
                }, document.body.appendChild(t))
            },
            done: function(t) {
                var i, r, u;
                "youtube" === t && delete window.onYouTubeIframeAPIReady;
                (i = n.fancybox.getInstance()) && (r = i.current.$content.find("iframe"), "youtube" === t && void 0 !== YT && YT ? u = new YT.Player(r.attr("id"), {
                    events: {
                        onStateChange: function(n) {
                            0 == n.data && i.next()
                        }
                    }
                }) : "vimeo" === t && void 0 !== Vimeo && Vimeo && (u = new Vimeo.Player(r), u.on("ended", function() {
                    i.next()
                })))
            }
        };
        n(document).on({
            "afterShow.fb": function(n, t, r) {
                t.group.length > 1 && ("youtube" === r.contentSource || "vimeo" === r.contentSource) && i.load(r.contentSource)
            }
        })
    }(jQuery),
    function(n, t, i) {
        "use strict";
        var o = function() {
                return n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame || function(t) {
                    return n.setTimeout(t, 1e3 / 60)
                }
            }(),
            f = function() {
                return n.cancelAnimationFrame || n.webkitCancelAnimationFrame || n.mozCancelAnimationFrame || n.oCancelAnimationFrame || function(t) {
                    n.clearTimeout(t)
                }
            }(),
            e = function(t) {
                var r = [],
                    i;
                t = t.originalEvent || t || n.e;
                t = t.touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t];
                for (i in t) t[i].pageX ? r.push({
                    x: t[i].pageX,
                    y: t[i].pageY
                }) : t[i].clientX && r.push({
                    x: t[i].clientX,
                    y: t[i].clientY
                });
                return r
            },
            u = function(n, t, i) {
                return t && n ? "x" === i ? n.x - t.x : "y" === i ? n.y - t.y : Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2)) : 0
            },
            s = function(n) {
                if (n.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || i.isFunction(n.get(0).onclick) || n.data("selectable")) return !0;
                for (var t = 0, r = n[0].attributes, u = r.length; t < u; t++)
                    if ("data-fancybox-" === r[t].nodeName.substr(0, 14)) return !0;
                return !1
            },
            c = function(t) {
                var i = n.getComputedStyle(t)["overflow-y"],
                    r = n.getComputedStyle(t)["overflow-x"],
                    u = ("scroll" === i || "auto" === i) && t.scrollHeight > t.clientHeight,
                    f = ("scroll" === r || "auto" === r) && t.scrollWidth > t.clientWidth;
                return u || f
            },
            h = function(n) {
                for (var t = !1;;) {
                    if (t = c(n.get(0))) break;
                    if (n = n.parent(), !n.length || n.hasClass("fancybox-stage") || n.is("body")) break
                }
                return t
            },
            r = function(n) {
                var t = this;
                t.instance = n;
                t.$bg = n.$refs.bg;
                t.$stage = n.$refs.stage;
                t.$container = n.$refs.container;
                t.destroy();
                t.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(t, "ontouchstart"))
            };
        r.prototype.destroy = function() {
            var n = this;
            n.$container.off(".fb.touch");
            i(t).off(".fb.touch");
            n.requestId && (f(n.requestId), n.requestId = null);
            n.tapped && (clearTimeout(n.tapped), n.tapped = null)
        };
        r.prototype.ontouchstart = function(r) {
            var f = this,
                o = i(r.target),
                l = f.instance,
                c = l.current,
                a = c.$slide,
                y = c.$content,
                v = "touchstart" == r.type;
            if (v && f.$container.off("mousedown.fb.touch"), (!r.originalEvent || 2 != r.originalEvent.button) && a.length && o.length && !s(o) && !s(o.parent()) && (o.is("img") || !(r.originalEvent.clientX > o[0].clientWidth + o.offset().left))) {
                if (!c || l.isAnimating || c.$slide.hasClass("fancybox-animated")) return r.stopPropagation(), void r.preventDefault();
                f.realPoints = f.startPoints = e(r);
                f.startPoints.length && (c.touch && r.stopPropagation(), f.startEvent = r, f.canTap = !0, f.$target = o, f.$content = y, f.opts = c.opts.touch, f.isPanning = !1, f.isSwiping = !1, f.isZooming = !1, f.isScrolling = !1, f.canPan = l.canPan(), f.startTime = (new Date).getTime(), f.distanceX = f.distanceY = f.distance = 0, f.canvasWidth = Math.round(a[0].clientWidth), f.canvasHeight = Math.round(a[0].clientHeight), f.contentLastPos = null, f.contentStartPos = i.fancybox.getTranslate(f.$content) || {
                    top: 0,
                    left: 0
                }, f.sliderStartPos = i.fancybox.getTranslate(a), f.stagePos = i.fancybox.getTranslate(l.$refs.stage), f.sliderStartPos.top -= f.stagePos.top, f.sliderStartPos.left -= f.stagePos.left, f.contentStartPos.top -= f.stagePos.top, f.contentStartPos.left -= f.stagePos.left, i(t).off(".fb.touch").on(v ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(f, "ontouchend")).on(v ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(f, "ontouchmove")), i.fancybox.isMobile && t.addEventListener("scroll", f.onscroll, !0), ((f.opts || f.canPan) && (o.is(f.$stage) || f.$stage.find(o).length) || (o.is(".fancybox-image") && r.preventDefault(), i.fancybox.isMobile && o.parents(".fancybox-caption").length)) && (f.isScrollable = h(o) || h(o.parent()), i.fancybox.isMobile && f.isScrollable || r.preventDefault(), (1 === f.startPoints.length || c.hasError) && (f.canPan ? (i.fancybox.stop(f.$content), f.isPanning = !0) : f.isSwiping = !0, f.$container.addClass("fancybox-is-grabbing")), 2 === f.startPoints.length && "image" === c.type && (c.isLoaded || c.$ghost) && (f.canTap = !1, f.isSwiping = !1, f.isPanning = !1, f.isZooming = !0, i.fancybox.stop(f.$content), f.centerPointStartX = .5 * (f.startPoints[0].x + f.startPoints[1].x) - i(n).scrollLeft(), f.centerPointStartY = .5 * (f.startPoints[0].y + f.startPoints[1].y) - i(n).scrollTop(), f.percentageOfImageAtPinchPointX = (f.centerPointStartX - f.contentStartPos.left) / f.contentStartPos.width, f.percentageOfImageAtPinchPointY = (f.centerPointStartY - f.contentStartPos.top) / f.contentStartPos.height, f.startDistanceBetweenFingers = u(f.startPoints[0], f.startPoints[1]))))
            }
        };
        r.prototype.onscroll = function() {
            var n = this;
            n.isScrolling = !0;
            t.removeEventListener("scroll", n.onscroll, !0)
        };
        r.prototype.ontouchmove = function(n) {
            var t = this;
            return void 0 !== n.originalEvent.buttons && 0 === n.originalEvent.buttons ? void t.ontouchend(n) : t.isScrolling ? void(t.canTap = !1) : (t.newPoints = e(n), void((t.opts || t.canPan) && t.newPoints.length && t.newPoints.length && (t.isSwiping && !0 === t.isSwiping || n.preventDefault(), t.distanceX = u(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = u(t.newPoints[0], t.startPoints[0], "y"), t.distance = u(t.newPoints[0], t.startPoints[0]), t.distance > 0 && (t.isSwiping ? t.onSwipe(n) : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()))))
        };
        r.prototype.onSwipe = function() {
            var e, t = this,
                r = t.instance,
                s = t.isSwiping,
                u = t.sliderStartPos.left || 0;
            if (!0 !== s) "x" == s && (t.distanceX > 0 && (t.instance.group.length < 2 || 0 === t.instance.current.index && !t.instance.current.opts.loop) ? u += Math.pow(t.distanceX, .8) : t.distanceX < 0 && (t.instance.group.length < 2 || t.instance.current.index === t.instance.group.length - 1 && !t.instance.current.opts.loop) ? u -= Math.pow(-t.distanceX, .8) : u += t.distanceX), t.sliderLastPos = {
                top: "x" == s ? 0 : t.sliderStartPos.top + t.distanceY,
                left: u
            }, t.requestId && (f(t.requestId), t.requestId = null), t.requestId = o(function() {
                t.sliderLastPos && (i.each(t.instance.slides, function(n, r) {
                    var u = r.pos - t.instance.currPos;
                    i.fancybox.setTranslate(r.$slide, {
                        top: t.sliderLastPos.top,
                        left: t.sliderLastPos.left + u * t.canvasWidth + u * r.opts.gutter
                    })
                }), t.$container.addClass("fancybox-is-sliding"))
            });
            else if (Math.abs(t.distance) > 10) {
                if (t.canTap = !1, r.group.length < 2 && t.opts.vertical ? t.isSwiping = "y" : r.isDragging || !1 === t.opts.vertical || "auto" === t.opts.vertical && i(n).width() > 800 ? t.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(t.distanceY, t.distanceX) / Math.PI), t.isSwiping = e > 45 && e < 135 ? "y" : "x"), "y" === t.isSwiping && i.fancybox.isMobile && t.isScrollable) return void(t.isScrolling = !0);
                r.isDragging = t.isSwiping;
                t.startPoints = t.newPoints;
                i.each(r.slides, function(n, u) {
                    var f, e;
                    i.fancybox.stop(u.$slide);
                    f = i.fancybox.getTranslate(u.$slide);
                    e = i.fancybox.getTranslate(r.$refs.stage);
                    u.$slide.css({
                        transform: "",
                        opacity: "",
                        "transition-duration": ""
                    }).removeClass("fancybox-animated").removeClass(function(n, t) {
                        return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                    });
                    u.pos === r.current.pos && (t.sliderStartPos.top = f.top - e.top, t.sliderStartPos.left = f.left - e.left);
                    i.fancybox.setTranslate(u.$slide, {
                        top: f.top - e.top,
                        left: f.left - e.left
                    })
                });
                r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
            }
        };
        r.prototype.onPan = function() {
            var n = this;
            if (u(n.newPoints[0], n.realPoints[0]) < (i.fancybox.isMobile ? 10 : 5)) return void(n.startPoints = n.newPoints);
            n.canTap = !1;
            n.contentLastPos = n.limitMovement();
            n.requestId && f(n.requestId);
            n.requestId = o(function() {
                i.fancybox.setTranslate(n.$content, n.contentLastPos)
            })
        };
        r.prototype.limitMovement = function() {
            var f, e, o, s, n, t, i = this,
                h = i.canvasWidth,
                v = i.canvasHeight,
                r = i.distanceX,
                u = i.distanceY,
                c = i.contentStartPos,
                l = c.left,
                y = c.top,
                a = c.width,
                p = c.height;
            return n = a > h ? l + r : l, t = y + u, f = Math.max(0, .5 * h - .5 * a), e = Math.max(0, .5 * v - .5 * p), o = Math.min(h - a, .5 * h - .5 * a), s = Math.min(v - p, .5 * v - .5 * p), r > 0 && n > f && (n = f - 1 + Math.pow(-f + l + r, .8) || 0), r < 0 && n < o && (n = o + 1 - Math.pow(o - l - r, .8) || 0), u > 0 && t > e && (t = e - 1 + Math.pow(-e + y + u, .8) || 0), u < 0 && t < s && (t = s + 1 - Math.pow(s - y - u, .8) || 0), {
                top: t,
                left: n
            }
        };
        r.prototype.limitPosition = function(n, t, i, r) {
            var e = this,
                u = e.canvasWidth,
                f = e.canvasHeight;
            return i > u ? (n = n > 0 ? 0 : n, n = n < u - i ? u - i : n) : n = Math.max(0, u / 2 - i / 2), r > f ? (t = t > 0 ? 0 : t, t = t < f - r ? f - r : t) : t = Math.max(0, f / 2 - r / 2), {
                top: t,
                left: n
            }
        };
        r.prototype.onZoom = function() {
            var t = this,
                r = t.contentStartPos,
                s = r.width,
                h = r.height,
                a = r.left,
                v = r.top,
                y = u(t.newPoints[0], t.newPoints[1]),
                e = y / t.startDistanceBetweenFingers,
                c = Math.floor(s * e),
                l = Math.floor(h * e),
                p = (s - c) * t.percentageOfImageAtPinchPointX,
                w = (h - l) * t.percentageOfImageAtPinchPointY,
                b = (t.newPoints[0].x + t.newPoints[1].x) / 2 - i(n).scrollLeft(),
                k = (t.newPoints[0].y + t.newPoints[1].y) / 2 - i(n).scrollTop(),
                d = b - t.centerPointStartX,
                g = k - t.centerPointStartY,
                nt = a + (p + d),
                tt = v + (w + g),
                it = {
                    top: tt,
                    left: nt,
                    scaleX: e,
                    scaleY: e
                };
            t.canTap = !1;
            t.newWidth = c;
            t.newHeight = l;
            t.contentLastPos = it;
            t.requestId && f(t.requestId);
            t.requestId = o(function() {
                i.fancybox.setTranslate(t.$content, t.contentLastPos)
            })
        };
        r.prototype.ontouchend = function(n) {
            var r = this,
                u = r.isSwiping,
                o = r.isPanning,
                s = r.isZooming,
                h = r.isScrolling;
            if (r.endPoints = e(n), r.dMs = Math.max((new Date).getTime() - r.startTime, 1), r.$container.removeClass("fancybox-is-grabbing"), i(t).off(".fb.touch"), t.removeEventListener("scroll", r.onscroll, !0), r.requestId && (f(r.requestId), r.requestId = null), r.isSwiping = !1, r.isPanning = !1, r.isZooming = !1, r.isScrolling = !1, r.instance.isDragging = !1, r.canTap) return r.onTap(n);
            r.speed = 100;
            r.velocityX = r.distanceX / r.dMs * .5;
            r.velocityY = r.distanceY / r.dMs * .5;
            o ? r.endPanning() : s ? r.endZooming() : r.endSwiping(u, h)
        };
        r.prototype.endSwiping = function(n, t) {
            var r = this,
                u = !1,
                o = r.instance.group.length,
                f = Math.abs(r.distanceX),
                e = "x" == n && o > 1 && (r.dMs > 130 && f > 10 || f > 50);
            r.sliderLastPos = null;
            "y" == n && !t && Math.abs(r.distanceY) > 50 ? (i.fancybox.animate(r.instance.current.$slide, {
                top: r.sliderStartPos.top + r.distanceY + 150 * r.velocityY,
                opacity: 0
            }, 200), u = r.instance.close(!0, 250)) : e && r.distanceX > 0 ? u = r.instance.previous(300) : e && r.distanceX < 0 && (u = r.instance.next(300));
            !1 !== u || "x" != n && "y" != n || r.instance.centerSlide(200);
            r.$container.removeClass("fancybox-is-sliding")
        };
        r.prototype.endPanning = function() {
            var r, u, t, n = this;
            n.contentLastPos && (!1 === n.opts.momentum || n.dMs > 350 ? (r = n.contentLastPos.left, u = n.contentLastPos.top) : (r = n.contentLastPos.left + 500 * n.velocityX, u = n.contentLastPos.top + 500 * n.velocityY), t = n.limitPosition(r, u, n.contentStartPos.width, n.contentStartPos.height), t.width = n.contentStartPos.width, t.height = n.contentStartPos.height, i.fancybox.animate(n.$content, t, 366))
        };
        r.prototype.endZooming = function() {
            var u, f, e, o, n = this,
                s = n.instance.current,
                t = n.newWidth,
                r = n.newHeight;
            n.contentLastPos && (u = n.contentLastPos.left, f = n.contentLastPos.top, o = {
                top: f,
                left: u,
                width: t,
                height: r,
                scaleX: 1,
                scaleY: 1
            }, i.fancybox.setTranslate(n.$content, o), t < n.canvasWidth && r < n.canvasHeight ? n.instance.scaleToFit(150) : t > s.width || r > s.height ? n.instance.scaleToActual(n.centerPointStartX, n.centerPointStartY, 150) : (e = n.limitPosition(u, f, t, r), i.fancybox.animate(n.$content, e, 150)))
        };
        r.prototype.onTap = function(t) {
            var f, u = this,
                s = i(t.target),
                r = u.instance,
                o = r.current,
                h = t && e(t) || u.startPoints,
                c = h[0] ? h[0].x - i(n).scrollLeft() - u.stagePos.left : 0,
                l = h[0] ? h[0].y - i(n).scrollTop() - u.stagePos.top : 0,
                a = function(n) {
                    var f = o.opts[n];
                    if (i.isFunction(f) && (f = f.apply(r, [o, t])), f) switch (f) {
                        case "close":
                            r.close(u.startEvent);
                            break;
                        case "toggleControls":
                            r.toggleControls();
                            break;
                        case "next":
                            r.next();
                            break;
                        case "nextOrClose":
                            r.group.length > 1 ? r.next() : r.close(u.startEvent);
                            break;
                        case "zoom":
                            "image" == o.type && (o.isLoaded || o.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(c, l) : r.group.length < 2 && r.close(u.startEvent))
                    }
                };
            if ((!t.originalEvent || 2 != t.originalEvent.button) && (s.is("img") || !(c > s[0].clientWidth + s.offset().left))) {
                if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) f = "Outside";
                else if (s.is(".fancybox-slide")) f = "Slide";
                else {
                    if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;
                    f = "Content"
                }
                if (u.tapped) {
                    if (clearTimeout(u.tapped), u.tapped = null, Math.abs(c - u.tapX) > 50 || Math.abs(l - u.tapY) > 50) return this;
                    a("dblclick" + f)
                } else u.tapX = c, u.tapY = l, o.opts["dblclick" + f] && o.opts["dblclick" + f] !== o.opts["click" + f] ? u.tapped = setTimeout(function() {
                    u.tapped = null;
                    r.isAnimating || a("click" + f)
                }, 500) : a("click" + f);
                return this
            }
        };
        i(t).on("onActivate.fb", function(n, t) {
            t && !t.Guestures && (t.Guestures = new r(t))
        }).on("beforeClose.fb", function(n, t) {
            t && t.Guestures && t.Guestures.destroy()
        })
    }(window, document, jQuery),
    function(n, t) {
        "use strict";
        t.extend(!0, t.fancybox.defaults, {
            btnTpl: {
                slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/><\/svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/><\/svg><\/button>'
            },
            slideShow: {
                autoStart: !1,
                speed: 3e3,
                progress: !0
            }
        });
        var i = function(n) {
            this.instance = n;
            this.init()
        };
        t.extend(i.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            init: function() {
                var n = this,
                    i = n.instance,
                    r = i.group[i.currIndex].opts.slideShow;
                n.$button = i.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                    n.toggle()
                });
                i.group.length < 2 || !r ? n.$button.hide() : r.progress && (n.$progress = t('<div class="fancybox-progress"><\/div>').appendTo(i.$refs.inner))
            },
            set: function(n) {
                var r = this,
                    i = r.instance,
                    u = i.current;
                u && (!0 === n || u.opts.loop || i.currIndex < i.group.length - 1) ? r.isActive && "video" !== u.contentType && (r.$progress && t.fancybox.animate(r.$progress.show(), {
                    scaleX: 1
                }, u.opts.slideShow.speed), r.timer = setTimeout(function() {
                    i.current.opts.loop || i.current.index != i.group.length - 1 ? i.next() : i.jumpTo(0)
                }, u.opts.slideShow.speed)) : (r.stop(), i.idleSecondsCounter = 0, i.showControls())
            },
            clear: function() {
                var n = this;
                clearTimeout(n.timer);
                n.timer = null;
                n.$progress && n.$progress.removeAttr("style").hide()
            },
            start: function() {
                var n = this,
                    t = n.instance.current;
                t && (n.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), n.isActive = !0, t.isComplete && n.set(!0), n.instance.trigger("onSlideShowChange", !0))
            },
            stop: function() {
                var n = this,
                    t = n.instance.current;
                n.clear();
                n.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play");
                n.isActive = !1;
                n.instance.trigger("onSlideShowChange", !1);
                n.$progress && n.$progress.removeAttr("style").hide()
            },
            toggle: function() {
                var n = this;
                n.isActive ? n.stop() : n.start()
            }
        });
        t(n).on({
            "onInit.fb": function(n, t) {
                t && !t.SlideShow && (t.SlideShow = new i(t))
            },
            "beforeShow.fb": function(n, t, i, r) {
                var u = t && t.SlideShow;
                r ? u && i.opts.slideShow.autoStart && u.start() : u && u.isActive && u.clear()
            },
            "afterShow.fb": function(n, t) {
                var i = t && t.SlideShow;
                i && i.isActive && i.set()
            },
            "afterKeydown.fb": function(i, r, u, f, e) {
                var o = r && r.SlideShow;
                o && u.opts.slideShow && (80 === e || 32 === e) && !t(n.activeElement).is("button,a,input") && (f.preventDefault(), o.toggle())
            },
            "beforeClose.fb onDeactivate.fb": function(n, t) {
                var i = t && t.SlideShow;
                i && i.stop()
            }
        });
        t(n).on("visibilitychange", function() {
            var r = t.fancybox.getInstance(),
                i = r && r.SlideShow;
            i && i.isActive && (n.hidden ? i.clear() : i.set())
        })
    }(document, jQuery),
    function(n, t) {
        "use strict";
        var i = function() {
                for (var t, i, r = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ], f = {}, u = 0; u < r.length; u++)
                    if (t = r[u], t && t[1] in n) {
                        for (i = 0; i < t.length; i++) f[r[0][i]] = t[i];
                        return f
                    } return !1
            }(),
            r;
        i && (r = {
            request: function(t) {
                t = t || n.documentElement;
                t[i.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                n[i.exitFullscreen]()
            },
            toggle: function(t) {
                t = t || n.documentElement;
                this.isFullscreen() ? this.exit() : this.request(t)
            },
            isFullscreen: function() {
                return Boolean(n[i.fullscreenElement])
            },
            enabled: function() {
                return Boolean(n[i.fullscreenEnabled])
            }
        }, t.extend(!0, t.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/><\/svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/><\/svg><\/button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }), t(n).on(i.fullscreenchange, function() {
            var i = r.isFullscreen(),
                n = t.fancybox.getInstance();
            n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", i), n.$refs.container.toggleClass("fancybox-is-fullscreen", i), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !i).toggleClass("fancybox-button--fsexit", i))
        }));
        t(n).on({
            "onInit.fb": function(n, t) {
                var u;
                if (!i) return void t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
                t && t.group[t.currIndex].opts.fullScreen ? (u = t.$refs.container, u.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(n) {
                    n.stopPropagation();
                    n.preventDefault();
                    r.toggle()
                }), t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && r.request(), t.FullScreen = r) : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
            },
            "afterKeydown.fb": function(n, t, i, r, u) {
                t && t.FullScreen && 70 === u && (r.preventDefault(), t.FullScreen.toggle())
            },
            "beforeClose.fb": function(n, t) {
                t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && r.exit()
            }
        })
    }(document, jQuery),
    function(n, t) {
        "use strict";
        var i = "fancybox-thumbs",
            r;
        t.fancybox.defaults = t.extend(!0, {
            btnTpl: {
                thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/><\/svg><\/button>'
            },
            thumbs: {
                autoStart: !1,
                hideOnClose: !0,
                parentEl: ".fancybox-container",
                axis: "y"
            }
        }, t.fancybox.defaults);
        r = function(n) {
            this.init(n)
        };
        t.extend(r.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            isActive: !1,
            init: function(n) {
                var t = this,
                    r = n.group,
                    u = 0,
                    i, f;
                for (t.instance = n, t.opts = r[n.currIndex].opts.thumbs, n.Thumbs = t, t.$button = n.$refs.toolbar.find("[data-fancybox-thumbs]"), i = 0, f = r.length; i < f && (r[i].thumb && u++, !(u > 1)); i++);
                u > 1 && t.opts ? (t.$button.removeAttr("style").on("click", function() {
                    t.toggle()
                }), t.isActive = !0) : t.$button.hide()
            },
            create: function() {
                var r, n = this,
                    u = n.instance,
                    f = n.opts.parentEl,
                    e = [];
                n.$grid || (n.$grid = t('<div class="' + i + " " + i + "-" + n.opts.axis + '"><\/div>').appendTo(u.$refs.container.find(f).addBack().filter(f)), n.$grid.on("click", "a", function() {
                    u.jumpTo(t(this).attr("data-index"))
                }));
                n.$list || (n.$list = t('<div class="' + i + '__list">').appendTo(n.$grid));
                t.each(u.group, function(n, t) {
                    r = t.thumb;
                    r || "image" !== t.type || (r = t.src);
                    e.push('<a href="javascript:;" tabindex="0" data-index="' + n + '"' + (r && r.length ? ' style="background-image:url(' + r + ')"' : 'class="fancybox-thumbs-missing"') + "><\/a>")
                });
                n.$list[0].innerHTML = e.join("");
                "x" === n.opts.axis && n.$list.width(parseInt(n.$grid.css("padding-right"), 10) + u.group.length * n.$list.children().eq(0).outerWidth(!0))
            },
            focus: function(n) {
                var u, t, i = this,
                    r = i.$list,
                    f = i.$grid;
                i.instance.current && (u = r.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + i.instance.current.index + '"]').addClass("fancybox-thumbs-active"), t = u.position(), "y" === i.opts.axis && (t.top < 0 || t.top > r.height() - u.outerHeight()) ? r.stop().animate({
                    scrollTop: r.scrollTop() + t.top
                }, n) : "x" === i.opts.axis && (t.left < f.scrollLeft() || t.left > f.scrollLeft() + (f.width() - u.outerWidth())) && r.parent().stop().animate({
                    scrollLeft: t.left
                }, n))
            },
            update: function() {
                var n = this;
                n.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);
                n.isVisible ? (n.$grid || n.create(), n.instance.trigger("onThumbsShow"), n.focus(0)) : n.$grid && n.instance.trigger("onThumbsHide");
                n.instance.update()
            },
            hide: function() {
                this.isVisible = !1;
                this.update()
            },
            show: function() {
                this.isVisible = !0;
                this.update()
            },
            toggle: function() {
                this.isVisible = !this.isVisible;
                this.update()
            }
        });
        t(n).on({
            "onInit.fb": function(n, t) {
                var i;
                t && !t.Thumbs && (i = new r(t), i.isActive && !0 === i.opts.autoStart && i.show())
            },
            "beforeShow.fb": function(n, t, i, r) {
                var u = t && t.Thumbs;
                u && u.isVisible && u.focus(r ? 0 : 250)
            },
            "afterKeydown.fb": function(n, t, i, r, u) {
                var f = t && t.Thumbs;
                f && f.isActive && 71 === u && (r.preventDefault(), f.toggle())
            },
            "beforeClose.fb": function(n, t) {
                var i = t && t.Thumbs;
                i && i.isVisible && !1 !== i.opts.hideOnClose && i.$grid.hide()
            }
        })
    }(document, jQuery),
    function(n, t) {
        "use strict";

        function i(n) {
            var t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            return String(n).replace(/[&<>"'`=\/]/g, function(n) {
                return t[n]
            })
        }
        t.extend(!0, t.fancybox.defaults, {
            btnTpl: {
                share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/><\/svg><\/button>'
            },
            share: {
                url: function(n, t) {
                    return !n.currentHash && "inline" !== t.type && "html" !== t.type && (t.origSrc || t.src) || window.location
                },
                tpl: '<div class="fancybox-share"><h1>{{SHARE}}<\/h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /><\/svg><span>Facebook<\/span><\/a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /><\/svg><span>Twitter<\/span><\/a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/><\/svg><span>Pinterest<\/span><\/a><\/p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /><\/p><\/div>'
            }
        });
        t(n).on("click", "[data-fancybox-share]", function() {
            var u, f, r = t.fancybox.getInstance(),
                n = r.current || null;
            n && ("function" === t.type(n.opts.share.url) && (u = n.opts.share.url.apply(n, [r, n])), f = n.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === n.type ? encodeURIComponent(n.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(u)).replace(/\{\{url_raw\}\}/g, i(u)).replace(/\{\{descr\}\}/g, r.$caption ? encodeURIComponent(r.$caption.text()) : ""), t.fancybox.open({
                src: r.translate(r, f),
                type: "html",
                opts: {
                    touch: !1,
                    animationEffect: !1,
                    afterLoad: function(n, t) {
                        r.$refs.container.one("beforeClose.fb", function() {
                            n.close(null, 0)
                        });
                        t.$content.find(".fancybox-share__button").click(function() {
                            return window.open(this.href, "Share", "width=550, height=450"), !1
                        })
                    },
                    mobile: {
                        autoFocus: !1
                    }
                }
            }))
        })
    }(document, jQuery),
    function(n, t, i) {
        "use strict";

        function r() {
            var i = n.location.hash.substr(1),
                t = i.split("-"),
                r = t.length > 1 && /^\+?\d+$/.test(t[t.length - 1]) ? parseInt(t.pop(-1), 10) || 1 : 1,
                u = t.join("-");
            return {
                hash: i,
                index: r < 1 ? 1 : r,
                gallery: u
            }
        }

        function u(n) {
            "" !== n.gallery && i("[data-fancybox='" + i.escapeSelector(n.gallery) + "']").eq(n.index - 1).focus().trigger("click.fb-start")
        }

        function f(n) {
            var t, i;
            return !!n && (t = n.current ? n.current.opts : n.opts, "" !== (i = t.hash || (t.$orig ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger") : "")) && i)
        }
        i.escapeSelector || (i.escapeSelector = function(n) {
            return (n + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(n, t) {
                return t ? "\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
            })
        });
        i(function() {
            !1 !== i.fancybox.defaults.hash && (i(t).on({
                "onInit.fb": function(n, t) {
                    var i, u;
                    !1 !== t.group[t.currIndex].opts.hash && (i = r(), (u = f(t)) && i.gallery && u == i.gallery && (t.currIndex = i.index - 1))
                },
                "beforeShow.fb": function(i, r, u, e) {
                    var o;
                    u && !1 !== u.opts.hash && (o = f(r)) && (r.currentHash = o + (r.group.length > 1 ? "-" + (u.index + 1) : ""), n.location.hash !== "#" + r.currentHash && (e && !r.origHash && (r.origHash = n.location.hash), r.hashTimer && clearTimeout(r.hashTimer), r.hashTimer = setTimeout(function() {
                        "replaceState" in n.history ? (n.history[e ? "pushState" : "replaceState"]({}, t.title, n.location.pathname + n.location.search + "#" + r.currentHash), e && (r.hasCreatedHistory = !0)) : n.location.hash = r.currentHash;
                        r.hashTimer = null
                    }, 300)))
                },
                "beforeClose.fb": function(i, r, u) {
                    u && !1 !== u.opts.hash && (clearTimeout(r.hashTimer), r.currentHash && r.hasCreatedHistory ? n.history.back() : r.currentHash && ("replaceState" in n.history ? n.history.replaceState({}, t.title, n.location.pathname + n.location.search + (r.origHash || "")) : n.location.hash = r.origHash), r.currentHash = null)
                }
            }), i(n).on("hashchange.fb", function() {
                var n = r(),
                    t = null;
                i.each(i(".fancybox-container").get().reverse(), function(n, r) {
                    var u = i(r).data("FancyBox");
                    if (u && u.currentHash) return t = u, !1
                });
                t ? t.currentHash === n.gallery + "-" + n.index || 1 === n.index && t.currentHash == n.gallery || (t.currentHash = null, t.close()) : "" !== n.gallery && u(n)
            }), setTimeout(function() {
                i.fancybox.getInstance() || u(r())
            }, 50))
        })
    }(window, document, jQuery),
    function(n, t) {
        "use strict";
        var i = (new Date).getTime();
        t(n).on({
            "onInit.fb": function(n, t) {
                t.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(n) {
                    var r = t.current,
                        u = (new Date).getTime();
                    t.group.length < 2 || !1 === r.opts.wheel || "auto" === r.opts.wheel && "image" !== r.type || (n.preventDefault(), n.stopPropagation(), r.$slide.hasClass("fancybox-animated") || (n = n.originalEvent || n, u - i < 250 || (i = u, t[(-n.deltaY || -n.deltaX || n.wheelDelta || -n.detail) < 0 ? "next" : "previous"]())))
                })
            }
        })
    }(document, jQuery),
    function(n) {
        "use strict";
        typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" && typeof require == "function" ? n(require("jquery")) : n(jQuery)
    }(function(n) {
        "use strict";

        function i(t, r) {
            var u = this;
            u.showLink = null;
            u.element = t;
            u.el = n(t);
            u.suggestions = [];
            u.badQueries = [];
            u.selectedIndex = -1;
            u.currentValue = u.element.value;
            u.timeoutId = null;
            u.cachedResponse = {};
            u.onChangeTimeout = null;
            u.onChange = null;
            u.isLocal = !1;
            u.suggestionsContainer = null;
            u.noSuggestionsContainer = null;
            u.options = n.extend(!0, {}, i.defaults, r);
            u.classes = {
                selected: "autocomplete-selected",
                suggestion: "autocomplete-suggestion"
            };
            u.hint = null;
            u.hintValue = "";
            u.selection = null;
            u.initialize();
            u.setOptions(r)
        }

        function f(n, t, i) {
            return n.value.toLowerCase().indexOf(i) !== -1
        }

        function e(t) {
            return typeof t == "string" ? n.parseJSON(t) : t
        }

        function o(n, t) {
            if (!t) return n.value;
            var i = "(" + u.escapeRegExChars(t) + ")";
            return n.value.replace(new RegExp(i, "gi"), "<strong>$1<\/strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>")
        }

        function s(n, t) {
            return '<div class="autocomplete-group">' + t + "<\/div>"
        }
        var u = function() {
                return {
                    escapeRegExChars: function(n) {
                        return n.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
                    },
                    createNode: function(n) {
                        var t = document.createElement("div");
                        return t.className = n, t.style.position = "absolute", t.style.display = "none", t
                    }
                }
            }(),
            t = {
                ESC: 27,
                TAB: 9,
                RETURN: 13,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40
            },
            r = n.noop;
        i.utils = u;
        n.Autocomplete = i;
        i.defaults = {
            ajaxSettings: {},
            autoSelectFirst: !1,
            appendTo: "body",
            serviceUrl: null,
            lookup: null,
            onSelect: null,
            width: "auto",
            minChars: 1,
            maxHeight: 300,
            deferRequestBy: 50,
            params: {},
            formatResult: o,
            formatGroup: s,
            delimiter: null,
            zIndex: 9999,
            type: "GET",
            noCache: !0,
            onSearchStart: r,
            onSearchComplete: r,
            onSearchError: r,
            preserveInput: !1,
            containerClass: "autocomplete-suggestions",
            tabDisabled: !1,
            dataType: "text",
            currentRequest: null,
            triggerSelectOnValidInput: !0,
            preventBadQueries: !0,
            lookupFilter: f,
            paramName: "query",
            transformResult: e,
            showNoSuggestionNotice: !1,
            noSuggestionNotice: "No results",
            orientation: "bottom",
            forceFixPosition: !1,
            showLink: null
        };
        i.prototype = {
            initialize: function() {
                var t = this,
                    f = "." + t.classes.suggestion,
                    e = t.classes.selected,
                    u = t.options,
                    r;
                t.element.setAttribute("autocomplete", "off");
                t.noSuggestionsContainer = n('<div class="autocomplete-no-suggestion"><\/div>').html(this.options.noSuggestionNotice).get(0);
                t.suggestionsContainer = i.utils.createNode(u.containerClass);
                r = n(t.suggestionsContainer);
                r.appendTo(u.appendTo || "body");
                u.width !== "auto" && r.css("width", u.width);
                r.on("mouseover.autocomplete", f, function() {
                    t.activate(n(this).data("index"))
                });
                r.on("mouseout.autocomplete", function() {
                    t.selectedIndex = -1;
                    r.children("." + e).removeClass(e)
                });
                r.on("click.autocomplete", f, function() {
                    t.select(n(this).data("index"))
                });
                r.on("click.autocomplete", function() {
                    clearTimeout(t.blurTimeoutId)
                });
                t.fixPositionCapture = function() {
                    t.visible && t.fixPosition()
                };
                n(window).on("resize.autocomplete", t.fixPositionCapture);
                t.el.on("keydown.autocomplete", function(n) {
                    t.onKeyPress(n)
                });
                t.el.on("keyup.autocomplete", function(n) {
                    t.onKeyUp(n)
                });
                t.el.on("blur.autocomplete", function() {
                    t.onBlur()
                });
                t.el.on("focus.autocomplete", function() {
                    t.onFocus()
                });
                t.el.on("change.autocomplete", function(n) {
                    t.onKeyUp(n)
                });
                t.el.on("input.autocomplete", function(n) {
                    t.onKeyUp(n)
                })
            },
            onFocus: function() {
                var t = this;
                t.disabled || (t.fixPosition(), t.el.val().length >= t.options.minChars && t.onValueChange(), n("body").addClass("no-scroll"), n(".search-bg").show(), n(t.element).parent().addClass("no-shadow"))
            },
            onBlur: function() {
                var t = this,
                    i = t.options,
                    r = t.el.val(),
                    u = t.getQuery(r);
                t.blurTimeoutId = setTimeout(function() {
                    t.hide();
                    t.selection && t.currentValue !== u && (i.onInvalidateSelection || n.noop).call(t.element)
                }, 200);
                n(".search-bg").hide();
                n("body").removeClass("no-scroll");
                n(t.element).parent().removeClass("no-shadow")
            },
            abortAjax: function() {
                var n = this;
                n.currentRequest && (n.currentRequest.abort(), n.currentRequest = null)
            },
            setOptions: function(t) {
                var r = this,
                    i = n.extend({}, r.options, t);
                r.isLocal = Array.isArray(i.lookup);
                r.isLocal && (i.lookup = r.verifySuggestionsFormat(i.lookup));
                i.orientation = r.validateOrientation(i.orientation, "bottom");
                n(r.suggestionsContainer).css({
                    "max-height": i.maxHeight + "px",
                    width: i.width + "px",
                    "z-index": i.zIndex
                });
                this.options = i
            },
            clearCache: function() {
                this.cachedResponse = {};
                this.badQueries = []
            },
            clear: function() {
                this.clearCache();
                this.currentValue = "";
                this.suggestions = []
            },
            disable: function() {
                var n = this;
                n.disabled = !0;
                clearTimeout(n.onChangeTimeout);
                n.abortAjax()
            },
            enable: function() {
                this.disabled = !1
            },
            fixPosition: function() {
                var t = this,
                    i = n(t.suggestionsContainer),
                    f = i.parent().get(0),
                    h, e;
                if (f === document.body || t.options.forceFixPosition) {
                    var o = t.options.orientation,
                        s = i.outerHeight(),
                        c = t.el.outerHeight(),
                        u = t.el.offset(),
                        r = {
                            top: u.top,
                            left: u.left
                        };
                    if (o === "auto") {
                        var v = n(window).height(),
                            l = n(window).scrollTop(),
                            a = -l + u.top - s,
                            y = l + v - (u.top + c + s);
                        o = Math.max(a, y) === a ? "top" : "bottom"
                    }
                    r.top += o === "top" ? -s : c;
                    f !== document.body && (h = i.css("opacity"), t.visible || i.css("opacity", 0).show(), e = i.offsetParent().offset(), r.top -= e.top, r.top += f.scrollTop, r.left -= e.left, t.visible || i.css("opacity", h).hide());
                    t.options.width === "auto" && (r.width = t.el.outerWidth() + "px");
                    i.css(r)
                }
            },
            isCursorAtEnd: function() {
                var i = this,
                    n = i.el.val().length,
                    r = i.element.selectionStart,
                    t;
                return typeof r == "number" ? r === n : document.selection ? (t = document.selection.createRange(), t.moveStart("character", -n), n === t.text.length) : !0
            },
            onKeyPress: function(n) {
                var i = this;
                if (!i.disabled && !i.visible && n.which === t.DOWN && i.currentValue) {
                    i.suggest();
                    return
                }
                if (!i.disabled && i.visible) {
                    switch (n.which) {
                        case t.ESC:
                            i.el.val(i.currentValue);
                            i.hide();
                            break;
                        case t.RIGHT:
                            if (i.hint && i.options.onHint && i.isCursorAtEnd()) {
                                i.selectHint();
                                break
                            }
                            return;
                        case t.TAB:
                            if (i.hint && i.options.onHint) {
                                i.selectHint();
                                return
                            }
                            if (i.selectedIndex === -1) {
                                i.hide();
                                return
                            }
                            if (i.select(i.selectedIndex), i.options.tabDisabled === !1) return;
                            break;
                        case t.RETURN:
                            if (i.selectedIndex === -1) {
                                i.hide();
                                return
                            }
                            i.select(i.selectedIndex);
                            break;
                        case t.UP:
                            i.moveUp();
                            break;
                        case t.DOWN:
                            i.moveDown();
                            break;
                        default:
                            return
                    }
                    n.stopImmediatePropagation();
                    n.preventDefault()
                }
            },
            onKeyUp: function(n) {
                var i = this;
                if (!i.disabled) {
                    switch (n.which) {
                        case t.UP:
                        case t.DOWN:
                            return
                    }
                    clearTimeout(i.onChangeTimeout);
                    i.currentValue !== i.el.val() && (i.findBestHint(), i.options.deferRequestBy > 0 ? i.onChangeTimeout = setTimeout(function() {
                        i.onValueChange()
                    }, i.options.deferRequestBy) : i.onValueChange())
                }
            },
            onValueChange: function() {
                if (this.ignoreValueChange) {
                    this.ignoreValueChange = !1;
                    return
                }
                var t = this,
                    r = t.options,
                    u = t.el.val(),
                    i = t.getQuery(u);
                if (t.selection && t.currentValue !== i && (t.selection = null, (r.onInvalidateSelection || n.noop).call(t.element)), clearTimeout(t.onChangeTimeout), t.currentValue = u, t.selectedIndex = -1, r.triggerSelectOnValidInput && t.isExactMatch(i)) {
                    t.select(0);
                    return
                }
                i.length < r.minChars ? t.hide() : t.getSuggestions(i)
            },
            isExactMatch: function(n) {
                var t = this.suggestions;
                return t.length === 1 && t[0].value.toLowerCase() === n.toLowerCase()
            },
            getQuery: function(t) {
                var r = this.options.delimiter,
                    i;
                return r ? (i = t.split(r), n.trim(i[i.length - 1])) : t
            },
            getSuggestionsLocal: function(t) {
                var f = this,
                    r = f.options,
                    e = t.toLowerCase(),
                    o = r.lookupFilter,
                    u = parseInt(r.lookupLimit, 10),
                    i;
                return i = {
                    suggestions: n.grep(r.lookup, function(n) {
                        return o(n, t, e)
                    })
                }, u && i.suggestions.length > u && (i.suggestions = i.suggestions.slice(0, u)), i
            },
            getSuggestions: function(t) {
                var u, i = this,
                    r = i.options,
                    f = r.serviceUrl,
                    e, o, s;
                if (r.params[r.paramName] = t, r.onSearchStart.call(i.element, r.params) !== !1) {
                    if (e = r.ignoreParams ? null : r.params, n.isFunction(r.lookup)) {
                        r.lookup(t, function(n) {
                            i.suggestions = n.suggestions;
                            i.suggest();
                            r.onSearchComplete.call(i.element, t, n.suggestions)
                        });
                        return
                    }
                    i.isLocal ? u = i.getSuggestionsLocal(t) : (n.isFunction(f) && (f = f.call(i.element, t)), o = f + "?" + n.param(e || {}), u = i.cachedResponse[o]);
                    u && Array.isArray(u.suggestions) ? (i.suggestions = u.suggestions, i.suggest(), r.onSearchComplete.call(i.element, t, u.suggestions)) : i.isBadQuery(t) ? r.onSearchComplete.call(i.element, t, []) : (i.abortAjax(), s = {
                        url: f,
                        data: e,
                        type: r.type,
                        dataType: r.dataType
                    }, n.extend(s, r.ajaxSettings), i.currentRequest = n.ajax(s).done(function(n) {
                        var u;
                        i.currentRequest = null;
                        u = r.transformResult(n, t);
                        i.processResponse(u, t, o);
                        r.onSearchComplete.call(i.element, t, u.suggestions)
                    }).fail(function(n, u, f) {
                        r.onSearchError.call(i.element, t, n, u, f)
                    }))
                }
            },
            isBadQuery: function(n) {
                if (!this.options.preventBadQueries) return !1;
                for (var t = this.badQueries, i = t.length; i--;)
                    if (n.indexOf(t[i]) === 0) return !0;
                return !1
            },
            hide: function() {
                var t = this,
                    i = n(t.suggestionsContainer);
                n.isFunction(t.options.onHide) && t.visible && t.options.onHide.call(t.element, i);
                t.visible = !1;
                t.selectedIndex = -1;
                clearTimeout(t.onChangeTimeout);
                n(t.suggestionsContainer).hide();
                t.signalHint(null)
            },
            suggest: function() {
                if (!this.suggestions.length) {
                    this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide();
                    return
                }
                var t = this,
                    i = t.options,
                    o = i.groupBy,
                    l = i.formatResult,
                    u = t.getQuery(t.currentValue),
                    s = t.classes.suggestion,
                    a = t.classes.selected,
                    r = n(t.suggestionsContainer),
                    v = n(t.noSuggestionsContainer),
                    h = i.beforeRender,
                    f = "",
                    c = i.showLink,
                    e, y = function(n) {
                        var t = n.data[o];
                        return e === t ? "" : (e = t, i.formatGroup(n, e))
                    };
                if (i.triggerSelectOnValidInput && t.isExactMatch(u)) {
                    t.select(0);
                    return
                }
                n.each(t.suggestions, function(n, t) {
                    o && (f += y(t, u, n));
                    f += '<div onMouseDown="return false;" class="' + s + '" data-index="' + n + '">' + l(t, u, n) + "<\/div>"
                });
                this.adjustContainerWidth();
                v.detach();
                r.html(f);
                n.isFunction(h) && h.call(t.element, r, t.suggestions);
                c && r.append('<p class="more-results"><a href="' + c + u + '">Hiển thị kết quả cho <strong><i>' + u + "<\/i><\/strong><\/a><\/p>");
                t.fixPosition();
                r.show();
                i.autoSelectFirst && (t.selectedIndex = 0, r.scrollTop(0), r.children("." + s).first().addClass(a));
                t.visible = !0;
                t.findBestHint()
            },
            noSuggestions: function() {
                var t = this,
                    r = t.options.beforeRender,
                    i = n(t.suggestionsContainer),
                    u = n(t.noSuggestionsContainer);
                this.adjustContainerWidth();
                u.detach();
                i.empty();
                i.append(u);
                n.isFunction(r) && r.call(t.element, i, t.suggestions);
                t.fixPosition();
                i.show();
                t.visible = !0
            },
            adjustContainerWidth: function() {
                var t = this,
                    r = t.options,
                    i, u = n(t.suggestionsContainer);
                r.width === "auto" ? (i = t.el.outerWidth(), u.css("width", i > 0 ? i : 300)) : r.width === "flex" && u.css("width", "")
            },
            findBestHint: function() {
                var t = this,
                    i = t.el.val().toLowerCase(),
                    r = null;
                i && (n.each(t.suggestions, function(n, t) {
                    var u = t.value.toLowerCase().indexOf(i) === 0;
                    return u && (r = t), !u
                }), t.signalHint(r))
            },
            signalHint: function(t) {
                var r = "",
                    i = this;
                t && (r = i.currentValue + t.value.substr(i.currentValue.length));
                i.hintValue !== r && (i.hintValue = r, i.hint = t, (this.options.onHint || n.noop)(r))
            },
            verifySuggestionsFormat: function(t) {
                return t.length && typeof t[0] == "string" ? n.map(t, function(n) {
                    return {
                        value: n,
                        data: null
                    }
                }) : t
            },
            validateOrientation: function(t, i) {
                return t = n.trim(t || "").toLowerCase(), n.inArray(t, ["auto", "bottom", "top"]) === -1 && (t = i), t
            },
            processResponse: function(n, t, i) {
                var r = this,
                    u = r.options;
                (n.suggestions = r.verifySuggestionsFormat(n.suggestions), u.noCache || (r.cachedResponse[i] = n, u.preventBadQueries && !n.suggestions.length && r.badQueries.push(t)), t === r.getQuery(r.currentValue)) && (r.suggestions = n.suggestions, r.suggest())
            },
            activate: function(t) {
                var i = this,
                    r, u = i.classes.selected,
                    f = n(i.suggestionsContainer),
                    e = f.find("." + i.classes.suggestion);
                return (f.find("." + u).removeClass(u), i.selectedIndex = t, i.selectedIndex !== -1 && e.length > i.selectedIndex) ? (r = e.get(i.selectedIndex), n(r).addClass(u), r) : null
            },
            selectHint: function() {
                var t = this,
                    i = n.inArray(t.hint, t.suggestions);
                t.select(i)
            },
            select: function(n) {
                var t = this;
                t.hide();
                t.onSelect(n)
            },
            moveUp: function() {
                var t = this;
                if (t.selectedIndex !== -1) {
                    if (t.selectedIndex === 0) {
                        n(t.suggestionsContainer).children("." + t.classes.suggestion).first().removeClass(t.classes.selected);
                        t.selectedIndex = -1;
                        t.ignoreValueChange = !1;
                        t.el.val(t.currentValue);
                        t.findBestHint();
                        return
                    }
                    t.adjustScroll(t.selectedIndex - 1)
                }
            },
            moveDown: function() {
                var n = this;
                n.selectedIndex !== n.suggestions.length - 1 && n.adjustScroll(n.selectedIndex + 1)
            },
            adjustScroll: function(t) {
                var i = this,
                    u = i.activate(t),
                    r, f, o, e;
                u && (e = n(u).outerHeight(), r = u.offsetTop, f = n(i.suggestionsContainer).scrollTop(), o = f + i.options.maxHeight - e, r < f ? n(i.suggestionsContainer).scrollTop(r) : r > o && n(i.suggestionsContainer).scrollTop(r - i.options.maxHeight + e), i.options.preserveInput || (i.ignoreValueChange = !0, i.el.val(i.getValue(i.suggestions[t].value))), i.signalHint(null))
            },
            onSelect: function(t) {
                var i = this,
                    u = i.options.onSelect,
                    r = i.suggestions[t];
                i.currentValue = i.getValue(r.value);
                i.currentValue === i.el.val() || i.options.preserveInput || i.el.val(i.currentValue);
                i.signalHint(null);
                i.suggestions = [];
                i.selection = r;
                n.isFunction(u) && u.call(i.element, r)
            },
            getValue: function(n) {
                var r = this,
                    u = r.options.delimiter,
                    t, i;
                return u ? (t = r.currentValue, i = t.split(u), i.length === 1) ? n : t.substr(0, t.length - i[i.length - 1].length) + n : n
            },
            dispose: function() {
                var t = this;
                t.el.off(".autocomplete").removeData("autocomplete");
                n(window).off("resize.autocomplete", t.fixPositionCapture);
                n(t.suggestionsContainer).remove()
            }
        };
        n.fn.devbridgeAutocomplete = function(t, r) {
            var u = "autocomplete";
            return arguments.length ? this.each(function() {
                var e = n(this),
                    f = e.data(u);
                typeof t == "string" ? f && typeof f[t] == "function" && f[t](r) : (f && f.dispose && f.dispose(), f = new i(this, t), e.data(u, f))
            }) : this.first().data(u)
        };
        n.fn.autocomplete || (n.fn.autocomplete = n.fn.devbridgeAutocomplete)
    }),
    function(n) {
        function t(t, i) {
            this.element = t;
            this.settings = n.extend({}, n.fn.rate.settings, i);
            this.set_faces = {};
            this.build()
        }
        n.fn.textWidth = function() {
            var t = n("<span>" + n(this).html() + "<\/span>"),
                i, r;
            return (t.css("font-size", n(this).css("font-size")).hide(), t.prependTo("body"), i = t.width(), t.remove(), i == 0) ? (r = 0, n(this).eq(0).children().each(function() {
                r += n(this).textWidth()
            }), r) : i
        };
        n.fn.textHeight = function() {
            var t = n("<span>" + n(this).html() + "<\/span>"),
                i;
            return t.css("font-size", n(this).css("font-size")).hide(), t.prependTo("body"), i = t.height(), t.remove(), i
        };
        Array.isArray = function(n) {
            return Object.prototype.toString.call(n) === "[object Array]"
        };
        String.prototype.getCodePointLength = function() {
            return this.length - this.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g).length + 1
        };
        String.fromCodePoint = function() {
            for (var n, t = Array.prototype.slice.call(arguments), i = t.length; i-- > 0;) n = t[i] - 65536, n >= 0 && t.splice(i, 1, 55296 + (n >> 10), 56320 + (n & 1023));
            return String.fromCharCode.apply(null, t)
        };
        n.fn.rate = function(i) {
            if (i === undefined || typeof i == "object") return this.each(function() {
                n.data(this, "rate") || n.data(this, "rate", new t(this, i))
            });
            if (typeof i == "string") {
                var u = arguments,
                    r;
                return this.each(function() {
                    var f = n.data(this, "rate");
                    f instanceof t && typeof f[i] == "function" && (r = f[i].apply(f, Array.prototype.slice.call(u, 1)));
                    i === "destroy" && (n(f.element).off(), n.data(this, "rate", null))
                }), r !== undefined ? r : this
            }
        };
        t.prototype.build = function() {
            var i, t;
            this.layers = {};
            this.value = 0;
            this.raise_select_layer = !1;
            this.settings.initial_value && (this.value = this.settings.initial_value);
            n(this.element).attr("data-rate-value") && (this.value = n(this.element).attr("data-rate-value"));
            i = this.value / this.settings.max_value * 100;
            typeof this.settings.symbols[this.settings.selected_symbol_type] == "string" && (t = this.settings.symbols[this.settings.selected_symbol_type], this.settings.symbols[this.settings.selected_symbol_type] = {}, this.settings.symbols[this.settings.selected_symbol_type].base = t, this.settings.symbols[this.settings.selected_symbol_type].selected = t, this.settings.symbols[this.settings.selected_symbol_type].hover = t);
            var r = this.addLayer("base-layer", 100, this.settings.symbols[this.settings.selected_symbol_type].base, !0),
                u = this.addLayer("select-layer", i, this.settings.symbols[this.settings.selected_symbol_type].selected, !0),
                f = this.addLayer("hover-layer", 0, this.settings.symbols[this.settings.selected_symbol_type].hover, !1);
            this.layers.base_layer = r;
            this.layers.select_layer = u;
            this.layers.hover_layer = f;
            n(this.element).on("mousemove", n.proxy(this.hover, this));
            n(this.element).on("click", n.proxy(this.select, this));
            n(this.element).on("mouseleave", n.proxy(this.mouseout, this));
            n(this.element).css({
                "-webkit-touch-callout": "none",
                "-webkit-user-select": "none",
                "-khtml-user-select": "none",
                "-moz-user-select": "none",
                "-ms-user-select": "none",
                "user-select": "none"
            });
            this.settings.hasOwnProperty("update_input_field_name") && this.settings.update_input_field_name.val(this.value)
        };
        t.prototype.addLayer = function(t, i, r, u) {
            for (var f, o = "<div>", e = 0; e < this.settings.max_value; e++) Array.isArray(r) ? (this.settings.convert_to_utf8 && (r[e] = String.fromCodePoint(r[e])), o += "<span>" + r[e] + "<\/span>") : (this.settings.convert_to_utf8 && (r = String.fromCodePoint(r)), o += "<span>" + r + "<\/span>");
            return o += "<\/div>", f = n(o).addClass("rate-" + t).appendTo(this.element), n(f).css({
                width: i + "%",
                height: n(f).children().eq(0).textHeight(),
                overflow: "hidden",
                position: "absolute",
                top: 0,
                display: u ? "block" : "none",
                "white-space": "nowrap"
            }), n(this.element).css({
                width: n(f).textWidth() + "px",
                height: n(f).height(),
                position: "relative",
                cursor: this.settings.cursor
            }), f
        };
        t.prototype.updateServer = function() {
            this.settings.url != undefined && n.ajax({
                url: this.settings.url,
                type: this.settings.ajax_method,
                data: n.extend({}, {
                    value: this.getValue()
                }, this.settings.additional_data),
                success: n.proxy(function(t) {
                    n(this.element).trigger("updateSuccess", [t])
                }, this),
                error: n.proxy(function(t, i, r) {
                    n(this.element).trigger("updateError", [t, i, r])
                }, this)
            })
        };
        t.prototype.getValue = function() {
            return this.value
        };
        t.prototype.hover = function(t) {
            var f = parseInt(n(this.element).css("padding-left").replace("px", "")),
                e = t.pageX - n(this.element).offset().left - f,
                i = this.toValue(e, !0),
                u, r;
            i != this.value && (this.raise_select_layer = !1);
            this.raise_select_layer || this.settings.readonly || (u = this.toWidth(i), this.layers.select_layer.css({
                display: "none"
            }), this.settings.only_select_one_symbol ? (r = Math.floor(i), this.layers.hover_layer.css({
                width: "100%",
                display: "block"
            }), this.layers.hover_layer.children("span").css({
                visibility: "hidden"
            }), this.layers.hover_layer.children("span").eq(r != 0 ? r - 1 : 0).css({
                visibility: "visible"
            })) : this.layers.hover_layer.css({
                width: u + "%",
                display: "block"
            }))
        };
        t.prototype.select = function(t) {
            if (!this.settings.readonly) {
                var f = this.getValue(),
                    i = parseInt(n(this.element).css("padding-left").replace("px", "")),
                    r = t.pageX - n(this.element).offset().left - i,
                    u = this.toWidth(this.toValue(r, !0));
                this.setValue(this.toValue(u));
                this.raise_select_layer = !0
            }
        };
        t.prototype.mouseout = function() {
            this.layers.hover_layer.css({
                display: "none"
            });
            this.layers.select_layer.css({
                display: "block"
            })
        };
        t.prototype.toWidth = function(n) {
            return n / this.settings.max_value * 100
        };
        t.prototype.toValue = function(n, t) {
            var i, r;
            return i = t ? n / this.layers.base_layer.textWidth() * this.settings.max_value : n / 100 * this.settings.max_value, r = i / this.settings.step_size, r - Math.floor(r) < 5e-5 && (i = Math.round(i / this.settings.step_size) * this.settings.step_size), i = Math.ceil(i / this.settings.step_size) * this.settings.step_size, i > this.settings.max_value ? this.settings.max_value : i
        };
        t.prototype.getElement = function(t, i) {
            return n(this.element).find(".rate-" + t + " span").eq(i - 1)
        };
        t.prototype.getLayers = function() {
            return this.layers
        };
        t.prototype.setFace = function(n, t) {
            this.set_faces[n] = t
        };
        t.prototype.setAdditionalData = function(n) {
            this.settings.additional_data = n
        };
        t.prototype.getAdditionalData = function() {
            return this.settings.additional_data
        };
        t.prototype.removeFace = function(n) {
            delete this.set_faces[n]
        };
        t.prototype.setValue = function(t) {
            var u, i, r, e;
            if (!this.settings.readonly) {
                if (t < 0 ? t = 0 : t > this.settings.max_value && (t = this.settings.max_value), u = this.getValue(), this.value = t, e = n(this.element).trigger("change", {
                    from: u,
                    to: this.value
                }), n(this.element).find(".rate-face").remove(), n(this.element).find("span").css({
                    visibility: "visible"
                }), i = Math.ceil(this.value), this.set_faces.hasOwnProperty(i)) {
                    var o = "<div>" + this.set_faces[i] + "<\/div>",
                        f = this.getElement("base-layer", i),
                        s = this.getElement("select-layer", i),
                        h = this.getElement("hover-layer", i),
                        c = f.textWidth() * (i - 1) + (f.textWidth() - n(o).textWidth()) / 2;
                    n(o).appendTo(this.element).css({
                        display: "inline-block",
                        position: "absolute",
                        left: c
                    }).addClass("rate-face");
                    f.css({
                        visibility: "hidden"
                    });
                    s.css({
                        visibility: "hidden"
                    });
                    h.css({
                        visibility: "hidden"
                    })
                }
                this.settings.only_select_one_symbol ? (r = this.toWidth(this.settings.max_value), this.layers.select_layer.css({
                    display: "block",
                    width: r + "%",
                    height: this.layers.base_layer.css("height")
                }), this.layers.hover_layer.css({
                    display: "none",
                    height: this.layers.base_layer.css("height")
                }), this.layers.select_layer.children("span").css({
                    visibility: "hidden"
                }), this.layers.select_layer.children("span").eq(i != 0 ? i - 1 : 0).css({
                    visibility: "visible"
                })) : (r = this.toWidth(this.value), this.layers.select_layer.css({
                    display: "block",
                    width: r + "%",
                    height: this.layers.base_layer.css("height")
                }), this.layers.hover_layer.css({
                    display: "none",
                    height: this.layers.base_layer.css("height")
                }));
                n(this.element).attr("data-rate-value", this.value);
                this.settings.change_once && (this.settings.readonly = !0);
                this.updateServer();
                e = n(this.element).trigger("afterChange", {
                    from: u,
                    to: this.value
                });
                this.settings.hasOwnProperty("update_input_field_name") && this.settings.update_input_field_name.val(this.value)
            }
        };
        t.prototype.increment = function() {
            this.setValue(this.getValue() + this.settings.step_size)
        };
        t.prototype.decrement = function() {
            this.setValue(this.getValue() - this.settings.step_size)
        };
        n.fn.rate.settings = {
            max_value: 5,
            step_size: .5,
            initial_value: 0,
            symbols: {
                utf8_star: {
                    base: "☆",
                    hover: "★",
                    selected: "★"
                },
                utf8_hexagon: {
                    base: "⬡",
                    hover: "⬢",
                    selected: "⬢"
                },
                hearts: "&hearts;",
                hhicon: '<i class="icon-star"><\/i>',
                fontawesome_beer: '<i class="fa fa-beer"><\/i>',
                fontawesome_star: {
                    base: '<i class="fa fa-star-o"><\/i>',
                    hover: '<i class="fa fa-star"><\/i>',
                    selected: '<i class="fa fa-star"><\/i>'
                },
                utf8_emoticons: {
                    base: [128549, 128531, 128530, 128516],
                    hover: [128549, 128531, 128530, 128516],
                    selected: [128549, 128531, 128530, 128516]
                }
            },
            selected_symbol_type: "utf8_star",
            convert_to_utf8: !1,
            cursor: "default",
            readonly: !1,
            change_once: !1,
            only_select_one_symbol: !1,
            ajax_method: "POST",
            additional_data: {}
        }
    }(jQuery, window),
    function(n, t) {
        typeof define == "function" && define.amd ? define(t) : typeof exports == "object" ? module.exports = t() : n.NProgress = t()
    }(this, function() {
        function f(n, t, i) {
            return n < t ? t : n > i ? i : n
        }

        function r(n) {
            return (-1 + n) * 100
        }

        function l(n, i, u) {
            var f;
            return f = t.positionUsing === "translate3d" ? {
                transform: "translate3d(" + r(n) + "%,0,0)"
            } : t.positionUsing === "translate" ? {
                transform: "translate(" + r(n) + "%,0)"
            } : {
                "margin-left": r(n) + "%"
            }, f.transition = "all " + i + "ms " + u, f
        }

        function e(n, t) {
            var i = typeof n == "string" ? n : u(n);
            return i.indexOf(" " + t + " ") >= 0
        }

        function o(n, t) {
            var i = u(n),
                r = i + t;
            e(i, t) || (n.className = r.substring(1))
        }

        function s(n, t) {
            var r = u(n),
                i;
            e(n, t) && (i = r.replace(" " + t + " ", " "), n.className = i.substring(1, i.length - 1))
        }

        function u(n) {
            return (" " + (n && n.className || "") + " ").replace(/\s+/gi, " ")
        }

        function h(n) {
            n && n.parentNode && n.parentNode.removeChild(n)
        }
        var n = {},
            t, c, i;
        return n.version = "0.2.0", t = n.settings = {
            minimum: .08,
            easing: "linear",
            positionUsing: "",
            speed: 200,
            trickle: !0,
            trickleSpeed: 200,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: "body",
            template: '<div class="bar" role="bar"><div class="peg"><\/div><\/div><div class="spinner" role="spinner"><div class="spinner-icon"><\/div><\/div>'
        }, n.configure = function(n) {
            var i, r;
            for (i in n) r = n[i], r !== undefined && n.hasOwnProperty(i) && (t[i] = r);
            return this
        }, n.status = null, n.set = function(r) {
            var o = n.isStarted();
            r = f(r, t.minimum, 1);
            n.status = r === 1 ? null : r;
            var u = n.render(!o),
                s = u.querySelector(t.barSelector),
                e = t.speed,
                h = t.easing;
            return u.offsetWidth, c(function(f) {
                t.positionUsing === "" && (t.positionUsing = n.getPositioningCSS());
                i(s, l(r, e, h));
                r === 1 ? (i(u, {
                    transition: "none",
                    opacity: 1
                }), u.offsetWidth, setTimeout(function() {
                    i(u, {
                        transition: "all " + e + "ms linear",
                        opacity: 0
                    });
                    setTimeout(function() {
                        n.remove();
                        f()
                    }, e)
                }, e)) : setTimeout(f, e)
            }), this
        }, n.isStarted = function() {
            return typeof n.status == "number"
        }, n.start = function() {
            n.status || n.set(0);
            var i = function() {
                setTimeout(function() {
                    n.status && (n.trickle(), i())
                }, t.trickleSpeed)
            };
            return t.trickle && i(), this
        }, n.done = function(t) {
            return !t && !n.status ? this : n.inc(.3 + .5 * Math.random()).set(1)
        }, n.inc = function(t) {
            var i = n.status;
            return i ? i > 1 ? void 0 : (typeof t != "number" && (t = i >= 0 && i < .2 ? .1 : i >= .2 && i < .5 ? .04 : i >= .5 && i < .8 ? .02 : i >= .8 && i < .99 ? .005 : 0), i = f(i + t, 0, .994), n.set(i)) : n.start()
        }, n.trickle = function() {
            return n.inc()
        },
            function() {
                var i = 0,
                    t = 0;
                n.promise = function(r) {
                    return !r || r.state() === "resolved" ? this : (t === 0 && n.start(), i++, t++, r.always(function() {
                        t--;
                        t === 0 ? (i = 0, n.done()) : n.set((i - t) / i)
                    }), this)
                }
            }(), n.render = function(u) {
            var f;
            if (n.isRendered()) return document.getElementById("nprogress");
            o(document.documentElement, "nprogress-busy");
            f = document.createElement("div");
            f.id = "nprogress";
            f.innerHTML = t.template;
            var c = f.querySelector(t.barSelector),
                l = u ? "-100" : r(n.status || 0),
                e = document.querySelector(t.parent),
                s;
            return i(c, {
                transition: "all 0 linear",
                transform: "translate3d(" + l + "%,0,0)"
            }), t.showSpinner || (s = f.querySelector(t.spinnerSelector), s && h(s)), e != document.body && o(e, "nprogress-custom-parent"), e.appendChild(f), f
        }, n.remove = function() {
            s(document.documentElement, "nprogress-busy");
            s(document.querySelector(t.parent), "nprogress-custom-parent");
            var n = document.getElementById("nprogress");
            n && h(n)
        }, n.isRendered = function() {
            return !!document.getElementById("nprogress")
        }, n.getPositioningCSS = function() {
            var n = document.body.style,
                t = "WebkitTransform" in n ? "Webkit" : "MozTransform" in n ? "Moz" : "msTransform" in n ? "ms" : "OTransform" in n ? "O" : "";
            return t + "Perspective" in n ? "translate3d" : t + "Transform" in n ? "translate" : "margin"
        }, c = function() {
            function t() {
                var i = n.shift();
                i && i(t)
            }
            var n = [];
            return function(i) {
                n.push(i);
                n.length == 1 && t()
            }
        }(), i = function() {
            function r(n) {
                return n.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(n, t) {
                    return t.toUpperCase()
                })
            }

            function u(n) {
                var u = document.body.style,
                    i, f, r;
                if (n in u) return n;
                for (i = t.length, f = n.charAt(0).toUpperCase() + n.slice(1); i--;)
                    if (r = t[i] + f, r in u) return r;
                return n
            }

            function f(n) {
                return n = r(n), i[n] || (i[n] = u(n))
            }

            function n(n, t, i) {
                t = f(t);
                n.style[t] = i
            }
            var t = ["Webkit", "O", "Moz", "ms"],
                i = {};
            return function(t, i) {
                var u = arguments,
                    r, f;
                if (u.length == 2)
                    for (r in i) f = i[r], f !== undefined && i.hasOwnProperty(r) && n(t, r, f);
                else n(t, u[1], u[2])
            }
        }(), n
    });
$(document).ready(function() {
    $(".equaHeight").each(function(n, t) {
        var i = $(this).attr("data-obj"),
            r;
        i != "" && i != undefined ? (r = Math.max.apply(null, $(t).find(i).map(function() {
            return $(this).height()
        }).get()), $(t).find(i).height(r)) : $(t).children().ready(function() {
            setTimeout(function() {
                var n = Math.max.apply(null, $(t).children().map(function() {
                    return $(this).height()
                }).get());
                $(t).children().height(n)
            }, 450)
        })
    });
    $("a#top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 500)
    });
    $(".options .item span label").each(function() {
        var i = $(this).width(),
            n = $("<span>" + $(this).text() + "<\/span>"),
            t;
        n.css("font-size", $(this).css("font-size")).hide();
        n.prependTo("body");
        t = n.width();
        n.remove();
        t >= i && $(this).addClass("yoyo")
    });
    $(".timer").each(function() {
        var n = $(this).attr("id"),
            t = $(this).attr("data-start"),
            i = $(this).attr("data-end");
        timer(n, t, i)
    })
});
window.onscroll = function() {
    scrollTopFunction()
};
setProductContentHeighWithSpecs = function() {
    $(".product-spect-img img").ready(function() {
        specsHeight = $(".product-specs").height() - 56;
        $("#productContent").attr("data-height", specsHeight);
        $("#productContent").height(specsHeight)
    });
    $("#viewMoreContent").click(function() {
        event.preventDefault();
        this.blur();
        var n = $(this).text() == "Thu gọn" ? "Xem thêm" : "Thu gọn";
        $(this).text(n);
        n == "Thu gọn" ? $("#productContent").css({
            height: "auto",
            overflow: "auto"
        }) : $("#productContent").css({
            height: specsHeight,
            overflow: "hidden"
        })
    })
};
$.fn.serializeObject = function() {
    var n = {},
        t = this.serializeArray();
    return $.each(t, function() {
        n[this.name] ? (n[this.name].push || (n[this.name] = [n[this.name]]), n[this.name].push(this.value || "")) : n[this.name] = this.value || ""
    }), n
};
jQuery.fn.extend({
    autoHeight: function() {
        function n(n) {
            return jQuery(n).css({
                height: "auto",
                "overflow-y": "hidden"
            }).height(n.scrollHeight - 40)
        }
        return this.each(function() {
            n(this).on("input", function() {
                n(this)
            })
        })
    }
});
// $(function() {
//     var i = jQuery.ajax,
//         n, t;
//     jQuery.ajaxSetup({
//         timeout: 6e4
//     });
//     jQuery.ajax = function() {
//         return NProgress.start(), i.apply(this, arguments).done(function() {
//             NProgress.done()
//         }).fail(function() {
//             $.toast({
//                 text: "Có lỗi rảy ra, vui lòng bấm F5 để thử lại"
//             });
//             NProgress.done()
//         })
//     };
//     n = jQuery.get;
//     jQuery.get = function() {
//         return NProgress.start(), n.apply(this, arguments).done(function() {
//             NProgress.done()
//         }).fail(function() {
//             $.toast({
//                 text: "Có lỗi rảy ra, vui lòng bấm F5 để thử lại"
//             });
//             NProgress.done()
//         })
//     };
//     t = jQuery.post;
//     jQuery.post = function() {
//         return NProgress.start(), t.apply(this, arguments).done(function() {
//             NProgress.done()
//         }).fail(function() {
//             $.toast({
//                 text: "Có lỗi rảy ra, vui lòng bấm F5 để thử lại"
//             });
//             NProgress.done()
//         })
//     }
// });
jQuery.event.special.touchstart = {
    setup: function(n, t, i) {
        t.includes("noPreventDefault") ? this.addEventListener("touchstart", i, {
            passive: !1
        }) : this.addEventListener("touchstart", i, {
            passive: !0
        })
    }
};
inStock = !1;
$(document).ready(function() {
    $("#kwd").autocomplete({
        serviceUrl: "/api/search",
        deferRequestBy: 200,
        maxHeight: 450,
        formatResult: autoComplateFormat,
        showLink: "/tim-kiem?kwd="
    });
    $('a[href^="#"]').on("click", function(n) {
        var t = $(this.getAttribute("href"));
        t.length && (n.preventDefault(), $("html, body").stop().animate({
            scrollTop: t.offset().top - 10
        }, 1e3))
    });
    $("#login-modal").click(function(n) {
        n.preventDefault();
        this.blur();
        $.get(this.href, function(n) {
            $(n).appendTo("body").modal({
                escapeClose: !1,
                clickClose: !1,
                closeClass: "icon-minutes",
                closeText: " "
            })
        })
    });
    $(".ajax-modal").click(function(n) {
        n.preventDefault();
        this.blur();
        $("#popup-modal").css({
            width: ""
        });
        $("#popup-modal").css({
            padding: ""
        });
        var t = $(this).attr("data-width") != null ? $(this).attr("data-width") : "",
            i = $(this).attr("data-padding") != null ? $(this).attr("data-padding") : "";
        $.get(this.href, function(n) {
            $("#popup-modal").html(n).css({
                width: t
            }).css({
                padding: i
            }).modal({
                closeClass: "icon-minutes",
                closeText: " "
            })
        })
    });
    $("header nav").scrollToFixed({
        preFixed: function() {
            $(this).css("color", "blue")
        },
        postFixed: function() {
            $(this).css("color", "")
        }
    });
    $("textarea").autoHeight();
    $("#reviews").length > 0 && init_Review();
    $("#comments").length > 0 && init_Comment();
    // AddCart();
    // quickSub();
    btnInstallment()
});
testimonial_init = function() {
    $(".testimonial-slider").owlCarousel({
        items: 2,
        nav: !0,
        itemClass: "testimonial-item",
        loop: !1,
        autoplay: !0,
        autoplayHoverPause: !0
    })
};
sliderContent_init = function() {
    var i = $("#sliderContent").length,
        t, n;
    if (i) {
        t = {
            $AutoPlay: !0,
            $Idle: 6e5,
            $DragOrientation: 3,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $ChanceToShow: 2,
                $AutoCenter: 0,
                $Steps: 1
            },
            $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
            }
        };
        n = new $JssorSlider$("sliderContent", t);

        function i() {
            var t = n.$Elmt.parentNode.clientWidth;
            t ? (t = Math.min(t, 1200), n.$ScaleWidth(t)) : window.setTimeout(i, 30)
        }
        i();
        $Jssor$.$AddEvent(window, "load", i);
        $Jssor$.$AddEvent(window, "resize", i);
        $Jssor$.$AddEvent(window, "orientationchange", i)
    }
};
imagePreview_init = function() {
    // function t() {
    //     var i = n.$Elmt.parentNode.clientWidth;
    //     i ? (i = Math.min(i, 810), n.$ScaleWidth(i)) : window.setTimeout(t, 30)
    // }
    var r = {
            $AutoPlay: !0,
            $SlideDuration: 500,
            $Idle: 5e3,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
            },
            $PauseOnHover: 1,
            $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $SpacingX: 10,
                $SpacingY: 5,
                $ArrowNavigatorOptions: {
                    $Class: $JssorArrowNavigator$
                }
            }
        },
        n = new $JssorSlider$("imagePreview", r);
    //     i = $("#colorOptions div.selected").attr("data-idx");
    // i && n.$GoTo(i);
    $("#versionOption").click(function() {
        $(this).find("a").click()
    });
    $(".slider-t-l").click(function() {
        n.$Prev()
    });
    $(".slider-t-r").click(function() {
        n.$Next()
    });
    // $("#colorOptions > div").click(function() {
    //     var i, r;
    //     $("#colorOptions .selected").removeClass("selected");
    //     $(this).addClass("selected");
    //     // i = $(this).attr("data-sku");
    //     // $(".btnbuy").attr("data-sku", i);
    //     // $(".check-stock .city ul li.instock").not(".selected").removeClass("instock").addClass("outstock");
    //     // $(".check-stock .city ul li[data-sku*='" + i + "']").removeClass("outstock").addClass("instock");
    //     // $(".check-stock .store ul li").removeClass("instock").addClass("outstock");
    //     // $(".check-stock .store ul li[data-sku*='" + i + "']").removeClass("outstock").addClass("instock");
    //     // outStockMessage();
    //     // r = $(this).attr("data-idx");
    //     // n.$GoTo(r);
    //     // n.$Pause();
    //     // var e = $(this).attr("data-bestPrice"),
    //     //     u = $(this).attr("data-lastPrice"),
    //     //     f = $(this).attr("data-pricenote"),
    //     //     o = $(this).attr("data-hotsale"),
    //     //     t = "<strong>" + e + "<\/strong>";
    //     // u != "" && (t += " <i><strike>" + u + "<\/strike><\/i>");
    //     // t += " <i> | Giá đã bao gồm 10% VAT<\/i>";
    //     // t += o;
    //     // f != "" && (t += "<i>" + f + "");
    //     // $(".current-product-price").html(t)
    // });
    t();
    $Jssor$.$AddEvent(window, "load", t);
    $Jssor$.$AddEvent(window, "resize", t);
    $Jssor$.$AddEvent(window, "orientationchange", t);
    $JssorSlider$.$EVT_STATE_CHANGE
};
$(function() {
    $("form.login").on("submit", function(n) {
        n.preventDefault();
        var t = $(this).serializeObject();
        console.log(t);
        $(".datahere").html(t)
    })
})
$(".detail_config_button_cauhinh").click(function() {
    event.preventDefault();
    $('.detail_config_cauhinh').toggleClass('is-visible');
});
$(".detail_config_button_1").click(function() {
    event.preventDefault();
    $('.detail_config_1').toggleClass('is-visible');
});

$(".buy_now_button").click(function() {
    event.preventDefault();
    $('.buy_now').toggleClass('is-visible');
});
$('body').on('click','.btn-favourite-login',function(e){
    e.preventDefault();
    // toastr.success('đâsdasd');
    // toastr.success(data.message);
    toastr.error('Bạn cần đăng nhập để thực hiện');

});

// toast message fv
$(document).ready(function(){
    const hostname = window.location.pathname;
    const media = "https://demo.muasammoingay.net/";
    function IsJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    var page = 1;
    $("body").on('click', '.nav-search-in-value-load-more', function(e) {
        e.preventDefault();
        var q = $('#searchFrom').val();
        page++;
        search(q,page);
    });

    ;(function($){
        $.fn.extend({
            donetyping: function(callback,timeout){
                timeout = timeout || 1e3; // 1 second default timeout
                var timeoutReference,
                    doneTyping = function(el){
                        if (!timeoutReference) return;
                        timeoutReference = null;
                        callback.call(el);
                    };
                return this.each(function(i,el){
                    var $el = $(el);
                    // Chrome Fix (Use keyup over keypress to detect backspace)
                    // thank you @palerdot
                    $el.is(':input') && $el.on('keyup keypress paste',function(e){
                        // This catches the backspace and DEL button in chrome, but also prevents
                        // the event from triggering too preemptively. Without this line,
                        // using tab/shift+tab will make the focused element fire the callback.
                        if (e.type=='keyup' && !([8,46].includes(e.keyCode))){return;}

                        // Check if timeout has been set. If it has, "reset" the clock and
                        // start over again.
                        if (timeoutReference) clearTimeout(timeoutReference);
                        timeoutReference = setTimeout(function(){
                            // if we made it here, our timeout has elapsed. Fire the
                            // callback
                            doneTyping(el);
                        }, timeout);
                    }).on('blur',function(){
                        // If we can, fire the event since we're leaving the field
                        doneTyping(el);
                    });
                });
            }
        });
    })(jQuery);

    $('#searchFrom').donetyping(function() {

        var q = $(this).val();
        if(q == null || q === "" || q === undefined){
            $('.hihi').css('display','none');
            return false;
        }
        search(q);
    }, 300);
    function search(q, append = false) {
        $.ajax({
            type: 'GET',
            url: '/tim-kiem',
            data: {
                q:q
            },
            beforeSend: function (xhr) {

            },
            success: (data) => {
                let html = "";
                let html1 = "";
                console.log(data)
                if(data.status == 1){
                    if(data.data.length === 0){

                        html += '<div style="color:#f63;padding: 20px;text-align: center;font-weight: 700;justify-content: center" class="search-item" id="nav-search_none">';
                        html += 'Không tìm thấy sản phẩm';
                        html += '</div>';

                        $('#result-search').html(html);
                        $('.hihi').css('display','block');
                        // $('.nav-search-in-value-load-more').css('display','none');

                    }
                    else{
                        $.each(data.data,function(key,value){
                            console.log(value.title)
                            html += '<div class="search-item">';
                            html += '<div class="img">';

                            html += '<img src="/storage'+value.image+'" alt="">';
                            // if(jQuery.parseJSON(value.image) && jQuery.parseJSON(value.image)){
                            //     html += '<img src="'+media+jQuery.parseJSON(value.image)+'" alt="">';
                            // }
                            html += '</div>';
                            html += '<div class="info">';
                            html += '<h2><a href="';
                            if(value.url != null ){
                                html += value.url;
                            }else{
                                html += value.slug;
                            }
                            html += '">';
                            html += value.title;
                            html += '</a></h2>';
                            html += '<h3>' +value.price+'</h3>';

                            html += '</div>';
                            html += '</div>';
                        });
                        $('.hihi').css('display','block');

                        $('#result-search').append(html);

                        // if(data.data.current_page == 1){
                        //
                        //     $('#result-search').html(html);
                        //     if(data.appen === 0){
                        //         $('.nav-search-in-value-load-more').css('display','none');
                        //     }
                        //     else{
                        //         $('.nav-search-in-value-load-more').css('display','block');
                        //     }
                        // }
                        // else{
                        //     console.log(333)
                        //     $('#result-search').append(html);
                        // }
                        // $('.hihi').css('display','block');
                    }
                }
                else{
                    console.log(111)
                    $('.hihi').css('display','none');
                }
            },
            error: function (data) {

            },
            complete: function (data) {

            }
        });
    }

    $('#btnMinutes').click(function () {
        if ($(this).prev().val() < 3) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('#btnPlus').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });
    var input = $('.quantity'),
        minValue =  parseInt(input.attr('min')),
        maxValue =  parseInt(input.attr('max'));


    $('.plus').on('click', function () {
        var inputValue = input.val();
        if (inputValue < maxValue) {
            input.val(parseInt(inputValue) + 1);
        }
    });

    $('.minus').on('click', function () {
        var inputValue = input.val();
        if (inputValue < maxValue) {
            input.val(parseInt(inputValue) - 1);
        }
    });



})
