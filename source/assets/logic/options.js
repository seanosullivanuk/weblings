// Name:			    Options.
// Description: 	Customisable parts of Weblings, used on the Options page. Production.
// Author:		  	Sean O'Sullivan.
// Version:		    2018-09-05.

// Saves options to chrome.storage
function save_options() {
    var showSearchBar = document.getElementById('showsearchbar').checked;
    chrome.storage.sync.set({
      showSearchBar: showSearchBar
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value showSearchBar = true.
    chrome.storage.sync.get({
      showSearchBar: true
    }, function(items) {
      document.getElementById('showsearchbar').checked = items.showSearchBar;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);