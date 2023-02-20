-- SELECT * FROM share_knowledge.user;
CREATE DATABASE IF NOT EXISTS `share_knowledge` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `share_knowledge`;

DROP TABLE IF EXISTS blacklist;
DROP TABLE IF EXISTS commentReportedBy;
DROP TABLE IF EXISTS postReportedBy;
DROP TABLE IF EXISTS comment_file;
DROP TABLE IF EXISTS commentLikedBy;
DROP TABLE IF EXISTS commentDislikedBy;
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS postLikedBy;
DROP TABLE IF EXISTS postDislikedBy;
DROP TABLE IF EXISTS post_tag;
DROP TABLE IF EXISTS post_file;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS user;

CREATE TABLE user (
    id int(15) NOT NULL AUTO_INCREMENT,
    username varchar(128) NOT NULL,
    email varchar(128) NOT NULL,
    password varchar(1000) NOT NULL,
    role varchar(25) NOT NULL,
    banned BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
    UNIQUE (username),
    UNIQUE (email)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE post (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(100) NOT NULL,
    text varchar(1000) NOT NULL,
    type varchar(100) NOT NULL,
    date dateTime NOT NULL, 
    userId int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES user(id),
    FULLTEXT (title,text)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE tags (
    id int NOT NULL AUTO_INCREMENT,
    tag varchar(100) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (tag)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE postLikedBy (
postId int NOT NULL,
userId int NOT NULL, 
PRIMARY KEY (postId,userId),
FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE, 
FOREIGN KEY (postId) REFERENCES post(id) ON DELETE CASCADE
) DEFAULT CHARSET=utf8;

CREATE TABLE postDislikedBy (
postId int NOT NULL,
userId int NOT NULL, 
PRIMARY KEY (postId,userId),
FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE, 
FOREIGN KEY (postId) REFERENCES post(id) ON DELETE CASCADE
) DEFAULT CHARSET=utf8;

CREATE TABLE post_file (
    id int NOT NULL AUTO_INCREMENT,
    path varchar(256) NOT NULL,
    ext varchar(256) NOT NULL,
    postId int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (postId) REFERENCES post(id) ON DELETE CASCADE 
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE post_tag (
    postId int NOT NULL,
    tagId int NOT NULL,
    PRIMARY KEY (postId,tagId),
    FOREIGN KEY (postId) REFERENCES post(id) ON DELETE CASCADE, 
    FOREIGN KEY (tagId) REFERENCES tags(id) 
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE comment (
    id int NOT NULL AUTO_INCREMENT,
    text varchar(1000) NOT NULL,
    date dateTime NOT NULL, 
    userId int NOT NULL,
    postId int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY (postId) REFERENCES post(id) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET=utf8; 

CREATE TABLE commentLikedBy (
commentId int NOT NULL,
userId int NOT NULL, 
PRIMARY KEY (commentId,userId),
FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE, 
FOREIGN KEY (commentId) REFERENCES comment(id) ON DELETE CASCADE
) DEFAULT CHARSET=utf8;

CREATE TABLE commentDislikedBy (
commentId int NOT NULL,
userId int NOT NULL, 
PRIMARY KEY (commentId,userId),
FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE, 
FOREIGN KEY (commentId) REFERENCES comment(id) ON DELETE CASCADE
) DEFAULT CHARSET=utf8;

CREATE TABLE comment_file (
    id int NOT NULL AUTO_INCREMENT,
    path varchar(256) NOT NULL,
    ext varchar(256) NOT NULL,
    commentId int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (commentId) REFERENCES comment(id) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE postReportedBy (
postId int NOT NULL,
postedById int NOT NULL, 
reportedById int NOT NULL, 
PRIMARY KEY (postId,reportedById),
FOREIGN KEY (postId) REFERENCES post(id) ON DELETE CASCADE,
FOREIGN KEY (postedById) REFERENCES user(id) ON DELETE CASCADE, 
FOREIGN KEY (reportedById) REFERENCES user(id) ON DELETE CASCADE 
) DEFAULT CHARSET=utf8;

CREATE TABLE commentReportedBy (
commentId int NOT NULL,
postedById int NOT NULL, 
reportedById int NOT NULL, 
PRIMARY KEY (commentId,reportedById),
FOREIGN KEY (commentId) REFERENCES comment(id) ON DELETE CASCADE,
FOREIGN KEY (postedById) REFERENCES user(id) ON DELETE CASCADE, 
FOREIGN KEY (reportedById) REFERENCES user(id) ON DELETE CASCADE 
) DEFAULT CHARSET=utf8;

CREATE TABLE blacklist (
email varchar(128) NOT NULL,
date dateTime NOT NULL, 
PRIMARY KEY (email)
) DEFAULT CHARSET=utf8;