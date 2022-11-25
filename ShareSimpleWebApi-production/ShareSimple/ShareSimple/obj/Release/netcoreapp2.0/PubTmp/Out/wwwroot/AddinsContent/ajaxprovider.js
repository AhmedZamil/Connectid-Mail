var APIConstant = {
    UserByEmail: 'api/user/email',
    AuthResponse: 'api/Authorize',
    authcode: 'api/Authorize/Code',
    addcompany: 'api/company',
    adduser: 'api/user',
    fileuploadapi: 'api/file/upload',
    textuploadapi: 'api/file/uploadText',
    deletefile: 'api/file',
    getsharedatalink: 'api/file/link',
    updatereceiver: 'api/file/receivers',
    updatepostdatareceiver: 'api/postdata/receivers',
    postdata: 'api/postdata',
    postdatalink: 'api/postdata/link',
    userfolder: 'api/postdata/user',
    updateusertoken: 'api/user/updatetoken',
    getLanguage: 'api/file/getlanguage',
    appConfig: 'api/values/Config'
};
var ajaxprovider = {
    call: function (method, action, param, userid, token) {
        var emailSyncServiceUrl = webServiceUrl + action;
        var ajaxobj = {
            url: emailSyncServiceUrl,
            type: method,
            headers: { "userid": userid, "token": token },
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            success: function (data) {

            },
            error: function (data) {

            }
        };
        if (param !== null) {
            ajaxobj.data = JSON.stringify(param);
        }
        return $.ajax(ajaxobj);
    }
};

