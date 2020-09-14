import requests 

from aiohttp import web

routes = web.RouteTableDef()

app = web.Application()

@routes.get('/')
async def get_handler(request):
    text = "Hello"
    print('received request, replying with "{}".'.format(text))
    data = {'message': text}
    return web.json_response(data)

@routes.get('/{name}')
async def variable_handler(request):
    name = request.match_info.get('name', "World!")
    text = "Hello, " + name
    print('received request, replying with "{}".'.format(text))
    data = {'message': text}
    return web.json_response(data)

app.add_routes(routes)

web.run_app(app, port=5858)