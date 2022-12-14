var storage = {
    set: function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get: function (key) {
        const value = localStorage.getItem(key);

        try {
            return value === undefined ? undefined : JSON.parse(value);
        } catch (err) {
            return value; // err.name == 'SyntaxError' // err instanceof SyntaxError
        }
    },
    remove: function (key) {
        //StorageLibrary.saveToSessionStorage(key, null);
        localStorage.removeItem(key);
    }
};

var country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas"
    , "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands"
    , "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica"
    , "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea"
    , "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana"
    , "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India"
    , "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia"
    , "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania"
    , "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia"
    , "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal"
    , "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles"
    , "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan"
    , "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia"
    , "Turkey", "Turkmenistan", "Turks & Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay"
    , "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

var country_code = {
    "countries": [
        { "code": "+1", "name": "USA and Canada" },
        { "code": "+1-441", "name": "Bermuda" },
        { "code": "+7", "name": "CIS" },
        { "code": "+20", "name": "Egypt" },
        { "code": "+27", "name": "South Africa" },
        { "code": "+28", "name": "spare" },
        { "code": "+30", "name": "Greece" },
        { "code": "+31", "name": "Netherlands" },
        { "code": "+32", "name": "Belgium" },
        { "code": "+33", "name": "France" },
        { "code": "+34", "name": "Spain (including Balearic Islands)" },
        { "code": "+36", "name": "Hungary" },
        { "code": "+38", "name": "Yugoslavia" },
        { "code": "+39", "name": "Italy" },
        { "code": "+39-66982", "name": "Vatican City" },
        { "code": "+40", "name": "Romania" },
        { "code": "+41", "name": "Liechtenstein" },
        { "code": "+41", "name": "Switzerland" },
        { "code": "+42", "name": "Czechoslovakia" },
        { "code": "+43", "name": "Austria" },
        { "code": "+44", "name": "United Kingdom" },
        { "code": "+45", "name": "Denmark" },
        { "code": "+46", "name": "Sweden" },
        { "code": "+47", "name": "Norway" },
        { "code": "+48", "name": "Poland" },
        { "code": "+49", "name": "Germany, Federal Republic of (West Germany)" },
        { "code": "+51", "name": "Peru" },
        { "code": "+52", "name": "Mexico" },
        { "code": "+53", "name": "Cuba" },
        { "code": "+53", "name": "Guantanamo Bay" },
        { "code": "+54", "name": "Argentina" },
        { "code": "+55", "name": "Brazil" },
        { "code": "+56", "name": "Chile" },
        { "code": "+57", "name": "Colombia" },
        { "code": "+58", "name": "Venezuela" },
        { "code": "+60", "name": "Malaysia" },
        { "code": "+61", "name": "Australia" },
        { "code": "+62", "name": "Indonesia" },
        { "code": "+63", "name": "Philippines" },
        { "code": "+64", "name": "New Zealand" },
        { "code": "+65", "name": "Singapore" },
        { "code": "+66", "name": "Thailand" },
        { "code": "+81", "name": "Japan" },
        { "code": "+82", "name": "Korea, Republic of (South Korea)" },
        { "code": "+84", "name": "Viet Nam" },
        { "code": "+86", "name": "China (People's Republic)" },
        { "code": "+90", "name": "Turkey" },
        { "code": "+91", "name": "India" },
        { "code": "+91", "name": "Belem" },
        { "code": "+92", "name": "Pakistan" },
        { "code": "+93", "name": "Afghanistan" },
        { "code": "+94", "name": "Sri Lanka" },
        { "code": "+95", "name": "Myanmar" },
        { "code": "+98", "name": "Iran" },
        { "code": "+210", "name": "Morocco" },
        { "code": "+212", "name": "Morocco" },
        { "code": "+213", "name": "Algeria" },
        { "code": "+215", "name": "Algeria" },
        { "code": "+216", "name": "Tunisia" },
        { "code": "+217", "name": "Tunisia" },
        { "code": "+218", "name": "Libya" },
        { "code": "+219", "name": "Libya" },
        { "code": "+220", "name": "The Gambia" },
        { "code": "+221", "name": "Senegal" },
        { "code": "+222", "name": "Mauritania" },
        { "code": "+223", "name": "Mali" },
        { "code": "+224", "name": "Guinea" },
        { "code": "+225", "name": "Ivory Coast (also called La Cote d'Ivoire)" },
        { "code": "+226", "name": "Burkina Faso (former Upper Volta)" },
        { "code": "+227", "name": "Niger" },
        { "code": "+228", "name": "Togo (Togolese Republic)" },
        { "code": "+229", "name": "Benin" },
        { "code": "+230", "name": "Mauritius" },
        { "code": "+231", "name": "Liberia" },
        { "code": "+232", "name": "Sierra Leone" },
        { "code": "+233", "name": "Ghana" },
        { "code": "+234", "name": "Nigeria" },
        { "code": "+235", "name": "Chad" },
        { "code": "+236", "name": "Central African Republic" },
        { "code": "+237", "name": "Cameroon" },
        { "code": "+238", "name": "Cape Verde" },
        { "code": "+239", "name": "Sao Tome and Principe" },
        { "code": "+240", "name": "Equatorial Guinea" },
        { "code": "+241", "name": "Gabon" },
        { "code": "+242", "name": "Congo" },
        { "code": "+243", "name": "Zaire" },
        { "code": "+244", "name": "Angola" },
        { "code": "+245", "name": "Guinea-Bissau" },
        { "code": "+246", "name": "Diego Garcia" },
        { "code": "+247", "name": "Ascension Island" },
        { "code": "+248", "name": "Seychelles" },
        { "code": "+249", "name": "Sudan" },
        { "code": "+250", "name": "Rwanda (Rwandese Republic)" },
        { "code": "+251", "name": "Ethiopia" },
        { "code": "+252", "name": "Somalia" },
        { "code": "+253", "name": "Djibouti" },
        { "code": "+254", "name": "Kenya" },
        { "code": "+255", "name": "Tanzania (includes Zanzibar)" },
        { "code": "+256", "name": "Uganda" },
        { "code": "+257", "name": "Burundi" },
        { "code": "+258", "name": "Mozambique" },
        { "code": "+259", "name": "Zanzibar" },
        { "code": "+260", "name": "Zambia" },
        { "code": "+261", "name": "Madagascar" },
        { "code": "+262", "name": "Reunion (France)" },
        { "code": "+263", "name": "Zimbabwe" },
        { "code": "+264", "name": "Namibia (former South-West Africa)" },
        { "code": "+265", "name": "Malawi" },
        { "code": "+266", "name": "Lesotho" },
        { "code": "+267", "name": "Botswana" },
        { "code": "+268", "name": "Swaziland" },
        { "code": "+269", "name": "Comoros and Mayotte" },
        { "code": "+290", "name": "St. Helena" },
        { "code": "+291", "name": "spare" },
        { "code": "+292", "name": "spare" },
        { "code": "+293", "name": "spare" },
        { "code": "+294", "name": "spare" },
        { "code": "+295", "name": "San Marino" },
        { "code": "+296", "name": "Trinidad" },
        { "code": "+297", "name": "Aruba" },
        { "code": "+298", "name": "Faroe (Faeroe) Islands (Denmark)" },
        { "code": "+299", "name": "Greenland" },
        { "code": "+350", "name": "Gibraltar" },
        { "code": "+351", "name": "Portugal (includes Azores)" },
        { "code": "+352", "name": "Luxembourg" },
        { "code": "+353", "name": "Ireland (Irish Republic; Eire)" },
        { "code": "+354", "name": "Iceland" },
        { "code": "+355", "name": "Albania" },
        { "code": "+356", "name": "Malta" },
        { "code": "+357", "name": "Cyprus" },
        { "code": "+358", "name": "Finland" },
        { "code": "+359", "name": "Bulgaria" },
        { "code": "+370", "name": "Lithuania" },
        { "code": "+371", "name": "Latvia" },
        { "code": "+373", "name": "Moldova" },
        { "code": "+374", "name": "Armenia" },
        { "code": "+375", "name": "Belarus" },
        { "code": "+377", "name": "Monaco" },
        { "code": "+380", "name": "Ukraine" },
        { "code": "+381", "name": "Serbia, Republic of" },
        { "code": "+385", "name": "Croatia" },
        { "code": "+387", "name": "Bosnia" },
        { "code": "+387", "name": "Herzegovina" },
        { "code": "+389", "name": "Fyrom (Macedonia)" },
        { "code": "+500", "name": "Falkland Islands" },
        { "code": "+501", "name": "Belize" },
        { "code": "+502", "name": "Guatemala" },
        { "code": "+503", "name": "El Salvador" },
        { "code": "+504", "name": "Honduras" },
        { "code": "+505", "name": "Nicaragua" },
        { "code": "+506", "name": "Costa Rica" },
        { "code": "+507", "name": "Panama" },
        { "code": "+508", "name": "St. Pierre &(et) Miquelon (France)" },
        { "code": "+509", "name": "Haiti" },
        { "code": "+590", "name": "French Antilles (St. Barthelemy, Guadeloupe, French side of St. Martin)" },
        { "code": "+591", "name": "Bolivia" },
        { "code": "+592", "name": "Guyana" },
        { "code": "+593", "name": "Ecuador" },
        { "code": "+594", "name": "French Guiana" },
        { "code": "+595", "name": "Paraguay" },
        { "code": "+596", "name": "Martinique (French Antilles)" },
        { "code": "+597", "name": "Suri" },
        { "code": "+598", "name": "Uruguay (East Republic)" },
        { "code": "+599", "name": "Netherlands Antilles" },
        { "code": "+670", "name": "North Mariana Islands (Saipan)" },
        { "code": "+671", "name": "Guam" },
        { "code": "+672", "name": "Antarctica" },
        { "code": "+672", "name": "Norfolk Island" },
        { "code": "+673", "name": "Brunei Darussalm" },
        { "code": "+674", "name": "Nauru" },
        { "code": "+675", "name": "Papua New Guinea" },
        { "code": "+676", "name": "Tonga" },
        { "code": "+677", "name": "Solomon Islands" },
        { "code": "+678", "name": "Vanuatu (New Hebrides)" },
        { "code": "+679", "name": "Fiji" },
        { "code": "+680", "name": "Palau" },
        { "code": "+681", "name": "Wallis and Futuna" },
        { "code": "+682", "name": "Cook Islands" },
        { "code": "+683", "name": "Niue" },
        { "code": "+684", "name": "American Samoa" },
        { "code": "+685", "name": "Western Samoa" },
        { "code": "+686", "name": "Kiribati Republic (Gilbert Islands)" },
        { "code": "+687", "name": "New Caledonia" },
        { "code": "+688", "name": "Tuvalu (Ellice Islands)" },
        { "code": "+689", "name": "Tahiti (French Polynesia)" },
        { "code": "+690", "name": "Tokelau" },
        { "code": "+691", "name": "Micronesia (F.S. of Polynesia)" },
        { "code": "+692", "name": "Marshall Islands" },
        { "code": "+808", "name": "Midway Islands" },
        { "code": "+809", "name": "Anguilla" },
        { "code": "+809", "name": "Antigua" },
        { "code": "+809", "name": "Barbuda" },
        { "code": "+809", "name": "Bahamas" },
        { "code": "+809", "name": "Barbados" },
        { "code": "+809", "name": "Bermuda or 1+441" },
        { "code": "+809", "name": "British Virgin Islands" },
        { "code": "+850", "name": "Democratic People's Republic of Korea (North Korea)" },
        { "code": "+852", "name": "Hong Kong" },
        { "code": "+853", "name": "Macao" },
        { "code": "+855", "name": "Khmer Republic (Cambodia/Kampuchea)" },
        { "code": "+856", "name": "Laos" },
        { "code": "+871", "name": "Marisat--Atlantic Ocean" },
        { "code": "+872", "name": "Marisat--Pacific Ocean" },
        { "code": "+873", "name": "Marisat--Indian Ocean" },
        { "code": "+874", "name": "Atlantic West" },
        { "code": "+880", "name": "Bangladesh" },
        { "code": "+886", "name": "China-Taiwan" },
        { "code": "+960", "name": "Maldives" },
        { "code": "+961", "name": "Lebanon" },
        { "code": "+962", "name": "Jordan" },
        { "code": "+963", "name": "Syrian Arab Republic" },
        { "code": "+964", "name": "Iraq" },
        { "code": "+965", "name": "Kuwait" },
        { "code": "+966", "name": "Saudi Arabia" },
        { "code": "+967", "name": "Yemen Arab Republic" },
        { "code": "+968", "name": "Oman" },
        { "code": "+969", "name": "Yemen" },
        { "code": "+971", "name": "United Arab Emirates" },
        { "code": "+972", "name": "Israel" },
        { "code": "+973", "name": "Bahrain" },
        { "code": "+974", "name": "Qatar" },
        { "code": "+975", "name": "Bhutan" },
        { "code": "+976", "name": "Mongolia" },
        { "code": "+977", "name": "Nepal" },
        { "code": "+993", "name": "Turkmenistan" },
        { "code": "+994", "name": "Azerbaijan" },
        { "code": "+995", "name": "Georgia" }

    ]
};

String.format = function (format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined'
            ? args[number]
            : match
            ;
    });
};

var utils = {
    GUID: function () {
        return (this.S4() + this.S4() + "-" + this.S4() + "-4" + this.S4().substr(0, 3) + "-" + this.S4() + "-" + this.S4() + this.S4() + this.S4()).toLowerCase();
    },
    S4: function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
};
