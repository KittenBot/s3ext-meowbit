from math import sin, cos, pi

class Turtle:

    def __init__(self, tft, fb):
        self._tft = tft
        self._fb = fb
        self._position = (0.0, 0.0)
        self._x = 50
        self._y = 50
        self._angle = 0
        self._old_heading = 0
        self._fillcolor = 0xff0000
        self.degree_to_radians = pi / 180

    def goto(self, x, y):
        x = int(x)
        y = int(y)
        self._fb.line(self._x, self._y, x, y, self._fillcolor)
        self._tft.show(self._fb)
        self._position = (x, y)
        self._x = x
        self._y = y 
        
    def forward(self, distance):
        x1 = distance * cos(self._angle * self.degree_to_radians)
        y1 = distance * sin(self._angle * self.degree_to_radians)
        self._distance = distance
        self.goto(self._x + x1, self._y + y1)
    
    def right(self, angle):
        self._angle += angle

    def left(self, angle):
        self._angle -= angle

    

