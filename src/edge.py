from global_variable import *

class Edge(object):
    def __init__(self):
        # list edge's attribute here
        self.Interaction = ''
        self.source = ''
        self.target = ''

    def dump(self):
        # describe how attribute is displayed
        attr = []
        attr.append('id: "%s"' % (self.id ))
        attr.append('Interaction: "%s"' % (self.Interaction))
        attr.append('source: "%s"' % (self.source))
        attr.append('target: "%s"' % (self.target))
        return """{data: { %s }}""" % (','.join(attr))