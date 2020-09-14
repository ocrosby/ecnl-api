FROM python:3.6

COPY server.py /
COPY requirements.txt /

RUN pip install -r requirements.txt

CMD [ "python3", "-u", "server.py" ]
