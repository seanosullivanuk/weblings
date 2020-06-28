/*

Name:         Options Logic
Description: 	Saves and loads user options from storage
Author:		  	Sean O'Sullivan
Version:	  	2020-06-27

*/

// Save options to storage

function save_options() {
  
  // Set the variables
  
  var set_images = document.getElementById('set_images').value;
  var set_background = document.getElementById('set_background').value;
  var set_dialogue = document.getElementById('set_dialogue').value;

  // Save to storage

  chrome.storage.sync.set({
    images: set_images,
    background: set_background,
    dialogue: set_dialogue
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved. Enjoy :)';
    console.info('Options have been saved');
    setTimeout(function() {
      status.textContent = '';
    }, 1750);
  });
}


// Get options from storage

function restore_options() {

  // Set default values to the following
  //  set_images = fruitveglings
  //  set_background = gradient
  //  set_dialogue = greetings

  chrome.storage.sync.get({
    images: 'fruitveglings',
    background: 'gradient',
    dialogue: 'greetings'
  }, function(items) {
    document.getElementById('set_images').value = items.images;
    document.getElementById('set_background').value = items.background;
    document.getElementById('set_dialogue').value = items.dialogue;
    document.img_imageset.src = 'assets/sets/spotlight/' + items.images + ".png";
    document.img_dialogueset.src = 'assets/sets/spotlight/' + items.dialogue + ".png";
    document.img_backgroundset.src = 'assets/sets/spotlight/' + items.background + ".png";
  });

}


// Changing the spotlight images on the Options page


function spotlight_change_image(sel){
  document.getElementById('set_images_selected').src= 'assets/sets/spotlight/' + set_images.options[set_images.selectedIndex].value + ".png";
  }

function spotlight_change_background(sel){
  document.getElementById('set_background_selected').src= 'assets/sets/spotlight/' + set_background.options[set_background.selectedIndex].value + ".png";
  }

function spotlight_change_dialogue(sel){
  document.getElementById('set_dialogue_selected').src= 'assets/sets/spotlight/' + set_dialogue.options[set_dialogue.selectedIndex].value + ".png";
  }

// Let's listen

// Listen for the user saving their options
document.getElementById('save').addEventListener('click',save_options);

// Listen for the user changing Sets, altering the spotlight images to match
document.getElementById('set_images').addEventListener('change',spotlight_change_image)
document.getElementById('set_background').addEventListener('change',spotlight_change_background)
document.getElementById('set_dialogue').addEventListener('change',spotlight_change_dialogue)

// Restore the options, setting the Options page to what the users saved options are
document.addEventListener('DOMContentLoaded', restore_options);
