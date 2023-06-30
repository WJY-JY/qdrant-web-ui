FROM 192.168.3.201:8080/library/nginx:latest

ADD dist /usr/share/nginx/html
ADD ng.conf /etc/nginx/conf.d/default.conf

EXPOSE 80