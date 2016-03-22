from global_variable import *

class Node(object):
    def __init__(self, id):
        # list node's attribute here
        # mandatory field
        self.id = id
        # optional fields
        # self.Label = ''
        # self.Group = ''
        # self.Size = []

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
        # attr.append('Group: "%s"' % (self.Group))
        # attr.append('Size: %s' % (len(set(self.Size)))) # number field
        return """{data: { %s }}""" % (', '.join(attr))


# child class
# class UniprotNode(Node):
#     def __init__(self, id):
#         Node.__init__(self, id)
#         self.Taxon = ''