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


document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);


