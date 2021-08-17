$(function() {
    $(".btn_login").on("click", function() {
        $("#login").hide()
        $("#reg").show()
    })
    $(".btn_reg").on("click", function() {
        $("#login").show()
        $("#reg").hide()
    })

    var form = layui.form;
    var layer = layui.layer;


    //表单验证
    form.verify({
        username: function(value) { //value：表单的值、item：表单的DOM对象
            if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
                return '用户名不能有特殊字符';
            }
        },
        pass: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        samepwd: function(value) {
            const pwd = $("#reg [name=password]").val();
            if (pwd !== value) {
                return '两次密码输入不一致！';
            }
        }
    })


    //注册发送ajax数据请求
    $(".btn_reg").on("submit", function(e) {
        e.preventDefault();
        $.ajax({
            method: "post",
            url: "",
            data: $(this).serialize(),
            success: function(res) {
                if (res.code !== 0) {
                    return layer.msg("注册失败！")
                }
                $(".btn_reg").click()
            }
        })
    })


    //发送登录请求数据
    $(".btn_login").on("submit", function(e) {
        e.preventDefault();
        $.ajax({
            method: "post",
            url: "",
            data: $(this).serialize(),
            success: function(res) {
                if (res.code !== 0) {
                    return layer.msg("注册失败！")
                }
                localStorage.setItem("token", res.data)
                location.href = "/index.html"
            }
        })
    })

})