insert into users
(firstname, lastname, email, pass)
values 
(${firstname}, ${lastname}, ${email}, ${password})
returning *