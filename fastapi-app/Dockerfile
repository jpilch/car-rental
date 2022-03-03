FROM python:3.10

WORKDIR /app

COPY ./requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

# run seperately or will cause error otherwise
RUN pip install psycopg2

COPY . /app/src

CMD ["python3", "./src/main.py"]

EXPOSE 8000
