FROM python:3.10

WORKDIR /app

COPY ./requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

RUN pip install psycopg2

COPY . /app/src

WORKDIR /app/src

CMD ["python3", "./main.py"]

EXPOSE 8000
