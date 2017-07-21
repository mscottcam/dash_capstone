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
    // createPost(state, header, url, week, description);
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


  $.ajax({
    url: '/api/posts/',
    dataType: 'json',
    type: 'post',
    contentType: 'application/json',
    data: JSON.stringify(addObj),
    success: function(data){
      console.log('date: ', data);
      state.posts.push(data);
      $( '#dialog-modal' ).dialog( 'close' );
      renderPosts(state, $('.tbody'));
    },
  });
};



// Edit Post
let editPost = function(state) {
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
      getPosts();
      // renderPosts(state, $('.tbody'));
    },
  });


};

// Create new user/profile
let createUser = function(state, data) {
  console.log('code here', data);
};


//---template----------------------------------------------------

function postTemplate(state, data){
  // console.log('data.id: ', data.id);
  return `
      <tr class="table-row" data-post-id="${data.id}">
        <td id="edit-header">${data.header}</td>
        <td id="edit-url"><a href="${data.url}" target="_blank">Link</a></td>
        <td>${data.week} </td>
        <td id="edit-description">${data.description}</td>
        <td><button class="edit-button">Edit</button></td>
        <td><button class="remove-button">Remove</button></td>
      </tr>
      `;
}

//---render----------------------------------------------------

function renderPosts(state, element) {
  let postsHTML = state.posts.map(function(data) {
    return postTemplate(state, data);
  });
  element.html(postsHTML);
}

// render edit dialog to populate fields here
function renderEdit(state, element) {
  // code here
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
    // 'Submit':  createPost,
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
// var dialog = function() {
//   $( '#dialog-form' ).on( 'submit', function(event) {
//     event.preventDefault();
//     alert('alert');
//   });
// };





// Edit
$( '.tbody' ).on( 'click', '.edit-button', function() {
  $('#edit-dialog').dialog( 'open' );
  
  // grab id from state
  const postId = $(event.currentTarget).closest( 'tr' ).data('post-id');
  editPost(state, postId); // find actual id

  // click submit
  // ajax call
  // success, call getPost

  // 2. Put data in dialog
  $('#edit-header').html(header);

  console.log(header);

  // console.log('Step 3: ', state.posts[0]);
  // 1. Grab the data
  // let header = $('#edit-header').html();
  // let  url = $('#edit-url').html();
  // let description =  $('#edit-description').html();
});




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
