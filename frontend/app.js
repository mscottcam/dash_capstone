'use strict';

// let state = {
//   users: [
//     {firstName: ,
//      lastName: ,
//      slack: ,
//      email: ,
//      github: ,
//      cohort:
//     }
//   ],
//   posts: [
//     {
//       header: ,
//       url: ,
//       description: ,
//       date_created: ,
//       week: ,
//       archive:
//     }
//   ]
// };

let state = {
  users: [],
  posts: []
};

// state mods //

let createPost = function(state, header, url) {
  state.posts.push({
    header: header,
    url: url,
    description: text,
    date_created: new Date(),
    week: 7,
    archive: false
  });
  renderPost(state, $('.post-class'));
};


// render functions //

let renderPost = function (state, element){
  let postHTML = state.posts.map(function(post, i){
    return (`
      <div class="post-class" data-post-index="${i}">
        <h5>${post.header} | <a href="${post.url}" target="_blank">${post.url}</a></h5>
        <p>${post.description}</p>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      `);
  });
  element.html(postHTML);
};

let renderUser = function (state, element) {
  let userHTML = state.users.map(function(user, i) {
    return (`
      <div class="user" data-user-index="${i}"
        <span>${user.firtName} ${user.lastName}</span>
        <i class="fa fa-slack"></i>
        <i class="fa fa-github"></i>
        <i class="fa fa-envelope"></i>
        `)
  })
}


// event listeners

// CREATE
	// USER clicked on the "CREATE" button
$('.week-container').on('click', '.create-button' ,function(event){
  event.preventDefault();

		//const clickedItem = $(this).closest($('li')).attr('id');

		// console.log("closest item user clicked on is: " + clickedItem); //closest item user clicked on is: toiletpaper
  const targetId = $(this).closest('div'); //.data('item-index')
  console.log('closest item user clicked on is: ' + targetId);

  // checkItem(appState, targetId);
	// 	// checkItem(appState, clickedItem);
  // render(appState, $('.shopping-list'));

});
// EDIT
// DELETE



// execute
$(function(){
  $.getJSON('http://localhost:8080/api/posts', {}, function(data) {
    console.log(data);
  });
  // .fail() need this
});
