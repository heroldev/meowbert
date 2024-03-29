BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "pet_count" (
	"id"	INTEGER NOT NULL,
	"user_id"	varchar(50) NOT NULL,
	"type"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "qotd_unused" (
	"id"	INTEGER NOT NULL,
	"question"	varchar(250) NOT NULL,
	"date_added"	date DEFAULT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "qotd_channel" (
	"id"	INTEGER NOT NULL,
	"guild_id"	varchar(50) NOT NULL,
	"channel_id"	varchar(50) DEFAULT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "qotd_used" (
	"id"	INTEGER NOT NULL,
	"qotd_id"	varchar(50) NOT NULL,
	"question"	varchar(250) NOT NULL,
	"date_used"	date NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "qotd_queue" (
	"id"	INTEGER NOT NULL,
	"question"	varchar(250) NOT NULL,
	"user_id"	varchar(50) NOT NULL,
	"date_added"	date DEFAULT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO "qotd_unused" VALUES (1,'What’s the most ridiculous fact you know?','2022-05-23T21:45:44.752Z');
INSERT INTO "qotd_unused" VALUES (2,'What is the funniest joke you know by heart?','2022-05-23T21:45:58.945Z');
INSERT INTO "qotd_unused" VALUES (3,'In 40 years, what will people be nostalgic for?','2022-05-23T21:46:13.478Z');
INSERT INTO "qotd_unused" VALUES (4,'How do you feel about putting pineapple on pizza?','2022-05-23T21:46:23.132Z');
INSERT INTO "qotd_unused" VALUES (5,'What’s the best type of cheese?','2022-05-23T21:46:37.076Z');
INSERT INTO "qotd_unused" VALUES (6,'In one sentence, how would you sum up the internet?','2022-05-23T21:46:55.780Z');
INSERT INTO "qotd_unused" VALUES (7,'What are some fun ways to answer everyday questions like “how’s it going” or “what do you do”?','2022-05-23T21:47:20.334Z');
INSERT INTO "qotd_unused" VALUES (8,'If someone asked to be your apprentice and learn all that you know, what would you teach them?','2022-05-23T21:47:42.248Z');
INSERT INTO "qotd_unused" VALUES (9,'If the all the States in the USA were represented by food, what food would each state be represented by?','2022-05-23T21:48:41.831Z');
INSERT INTO "qotd_unused" VALUES (10,'What is something that is really popular now, but in 5 years everyone will look back on and be embarrassed by?','2022-05-23T21:48:58.720Z');
INSERT INTO "qotd_unused" VALUES (11,'What would you do if you only had 24 hours to live?','2022-05-23T21:49:10.216Z');
INSERT INTO "qotd_unused" VALUES (12,'What is the soundtrack of your life?','2022-05-23T21:49:20.625Z');
INSERT INTO "qotd_unused" VALUES (13,'What’s your least favorite planet?','2022-05-23T21:49:40.197Z');
INSERT INTO "qotd_unused" VALUES (14,'What’s your secret talent?','2022-05-23T21:49:50.382Z');
INSERT INTO "qotd_unused" VALUES (15,'What’s one thing you wish we knew five years ago?','2022-05-23T21:49:59.172Z');
INSERT INTO "qotd_unused" VALUES (16,'What is your most favorite GIF?','2022-05-23T21:50:10.332Z');
INSERT INTO "qotd_unused" VALUES (17,'What’s your most hated mode of transportation?','2022-05-23T21:50:19.165Z');
INSERT INTO "qotd_unused" VALUES (18,'What have you forgotten today?','2022-05-23T21:50:26.321Z');
INSERT INTO "qotd_unused" VALUES (19,'Have you ever had a D.I.Y. project go wrong?','2022-05-23T21:50:33.371Z');
INSERT INTO "qotd_unused" VALUES (20,'Did your high school/college have any weird traditions?','2022-05-23T21:50:41.811Z');
INSERT INTO "qotd_unused" VALUES (21,'What was your favorite subject in school?','2022-05-23T21:50:52.007Z');
INSERT INTO "qotd_unused" VALUES (22,'What was your dumbest field trip like?','2022-05-23T21:50:59.855Z');
INSERT INTO "qotd_unused" VALUES (23,'What food have you never eaten but would really like to try?','2022-05-23T21:51:09.994Z');
INSERT INTO "qotd_unused" VALUES (24,'What’s something you really resent paying for?','2022-05-23T21:51:18.561Z');
INSERT INTO "qotd_unused" VALUES (25,'What movie can you watch over and over without ever getting tired of?','2022-05-23T21:51:32.530Z');
INSERT INTO "qotd_unused" VALUES (26,'When you are old, what do you think children will ask you to tell stories about?','2022-05-23T21:52:12.343Z');
INSERT INTO "qotd_unused" VALUES (27,'What’s the most expensive thing you’ve broken?','2022-05-23T21:52:22.671Z');
INSERT INTO "qotd_unused" VALUES (28,'What TV show character would it be the most fun to change places with for a week?','2022-05-23T21:52:35.137Z');
INSERT INTO "qotd_unused" VALUES (29,'If magic was real, what spell would you try to learn first?','2022-05-23T21:52:44.303Z');
INSERT INTO "qotd_unused" VALUES (30,'What game have you spent the most hours playing?','2022-05-23T21:52:53.264Z');
INSERT INTO "qotd_unused" VALUES (31,'What’s the craziest conversation you’ve overheard?','2022-05-23T21:53:01.413Z');
INSERT INTO "qotd_unused" VALUES (32,'What movie, picture, or video always makes you laugh no matter how often you watch it?','2022-05-23T21:53:09.739Z');
INSERT INTO "qotd_unused" VALUES (33,'What artist or band do you always recommend when someone asks for a music recommendation?','2022-05-23T21:53:22.778Z');
INSERT INTO "qotd_unused" VALUES (34,'What’s the most addicted to a game you’ve ever been?','2022-05-23T21:53:35.119Z');
INSERT INTO "qotd_unused" VALUES (35,'What tips or tricks have you picked up from your job / jobs?','2022-05-23T21:53:43.969Z');
INSERT INTO "qotd_unused" VALUES (36,'What outdoor activity haven’t you tried, but would like to?','2022-05-23T21:53:51.880Z');
INSERT INTO "qotd_unused" VALUES (37,'What songs hit you with a wave of nostalgia every time you hear them?','2022-05-23T21:54:02.493Z');
INSERT INTO "qotd_unused" VALUES (38,'What’s your worst example of procrastination?','2022-05-23T21:54:11.152Z');
INSERT INTO "qotd_unused" VALUES (39,'What’s the silliest thing you’ve seen someone get upset about?','2022-05-23T21:54:20.516Z');
INSERT INTO "qotd_unused" VALUES (40,'What word is a lot of fun to say?','2022-05-23T21:54:29.143Z');
INSERT INTO "qotd_unused" VALUES (41,'Where’s your go to restaurant for amazing food?','2022-05-23T21:54:36.621Z');
INSERT INTO "qotd_unused" VALUES (42,'If you built a themed hotel, what would the theme be and what would the rooms look like?','2022-05-23T21:54:45.556Z');
INSERT INTO "qotd_unused" VALUES (43,'What brand are you most loyal to?','2022-05-23T21:54:57.316Z');
INSERT INTO "qotd_unused" VALUES (44,'What’s the most recent show you’ve binge watched?','2022-05-23T21:55:20.313Z');
INSERT INTO "qotd_unused" VALUES (45,'What are some misconceptions about your hobby?','2022-05-23T21:55:36.538Z');
INSERT INTO "qotd_unused" VALUES (46,'What did you Google last?','2022-05-23T21:55:48.731Z');
INSERT INTO "qotd_unused" VALUES (47,'What’s the most frustrating product you own?','2022-05-23T21:55:55.968Z');
INSERT INTO "qotd_unused" VALUES (48,'What’s the coolest animal you’ve seen in the wild?','2022-05-23T21:56:05.682Z');
INSERT INTO "qotd_unused" VALUES (49,'What’s the longest rabbit hole you’ve been down?','2022-05-23T21:56:13.398Z');
INSERT INTO "qotd_unused" VALUES (50,'What’s incredibly cheap and you would pay way more for?','2022-05-23T21:56:20.422Z');
INSERT INTO "qotd_unused" VALUES (51,'What company do you despise?','2022-05-23T21:56:29.266Z');
INSERT INTO "qotd_unused" VALUES (52,'What’s the weirdest thing you’ve found lying on the ground / side of the road?','2022-05-23T21:56:40.270Z');
INSERT INTO "qotd_unused" VALUES (53,'What’s the creepiest tech out there?','2022-05-23T21:56:47.606Z');
INSERT INTO "qotd_unused" VALUES (54,'What outdated slang do you use on a regular basis?','2022-05-23T21:56:57.030Z');
INSERT INTO "qotd_unused" VALUES (55,'What is your favorite kind of nut?','2022-05-23T21:57:24.599Z');
INSERT INTO "qotd_unused" VALUES (56,'What was the proudest gaming achievement in your childhood?','2022-05-23T21:57:32.690Z');
INSERT INTO "qotd_unused" VALUES (57,'What line in a song is constantly stuck in your head?','2022-05-23T21:57:46.290Z');
INSERT INTO "qotd_unused" VALUES (58,'What is your default Subway order?','2022-05-23T21:57:55.539Z');
INSERT INTO "qotd_unused" VALUES (59,'What is the longest you have stayed awake?','2022-05-23T21:58:07.286Z');
INSERT INTO "qotd_unused" VALUES (60,'What is your dream collectable item?','2022-05-23T21:58:15.318Z');
INSERT INTO "qotd_unused" VALUES (61,'What is the most expensive collectable you own?','2022-05-23T21:58:27.754Z');
INSERT INTO "qotd_unused" VALUES (62,'What do you consider when you put together an outfit?','2022-05-23T21:58:43.392Z');
INSERT INTO "qotd_unused" VALUES (63,'How do you like your steak cooked?','2022-05-23T21:58:58.006Z');
INSERT INTO "qotd_unused" VALUES (64,'What food do you crave for?','2022-05-23T21:59:09.691Z');
INSERT INTO "qotd_unused" VALUES (65,'What time of day do you routinely shower?','2022-05-23T21:59:21.509Z');
INSERT INTO "qotd_unused" VALUES (66,'How many meals do you usually eat in a day?','2022-05-23T21:59:30.437Z');
INSERT INTO "qotd_unused" VALUES (67,'What is your favorite kind of donut?','2022-05-23T21:59:37.759Z');
INSERT INTO "qotd_unused" VALUES (68,'What was your dream job growing up?','2022-05-23T22:02:12.528Z');
INSERT INTO "qotd_unused" VALUES (69,'Do you watch or listen to something while you work? If so, what kind of content do you consume?','2022-05-23T22:02:21.025Z');
INSERT INTO "qotd_unused" VALUES (70,'What was your favorite field trip you''ve taken while at school?','2022-05-23T22:02:29.354Z');
INSERT INTO "qotd_unused" VALUES (71,'What is your favorite genres/type of music?','2022-05-23T22:02:37.013Z');
INSERT INTO "qotd_unused" VALUES (72,'What was the first cartoon you remember watching?','2022-05-23T22:02:48.500Z');
INSERT INTO "qotd_unused" VALUES (73,'What''s a video game you always end up going back to?','2022-05-23T22:03:02.012Z');
INSERT INTO "qotd_unused" VALUES (74,'For those who drink, what is your favorite alcoholic beverage? For those who don''t drink, what is your favorite beverage (carbonated or otherwise), if any?','2022-05-23T22:04:11.416Z');
INSERT INTO "qotd_unused" VALUES (75,'What is a fun game mechanic that comes to mind?','2022-05-23T22:04:24.581Z');
INSERT INTO "qotd_unused" VALUES (76,'What alternate form of transport would you like to use instead of driving?','2022-05-23T22:04:49.182Z');
INSERT INTO "qotd_unused" VALUES (77,'What''s the lowest acceptable temperature to wear shorts in?','2022-05-23T22:04:57.434Z');
INSERT INTO "qotd_unused" VALUES (78,'What''s a meme that will never stop being funny to you?','2022-05-23T22:05:08.632Z');
INSERT INTO "qotd_unused" VALUES (79,'What was the most difficult thing you have done in a video game?','2022-05-23T22:05:20.616Z');
INSERT INTO "qotd_unused" VALUES (80,'What is your preffered device to access the internet?','2022-05-23T22:05:33.600Z');
INSERT INTO "qotd_unused" VALUES (81,'What was the worst school lunch you''ve had?','2022-05-23T22:05:42.985Z');
INSERT INTO "qotd_unused" VALUES (82,'What is your favorite kind of pizza?','2022-05-23T22:05:56.254Z');
INSERT INTO "qotd_unused" VALUES (83,'What is your preferred cereal?','2022-05-23T22:06:03.920Z');
INSERT INTO "qotd_unused" VALUES (84,'What is your favorite time of day?','2022-05-23T22:06:12.238Z');
INSERT INTO "qotd_unused" VALUES (85,'What''s a location thats forever burned into your memory?','2022-05-23T22:06:19.253Z');
INSERT INTO "qotd_unused" VALUES (86,'What''s the highest acceptable temperature to wear jackets in?','2022-05-23T22:06:29.155Z');
INSERT INTO "qotd_unused" VALUES (87,'How close do you follow the speed limit?','2022-05-23T22:06:36.505Z');
INSERT INTO "qotd_unused" VALUES (88,'How do you like your bread toasted?','2022-05-23T22:06:44.715Z');
INSERT INTO "qotd_unused" VALUES (89,'What is your favorite kind of pasta?','2022-05-23T22:06:57.595Z');
INSERT INTO "qotd_unused" VALUES (90,'What''s your favorite restaurant?','2022-05-23T22:07:08.094Z');
INSERT INTO "qotd_unused" VALUES (91,'What is your favorite fabric?','2022-05-23T22:07:16.367Z');
INSERT INTO "qotd_unused" VALUES (92,'What is your favorite candy?','2022-05-23T22:07:23.696Z');
INSERT INTO "qotd_unused" VALUES (93,'What's your hobby of choice?','2022-05-23T22:07:31.867Z');
INSERT INTO "qotd_unused" VALUES (94,'What''s a place you dream of going to?','2022-05-23T22:07:40.722Z');
INSERT INTO "qotd_unused" VALUES (95,'What is your favorite kind of cookie?','2022-05-23T22:07:50.368Z');
INSERT INTO "qotd_unused" VALUES (96,'When have you first played Minecraft, if at all?','2022-05-23T22:08:12.922Z');
INSERT INTO "qotd_unused" VALUES (97,'What is your favorite type of seafood?','2022-05-23T22:08:36.711Z');
INSERT INTO "qotd_unused" VALUES (98,'What kind of milk do you regularly buy?','2022-05-23T22:08:44.881Z');
INSERT INTO "qotd_unused" VALUES (99,'What was your first phone?','2022-05-23T22:08:53.722Z');
INSERT INTO "qotd_unused" VALUES (100,'What is your favorite cut of steak?','2022-05-23T22:09:03.214Z');
INSERT INTO "qotd_unused" VALUES (101,'What is your favorite place you visted while on vacation?','2022-05-23T22:09:11.119Z');
INSERT INTO "qotd_unused" VALUES (102,'Aesthetically speaking, what is your favorite color of beach sand?','2022-05-23T22:09:20.680Z');
INSERT INTO "qotd_unused" VALUES (103,'What franchise pizza company makes the best pizza?','2022-05-23T22:09:30.099Z');
INSERT INTO "qotd_unused" VALUES (104,'What is/was your favorite activity to do on the beach?','2022-05-23T22:09:37.949Z');
INSERT INTO "qotd_unused" VALUES (105,'What is/was your favorite activity to do in the snow?','2022-05-23T22:09:45.211Z');
INSERT INTO "qotd_unused" VALUES (106,'Why?','2022-05-23T22:11:09.273Z');
INSERT INTO "qotd_unused" VALUES (107,'What is the longest road trip you''ve been on?','2022-05-23T22:11:19.567Z');
INSERT INTO "qotd_unused" VALUES (108,'What is the longest amount of time you''ve waited for something?','2022-05-23T22:11:28.582Z');
INSERT INTO "qotd_unused" VALUES (109,'What is your favorite thing to lounge on in your house?','2022-05-23T22:11:37.609Z');
INSERT INTO "qotd_unused" VALUES (110,'What is your favorite thing to lounge on in your house?','2022-05-23T22:11:45.768Z');
INSERT INTO "qotd_unused" VALUES (111,'How do you like your pillows?','2022-05-23T22:11:52.943Z');
INSERT INTO "qotd_unused" VALUES (112,'How do you like your eggs?','2022-05-23T22:12:00.930Z');
INSERT INTO "qotd_unused" VALUES (113,'What is the best and worst flag?','2022-05-23T22:12:08.394Z');
INSERT INTO "qotd_unused" VALUES (114,'What is the best and worst flag?','2022-05-23T22:12:15.403Z');
INSERT INTO "qotd_unused" VALUES (115,'What is your "wind down" routine?','2022-05-23T22:12:22.151Z');
INSERT INTO "qotd_unused" VALUES (116,'What programming language do you think meowbert is written in?','2022-05-23T22:13:05.345Z');
INSERT INTO "qotd_unused" VALUES (117,'What fast food chain has the best fries?','2022-05-23T22:13:13.679Z');
INSERT INTO "qotd_unused" VALUES (118,'Pancakes or Waffles?','2022-05-23T22:13:20.023Z');
INSERT INTO "qotd_unused" VALUES (119,'Do you take naps during the day?','2022-05-23T22:13:26.539Z');
INSERT INTO "qotd_unused" VALUES (120,'What fast food chain has the best chicken sandwich?','2022-05-23T22:13:33.717Z');
INSERT INTO "qotd_unused" VALUES (121,'What fast food chain has the best chicken?','2022-05-23T22:13:40.736Z');
INSERT INTO "qotd_unused" VALUES (122,'What was your first computer?','2022-05-23T22:13:53.812Z');
INSERT INTO "qotd_unused" VALUES (123,'What is your favorite painting?','2022-05-23T22:14:03.389Z');
INSERT INTO "qotd_unused" VALUES (124,'What is your favorite kind of instant ramen?','2022-05-23T22:14:17.739Z');
INSERT INTO "qotd_unused" VALUES (125,'What is your favorite kind of shoes?','2022-05-23T22:14:26.725Z');
INSERT INTO "qotd_unused" VALUES (126,'What is your favorite historical event?','2022-05-23T22:14:35.950Z');
INSERT INTO "qotd_unused" VALUES (127,'What Fantasy/Sci-Fi weapon/tool you would like to use?','2022-05-23T22:14:53.448Z');
INSERT INTO "qotd_unused" VALUES (128,'What is the tallest thing in your fridge?','2022-05-23T22:15:04.351Z');
INSERT INTO "qotd_unused" VALUES (129,'Would you play an 18 hole set of golf?','2022-05-23T22:15:18.171Z');
INSERT INTO "qotd_unused" VALUES (130,'What''s the worst kind of intersection?','2022-05-23T22:15:28.288Z');
INSERT INTO "qotd_unused" VALUES (131,'What organization/brand would be funny to see as a streetwear trend? (As an example: NASA)','2022-05-23T22:15:44.089Z');
INSERT INTO "qotd_unused" VALUES (132,'What is your preffered web browser?','2022-05-23T22:15:51.886Z');
INSERT INTO "qotd_unused" VALUES (133,'Boneless or Bone-in Wings?','2022-05-23T22:16:00.223Z');
INSERT INTO "qotd_unused" VALUES (134,'Favorite kind of bread?','2022-05-23T22:16:12.163Z');
INSERT INTO "qotd_unused" VALUES (135,'What is your favorite type of USB?','2022-05-23T22:16:21.017Z');
INSERT INTO "qotd_unused" VALUES (136,'What is your favorite subreddit? also, what is your favorite social media platform?','2022-05-23T22:16:50.583Z');
INSERT INTO "qotd_unused" VALUES (137,'What is the rarest video game item you have obtained and how long did it take you to get it?','2022-05-23T22:16:59.993Z');
INSERT INTO "qotd_unused" VALUES (138,'Favorite snack?','2022-05-23T22:17:08.688Z');
INSERT INTO "qotd_unused" VALUES (139,'What is your favorite content to watch/listen on YouTube?','2022-05-23T22:17:20.040Z');
INSERT INTO "qotd_unused" VALUES (140,'Do you collect anything? If so, what do you collect?','2022-05-23T22:17:30.161Z');
INSERT INTO "qotd_unused" VALUES (141,'What is the worst hotel room you have ever stayed in?','2022-05-23T22:17:39.449Z');
INSERT INTO "qotd_unused" VALUES (142,'What is the longest amount of time you spent on a plane?','2022-05-23T22:17:59.906Z');
INSERT INTO "qotd_unused" VALUES (143,'What''s the longest amount of time you have spent asleep?','2022-05-23T22:18:07.991Z');
INSERT INTO "qotd_unused" VALUES (144,'What is the worst instance where you have forgotten something?','2022-05-23T22:18:25.303Z');
INSERT INTO "qotd_unused" VALUES (145,'What is your favorite flavor of Pop-Tart?','2022-05-23T22:18:40.405Z');
INSERT INTO "qotd_unused" VALUES (146,'If you were to be sworn into office, what book would you swear on?','2022-05-23T22:18:51.405Z');
INSERT INTO "qotd_unused" VALUES (147,'What is your favorite kind of off-brand soda?','2022-05-23T22:19:00.016Z');
INSERT INTO "qotd_unused" VALUES (148,'What is the longest amount of time you spent in traffic?','2022-05-23T22:19:12.145Z');
INSERT INTO "qotd_unused" VALUES (149,'What is your favorite US Highway?','2022-05-23T22:19:19.162Z');
INSERT INTO "qotd_unused" VALUES (150,'In FPS games, how do you prefer your sensitivity?','2022-05-23T22:19:33.881Z');
INSERT INTO "qotd_unused" VALUES (151,'What is your usual process when waking up?','2022-05-23T22:19:50.415Z');
INSERT INTO "qotd_unused" VALUES (152,'What is the most expensive personal project you have ever taken on?','2022-05-23T22:19:57.949Z');
INSERT INTO "qotd_unused" VALUES (153,'How long was recess at your elementary school?','2022-05-23T22:20:06.171Z');
INSERT INTO "qotd_unused" VALUES (154,'What is the longest amount of time you put food into the microwave?','2022-05-23T22:20:22.071Z');
INSERT INTO "qotd_unused" VALUES (155,'What are your favorite podcasts to listen to?','2022-05-23T22:20:34.429Z');
INSERT INTO "qotd_unused" VALUES (156,'What is a soft drink that you would like to see get a "Hard" variant, or alternatively, a new flavor/variety (disregarding alcohol content)?','2022-05-23T22:21:35.186Z');
INSERT INTO "qotd_unused" VALUES (157,'How many monitors do you have on your desk?','2022-05-23T22:21:45.423Z');
INSERT INTO "qotd_unused" VALUES (158,'What is the best form public transportation in the US?','2022-05-23T22:21:54.564Z');
INSERT INTO "qotd_unused" VALUES (159,'What is your favorite Pokémon?','2022-05-23T22:22:12.456Z');
INSERT INTO "qotd_unused" VALUES (160,'What is your favorite Pokémon game? Can be a mainline game or a spin-off.','2022-05-23T22:22:38.254Z');
INSERT INTO "qotd_unused" VALUES (161,'What is your favorite kind of apple?','2022-05-23T22:22:49.110Z');
INSERT INTO "qotd_unused" VALUES (162,'What is the most used appliance in your house?','2022-05-23T22:22:57.325Z');
INSERT INTO "qotd_unused" VALUES (163,'What is the most used thing in your house?','2022-05-23T22:23:03.032Z');
INSERT INTO "qotd_unused" VALUES (164,'If you could be any kitchen item, what would you be?','2022-05-23T22:23:15.736Z');
INSERT INTO "qotd_unused" VALUES (165,'If you could be any form of potato, what form would you be? (scalloped, mashed, etc)','2022-05-23T22:24:14.384Z');
INSERT INTO "qotd_unused" VALUES (166,'What is your favorite piece of video game trivia you know?','2022-05-23T22:24:34.812Z');
INSERT INTO "qotd_unused" VALUES (167,'What is the worst looking car?','2022-05-23T22:24:43.907Z');
INSERT INTO "qotd_unused" VALUES (168,'What is your default store for groceries?','2022-05-23T22:24:52.409Z');
INSERT INTO "qotd_unused" VALUES (169,'What was the first anime you ever saw?','2022-05-23T22:25:20.786Z');
INSERT INTO "qotd_unused" VALUES (170,'What was your favorite cartoon growing up?','2022-05-23T22:25:29.143Z');
INSERT INTO "qotd_unused" VALUES (171,'What TV channel did you watch the most as a kid?','2022-05-23T22:25:45.000Z');
INSERT INTO "qotd_unused" VALUES (172,'What is your favorite music album?','2022-05-23T22:26:00.830Z');
COMMIT;
