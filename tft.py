import pyb
import framebuf
fbuf = bytearray(160*128*2)
fb = framebuf.FrameBuffer(fbuf, 160, 128, framebuf.RGB565)
tft = pyb.SCREEN()
fb.fill(0x004f4f)
tft.show(fb)