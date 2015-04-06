import csv
import os
import sys

from node import *
from edge import *
from global_variable import *
from dump import *

dataDirectory = '../data/'

def read_file(filename):
    with open(os.path.join(os.path.dirname(__file__), dataDirectory, filename), "r") as csvfile:
        return list(csv.reader(csvfile, delimiter='\t'))

def write_file():
    # print the network
    print dump_network()

    # or write the network to js/network.js
    # networkDirectory = '../js/'
    # with open(os.path.join(os.path.dirname(__file__), networkDirectory, 'network.js'), "w") as jsfile:
    #     jsfile.write('var eleObj = '+dump_network()+';')



if __name__=="__main__":
    f = read_file('test.csv')

    for l in f:
        if Node.add(id):
            # new node, add other attributes here
            # NODES[id].Label = ''
            pass

        # k = (sn, tn, i)
        k = ('','','')
        if Edge.add(k):
            # new edge, add other attributes here
            pass

    write_file()

