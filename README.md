# RPDB_Lab3

**Верстка идет в одно место.**

## Как это запустить. Часть 1.

### Настраиваем сервера

**Инициализация первого шард-сервера:**

sudo mongod —dbpath ~/projects/RPDBlab3/data/instance1 —port 27000 —shardsvr


**Инициализация второго шарда:**

sudo mongod —dbpath ~/projects/RPDBlab3/data/instance2 —port 27001 —shardsvr


**Инициализация конфиг-сервера:**

sudo mongod —configsvr —dbpath ~/projects/RPDBlab3/data/config —port 27002 —replSet lab3


**Точно не помню, нужна ли это команда, но она у меня до сих пор находится в блокноте. Для запуска использую ту, что выше.**

sudo mongod —configsvr —dbpath ~/projects/RPDBlab3/data/config —port 27002


**Запуск монгоса с заданным конфиг-сервером:**

sudo mongos —configdb lab3/127.0.0.1:27002 —port 27100

**Заходим на сервер:**

mongo —port 27100


**Подрубаем шарды:**

sh.addShard("localhost:27000")

sh.addShard("localhost:27001")

## Как это запустить. Часть 2.

Клонируем этот репозиторий:

git clone https://github.com/Barsukasm/RPDB_Lab3.git

**Заходим в него:**

cd RPDB_Lab3

**Устанавливаем модули:**

npm i

**Запускаем проект:**

npm start
