// JavaScript source code
(function ($) {
    $(document).ready(function () {
        loadUsers();
    });
})(jQuery);

function loadUsers() {
    var URL = "https://snakeriverbowl.azurewebsites.net/api/List?code=FaHto17mycUpqO/iCLuZHqRdVw8xrUCsD5I8K44a3UzUfIIajMdKdA==";
    $.ajax({
        url: URL,
        cache: false,
        pageType: "html",
        type: "GET",

        success: function (data) {
            
            var userhtml = '<ul>';
            $.each(data, function (index, value) {
                userhtml += '<li class="nav-user">' + value.Email + "</li>"
            });
            userhtml += '</ul>'
            $("#container #left").html(userhtml);
            console.log(userhtml);


            $(".nav-user").each(function(){
                console.log($(this).html());
                $(this).click(function () {
                    console.log($(this).html());
                    loadUser($(this).html());
                });
            });
        },
        error: function (jqXHR, exception) {
            console.log("There was an error trying to load users: ", jqXHR.responseText);
        }
    });
}


function loadUser(key) {
    var URL = "https://snakeriverbowl.azurewebsites.net/api/Get?code=FaHto17mycUpqO/iCLuZHqRdVw8xrUCsD5I8K44a3UzUfIIajMdKdA==&key=" + key;
    $.ajax({
        url: URL,
        cache: false,
        pageType: "html",
        type: "GET",

        success: function (data) {
            console.log(data);
            $("#name").val(data.Data.Name);
            $("#email").val(data.Email);
            $("#city").val(data.Data.City);
        },
        error: function (jqXHR, exception) {
            console.log("There was an error trying to load user: " + key, jqXHR.responseText);
        }
    });
}