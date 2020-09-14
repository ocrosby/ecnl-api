# ecnl-api
This repository contains a custom API returning ECNL related information.

Install the requirements

```bash
> pip install -r requirements.txt
```

Build the Docker image.

```bash
> docker build -t docker-aiohttp-hello-world .
```

Run the new Docker image

```bash
> docker run -p 5858:5858 docker-aiohttp-hello-world
```