'use strict';
/* global $*/

//---state---------------------------------------------------

var state = {
  users: [],
  posts: [],
  // dialogOpen: false,
};

//---state mods-----------------------------------------------

function getPosts() {
  let
    header = $('#header').val(),
    url = $('#url').val(),
    description = $('#description').val();

  $.getJSON('/api/posts/', (json) => {
    // console.log(json);
    state.posts = json;
    createPost(state, header, url, description);
    renderPosts(state, $('.tbody'));
  // $('#dialog-form').dialog( 'close' );
  });
}




// Create Post
let createPost = function(state) {


  let
    header = $('#header').val(),
    url = $('#url').val(),
    description = $('#description').val();
  const addObj = {header: header, url: url, description: description};

  // console.log('Step 2: ', state.posts);
  state.posts.push(addObj);
  // console.log('Step 1: ', description);

  // console.log('Step 3: ', state.posts[0]);
  renderPosts(state, $('.tbody'));
};



// Edit Post
let editPost = function(state, header, url, description) {
  console.log('code here');
//   renderPosts(state, $('.tbody'));
};


// Delete Post
let deletePost = function(state, mongoId) {

  $.ajax({
    url: '/api/posts/' + mongoId,
    // dataType: 'json',
    // type: 'delete',
    // contentType: 'application/json',
    data: JSON.stringify(),
    success: function(json){
      state.posts.splice(mongoId, 1);
      renderPosts(state, $('.tbody'));
    },
  });


};

// Create new user/profile
let createUser = function(state, data) {
  console.log('code here', data);
};


//---template----------------------------------------------------

function postTemplate(state, data, i){
  return `
      <tr class="table-row" data-post-id="${data.id}">
        <td>${data.header}</td>
        <td><a href="${data.url}" target="_blank">Link</a></td>
        <td>${data.description}</td>
        <td><button class="edit-button">Edit</button></td>
        <td><button class="remove-button">Remove</button></td>
      </tr>`;
}

//---render----------------------------------------------------

function renderPosts(state, element) {
  let postsHTML = state.posts.map(function(data, i) {
    return postTemplate(state, data, i);
  });
  element.html(postsHTML);
}


// user render goes here (@todo)
function renderUsers(state, element) {
  console.log('code goes here for render users');
}

//---jQuery ui forms----------------------------------------------------


// "Create new post" dialog
$( '#dialog-modal' ).dialog({
  autoOpen: false,
  height: 400,
  width: 350,
  modal: true,
  buttons: {
    'Submit':  createPost,
    Cancel: function() {
      $( '#dialog-modal' ).dialog( 'close' );
    //   form[ 0 ].reset();
    //   allFields.removeClass( 'ui-state-error' );
    }
  }
});
// @(help)
// 1. Need form reset to function

// "Edit post" dialog
let grabThisGuy;

$( '#edit-dialog' ).dialog({
  autoOpen: false,
  height: 400,
  width: 350,
  modal: true,
  buttons: {
    OK: function() {
      $( '#response' ).html( 'The value entered was ' + $( '#myInput' ).val());
      grabThisGuy.find( '.header' ).html($( '#myInput' ).val());
      $( this ).dialog( 'close' );
    },
    Cancel: function() {
      $( '#response' ).html( 'The Cancel button was clicked' );
      $( this ).dialog( 'close' );
    }
  }
});

//---event listeners----------------------------------------------------

// Open "create new post" dialog
$( '#create-post' ).on( 'click', function() {
  $('#dialog-modal').dialog( 'open' );
});

//  Create
var dialog = function() {
  $( '#dialog-form' ).on( 'submit', function(event) {
    event.preventDefault();
    alert('alert');
  });
};

// (@help)
// 1. how to reset the form


// Edit
$( '.tbody' ).on( 'click', '.edit-button', function() {
  $('#edit-dialog').dialog( 'open' );
  let grabThisGuy = $(event.currentTarget).closest( 'td' );
  // $( '#myInput' ).val(grabThisGuy.find( '.header' ).html());
  console.log(grabThisGuy);
  console.log('i clicked');



  // console.log('Step 3: ', state.posts[0]);

});
// (@help)
// 1. #edit-button on click does not open #edit-dialog  (sort of fix, create dialog in html)



// Delete
$( '.tbody'  ).on( 'click', '.remove-button' ,function(event){
  event.preventDefault();
  const postId = $(event.currentTarget).closest( 'tr' ).data('post-id');
  deletePost(state, postId);
});
// @(help)
// 1. have not tested this yet, need create to function first

//--Document Ready----------------------------------------------------

$(function() {
  console.log( 'ready!' );
  $('#dialog-form').on('submit', function (event) {
    event.preventDefault();
    createPost(state);
  } );
  // dialog();
  getPosts();
});


// Reminder to change:    <script src="app.js"></script>

  // $.getJSON('https://tranquil-plateau-10397.herokuapp.com/api/posts', {}, function(data) {
  //   console.log(data);
  // }).fail()
  // Don’t forget your error handling! `$.getJSON()` has a `.fail()` method you can chain on the end; inside, you can pass a function to handle whatever comes back in the event of a bad response.
