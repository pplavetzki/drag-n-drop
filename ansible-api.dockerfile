FROM juniper/pyez-ansible

RUN apk update && apk add --no-cache build-base gcc g++ \
    bash sudo coreutils \
    && addgroup -S ansible && adduser -S -g ansible ansible \
    && echo "ansible:ansible" | chpasswd \
    && echo "ansible ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers.d/ansible \
    && pip install --upgrade pip \
    && pip install flask-restful flask-cors flask-socketio eventlet requests redis prettytable \
    && rm -rf /var/cache/apk/* \
    && apk del -r --purge gcc g++ \
    && rm -rf /source/* \
    && rm -rf /var/cache/apk/* \
    && rm -rf /tmp/*

# USER ansible

RUN chown -R ansible:ansible /home/ansible

WORKDIR /var/app

# EXPOSE 5000

CMD ["python", "api.py" ]