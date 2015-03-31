from edge import *
from global_variable import *

class Node(object):
    def __init__(self, id):
        # list node's attribute here
        self.id = id
        self.Label = ''

    def dump(self):
        # describe how attribute is displayed
        attr = []
        attr.append('id: "%s"' % (self.id ))
        attr.append('Label: "%s"' % (self.Label))
        return """{data: { %s }}""" % (','.join(attr))