#!/usr/bin/bash
sudo docker run \
--detach \
--name=mysql \
-e MYSQL_ROOT_PASSWORD=root \
-p 3306:3306 \
mysql/mysql-server:latest
