function Public(option) {
    this._init(option);
}
Public.prototype = {
    constructor : Public,
    _init: function(option) {
        option = option || {};
        this.form = option.form || 'user';
    },

    // 请求方法
    getData: function(my) {
        const self = this;
        let obj;
        $.ajax({
            url: '../page.json',
            type: 'GET',
            dataType: 'json',
            async: false,
            success: function (data) {
                if(data.hasOwnProperty(self.form)) {
                    const key = self.form;
                    obj = data[key];
                }else {
                    obj = '错误,没有找到';
                }

            },
            error: function(eee) {
                console.log(eee);
            }
        });
        return obj;
    },
    getUser: function() {
        const users = JSON.parse(localStorage.getItem('users'));
        return users;
    }
}