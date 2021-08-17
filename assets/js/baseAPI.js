$.ajaxPrefilter(function(options) {
    options.url = "http://www.liulongbin.top:3008" + options.url
    options.header = localStorage.getItem("token")


    options.complete = function(res) {
        if (res.responseJSON.code !== 0) {
            location.href = "/login.html"
        }
    }
})