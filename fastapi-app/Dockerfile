FROM python:3.10

WORKDIR /app

COPY ./requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

COPY . /app/src

RUN pip install psycopg2

RUN pip install pip install python-multipart

CMD ["python3", "./src/main.py"]

EXPOSE 8000
