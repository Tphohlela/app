create table players(
	id serial not null primary key,
	name text not null unique,
	score int not null,
	level int not null
);

insert into players (name, score, level) values ('Mo', 0, 1 );
insert into players (name, score, level) values ('Thabi', 0, 1);
insert into players (name, score, level) values ('Ncesh', 0, 1);

create table attempt(
	id serial not null primary key,
	player_id int not null,
	foreign key (player_id) references players(id),
	exercise_id int,
	foreign key (exercise_id) references exercise(id),
	counter int not null,
	status text not null
);

insert into attempt (player_id, exercise_id, counter, status) values (1, 1, 0,'Busy');
insert into attempt (player_id, exercise_id, counter, status) values (2, 2, 0,'Busy');
insert into attempt (player_id, exercise_id, counter, status) values (3, 3, 0,'Busy');



create table exercise(
	id serial not null primary key,
	word text not null unique,
	level int not null
);

insert into exercise (word, level) values ('Umngqusho', 1);
insert into exercise (word, level) values ('Ingcambu', 2);
insert into exercise (word, level) values ('Ingca', 3);
