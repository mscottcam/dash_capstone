'use strict';

let state = {
  users: [],
  posts: []
};

// state mods //

// let createPost = function(state, header, url, description) {
//   state.posts.push({
//     header: header,
//     url: url,
//     description: description,
//     date_created: new Date(), // what is the date here?
//     week: 7, // will need to update this
//     archive: false // may use this with delete, toggle to archive rather than delete completely
//   });
//   renderPost(state, $('.post-class'));
// };

// let addPost = function(state, )


let renderUser = function (state, user) {
  let userHTML = state.users.map(function(user, i) {
    return (`
      <div class="user" data-user-index="${i}"
        <span>${user.firtName} ${user.lastName}</span>
        <i class="fa fa-slack"></i>
        <i class="fa fa-github"></i>
        <i class="fa fa-envelope"></i>
        `);
  });
  user.html(userHTML);
};


// execute when page loads

$( function() {

  var dialog, form,

    header = $( '#header' ),
    url = $( '#url' ),
    description = $( '#description' ),
    allFields = $( [] ).add( header ).add( url ).add( description ),
    tips = $( '.validateTips' );

  function updateTips( t ) {
    tips
        .text( t )
        .addClass( 'ui-state-highlight' );
    setTimeout(function() {
      tips.removeClass( 'ui-state-highlight', 1500 );
    }, 500 );
  }

  function checkLength( o, n, min, max ) {
    if ( o.val().length > max || o.val().length < min ) {
      o.addClass( 'ui-state-error' );
      updateTips( 'Length of ' + n + ' must be between ' +
          min + ' and ' + max + '.' );
      return false;
    } else {
      return true;
    }
  }

  function addNewPost() {
    var valid = true;
    allFields.removeClass( 'ui-state-error' );

    valid = valid && checkLength( header, 'header', 3, 200 );
    valid = valid && checkLength( url, 'url', 6, 500 );
    valid = valid && checkLength( description, 'description', 5, 200 );

    if ( valid ) {
      $( '#posts tbody' ).append( `
        <tr>
          <td>${header.val()}</td>
          <td><a href="${url.val()}" target="_blank">Link</a></td>
          <td>${description.val()}</td>
          <td><button class="edit-button">Edit</button></td>
          <td><button class="remove-button">Remove</button></td>
        </tr>
        `);
      dialog.dialog( 'close' );
    }
    return valid;
  }

  dialog = $( '#dialog-form' ).dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
      'Create a new post': addNewPost,
      Cancel: function() {
        dialog.dialog( 'close' );
        form[ 0 ].reset();
        allFields.removeClass( 'ui-state-error' );
      }
    }
  });


  form = dialog.find( 'form' ).on( 'submit', function( event ) {
    event.preventDefault();
    addNewPost();
    const postAdded = ( $('#header').val() ); // need to get this grab working (@help)
    console.log('user added: ' + postAdded);
    // need to re-render here so that remove button is functional for testing (@help)

  });

  // Open create post pop up dialog
  $( '#create-post' ).button().on( 'click', function() {
    dialog.dialog( 'open' );
  });
} );




// Create after page loaded

	// The "remove" button, should remove closest post (@help)
$('.tbody').on('click', '.remove-button' ,function(event){
  event.preventDefault();

let tbodyTest = $('.tbody').val();
console.log(tbodyTest);

  // const clickedItem = $(this).closest($('tr')); //.attr('id')
  //
  // console.log('closest item user clicked on is: ' + clickedItem);

  // removeItem(state, clickedItem);
  // render(state, $('.bodder'));
});

  //
  // $.getJSON('https://tranquil-plateau-10397.herokuapp.com/api/posts', {}, function(data) {
  //   console.log(data);
  // }).fail()
  // Don’t forget your error handling! `$.getJSON()` has a `.fail()` method you can chain on the end; inside, you can pass a function to handle whatever comes back in the event of a bad response.
