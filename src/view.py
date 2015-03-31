import csv
import os
import sys

def read_file(filename):
    with open(os.path.join(os.path.dirname(__file__), filename), "r") as csvfile:
        return list(csv.reader(csvfile, delimiter='\t'))

f = read_file('filename.csv')
