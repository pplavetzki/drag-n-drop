FROM juniper/pyez-ansible

RUN apk update --no-cache bash gawk sed grep bc coreutils \
    && apk add build-base gcc g++ \
    && pip install --upgrade pip \
    && pip install flask-restful flask-cors flask-socketio eventlet requests redis

WORKDIR /var/app

# EXPOSE 5000

CMD ["python", "api.py" ]