const commentFormHandler = async function (event) {
	event.preventDefault();

	const post_id = document.querySelector('.new-comment-form').dataset.postid;

	const comment_detail = document.querySelector('#comment_detail').value.trim();

	if (comment_detail) {
		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({
				post_id,
				comment_detail,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		document.location.reload();
	}
};

document
	.querySelector('.new-comment-form')
	.addEventListener('submit', commentFormHandler);