select comment_id, user_comment, firstname, lastname from user_comments
join users on user_comments.user_id = users.person_id;