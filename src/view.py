import csv
import os
import sys

from node import *
from edge import *
from dump import *

dataDirectory = '../data/'

def read_file(filename):
    with open(os.path.join(os.path.dirname(__file__), dataDirectory, filename), "r") as csvfile:
        return list(csv.reader(csvfile, delimiter='\t'))

def print_network(NODES, EDGES):
    # Debug.
    print dump_network(NODES, EDGES)

def write_file(NODES, EDGES):
    # Write network to js/network.js for web display
    networkDirectory = '../js/'
    with open(os.path.join(os.path.dirname(__file__), networkDirectory, 'network.js'), "w") as jsfile:
        jsfile.write('var eleObj = '+dump_network(NODES, EDGES)+';')



if __name__=="__main__":
    NODES, EDGES = {}, {}
    f = read_file('test.csv')

    for l in f:
        id = ''
        if Node.add(id, NODES):
            # new node, add other attributes here
            # NODES[id].Label = ''
            pass

        # k = (sn, tn, i)
        k = ('','','')
        if Edge.add(k, EDGES):
            # new edge, add other attributes here
            pass

    print_network(NODES, EDGES)
    # write_file(NODES, EDGES)

