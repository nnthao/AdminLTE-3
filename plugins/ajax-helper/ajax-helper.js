var ajaxHelper = {
    name: "Demo Object",
    
    postData: function(url, data, successCallback, errorCallback) {
        $.ajax({
            url: url,
            data: data,
            processData: false,
            contentType: false,
            type: "POST",
            success: function (data) {
                successCallback(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                errorCallback(textStatus);
            }
        });
    },
    
    getById: function(url, successCallback, errorCallback) {
        $.ajax({
            url: url,
            processData: false,
            contentType: false,
            type: "GET",
            success: function (data) {
                successCallback(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                errorCallback(textStatus);
            }
        });
    }
};