new Vue({
    el: "#app",
    data: {
        user: {
            id: "",
            username: "",
            password: "",
            email: "",
            age: "",
            sex: ""
        },
        userList: []
    },
    methods: {
        findAll: function () {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.get('/user/findAll.do')
                .then(function (response) {
                    _this.userList = response.data;//响应数据给userList赋值
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error)
                })
        },
        findById: function (userid) {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.get('/user/findById.do', {params: {id: userid}})
                .then(function (response) {
                    _this.user = response.data;//响应数据给userList赋值
                    $("#myModal").modal("show")
                })
                .catch(function (error) {
                    console.log(error)
                })
        },
        update: function (user) {
            //在当前方法中定义一个变量，表明是vue对象
            var _this = this;
            axios.post('/user/updateUser.do', _this.user)
                .then(function (response) {
                    _this.findAll();
                })
                .catch(function (error) {
                    console.log(error)
                })
        },
        delete: function (userid) {}
    },
    created() {//当页面加载时触发请求，查询所有
        this.findAll();
    }
});