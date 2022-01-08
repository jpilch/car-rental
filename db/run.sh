#!/usr/bin/bash
sudo docker run \
--detach \
--name=mysql \
-e MYSQL_ROOT_PASSWORD=root \
-e MYSQL_ROOT_HOST=% \
-p 3306:3306 \
mysql/mysql-server:latest
