import pyb
import framebuf
fbuf = bytearray(160*128)
fb = framebuf.FrameBuffer(fbuf, 160, 128, framebuf.PL8)
tft = pyb.SCREEN()