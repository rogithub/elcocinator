FROM docker.io/library/nginx:1.27-alpine

COPY nginx-default.conf /etc/nginx/conf.d/default.conf

COPY index.html app.jsx components.jsx /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/
COPY uploads/ /usr/share/nginx/html/uploads/
