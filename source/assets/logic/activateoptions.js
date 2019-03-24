// Name:			Options.
// Description: 	Customisable parts set in the Options screen, put into place on the index.html. Production.
// Author:			Sean O'Sullivan.
// Version:		    2018-09-02.

chrome.storage.sync.get({"showSearchBar": true}, function(e){
    showSearchBar = e.showSearchBar;
    if(showSearchBar)
      resultShowSearchBar();
    else
    resultHideSearchBar();
});

function resultShowSearchBar() {
    console.log("Search bar - show");
}

function resultHideSearchBar() {
    document.getElementById("container_searchbar").style.display = 'none'
    document.getElementById("container_weblingcontent").style.top = '50%'
    document.getElementById("container_weblingcontent").style.height = '90%'
    console.log("Search bar - hide");
  }