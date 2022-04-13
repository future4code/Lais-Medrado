USE `joy-419749-lais-silva`;
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
SHOW DATABASES;
DESCRIBE Actor;
SHOW TABLES;
DESCRIBE Actor;
#A)
# varchar() é string que recebe n caracteres 
# date, para tipo data

#B) o SHOW DATABASE MOSTRA AS INFORMAÇÕES DO BANCO DE DADOS , O NOME ;
# E SHOW TABLE MOSTRA O NOME DAS TABLES, describe tables, mostra as informações dentro da minha tabela;


#2)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

DESCRIBE Actor;
SHOW TABLES;
SELECT * FROM Actor;
#3
#a
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
SELECT * FROM Actor;
 #b
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Cauã Reymond",
  3200000,
  "1980-06-12", 
  "male"
);

# Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'

#c
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
#Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1, qque significa que o número de colunas não correspondem ao 
#número de valores;

#d 
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
#Código de erro: 1364. O campo 'nome' não tem um valor padrão// 

#E  

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);#Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1 , FALTOU A ASPAS DA DATA


#CRIANDO MAIS UM ATOR E ATRIZ
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "009", 
  "Daniel Redclife",
  3200000,
  "1990-03-01", 
  "male"
);

SELECT * FROM Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "050", 
  "Alexandre Nero",
  3200000,
  "1790-03-05", 
  "male"
);
SELECT * FROM Actor;

#3
#a) 

SELECT * FROM Actor WHERE gender ="female";
#3
#b)

SELECT salary FROM Actor WHERE name ="Tony Ramos";


#3
#C)

SELECT id, name from  Actor WHERE gender ="invalid";


#3
#D)

SELECT id, name, salary FROM Actor WHERE salary <= 5000;

#3
#E
SELECT id, name from Actor WHERE id = "002";
#erro prematuro  de sintaxe pois faltou o ; no final 


#4a
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

#4-A) Esta query vai selecionar (select) todas as colunas(*) que vem da tabela Actor onde(where)
# o nome comece com a Letra A e pode ter qualquer coisa após ou comece com a letra J e pode ter qualquer coisa após

#4-B

SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 305000 ;

#4-C 
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";

#4-d
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;

#5A)

CREATE TABLE movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating  INT NOT NULL
);


#5B)

INSERT INTO movie (id, name, sinopse, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
 7
);


#5C)

INSERT INTO movie (id, name, sinopse, release_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
 10
);


#5D)

INSERT INTO movie (id, name, sinopse, release_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
 8
);

#5E)
INSERT INTO movie (id, name , sinopse, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

#6a
SELECT id, name, rating FROM movie WHERE id = "001";


#6b
SELECT  * FROM   movie WHERE name = "Deus é Brasileiro";



#6c

# Retorne o id, título e sinopse dos filmes com avaliação mínima de 7

SELECT id, name, sinopse FROM movie WHERE rating > 7;


#Ex 07 a)
#Retorna um filme cujo título contenha a palavra vida

SELECT * FROM movie
WHERE name LIKE "%vida%" ;

#Ex 07 b)
# Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. 
#Utilize qualquer TERMO DE BUSCA para exemplificar. 
SELECT * FROM movie
WHERE name LIKE "%de%" OR sinopse LIKE "%de%" ;


#7-C) Procure por todos os filmes que já tenham lançado

SELECT * FROM movie WHERE release_date < "2022-04-12";

#7d)
SELECT * FROM movie WHERE release_date < "2022-04-12" AND (name LIKE "%vida%" OR sinopse LIKE "%vida%") AND rating > 7;
