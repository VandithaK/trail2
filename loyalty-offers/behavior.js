"use strict";

use(function() {

    var compType = resource.properties["type"];
    var compTheme = resource.properties["theme"];
    var themeVal;
    if (compTheme == 'default'){
        if (compType == 'registered') {
            themeVal = 'dark';
        }
        else if (compType == 'unregistered') {
            themeVal = 'light';
        }
    }else {
        themeVal = compTheme;
    }
    var obj = {
        id: resource.properties["id"] || '',
        type: resource.properties["type"] || '',
        title: resource.properties["title"] || '',
        titleSize:  resource.properties["titlesize"] || '',
        theme: themeVal || '',
        view: this.view || '',
        brandCode: this.brandcode || '',
        brandName: this.brandname || ''
    };

    return obj;

});
