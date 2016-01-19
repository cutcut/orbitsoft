-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Янв 20 2016 г., 03:34
-- Версия сервера: 5.6.17
-- Версия PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `orbitsoft`
--

-- --------------------------------------------------------

--
-- Структура таблицы `books`
--

CREATE TABLE IF NOT EXISTS `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `author` varchar(100) NOT NULL,
  `pub_year` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=34 ;

--
-- Дамп данных таблицы `books`
--

INSERT INTO `books` (`id`, `name`, `description`, `author`, `pub_year`) VALUES
(1, '1984', 'In George Orwell''s 1984, Winston Smith wrestles with oppression in Oceania, a place where the Party scrutinizes human actions with ever-watchful Big Brother. Defying a ban on individuality, Winston dares to express his thoughts in a diary and pursues a relationship with Julia. These criminal deeds bring Winston into the eye of the opposition, who then must reform the nonconformist. George Orwell''s 1984 introduced the watchwords for life without freedom: BIG BROTHER IS WATCHING YOU.', 'George Orwell', 1950),
(2, 'A Doll''s House', 'Description', 'Henrik Ibsen', 1906),
(3, 'A Sentimental Education', 'Description', 'ustave Flaubert', 1980),
(4, 'Absalom, Absalom!', 'Description', 'William Faulkner', 1962),
(5, 'The Adventures of Huckleberry Finn', 'Description', 'Mark Twain', 1910),
(6, 'The Aeneid', 'Description', 'Virgil', NULL),
(7, '1984', 'In George Orwell''s 1984, Winston Smith wrestles with oppression in Oceania, a place where the Party scrutinizes human actions with ever-watchful Big Brother. Defying a ban on individuality, Winston dares to express his thoughts in a diary and pursues a relationship with Julia. These criminal deeds bring Winston into the eye of the opposition, who then must reform the nonconformist. George Orwell''s 1984 introduced the watchwords for life without freedom: BIG BROTHER IS WATCHING YOU.', 'George Orwell', 1950),
(8, 'A Doll''s House', 'Description', 'Henrik Ibsen', 1906),
(9, 'A Sentimental Education', 'Description', 'ustave Flaubert', 1980),
(10, 'Absalom, Absalom!', 'Description', 'William Faulkner', 1962),
(11, 'The Adventures of Huckleberry Finn', 'Description', 'Mark Twain', 1910),
(12, 'The Aeneid', 'Description', 'Virgil', NULL),
(14, '1984', 'In George Orwell''s 1984, Winston Smith wrestles with oppression in Oceania, a place where the Party scrutinizes human actions with ever-watchful Big Brother. Defying a ban on individuality, Winston dares to express his thoughts in a diary and pursues a relationship with Julia. These criminal deeds bring Winston into the eye of the opposition, who then must reform the nonconformist. George Orwell''s 1984 introduced the watchwords for life without freedom: BIG BROTHER IS WATCHING YOU.', 'George Orwell', 1950),
(15, 'A Doll''s House', 'Description', 'Henrik Ibsen', 1906),
(16, 'A Sentimental Education', 'Description', 'ustave Flaubert', 1980),
(17, 'Absalom, Absalom!', 'Description', 'William Faulkner', 1962),
(18, 'The Adventures of Huckleberry Finn', 'Description', 'Mark Twain', 1910),
(19, 'The Aeneid', 'Description', 'Virgil', NULL),
(20, '1984', 'In George Orwell''s 1984, Winston Smith wrestles with oppression in Oceania, a place where the Party scrutinizes human actions with ever-watchful Big Brother. Defying a ban on individuality, Winston dares to express his thoughts in a diary and pursues a relationship with Julia. These criminal deeds bring Winston into the eye of the opposition, who then must reform the nonconformist. George Orwell''s 1984 introduced the watchwords for life without freedom: BIG BROTHER IS WATCHING YOU.', 'George Orwell', 1950),
(21, 'A Doll''s House', 'Description', 'Henrik Ibsen', 1906),
(22, 'A Sentimental Education', 'Description', 'ustave Flaubert', 1980),
(23, 'Absalom, Absalom!', 'Description', 'William Faulkner', 1962),
(24, 'The Adventures of Huckleberry Finn', 'Description', 'Mark Twain', 1910),
(25, 'The Aeneid', 'Description', 'Virgil', NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
