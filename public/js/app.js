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
    week = $('#week').val(),
    description = $('#description').val();

  $.getJSON('/api/posts/', (json) => {
    // console.log(json);
    state.posts = json;
    createPost(state, header, url, week, description);
    renderPosts(state, $('.tbody'));
  // $('#dialog-form').dialog( 'close' );
  });
}




// Create Post
let createPost = function(state) {


  let
    header = $('#header').val(),
    url = $('#url').val(),
    week = $('#week').val(),
    description = $('#description').val();
  const addObj = {header: header, url: url, week: week, description: description};

  // console.log('Step 2: ', state.posts);
  state.posts.push(addObj);
  console.log('Step 1: ', description);
  console.log('Step 1: ', week);
  $( '#dialog-modal' ).dialog( 'close' );
  // console.log('Step 3: ', state.posts[0]);
  renderPosts(state, $('.tbody'));
};



// Edit Post
let editPost = function(state, header, url, week, description) {
  console.log('code here');
//   renderPosts(state, $('.tbody'));
};


// Delete Post
let deletePost = function(state, mongoId) {

  $.ajax({
    url: '/api/posts/' + mongoId,
    dataType: 'json',
    type: 'delete',
    contentType: 'application/json',
    data: JSON.stringify(),
    success: function(json){
      console.log('delete should delete');
    },
  });
  state.posts.splice(mongoId, 1);
  renderPosts(state, $('.tbody'));

};

// Create new user/profile
let createUser = function(state, data) {
  console.log('code here', data);
};


//---template----------------------------------------------------

function postTemplate(state, data, i){
  return `
      <tr class="table-row" data-post-id="${data.id}">
        <td id="edit-header">${data.header}</td>
        <td id="edit-url"><a href="${data.url}" target="_blank">Link</a></td>
        <td>${data.week}</td>
        <td id="edit-description">${data.description}</td>
        <td><button class="edit-button">Edit</button></td>
        <td><button class="remove-button">Remove</button></td>
      </tr>
      `;
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
      console.log(grabthisGuy);
      grabThisGuy.find( '#edit-header' ).html();
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

  // 1. how do we get these guys into the edit dialog
  $('#edit-header').html()
  $('#edit-url').html()
  $('#edit-description').html()


    // 2. get rid of extra close and submit on the create dialog
    // 3. same for edit dialog
    // 4. remove function not functional
    // 5. data not persisting on app
    // 6. ascending function for posts

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
