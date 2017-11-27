$(function () {
    // $.post('../core/header.html',function() {
    //     $('body').html(data);
    // });
    // $.ajax({
    //     type: "GET",
    //     url: "../page.json",
    //     data: {username: 'hhc'},
    //     dataType: 'json',
    //     success:function(msg) {
    //         console.log(msg);
    //     }
    // })
    // $.getJSON('../page.json',function(data) {
    //     console.log(data);
    // })

    // $.ajax({
    //     url: '../page.json',
    //     type: 'GET',
    //     dataType: 'json',
    //     // data:{"user": "phone"},
    //     success: function (data) {
    //         console.log(data);
    //     },
    //     error: function(eee) {
    //         console.log(eee);
    //     }
    // });
    const my = new Public();
    const wo = my.getUser();
    console.log(wo);
})