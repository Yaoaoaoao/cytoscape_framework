import csv
import os

from node import *
from edge import *
import json

_DATA_DIR = '../data/'
_JS_DIR = '../js/'
_JS_OBJ = 'var eleObj = eval(%s);'


def file_path(dir, filename):
    return os.path.join(os.path.dirname(__file__), dir, filename)


def read_file(dir, filename):
    with open(file_path(dir, filename), "r") as csvfile:
        return list(csv.reader(csvfile, delimiter='\t'))


def write_file(dir, filename, network):
    # Write network js obj to js/network.js for web display
    with open(file_path(dir, filename), "w") as js:
        js.write(network)


def dump_network(NODES, EDGES):
    data = {
        "nodes": [{"data": n.__dict__} for n in NODES.values()],
        "edges": [{"data": e.__dict__} for e in EDGES.values()],
    }
    return json.dumps(data)


if __name__ == "__main__":
    NODES, EDGES = {}, {}
    f = read_file(_DATA_DIR, 'test.csv')

    for l in f:
        id = l[0]
        if Node.add(id, NODES):
            # new node, add other attributes here
            # NODES[id].Label = ''
            pass

        # k = (sn, tn, i)
        k = ('', '', '')
        if Edge.add(k, EDGES):
            # new edge, add other attributes here
            pass

    dump_network(NODES, EDGES)
    
    # network = _JS_OBJ % dump_network(NODES, EDGES)
    # write_file(_JS_DIR, 'network.js', network)
