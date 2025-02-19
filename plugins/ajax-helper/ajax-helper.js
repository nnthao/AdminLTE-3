const ajaxHelper = {
    name: "Demo Object",
    
    sayHello: function() {
        console.log("Xin chào! Đây là " + this.name);
        this.sayGoodbye(); // Gọi phương thức khác trong object
    },
    
    sayGoodbye: function() {
        console.log("Tạm biệt từ " + this.name);
    }
};