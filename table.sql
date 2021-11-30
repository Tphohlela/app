create table players(
	id serial not null primary key,
	name text not null unique,
	score int not null,
	level int not null
);

create table attempt(
	id serial not null primary key,
	player_id int not null,
	foreign key (player_id) references players(id),
	exercise_id int,
	foreign key (exercise_id) references exercise(id),
	counter int not null,
	status text not null
);

create table exercise(
	id serial not null primary key,
	word text not null unique,
	level int not null
);





-- insert into players (id, name) values (1, 'Moddy');
insert into exercise (word, level) values ('Umngqusho', 1);
insert into exercise (word, level) values ('Ingcambu', 2);
insert into exercise (word, level) values ('Ingca', 3);




