from global_variable import *

class Node(object):
    def __init__(self, id):
        # list node's attribute here
        # mandatory field
        self.id = id
        # optional fields
        # self.Label = ''

    @staticmethod
    def add(id):
        """
        methods independent to this class.
        :return: new node or not
        """
        if not NODES.has_key(id):
            NODES[id] = Node(id)
            return True
        else:
            return False

    def dump(self):
        # describe how attribute is displayed
        attr = []
        attr.append('id: "%s"' % (self.id ))
        # attr.append('Label: "%s"' % (self.Label))
        # if attribute is a number field, remove double quote around the value
        return """{data: { %s }}""" % (', '.join(attr))


# child class
# class UniprotNode(Node):
#     def __init__(self, id):
#         Node.__init__(self, id)
#         self.Taxon = ''