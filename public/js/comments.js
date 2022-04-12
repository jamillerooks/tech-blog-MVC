const commentFormHandler = async function (event) {
  event.preventDefault();

  
  const post_id = window.location
  .toString().split('/')[
  window.location.toString().split('/').length - 1];
  
  const comment_detail = document
  .querySelector('#new-comment-detail').value.trim();
  

  if (comment_detail) {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_detail,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    document.location.reload();
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentFormHandler);
