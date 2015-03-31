from node import *
from edge import *
from global_variable import *
# import json
# try json.dumps(), but it won't work for cytoscape

def dump_network():
    nodes = [n.dump() for n in NODES.values() ]
    edges = [e.dump() for e in EDGES.values() ]
    return """{ nodes: [%s], edges: [%s] }""" %(','.join(nodes), ','.join(edges))