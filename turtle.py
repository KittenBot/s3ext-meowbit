from math import sin, cos, pi

class Turtle:

    def __init__(self, tft, fb):
        self._tft = tft
        self._fb = fb
        self._position = (0.0, 0.0)
        self._x = 80
        self._y = 64
        self._angle = 0
        self._old_heading = 0
        self._fillcolor = 0xff0000
        self._fillpath = None
        self._fullcircle = 360.0
        self._drawing = True
        self.degree_to_radians = pi / 180

    def _refresh(self):
        self._tft.show(self._fb)

    def _goto(self, x, y):
        if self._drawing:
            self._fb.line(round(self._x), round(self._y), round(x), round(y), self._fillcolor)
            self._refresh()
        if self._fillpath is not None:
            self._fillpath.append((x, y))
        self._position = (x, y)
        self._x = x
        self._y = y

    def goto(self, x, y):
        self._distance = abs(self._x - x) + abs(self._y - y)
        self._goto(x, y)
        
    def forward(self, distance):
        x1 = distance * cos(self._angle * self.degree_to_radians)
        y1 = distance * sin(self._angle * self.degree_to_radians)
        self._distance = distance
        self._goto(self._x + x1, self._y + y1)
    
    def right(self, angle):
        self._angle += angle

    def left(self, angle):
        self._angle -= angle

    def setx(self, x):
        self._distance = abs(x - self._x)
        self._goto(x, self._y)

    def sety(self, y):
        self._distance = abs(y - self._y)
        self._goto(self._x, y)

    def clear(self):
        self._fb.fill(0)
        self._refresh()
    
    def _rotate(self, angle):
        self._angle -= angle

    def setheading(self, to_angle):
        self._rotate(to_angle - self._angle)

    def circle(self, radius, extent=None):
        if extent is None:
            extent = self._fullcircle
        
        frac = abs(extent)/self._fullcircle
        steps = 1+int(min(11+abs(radius)/6.0, 59.0)*frac)
        w = 1.0 * extent / steps
        w2 = 0.5 * w
        l = 2.0 * radius * sin(w2 * pi / 180.0)
        if radius < 0:
            l, w, w2 = -l, -w, -w2
        self._rotate(w2)
        for i in range(steps):
            self.forward(l)
            self._rotate(w)
        self._rotate(-w2)

    def pendown(self):
        self._drawing = True

    def penup(self):
        self._drawing = False

    def dot(self, size=5):
        self._fb.circle(round(self._x), round(self._y), round(size), self._fillcolor, 1)
        self._refresh()

    def fillcolor(self, color):
        self._fillcolor = color

    def begin_fill(self):
        self._fillpath = [(self._x, self._y)]

    def end_fill(self):
        if self._fillpath != None and len(self._fillpath) > 2:
            x0, y0 = self._fillpath[0]
            num = len(self._fillpath)
            for i in range(1, num):
                if i+1 < num:
                    self._fb.traingle(round(x0), round(y0), round(self._fillpath[i][0]), round(self._fillpath[i][1]), round(self._fillpath[i+1][0]), round(self._fillpath[i+1][1]), self._fillcolor, 1)
        else:
            print("No path to fill.")
        self._refresh()
        self._fillpath = None
