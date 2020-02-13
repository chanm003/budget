FROM nginx:latest

RUN mkdir -p /run/nginx /www/data

# Provided in this Docker package, and relatively simple configs
COPY default.conf /etc/nginx/conf.d/default.conf

# self-signed server cert
COPY certificate.pem /etc/nginx

# self-signed server privkey
COPY key.pem         /etc/nginx

# https://github.com/mpyne-navy/nginx-cac/blob/master/Makefile
COPY DoDRoots.crt    /etc/nginx

ENTRYPOINT ["/usr/sbin/nginx", "-q", "-g", "daemon off;"]