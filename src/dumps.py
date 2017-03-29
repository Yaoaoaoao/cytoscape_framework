import json

_JS_OBJ = 'var eleObj = eval(%s);'


def set_default(obj):
    # json dump set()
    if isinstance(obj, set):
        return list(obj)
    raise TypeError


def dump_network(NODES, EDGES):
    data = {
        "nodes": [{"data": n.__dict__} for n in NODES.values()],
        "edges": [{"data": e.__dict__} for e in EDGES.values()],
    }
    return json.dumps(data, default=set_default)


def web_dump_network(NODES, EDGES):
    return _JS_OBJ % dump_network(NODES, EDGES)
