var _mailBox, _mailItem, UserEmail = '', UserName = '', UserLanguage = '', webServiceUrl = '', userAccessId = '', userAccessToken = '';
var coderesponse, usercompany, localized, isNewCompany = false;
var files = [], sharedataId = '';
var fileId = 0, showLink, istocc = false, toEmails = [], ccEmails = [], smsRecipients = [], istoequal = true, isccequal = true, smsAuthenticationEnabled = false;
var NeedToReadReceipient = false;
var otplink = '', id;
var requestcount = 0, insertenablecount = 0;
var postdata = [];
var stopdrag = false;
var isrequested = false;
var modal = null;
var phonePattern = /^[0-9]{5,15}$/;
var trialPeriod = 14;
var importantLinks = {};

Office.onReady(function () {
    $(document).ready(function () {
        webServiceUrl = window.location.protocol + "//" + window.location.host + "/";
        otplink = webServiceUrl + '#/otp';
        _mailBox = Office.context.mailbox;
        if (_mailBox) {
            _mailItem = Office.context.mailbox.item;
            UserEmail = _mailBox.userProfile.emailAddress;
            UserName = _mailBox.userProfile.displayName;
            UserLanguage = Office.context.displayLanguage ? Office.context.displayLanguage : 'en-US';
            LoadValuesFromSettings();
            LoadLanguageResources(UserLanguage);
            ShowLoading('wait');
            setTimeout(CheckRegistration, 2000);

            $('.dropzone').filedrop({
                maxfiles: 1,
                callback: function (fileEncryptedData) {
                }
            });
        }
    });
});

function getLanguage(key) {
    return localized[key] ? localized[key] : key;
}

function CompleteAuthentication(code) {
    var requestobj = {
        code: code,
        redirecturl: webServiceUrl + 'authresponse.html',
        email: UserEmail,
        language: UserLanguage
    };
    ShowLoading('wait');
    ajaxprovider.call('POST', APIConstant.authcode, requestobj, userAccessId, userAccessToken).then(function (data) {
        ShowLoading('default');
        coderesponse = data;
        if (coderesponse.user === null) {
            LoadView('usermissmatchtmpl', {});
            if (coderesponse.message && coderesponse.message !== '') {
                $('#spheading').html(coderesponse.message);
            }
        }
        else {
            if (coderesponse.user.id === "00000000-0000-0000-0000-000000000000") {
                trialPeriod = coderesponse.trialPeriod;
                ShowResgistrationWindow();
            } else if (!coderesponse.user.company.isActive) {
                LoadView('companyInactiveView', {});
            }
            else {
                userAccessToken = coderesponse.user.shareSimpleToken;
                userAccessId = coderesponse.user.id;
                data.company = { id: data.companyId };
                LoadView('actionList', {});
                ShowMyFolderButton(data.user);
                ShowMyAdminButton(data.user);
                $(".logoutblock").show();
                $(".logoutblock span").text(getLanguage('Sign out'));
            }
        }



    }, fnerr);
}

function ShowLoading(action) {
    if (action === 'wait') {
        $('#divLoading').show();
    }
    else {
        $('#divLoading').hide();
    }
}

function OpenAuthenticationWindow() {
    $.ajax({
        url: 'api/values/clientId',
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (clientId) {
            var redirecUrl = '&redirect_uri=' + webServiceUrl + 'authresponse.html&response_mode=query';
            var authlink = 'https://login.microsoftonline.com/common/oauth2/authorize?client_id=' + clientId + '&prompt=login&response_type=code&state=' + UserEmail;
            authlink = authlink + redirecUrl;
            Office.context.ui.displayDialogAsync(window.location.origin + '/dialogOpener.html?client_id=' + clientId + '&state=' + UserEmail, { width: 30, height: 80, displayInIframe: false }, function (asyncResult) {
                if (asyncResult.status !== Office.AsyncResultStatus.Succeeded) {
                    //callback(false);
                }
                // Get the dialog and register event handlers.
                var dialog = asyncResult.value;
                dialog.addEventHandler(Office.EventType.DialogMessageReceived, function (asyncResult) {
                    if (asyncResult) {
                        dialog.close();
                        GetCode(asyncResult.message);
                        return;
                    }
                    if (asyncResult.type !== Office.EventType.DialogMessageReceived) {
                        //callback(false);
                    }
                });
            });
        },
        error: function (data) {

        }
    });
}

function CheckRegistration() {
    NeedToReadReceipient = false;
    var fnsuccess = function (data) {
        if (!localized) {
            LoadLanguageResources(UserLanguage);
        }
        if (data) {
            loadDocument = true;
            if (data.company) {
                usercompany = data.company;
            }
            if (usercompany && usercompany.isActive === false) {
                LoadView("companyInactiveView", {});
                ShowLoading('default');
            }
            else if (data.email) {
                ShowLoading('default');
                userAccessId = data.id;
                userAccessToken = data.shareSimpleToken;
                if (data.isActive) {
                    if (userAccessToken === '' || userAccessToken === null) {
                        ShowWelcomepage();
                    }
                    else {
                        $('.logoutblock').show();
                        $(".logoutblock span").text(getLanguage('Sign out'));
                        LoadView('actionList', {});
                        ShowMyFolderButton(data);
                        ShowMyAdminButton(data);
                    }

                } else {
                    LoadView('inactiveview', {});
                }

            } else {
                ShowLoading('default');
                ShowWelcomepage();
            }
        }
        else {
            ShowLoading('default');
            ShowWelcomepage();
        }
    };

    ajaxprovider.call('GET', APIConstant.UserByEmail + "/" + UserEmail, null, userAccessId, userAccessToken).then(fnsuccess, fnerr);
}

function OpenAdminPage(obj) {
    var rel = $(obj).attr('rel');
    var openUrl = webServiceUrl + "authresponse.html?adminredirect=" + encodeURIComponent(rel);
    var theUrl = "";
    if (Office && Office.context && Office.context.platform && Office.context.platform.toLowerCase() === 'pc') {
        theUrl = "https://mail.connectid.io/redirect.html?url=" + encodeURIComponent(openUrl);
    }
    else {
        theUrl = openUrl;
    }
    var opt = 'toolbar=no,location=no,menubar=no,scrollbars=yes,resizable=no,status=0';
    var height = 800;
    var width = 600;
    if (window && window.outerHeight)
        height = parseInt(window.outerHeight * 0.8);
    if (window && window.outerWidth)
        width = parseInt(window.outerWidth * 0.8);
    opt += ',height=' + height + ',width=' + width;
    window.open(theUrl, 'ConnectidMail', opt);
}

function fnerr(err) {
    console.log('Error occured', err);
}

function ShowWelcomepage() {
    NeedToReadReceipient = false;
    LoadView('welcomeForRegistration', {});
}

function ShowResgistrationWindow() {
    NeedToReadReceipient = false;
    if (usercompany) {
        userAccessToken = coderesponse.user.shareSimpleToken;
        var expiresOn = coderesponse.authenticationResult.expiresOn;
        var extendedExpiresOn = coderesponse.authenticationResult.extendedExpiresOn;
        var requestdata = {
            name: UserName,
            type: false,
            isActive: false,
            email: UserEmail,
            companyId: usercompany.id,
            accessToken: userAccessToken,
            expiresOn: expiresOn,
            extendedExpiresOn: extendedExpiresOn,
            language: UserLanguage
        };
        addnewuser(requestdata);
        LoadView('inactiveview', {});
    }
    else {
        var signUpHeader = String.format(getLanguage("Signup for a {0}-day trial"), trialPeriod);
        LoadView('registrationPage', { signUpHeader: signUpHeader });
        var companyname = coderesponse.graphOrganization !== null ? coderesponse.graphOrganization.displayName : '';
        $('#txtcompany').val(companyname);
        $.each(country_list, function (key, value) {
            $('#ddlCountryList').append($("<option></option>").attr("value", value).text(value));
        });

        initializeAutoComplete(2000);
    }


}

function LoadView(varviewname, data) {
    $('#' + varviewname).tmpl(data).appendTo($('#viewbody').empty());
}

function registrationSubmit() {
    var domain = UserEmail.substring(UserEmail.lastIndexOf("@") + 1);
    var companydata = {
        name: $('#txtcompany').val(),
        webSite: $('#txtwebSite').val(),
        countryCode: $('#txtCountryCode').val(),
        phone: $('#txtphone').val(),
        address: $('#txtaddress').val(),
        packageId: '',
        domain: domain,
        city: $('#txtcity').val(),
        postalCode: $('#txtpostalCode').val(),
        country: $('#ddlCountryList').val(),
        promotionCode: $('#txtPromotionCode').val(),
        user: [{
            name: UserName,
            type: true,
            isActive: true,
            isContactPerson: true,
            email: UserEmail,
            accessToken: coderesponse.authenticationResult.accessToken,
            expiresOn: coderesponse.authenticationResult.expiresOn,
            extendedExpiresOn: coderesponse.authenticationResult.extendedExpiresOn,
            language: UserLanguage
        }]
    };
    $("#regConfirmButton input[type=button]").prop('disabled', true);
    $('img.loadingimage').show();
    if (companydata.name === '' || companydata.countryCode === '' || companydata.phone === '' || companydata.address === '' || companydata.domain === ''
        || companydata.city === '' || companydata.postalCode === '' || companydata.country === '') {
        showmessage(getLanguage('Please fill up all required fields'));
        $("#regConfirmButton input[type=button]").prop('disabled', false);
        $('img.loadingimage').hide();
        return;
    }
    ajaxprovider.call('POST', APIConstant.addcompany, companydata, userAccessId, userAccessToken).then(function (data) {
        if (data && data.id) {
            isNewCompany = true;
            showmessage("");
            userAccessId = data.user[0].id;
            userAccessToken = data.user[0].shareSimpleToken;

            if (data.user && data.user.length > 0) {
                var user = data.user[0];
                userAccessId = user.id;
                $("#regConfirmButton input[type=button]").prop('disabled', false);
                $('img.loadingimage').hide();
                user.company = { id: data.id };
                ShowMyFolderButton(user);
                ShowMyAdminButton(user);
            }
            var companyRegistrationSuccessMessage1 = String.format(getLanguage("Your {0}-day trial period has started. You will be able to experience all the benefits of Connectid Mail during your trial period."), trialPeriod);
            LoadView('companyRegistrationSuccessPage', { companyRegistrationSuccessMessage1: companyRegistrationSuccessMessage1 });
            $(".logoutblock").show();
            $(".logoutblock span").text(getLanguage('Sign out'));
        }
        else {
            //Show error message
        }

    }, fnerr);
}

function addnewuser(requestdata) {
    ShowLoading('wait');
    ajaxprovider.call('POST', APIConstant.adduser, requestdata, userAccessId, userAccessToken).then(function (data) {
        //storage.set('coderesponse', JSON.stringify(data));
        ShowLoading('default');
        if (requestdata.isActive) {
            userAccessId = data.id;
            $("#regConfirmButton input[type=button]").prop('disabled', false);
            $('img.loadingimage').hide();
            //storage.remove('user', null);
            //data.company = company;
            //storage.set('user', data);
            data.company = { id: requestdata.companyId };
            ShowMyFolderButton(data);
            ShowMyAdminButton(data);
            if (isNewCompany) {
                var companyRegistrationSuccessMessage1 = String.format(getLanguage("Your {0}-day trial period has started. You will be able to experience all the benefits of Connectid Mail during your trial period."), trialPeriod);
                LoadView('companyRegistrationSuccessPage', { companyRegistrationSuccessMessage1: companyRegistrationSuccessMessage1 });
            } else {
                LoadView('actionList', {});
            }
            $(".logoutblock").show();
            $(".logoutblock span").text(getLanguage('Sign out'));

        } else {
            LoadView('inactiveview', {});
        }

    }, fnerr);
}

function ShowMyFolderButton(user) {
    if (user.isActive && user.company.id) {
        var myfolderUrl = webServiceUrl + '#/admin/' + user.company.id  + '/root/' + user.id;
        userAccessToken = user.shareSimpleToken;
        $("#myfolderButton").show();
        $("#myfolderButton span:first").text(getLanguage('My folder'));
        //$("#myfolderButton a").attr("href", myfolderUrl);
        $("#myfolderButton").attr("rel", myfolderUrl);
        ajaxprovider.call('GET', APIConstant.userfolder + "/" + user.id, null, userAccessId, userAccessToken).then(function (data) {
            //storage.set('coderesponse', JSON.stringify(data));
            var alertcount = 0;
            //data.forEach(element => {
            //    var days = element.postDataFiles[0] && dateDiff(element.postDataFiles[0].expDate);
            //    if (days && (days >= 0) && (days < 6) && (element.noOfFiles > 0)) {
            //        alertcount = alertcount + element.noOfFiles;
            //    }
            //});
            _.each(data, function (element) {
                if (element.postDataFiles.length > 0) {
                    var days = dateDiff(element.postDataFiles[0].expDate);
                }

                if (days >= 0 && days < 6 && element.noOfFiles > 0) {
                    alertcount = alertcount + element.noOfFiles;
                }
            });
            if (alertcount > 0) {
                $('#recentExpiredFileCount').text("(" + alertcount + ")");
                $('#recentExpiredFileCount').attr("title", getLanguage('Some of the requested/received files are about to expire. Please take actions on them before they are deleted.'));
            }

        }, fnerr);
    }
}

function ShowMyAdminButton(user) {
    if (user.isActive === true && user.type === true) {
        var adminUrl = webServiceUrl + '#/admin/' + user.company.id + '/home/' + user.id;
        $("#adminButton").show();
        $("#adminButton span").text(getLanguage('Admin'));
        //$("#adminButton a").attr("href", adminUrl)
        $("#adminButton").attr("rel", adminUrl);
    }
}

function dateDiff(fromdate) {
    var diff = Math.floor(new Date(fromdate).getTime() - new Date().getTime());
    var dayconverter = 1000 * 60 * 60 * 24;
    var days = (Math.floor(diff / dayconverter)) + 1;
    return days;
}

function showShareFileContainer() {
    disableInsertLink();
    $('#backIcon').show();
    $('#backIcon span').text(getLanguage('back'));
    LoadView('fileBrowseDiv', {});
    $('.dropzone').filedrop({
        maxfiles: 1,
        callback: function (fileEncryptedData) {
        }
    });
    sharedataId = utils.GUID();
}

function onFileChange(event) {
    var filecount = event.target.files && event.target.files.length;
    if (filecount > 0) {
        for (var i = 0; i < filecount; i++) {
            uploadFile(event.target.files[i]);
        }
    }
}

function uploadFile(file) {
    stopdrag = true; NeedToReadReceipient = false;
    disableInsertLink();
    fileId = fileId + 1;
    var uploadFile = { id: fileId, file: file, uploaded: 'uploading' };
    var uploaddata = { senderEmail: UserEmail, file: file, shareDataId: sharedataId };
    files.push(uploadFile);

    var data = new FormData();
    data.append("senderEmail", uploaddata.senderEmail);
    data.append("file", uploaddata.file);
    data.append("mode", uploaddata.mode);
    data.append("shareDataId", uploaddata.shareDataId);
    data.append("file", uploaddata);
    if (files.length === 1) {
        toEmails = [], ccEmails = [];
        $('#browseblock').append($('#sharedFileListContainer').tmpl(files));
        $('#browseblock').append($('#showViewDownloadContainer').tmpl({ files: files }));
    }
    $('#sharedFileList').tmpl(files).appendTo($('#sharelistdiv').empty());
    $("input[type=file]").prop('disabled', true);
    ShowUploadStatus(files);
    $.ajax({
        type: "POST",
        url: APIConstant.fileuploadapi,
        headers: { "userid": userAccessId, "token": userAccessToken },
        contentType: false,
        processData: false,
        data: data,
        success: function (data) {
            ShowLoading('default');
            stopdrag = false;
            $("input[type=file]").prop('disabled', false);

            files = files.filter(function (c) {
                if (c.id === uploadFile.id) {
                    c.uploaded = 'uploaded';
                    c.id = data.fileId;
                }
                return c;
            });

            var uploadedFiles = files.filter(function (x) {
                return x.uploaded === 'uploaded';
            });

            if (uploadedFiles.length === 1) {
                insertenablecount++;
            }
            sharedataId = data.shareDataId;
            ShowUploadStatus(files);
            checkchange();
            NeedToReadReceipient = true;
            toccRead();


        },
        error: function (err) {
            stopdrag = false;
            files = files.filter(function (c) {
                if (c.id === uploadFile.id) {
                    c.uploaded = 'failed';
                    c.id = data.fileId;
                }
                return c;
            });

            //files.find(x => x.id === uploadFile.id).uploaded = (err.error && err.error.text) || 'failed';
            console.log(err);
        }
    });
}

function uploadTextAsFile(messageObj) {
    NeedToReadReceipient = false;
    disableAddMessageButton();
    disableInsertLink();

    fileId = !messageObj.messageId ? fileId + 1 : messageObj.messageId;
    var uploadFile = {
        id: fileId, file: { name: messageObj.messageTitle, messageTitle: messageObj.messageTitle, messageContent: messageObj.messageContent }, uploaded: 'uploading'
    };

    if (!messageObj.messageId) {
        files.push(uploadFile);
        if (files.length === 1) {
            toEmails = [], ccEmails = [];
            insertenablecount++;
            $('#browseblock').append($('#sharedFileListContainer').tmpl(files));
            $('#browseblock').append($('#showViewDownloadContainer').tmpl({ files: files }));
        }
    }
    var uploaddata = { senderEmail: UserEmail, textContent: messageObj.messageContent, shareDataId: sharedataId };

    $('#sharedFileList').tmpl(files).appendTo($('#sharelistdiv').empty());
    ShowUploadStatus(files);

    var data = new FormData();
    data.append("senderEmail", uploaddata.senderEmail);
    data.append("fileId", messageObj.messageId);
    data.append('fileName', messageObj.messageTitle);
    data.append("textContent", uploaddata.textContent);
    data.append("mode", uploaddata.mode);
    data.append("shareDataId", uploaddata.shareDataId);


    $('#textForFile').prop('disabled', true);
    $.ajax({
        type: "POST",
        url: APIConstant.textuploadapi,
        headers: { "userid": userAccessId, "token": userAccessToken },
        contentType: false,
        processData: false,
        data: data,
        success: function (data) {
            enableAddMessageButton();
            modal.modal('hide');
            ShowLoading('default');
            stopdrag = false;
            $('#textForFile').prop('disabled', false);

            files = files.filter(function (c) {
                if (c.id === uploadFile.id) {
                    c.uploaded = 'uploaded';
                    c.id = data.fileId;
                    c.file.name = data.fileName;
                    c.file.messageTitle = messageObj.messageTitle;
                    c.file.messageContent = data.textContent;
                }
                return c;
            });
            sharedataId = data.shareDataId;
            ShowUploadStatus(files);
            checkchange();
            NeedToReadReceipient = true;
            toccRead();
        },
        error: function (err) {
            stopdrag = false;
            files = files.filter(function (c) {
                if (c.id === uploadFile.id) {
                    c.uploaded = 'failed';
                    c.id = data.fileId;
                }
                return c;
            });

            //files.find(x => x.id === uploadFile.id).uploaded = (err.error && err.error.text) || 'failed';
            console.log(err);
        }
    });
}

function ShowUploadStatus(files) {

    //($('#sharelistdiv').empty()).append($('#sharedFileList').tmpl(files));
    $('#sharedFileList').tmpl(files).appendTo($('#sharelistdiv').empty());
}

function checkchange() {
    showLink = true;
    if ($("input[name='downloadview']:checked").val() === 'view') {
        enableInsertLink();
        _.each(files, function (file) {
            var fname = file.file.name;
            var fext = fname.split('.').pop().toLowerCase();
            var allowedFileExts = ['pdf', 'txt', 'png', 'gif', 'jpg', 'jpeg', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx'];
            if (allowedFileExts.includes(fext) == false) {
                disableInsertLink();
                showmessage(getLanguage("Invalid file format. Only pdf, word, excel, powerpoint, image, txt files are allowed to view."));
            }
        });

    } else {
        enableInsertLink();
        showmessage("");
    }
    return showLink;
}

function removefile(id) {
    disableInsertLink();
    NeedToReadReceipient = false;
    ShowLoading('wait');
    var index = _.findIndex(files, function (f) { return f.id === id; });//files.findIndex(f => f.id === id);

    ajaxprovider.call('DELETE', APIConstant.deletefile + "/" + id, null, userAccessId, userAccessToken).then(function () {
        ShowLoading('default');
        showmessage("");
        files.splice(index, 1);
        if (files.length === 0) {
            sharedataId = '';
            toEmails = []; ccEmails = [];
            $('#dvrecepient').remove();
            $('#viewbody #uploadedfilelistdiv').remove();
            $('#browseblock #viewdownloaddiv').remove();
            insertenablecount--;
        }
        else {
            NeedToReadReceipient = true;
            toccRead();
        }
        checkchange();
        $('#sharedFileList').tmpl(files).appendTo($('#sharelistdiv').empty());

    }, fnerr);

}

function toccRead() {
    //$('#dvEmailRecepient').empty();
    //NeedToReadReceipient = true;
    var toresvalue;
    Office.context.mailbox.item.to.getAsync(function (result) {
        toresvalue = result.value;
        istoequal = _.isEqual(toEmails, _.map(toresvalue, function (x) { return x.emailAddress; }));
        if (!istoequal) {

            ccEmails = [];
            smsRecipients = [];
            $('#dvEmailRecepient').empty();
            if (toEmails.length === 0) {
                insertenablecount++;
            }
            toEmails = _.map(toresvalue, function (x) { return x.emailAddress; });
            if (toEmails.length >= 1) {
                validateSmsAuthenticaitonForm();
            }
            if (toEmails.length === 0) {
                insertenablecount--;
                disableInsertLink();
            }
            istocc = result.value && result.value.length > 0;
            if (istocc) {
                showmessage('');
                if (isrequested === true) {
                    $('#tmplreceipient').tmpl({ field: getLanguage("The request will be sent to"), emails: result.value }).appendTo($('#dvEmailRecepient'));
                }
                else {
                    $('#tmplreceipient').tmpl({ field: getLanguage("The files will be sent to"), emails: result.value }).appendTo($('#dvEmailRecepient'));
                }

            }
        }

    });

    Office.context.mailbox.item.cc.getAsync(function (result) {
        isccequal = _.isEqual(ccEmails, _.map(result.value, function (x) { return x.emailAddress; }));
        if (!isccequal) {
            $('#dvEmailRecepient').empty();
            ccEmails = _.map(result.value, function (x) { return x.emailAddress; });
            if (ccEmails.length === 1) {
                enableInsertLink();
            }
            if (ccEmails.length === 0 && toEmails.length === 0) {
                insertenablecount--;
                disableInsertLink();
            }
            if (toEmails.length > 0) {
                showmessage('');
                if (isrequested === true) {
                    $('#tmplreceipient').tmpl({ field: getLanguage("The request will be sent to"), emails: toresvalue }).appendTo($('#dvEmailRecepient'));
                }
                else {
                    $('#tmplreceipient').tmpl({ field: getLanguage("The files will be sent to"), emails: toresvalue }).appendTo($('#dvEmailRecepient'));
                }

            }
            if (result.value.length > 0) {
                showmessage('');
                $('#tmplreceipient').tmpl({ field: getLanguage("Cc"), emails: result.value }).appendTo($('#dvEmailRecepient'));
            }
        }
    });

    if (!(istoequal && isccequal)) {
        let tempRecipients = [];
        for (let i = 0; i < toEmails.length; i++) {
            let recipient = _.find(smsRecipients, function (r) { return r.email === toEmails[i]; });
            if (!recipient)
                recipient = { email: toEmails[i], mobileNumber: '', countryCode: '+45' };
            tempRecipients.push(recipient);
        }

        for (let i = 0; i < ccEmails.length; i++) {
            let recipient = _.find(smsRecipients, function (r) { return r.email === ccEmails[i]; });
            if (!recipient)
                recipient = { email: ccEmails[i], mobileNumber: '', countryCode: '+45' };
            tempRecipients.push(recipient);
        }

        smsRecipients = tempRecipients;

        validateSmsAuthenticaitonForm();

        $('#dvMobileRecipients').html($('#tmplrecepientMobile').tmpl({ smsEnabled: smsAuthenticationEnabled, recipients: smsRecipients }));

        //initializeAutoComplete(2000);
    }

    if (NeedToReadReceipient) {
        setTimeout(toccRead, 2000);
    }
}

function addInsertLink() {
    otplink = webServiceUrl + '#/otp';
    disableInsertLink();
    if (files.length > 0) {
        var message = String.format(getLanguage("You have been sent {0} files:"), files.length);
        var filesname = '';

        //files.forEach(element => {
        //    filesname = filesname + '<div style="padding-bottom: 5px;font-size:13px;">' + element.file.name + '</div>'
        //});
        _.each(files, function (item) {
            filesname = filesname + '<tr><td colspan="5"><div style="font-size:13px;">' + item.file.name + '</div></td></tr>';
        });

        var linktype = $("input[name='downloadview']:checked").val();
        var linkText = linktype === 'download' ? getLanguage("Download files") : linktype === 'view' ? getLanguage("View files") : '';
        var mode = linktype === 'download' ? 1 : 0;

        let postData = { Id: sharedataId, Mode: mode, SmsAuthenticationEnabled: smsAuthenticationEnabled };
        ajaxprovider.call('POST', APIConstant.getsharedatalink, postData, userAccessId, userAccessToken).then(function (data) {
            //storage.set('coderesponse', JSON.stringify(data));
            otplink = otplink + '/' + data.key + '/sharedata' + mode;
            var linkButton = '<table border="0" cellspacing="0" cellpadding="0">' +
                '<tr>' +
                '<td>' +
                '<a href="' + otplink + '" target="_blank" style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 5px; background-color: #0088FF; border-top: 10px solid #0088FF; border-bottom: 10px solid #0088FF; border-right: 25px solid #0088FF; border-left: 25px solid #0088FF; display: inline-block;">' + linkText + '</a>' +
                '</td>' +
                '</tr>' +
                '</table>';
            var link = '<tr><td colspan="3">' + linkButton + '</td>' +
                '<td colspan="2"><span style="color:#B3B3B3;font-size:10px; float:right; margin-top: 35px;">' + getLanguage("Connectid Mail by Safe Online") + '</span></td>' +
                '</tr>';
            var item = Office.context.mailbox.item;

            item.body.getTypeAsync(
                function (result) {
                    //if (result.status === Office.AsyncResultStatus.Failed) {
                    //}
                    if (result.status !== Office.AsyncResultStatus.Failed) {
                        var htmlcontent =
                            '<table width="100%" style="background-color: #f4f4f4; margin-top: 12px; padding: 15px;">' +
                            '<tr><td style="padding-bottom: 15px;">' + message + '</td></tr>' +
                            '<tr><td>' +
                            '<table width="100%">' +
                            filesname +
                            link +
                            '</table>' +
                            '</td></tr>' +
                            '</table>';
                        if (result.value === Office.MailboxEnums.BodyType.Html) {
                            item.body.setSelectedDataAsync(
                                htmlcontent,
                                {
                                    coercionType: Office.CoercionType.Html,
                                    asyncContext: { var3: 1, var4: 2 }
                                },
                                function (asyncResult) {
                                    //if (asyncResult.status === Office.AsyncResultStatus.Failed) {
                                    //}
                                    if (asyncResult.status !== Office.AsyncResultStatus.Failed) {
                                        updatereceiver("shareDataId", sharedataId);
                                    }
                                });
                        }
                        else {
                            item.body.setSelectedDataAsync(
                                'Value is not html type.',
                                {
                                    coercionType: Office.CoercionType.Text,
                                    asyncContext: { var3: 1, var4: 2 }
                                },
                                function (asyncResult) {
                                    //if (asyncResult.status === Office.AsyncResultStatus.Failed) {
                                    //}
                                    //else {
                                    //}
                                });
                        }
                    }
                });


        }, fnerr);
    }
}

function updatereceiver(posttype, id) {
    var receiver = [];
    var updatedata, dataurl;
    if (toEmails.length > 0) {
        receiver = toEmails;
    }

    if (ccEmails.length > 0) {
        receiver = receiver.concat(ccEmails);
    }
    if (posttype === "shareDataId") {
        let shareFileReceivers = [];
        if (smsAuthenticationEnabled) {
            for (let i = 0; i < smsRecipients.length; i++) {
                shareFileReceivers.push({ ReceiverEmail: smsRecipients[i].email, Mobile: smsRecipients[i].countryCode + smsRecipients[i].mobileNumber });
            }

        } else {
            for (let i = 0; i < receiver.length; i++) {
                shareFileReceivers.push({ ReceiverEmail: receiver[i] });
            }
        }
        updatedata = { ShareFileReceivers: shareFileReceivers, Id: id };
        dataurl = APIConstant.updatereceiver;
    }
    else {
        updatedata = { receiverEmails: receiver, postDataId: id };
        dataurl = APIConstant.updatepostdatareceiver;
    }

    ShowLoading('wait');
    ajaxprovider.call('POST', dataurl, updatedata, userAccessId, userAccessToken).then(function (data) {

        //storage.set('coderesponse', JSON.stringify(data));
        ShowLoading('default');
        LoadView('tmplsharedatasuccessmsg', {});
        $('#safety-info #safety-text').text(getLanguage("Keep your own personal data safe."));
        $('#safety-info #safety-link').text(getLanguage("Find out how"));
        $('#safety-info #safety-link').attr('href', importantLinks.overViewPersonal);
        $('#safety-info').show();

    }, fnerr);
}

function back() {
    files = []; sharedataId = ''; insertenablecount = 0; requestcount = 0;
    fileId = 0; istocc = false; toEmails = []; ccEmails = [];
    NeedToReadReceipient = false; isrequested = false;

    LoadView('actionList', {});
    $('#backIcon').hide();
    $('#safety-info').hide();
}

function showRequestDataContainer() {
    isrequested = true;
    toEmails = [];
    $('#backIcon').show();
    $('#backIcon span').text(getLanguage("back"));
    LoadView('tmplrequestDataBlock', {});
    NeedToReadReceipient = true;
    toccRead();
    var requestcount = 0;
    requestDataForm(requestcount);

}

function addRequestDatas() {
    requestcount++;
    isValid = true; showmessage('');
    $('.requestitem').each(function (item, index) {
        var field = $(this).find('input');
        var type = $(this).find('select');

        if ($.trim(field.val()) === '' || type.val() === '') {
            isValid = false; requestcount--;
            showmessage(getLanguage("Please fill up the current input information before adding another item"));
        }
    });
    if (isValid) {
        requestDataForm(requestcount);
    }

}

function requestDataForm(formcount) {
    $('#tmplrequestdata').tmpl({ requestcount: formcount }).appendTo($('#requestDataDiv'));
}

function removeRequestFile(index) {
    requestcount--;
    $('#requestItem_' + index).remove();
}

function uploadrequestdata() {
    $('#insertlinkbtn').prop('disabled', true);
    showmessage('');
    var isValid = true;
    postdata = [];
    $('.requestitem').each(function (item, index) {
        var field = $(this).find('input');
        var type = $(this).find('select');

        if ($.trim(field.val()) === '' || type.val() === '') {
            isValid = false;
            showmessage(getLanguage("Please fill up the input information to proceed"));
            $('#insertlinkbtn').prop('disabled', false);
            return;
        }
        else {
            postdata.push({ FieldName: field.val(), FieldType: type.val() });
        }
    });

    if (toEmails.length === 0 && ccEmails.length === 0 && isValid) {
        isValid = false;
        showmessage(getLanguage("No email added for sending mail"));
        $('#insertlinkbtn').prop('disabled', false);
        return;
    }
    if (postdata.length > 0 && isValid && (toEmails.length > 0 || ccEmails.length > 0)) {
        $('#insertlinkbtn').prop('disabled', true);
        ShowLoading('wait');
        var uploaddata = { senderEmail: UserEmail, postDataFields: postdata };
        ajaxprovider.call('POST', APIConstant.postdata, uploaddata, userAccessId, userAccessToken).then(function (data) {
            //storage.set('coderesponse', JSON.stringify(data));
            ShowLoading('default');
            if (data && data.id) {
                id = data.id;
                addRequestDataInsertLink();
            }

        }, fnerr);
    }
}

function addRequestDataInsertLink() {
    otplink = webServiceUrl + '#/otp';
    var message = getLanguage("The following information is being requested from you. Use the 'Enter data' button below to share this information securely.");

    var dataname = '';
    //postdata.forEach(element => {
    //    dataname = dataname + '<div style="padding-bottom: 5px;font-size:13px;">' + element.FieldName + '</div>'
    //});
    _.each(postdata, function (item) {
        dataname = dataname + '<tr><td colspan="5"><div style="font-size:13px;">' + item.FieldName + '</div></td></tr>';
    });


    ajaxprovider.call('POST', APIConstant.postdatalink + '/' + id + '/' + 0, null, userAccessId, userAccessToken).then(function (data) {
        //storage.set('coderesponse', JSON.stringify(data));
        if (data && data.key) {
            otplink = otplink + '/' + data.key + '/postdata';
            var linkButton = '<table border="0" cellspacing="0" cellpadding="0">' +
                '<tr>' +
                '<td>' +
                '<a href="' + otplink + '" target="_blank" style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 5px; background-color: #0088FF; border-top: 10px solid #0088FF; border-bottom: 10px solid #0088FF; border-right: 25px solid #0088FF; border-left: 25px solid #0088FF; display: inline-block;">' + getLanguage("Enter data") + '</a>' +
                '</td>' +
                '</tr>' +
                '</table>';

            var link = '<tr><td colspan="3">' + linkButton + '</td>' +
                '<td colspan="2"><span style="color:#B3B3B3;font-size:10px; float:right; margin-top: 35px;">' + getLanguage("Connectid Mail by Safe Online") + '</span></td></tr></table>' +
                '</div>';

            var item = Office.context.mailbox.item;
            item.body.getTypeAsync(
                function (result) {
                    //if (result.status == Office.AsyncResultStatus.Failed) {
                    //}
                    if (result.status !== Office.AsyncResultStatus.Failed) {

                        var htmlcontent =
                            '<table width="100%" style="background-color: #f4f4f4;  margin-top: 12px; padding: 15px;">' +
                            '<tr><td style="padding-bottom: 15px;">' + message + '</td></tr>' +
                            '<tr><td>' +
                            '<table width="100%">' +
                            dataname +
                            link +
                            '</table>' +
                            '</td></tr>' +
                            '</table>';

                        if (result.value === Office.MailboxEnums.BodyType.Html) {
                            item.body.setSelectedDataAsync(
                                htmlcontent,
                                {
                                    coercionType: Office.CoercionType.Html,
                                    asyncContext: { var3: 1, var4: 2 }
                                },
                                function (asyncResult) {
                                    if (asyncResult.status !== Office.AsyncResultStatus.Failed) {
                                        updatereceiver("postDataId", id);
                                    }
                                    //else {
                                    //    updatereceiver("postDataId", id);
                                    //}
                                });
                        }
                        else {
                            item.body.setSelectedDataAsync(
                                'Value is not html type.',
                                {
                                    coercionType: Office.CoercionType.Text,
                                    asyncContext: { var3: 1, var4: 2 }
                                },
                                function (asyncResult) {
                                    //if (asyncResult.status === Office.AsyncResultStatus.Failed) {
                                    //}
                                    //else {
                                    //}
                                });
                        }
                    }
                });
        }

    }, fnerr);


}

function showmessage(message) {
    $('#alertmsg').hide();
    if (message !== "") {
        $('#alertmsg').show();
    }

    $('#alertmsg #alertmsgtxt').text(message);
}

function enableInsertLink() {
    console.log("should enable count:" + insertenablecount + " And recipient lenth:" + toEmails.length);
    if (insertenablecount > 1) {
        $('#browseblock  #insertlinkbtn').prop('disabled', false);
    }

}

function disableInsertLink() {
    $('#browseblock #insertlinkbtn').prop('disabled', true);
}

function logout() {
    ShowLoading('wait');
    var token = null;
    ajaxprovider.call('POST', APIConstant.updateusertoken + '/' + userAccessId + '/' + token, null, userAccessId, userAccessToken).then(function (data) {
        //storage.set('coderesponse', JSON.stringify(data));
        ShowLoading('default');
        coderesponse = "";
        userAccessToken = '';
        coderesponse, usercompany;
        files = []; sharedataId = '';
        fileId = 0; istocc = false; toEmails = []; ccEmails = [];
        NeedToReadReceipient = false; id;
        requestcount = 0; insertenablecount = 0;
        postdata = [];
        stopdrag = false;
        ShowWelcomepage();
        $("#myfolderButton").hide();
        $("#adminButton").hide();
        $(".logoutblock").hide();
        $('#backIcon').hide();

    }, fnerr);

}

function getFormatedFilename(name) {
    if (name) {
        var namewithoutextension = name.substr(0, name.lastIndexOf('.'));
        var lasttwodigit = name.substr((name.lastIndexOf('.') - 2), 3);
        var fileExtension = name.substring(name.lastIndexOf('.') + 1);
        if (namewithoutextension.length > 30) {
            name = name.substr(0, 27) + "..." + lasttwodigit + fileExtension;
        }
    }
    return name;
}

function LoadValuesFromSettings() {
    ajaxprovider.call('GET', APIConstant.appConfig + '/LinkConfig', null, userAccessId, userAccessToken).then(function (data) {
        importantLinks = data;

        $('#helpResourceLink').attr('href', importantLinks.helpResources);
    }, fnerr);
}

function LoadLanguageResources(selectedLanguage) {
    ajaxprovider.call('GET', APIConstant.getLanguage + '/' + selectedLanguage, null, userAccessId, userAccessToken).then(function (data) {
        //storage.set('coderesponse', JSON.stringify(data));
        localized = JSON.parse(data);
        $('#helprow span').text(getLanguage("Help"));
        $('#sharesimpleModal .modal-footer #cancel').text(getLanguage("Cancel"));
        $('#sharesimpleModal .modal-footer #save').text(getLanguage("Add Message"));
    }, fnerr);
}

function convertTextToFile() {
    var messageTitle = $.trim(modal.find('#writtenMessageTitle').val());
    var messageContent = $.trim(modal.find('#writtenMessage').val());
    var errorCount = 0;
    if (messageTitle === '') {
        modal.find('#writtenMessageTitle').css("border-color", 'rgb(168, 0, 0)');
        errorCount++;
    } else {
        modal.find('#writtenMessageTitle').css("border-color", '');
    }

    if (messageContent === '') {
        modal.find('#writtenMessage').css("border-color", 'rgb(168, 0, 0)');
        errorCount++;
    } else {
        modal.find('#writtenMessage').css("border-color", '');
    }
    if (errorCount > 0) {
        return false;
    }
    else {
        var messageObj = {
            messageId: modal.find('#hfMessageId').val(),
            fileName: modal.find('#hfFileName').val(),
            messageTitle: messageTitle,
            messageContent: messageContent
        };

        uploadTextAsFile(messageObj);
    }
}

function showWrittenMessageForm(messageObj) {
    modal = $('#sharesimpleModal').modal();
    modal.find('.modal-title').text(getLanguage('Add a secure message'));
    if (!messageObj) {
        messageObj = { messageTitle: '', messageContent: '', id: '', fileName: '' };
    }
    $('#writemessagemodaltmpl').tmpl(messageObj).appendTo(modal.find('.modal-body').empty());
}

function editTextFile(fileId) {
    var editingText = _.find(files, function (f) { return f.id === fileId; });

    showWrittenMessageForm({ fileName: editingText.file.name.replace('.txt', ''), messageTitle: editingText.file.messageTitle, messageContent: editingText.file.messageContent, id: editingText.id });
}

function validateMessageTitle() {
    var messageTitle = $.trim(modal.find('#writtenMessageTitle').val());
    //var pattern = /^[a-zA-Z0-9 ]*$/;
    //pattern.test(messageTitle)
    if (messageTitle.length > 0) {
        modal.find('#writtenMessageTitle').removeClass('error');
    } else {
        modal.find('#writtenMessageTitle').addClass('error');
    }

    if (modal.find('#writtenMessageTitle').hasClass('error') || modal.find('#writtenMessage').hasClass('error')) {
        disableAddMessageButton();
    }
    else {
        enableAddMessageButton();
    }
}

function validateMessageContent() {
    var messageContent = $.trim(modal.find('#writtenMessage').val());
    if (messageContent.length === 0) {
        modal.find('#writtenMessage').addClass('error');
    } else {
        modal.find('#writtenMessage').removeClass('error');
    }

    if (modal.find('#writtenMessageTitle').hasClass('error') || modal.find('#writtenMessage').hasClass('error')) {
        disableAddMessageButton();
    }
    else {
        enableAddMessageButton();
    }
}

function enableAddMessageButton() {
    modal.find('.ms-Button--primary').prop('disabled', false);
}

function disableAddMessageButton() {
    modal.find('.ms-Button--primary').prop('disabled', true);
}

function enableSmsAuthentication() {
    smsAuthenticationEnabled = true;
    validateSmsAuthenticaitonForm();
    $('#dvMobileRecipients').html($('#tmplrecepientMobile').tmpl({ smsEnabled: smsAuthenticationEnabled, recipients: smsRecipients }));

    initializeAutoComplete(1000);
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
}

function disableSmsAuthentication() {
    smsAuthenticationEnabled = false;
    validateSmsAuthenticaitonForm();
    $('#dvMobileRecipients').html($('#tmplrecepientMobile').tmpl({ smsEnabled: smsAuthenticationEnabled, recipients: [] }));
}

function updateRecipientCountryCode(el) {
    if ($(el).attr('rel')) {
        let email = $(el).attr('rel');
        let countryCode = $(el).val();
        var validCountryCodes = country_code.countries.map(function (x) {
            return x.code;
        });

        if (!(validCountryCodes.indexOf(countryCode) >= 0)) {
            countryCode = '';
        }

        _.each(smsRecipients, function (recipient) {
            if (recipient.email === email)
                recipient.countryCode = countryCode;
        });

        validateSmsAuthenticaitonForm();
    }
}

function updateRecipientMobile(el) {
    let email = $(el).attr('rel');
    _.each(smsRecipients, function (recipient) {
        if (recipient.email === email)
            recipient.mobileNumber = $(el).val();
    });

    validateSmsAuthenticaitonForm();
}

function validateMobile(el) {
    let input = $(el).val();
    if (!input.match(phonePattern))
        $(el).addClass('error');
    else
        $(el).removeClass('error');

    updateRecipientMobile(el);
}

function validateCountryCode(el) {
    let input = $(el).val();
    if (!input)
        $(el).addClass('error');
    else
        $(el).removeClass('error');

    updateRecipientCountryCode(el);
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode === 43)
        return true;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function validateSmsAuthenticaitonForm() {
    var isValid = true;
    if (smsAuthenticationEnabled) {
        for (var i = 0; i < smsRecipients.length; i++) {
            if (!(smsRecipients[i].mobileNumber.match(phonePattern) && smsRecipients[i].countryCode)) {
                isValid = false;
                break;
            }
        }
    }
    if (isValid) {
        enableInsertLink();
    }
    else {
        disableInsertLink();
    }
}

function initializeAutoComplete(timeOut) {
    setTimeout(function () {
        $(".country-code").autocomplete({
            minLength: 0,
            source: country_code.countries.map(function (item) {
                return { code: item.code, name: item.name, label: item.code + item.name };
            }),
            focus: function (event, ui) {
                $(this).val(ui.item.code);
                return false;
            },
            select: function (event, ui) {
                $(this).val(ui.item ? ui.item.code : '');
                validateCountryCode(event.target);
                return false;
            },
            change: function (event, ui) {
                var validCountryCodes = country_code.countries.map(function (x) {
                    return x.code;
                });
                if (!(ui.item || validCountryCodes.indexOf(event.target.value) >= 0)) {
                    $(this).val('');
                }
                validateCountryCode(event.target);
            }
        }).autocomplete("instance")._renderItem = function (ul, item) {
            return $("<li>")
                .append("<div><b>" + item.code + "</b> - " + item.name + "</div>")
                .appendTo(ul);
        };
    }, timeOut);
}