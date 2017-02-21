class Edge(object):
    def __init__(self):
        # list edge's attribute here
        self.Interaction = ''
        self.source = ''
        self.target = ''
        # self.Weight = []

    @staticmethod
    def add(k, EDGES):
        """
        methods independent to this class.
        :return: new edge or not
        """
        sn, tn, i = k
        if not EDGES.has_key(k):
            EDGES[k] = Edge()
            EDGES[k].source = sn
            EDGES[k].target = tn
            EDGES[k].Interaction = i
            return True
        else:
            return False

    def dump(self):
        # describe how attribute is displayed
        attr = []
        attr.append('Interaction: "%s"' % (self.Interaction))
        attr.append('source: "%s"' % (self.source))
        attr.append('target: "%s"' % (self.target))
        # attr.append('Weight: %s' % (len(set(self.weight)))) # number field
        return """{data: { %s }}""" % (', '.join(attr))