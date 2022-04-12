//Edit post
const editFormHandler = async (event) => {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    const title = document.getElementById('post-title').value.trim();
    const post_detail = document.getElementById('post-detail').value.trim();
  
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ 
        post_id: id, 
        title, 
        post_detail }),
  
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  };

  document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);