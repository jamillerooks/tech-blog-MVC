const newFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the new-post-form
  const title = document.querySelector('#new-title').value.trim();
  const post_detail = document.querySelector('#new-detail').value.trim();

  // If successful, redirect the browser to the dashboard page
  //if (title && detail) {
  const response = await fetch(`/api/posts/`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_detail,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Post failed');
  }
};
//};

//Edit post
const editFormHandler = async (event) => {
  event.preventDefault();

  const post_id = document.querySelector('#post-id').value.trim();
  const titleEdit = document.getElementById('post-title').value.trim();
  const detailEdit = document.getElementById('post-detail').value.trim();

  const response = await fetch('/api/posts/' + post_id, {
    method: 'PUT',
    body: JSON.stringify({ titleEdit, detailEdit }),

    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Edit request failed');
  }
};

//Delete post
const deletePostHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Delete request failed');
    }
  }
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deletePostHandler);
