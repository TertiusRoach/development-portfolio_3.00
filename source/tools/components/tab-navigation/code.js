
//--▼ Load jQuery ▼--//
    // window.onload = function() {
    //     if (window.jQuery) {  
    //         // jQuery is loaded  
    //         alert("jQuery Linked!");
    //     } else {
    //         // jQuery is not loaded
    //         alert("Doesn't Work!");
    //     }
    // }
//--▲ Load jQuery ▲--//

//let nommer = 0; //GLOBAL VARIABLE <<< DONT USE IT UNLESS YOU REALLY HAVE TO

let getPage = function (pageFilename, targetControl) {
    $.get(pageFilename + '.html', function (data) {
        $(targetControl).html(data);
    });
}

let myClickEventOpTabs = function (ev) {
    let target = ev.target || ev.currentTarget;
    let pagename_fromId = $(target).attr('id');

    getPage(pagename_fromId, '#ShowPage');
}

$('.AllWide [id*="page"]').on('click', myClickEventOpTabs);

// $ = window.jQuery


/***********************************************************************************/

//--▼ Example ▼--//
//--▲ Example ▲--//

//--◄ Example ▼--//
//--◄ Example ▲--//

//◄ Example
//▲ Example
//► Note to Self ◄//

/*--▼ Removed ▼--//
//--▲ Removed ▲--*/