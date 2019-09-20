
// create by scratch3-extension generator
const ArgumentType = Scratch.ArgumentType;
const BlockType = Scratch.BlockType;
const formatMessage = Scratch.formatMessage;
const log = Scratch.log;

const menuIconURI = "data:image/png;base64,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";
const blockIconURI = null;

const ledCommon = gen => {
  gen.variables_['mb_led'] = 'led1 = LED(1)\nled2 = LED(2)\n';
};

const tftCommon = gen => {
  gen.imports_['mb_tft'] = 'from tft import *\n';
};

const turtleCommon = gen => {
  gen.imports_['mb_tft'] = 'from tft import *\n';
  gen.imports_['mb_turtle'] = 'from turtle import Turtle\n';
  gen.variables_['mb_turtle'] = 'turtle = Turtle(tft, fb)\n';
};

const buzzComm = gen => {
  gen.imports_['mb_buzz'] = 'from buzz import *\n';
};

const imuCommon = gen => {
  gen.imports_['mb_mpu6050'] = 'import mpu6050\n';
  gen.variables_['mb_acc'] = 'acc = mpu6050.accel(I2C(1))\n';
};

const colorToHex = color =>{
  return color.replace('#', '0x')
}

class meowbit{
  constructor (runtime){
    this.runtime = runtime;
    // communication related
    this.comm = runtime.ioDevices.comm;
    this.session = null;
    this.runtime.registerPeripheralExtension('meowbit', this);
    // session callbacks
    this.reporter = null;
    this.onmessage = this.onmessage.bind(this);
    this.onclose = this.onclose.bind(this);
    this.write = this.write.bind(this);
    // string op
    this.decoder = new TextDecoder();
    this.lineBuffer = '';

    // stop proj on red button
    this.micropyStop = this.micropyStop.bind(this);
    this.runtime.on('PROJECT_STOP_ALL', this.micropyStop);

    // repl state
    this.state = 0;
    this.rstAfterStop = false;
    const viewedMeowTutorial = localStorage.getItem("viewedMeowTutorial")
    if (!viewedMeowTutorial){
      runtime.showDeck('meowbit-tutorial');
      localStorage.setItem("viewedMeowTutorial", 1);
    }
  }

  onclose (){
    this.session = null;
  }

  write (data, parser = null){
    if (this.session){
      return new Promise(resolve => {
        if (parser){
          this.reporter = {
            parser,
            resolve
          }
        }
        this.session.write(data);
      })
    }
  }

  sleep (ms){
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  micropyReset (){
    if (this.session){
      // ctrl+c ctrl+b ctrl+d
      this.session.write('\x03\x02\x04');
    }
  }

  micropyStop (){
    if (this.session){
      // ctrl+c ctrl+c
      this.session.write('\x03\x03');
    }
  }

  async onmessage (data){
    const dataStr = this.decoder.decode(data);
    this.lineBuffer += dataStr;
    if (this.state == 0 && this.lineBuffer.endsWith('raw REPL; CTRL-B to exit\r\n>')){
      // now send code
      this.state = 1;
      const codeList = this.code.split(/(.{256})/)
      for (let c of codeList){
        this.session.write(c)
        await this.sleep(10);
      }
      // finally send ctrl+D
      this.state = 2;
      this.lineBuffer = '';
      this.session.write('\x04');
      delete this.code
      this.runtime.emit("extrunning", 1);
    } else if (this.state == 2){
      if (!this.lineBuffer.startsWith('OK')){
        console.log("Error exec code");
        this.state = 0;
      } else if (this.lineBuffer.endsWith('>')){
        // extrace result
        const ret = this.lineBuffer.slice(2).split('\r')[0];
        if (this.lineBuffer.charCodeAt(2) != 0x4){
          console.log('exe has return', ret)
        } else {
          console.log('exe', ret)
        }
        this.session.write('\x02');
        this.state = 0;
        this.runtime.emit("extrunning", 0);
        if (this.rstAfterStop){
          this.rstAfterStop = false;
          // force reset
          await this.sleep(2000);
          this.session.write('\x03\x02\x04');
        }
      }
    }

  }

  // method required by vm runtime
  scan (){
      this.comm.getDeviceList().then(result => {
          this.runtime.emit(this.runtime.constructor.PERIPHERAL_LIST_UPDATE, result);
      });
  }

  connect (id){
      this.comm.connect(id, {rawMode: true}).then(sess => {
          this.session = sess;
          this.session.onmessage = this.onmessage;
          this.session.onclose = this.onclose;
          // notify gui connected
          this.runtime.emit(this.runtime.constructor.PERIPHERAL_CONNECTED);
          // init reset 
          this.session.write('\x03\x03\x02\x04');
      }).catch(err => {
          log.warn('connect peripheral fail', err);
      });
  }

  disconnect (){
      this.session.close();
  }

  isConnected (){
      return Boolean(this.session);
  }

  micropyExec (code){
    if (!this.session){
      vm.emit('showAlert', {type: 'error', msg: `not connected`});
      return;
    }
    // goto repl mode first
    this.code = code;
    this.session.write('\r\x01') // ctrl+A to raw repl mode
  }

  micropyFlash (code){
    let fileName = 'main.py';
    if (typeof code === 'object'){
      fileName = code.fileName;
      code = code.code;
    }
    let loader = `f=open("${fileName}","wb")\n`
    const lines = code.split('\n');
    loader = lines.reduce((a, l) => {
      l = l.replace(/"/g, "'")
      return a+=`f.write("${l}\\n")\n`
    }, loader);
    loader += 'f.close()\n'
    this.code = loader;
    this.rstAfterStop = true;
    this.session.write('\r\x01') // ctrl+A to raw repl mode
  }

  getInfo (){
    return {
      id: 'meowbit',
      name: 'Meowbit',
      color1: '#4a90e2',
      color2: '#4a51e2',
      menuIconURI: menuIconURI,
      blockIconURI: blockIconURI,
      blocks: [
        {
          opcode: 'mb_led_onoff',
          blockType: BlockType.COMMAND,
          text: 'Led [INDEX] [ONOFF]',
          arguments: {
            INDEX: {
              type: ArgumentType.STRING,
              menu: 'LEDS',
              defaultValue: '1'
            },
            ONOFF: {
              type: ArgumentType.STRING,
              menu: 'ONOFF',
              defaultValue: 'on'
            },
          },
          gen: {
            micropy: this.ledOnOffGen
          }
        },
        {
          opcode: 'mb_led_toggle',
          blockType: BlockType.COMMAND,
          text: 'Led [INDEX] Toggle',
          arguments: {
            INDEX: {
              type: ArgumentType.STRING,
              menu: 'LEDS',
              defaultValue: '1'
            }
          },
          gen: {
            micropy: this.ledToggleGen
          }
        },
        {
          opcode: 'mb_led_intensity',
          blockType: BlockType.COMMAND,
          text: 'Led [INDEX] intensity [INTENT]',
          arguments: {
            INDEX: {
              type: ArgumentType.STRING,
              menu: 'LEDS',
              defaultValue: '1'
            },
            INTENT: {
              type: ArgumentType.NUMBER,
              defaultValue: 100
            }
          },
          gen: {
            micropy: this.ledIntensityGen
          }
        },
        '---',
        {
          opcode: 'mb_tft_fill',
          blockType: BlockType.COMMAND,
          arguments: {
            COLOR: {
              type: ArgumentType.COLORRGB
            }
          },
          text: 'TFT fill [COLOR]',
          gen: {
            micropy: this.tftFillGen
          }
        },
        {
          opcode: 'mb_tft_pix',
          blockType: BlockType.COMMAND,
          arguments: {
            X: {
              type: ArgumentType.NUMBER,
              defaultValue: 50
            },
            Y: {
              type: ArgumentType.NUMBER,
              defaultValue: 50
            },
            COLOR: {
              type: ArgumentType.COLORRGB
            }
          },
          text: 'TFT Pixel x[X] y[Y] [COLOR]',
          gen: {
            micropy: this.tftPixGen
          }
        },
        {
          opcode: 'mb_tft_line',
          blockType: BlockType.COMMAND,
          arguments: {
            X0: {
              type: ArgumentType.NUMBER,
              defaultValue: 5
            },
            Y0: {
              type: ArgumentType.NUMBER,
              defaultValue: 5
            },
            X1: {
              type: ArgumentType.NUMBER,
              defaultValue: 100
            },
            Y1: {
              type: ArgumentType.NUMBER,
              defaultValue: 50
            },
            COLOR: {
              type: ArgumentType.COLORRGB
            }
          },
          text: 'TFT Line x[X0] y[Y0] - x[X1] y[Y1] [COLOR]',
          gen: {
            micropy: this.tftLineGen
          }
        },
        {
          opcode: 'mb_tft_rect',
          blockType: BlockType.COMMAND,
          arguments: {
            X: {
              type: ArgumentType.NUMBER,
              defaultValue: 5
            },
            Y: {
              type: ArgumentType.NUMBER,
              defaultValue: 5
            },
            W: {
              type: ArgumentType.NUMBER,
              defaultValue: 50
            },
            H: {
              type: ArgumentType.NUMBER,
              defaultValue: 20
            },
            COLOR: {
              type: ArgumentType.COLORRGB
            }
          },
          text: 'TFT Rect x[X] y[Y] w[W] h[H] [COLOR]',
          gen: {
            micropy: this.tftRectGen
          }
        },
        {
          opcode: 'mb_tft_text',
          blockType: BlockType.COMMAND,
          arguments: {
            TXT: {
              type: ArgumentType.STRING,
              defaultValue: 'Hello world'
            },
            X: {
              type: ArgumentType.NUMBER,
              defaultValue: 5
            },
            Y: {
              type: ArgumentType.NUMBER,
              defaultValue: 10
            },
            COLOR: {
              type: ArgumentType.COLORRGB
            }
          },
          text: 'TFT text [TXT] x[X] y[Y] [COLOR]',
          gen: {
            micropy: this.tftTextGen
          }
        },
        {
          opcode: 'mb_tft_redraw',
          blockType: BlockType.COMMAND,
          text: 'TFT Redraw',
          func: 'noop',
          gen: {
            micropy: this.tftRedrawGen
          }
        },
        '---',
        {
          opcode: 'mb_turtle_setcolor',
          blockType: BlockType.COMMAND,
          arguments: {
            COLOR: {
              type: ArgumentType.COLORRGB
            }
          },
          func: 'noop',
          text: 'Turtle Color [COLOR]',
          gen: {
            micropy: this.trColorGen
          }
        },
        {
          opcode: 'mb_turtle_forward',
          blockType: BlockType.COMMAND,
          arguments: {
            PIX: {
              type: ArgumentType.NUMBER,
              defaultValue: 10
            }
          },
          func: 'noop',
          text: 'Turtle Forward [PIX]',
          gen: {
            micropy: this.trForwardGen
          }
        },
        {
          opcode: 'mb_turtle_left',
          blockType: BlockType.COMMAND,
          arguments: {
            DEG: {
              type: ArgumentType.NUMBER,
              defaultValue: 90
            }
          },
          func: 'noop',
          text: 'Turtle Left [DEG] degree',
          gen: {
            micropy: this.trLeftGen
          }
        },
        {
          opcode: 'mb_turtle_right',
          blockType: BlockType.COMMAND,
          arguments: {
            DEG: {
              type: ArgumentType.NUMBER,
              defaultValue: 90
            }
          },
          func: 'noop',
          text: 'Turtle Right [DEG] degree',
          gen: {
            micropy: this.trRightGen
          }
        },
        {
          opcode: 'mb_turtle_heading',
          blockType: BlockType.COMMAND,
          arguments: {
            DEG: {
              type: ArgumentType.NUMBER,
              defaultValue: 90
            }
          },
          func: 'noop',
          text: 'Turtle Heading [DEG] degree',
          gen: {
            micropy: this.trHeadingGen
          }
        },
        {
          opcode: 'mb_turtle_goto',
          blockType: BlockType.COMMAND,
          arguments: {
            X: {
              type: ArgumentType.NUMBER,
              defaultValue: 50
            },
            Y: {
              type: ArgumentType.NUMBER,
              defaultValue: 100
            },
          },
          func: 'noop',
          text: 'Turtle Goto X[X] Y[Y]',
          gen: {
            micropy: this.trGotoGen
          }
        },
        {
          opcode: 'mb_turtle_setx',
          blockType: BlockType.COMMAND,
          arguments: {
            POS: {
              type: ArgumentType.NUMBER,
              defaultValue: 100
            }
          },
          func: 'noop',
          text: 'Turtle Set X[POS]',
          gen: {
            micropy: this.trSetxGen
          }
        },
        {
          opcode: 'mb_turtle_sety',
          blockType: BlockType.COMMAND,
          arguments: {
            POS: {
              type: ArgumentType.NUMBER,
              defaultValue: 100
            }
          },
          func: 'noop',
          text: 'Turtle Set Y[POS]',
          gen: {
            micropy: this.trSetyGen
          }
        },
        {
          opcode: 'mb_turtle_circle',
          blockType: BlockType.COMMAND,
          func: 'noop',
          text: 'Turtle Circle Radius[R] Degree[DEG]',
          arguments: {
            R: {
              type: ArgumentType.NUMBER,
              defaultValue: 20
            },
            DEG: {
              type: ArgumentType.NUMBER,
              defaultValue: 360
            },
          },
          gen: {
            micropy: this.trCircleGen
          }
        },
        {
          opcode: 'mb_turtle_dot',
          blockType: BlockType.COMMAND,
          func: 'noop',
          text: 'Turtle Draw Dot Size[SIZE]',
          arguments: {
            SIZE: {
              type: ArgumentType.NUMBER,
              defaultValue: 5
            }
          },
          gen: {
            micropy: this.trDotGen
          }
        },
        {
          opcode: 'mb_turtle_beginfill',
          blockType: BlockType.COMMAND,
          func: 'noop',
          text: 'Turtle Begin Fill',
          gen: {
            micropy: this.trFillBeginGen
          }
        },
        {
          opcode: 'mb_turtle_endfill',
          blockType: BlockType.COMMAND,
          func: 'noop',
          text: 'Turtle End Fill',
          gen: {
            micropy: this.trFillEndGen
          }
        },
        {
          opcode: 'mb_turtle_pendown',
          blockType: BlockType.COMMAND,
          func: 'noop',
          text: 'Turtle Pen Down',
          gen: {
            micropy: this.trPenDownGen
          }
        },
        {
          opcode: 'mb_turtle_penup',
          blockType: BlockType.COMMAND,
          func: 'noop',
          text: 'Turtle Pen Up',
          gen: {
            micropy: this.trPenUpGen
          }
        },
        {
          opcode: 'mb_turtle_clear',
          blockType: BlockType.COMMAND,
          func: 'noop',
          text: 'Turtle Clear',
          gen: {
            micropy: this.trClear
          }
        },
        '---',
        {
          opcode: 'mb_pin_mode',
          blockType: BlockType.COMMAND,
          text: 'Pin [PIN] mode[MODE]',
          arguments: {
            PIN: {
              type: ArgumentType.STRING,
              menu: 'PINS',
              defaultValue: 'A0'
            },
            MODE: {
              type: ArgumentType.NUMBER,
              menu: 'PINMODE',
              defaultValue: 'OUT'
            }
          },
          func: 'noop',
          gen: {
            micropy: this.pinModeGen
          }
        },
        {
          opcode: 'mb_pin_write',
          blockType: BlockType.COMMAND,
          text: 'Pin [PIN] write [LVL]',
          func: 'noop',
          arguments: {
            PIN: {
              type: ArgumentType.STRING,
              menu: 'PINS',
              defaultValue: 'A0'
            },
            LVL: {
              type: ArgumentType.NUMBER,
              menu: 'ONOFF',
              defaultValue: 'on'
            }
          },
          gen: {
            micropy: this.pinWriteGen
          }
        },
        {
          opcode: 'mb_pin_read',
          blockType: BlockType.BOOLEAN,
          text: 'Pin [PIN] level',
          func: 'noop',
          arguments: {
            PIN: {
              type: ArgumentType.STRING,
              menu: 'PINS',
              defaultValue: 'A0'
            }
          },
          gen: {
            micropy: this.pinReadGen
          }
        },
        {
          opcode: 'mb_analog_read',
          blockType: BlockType.REPORTER,
          text: 'Pin [PIN] analog',
          func: 'noop',
          arguments: {
            PIN: {
              type: ArgumentType.STRING,
              menu: 'PINSANALOG',
              defaultValue: 'P0'
            }
          },
          gen: {
            micropy: this.pinAnalogGen
          }
        },
        {
          opcode: 'mb_lightsensor',
          blockType: BlockType.REPORTER,
          text: 'Light Strength',
          func: 'noop',
          arguments: {
          },
          gen: {
            micropy: this.lightsensorGen
          }
        },
        {
          opcode: 'mb_temperature',
          blockType: BlockType.REPORTER,
          text: 'Temperature',
          func: 'noop',
          arguments: {
          },
          gen: {
            micropy: this.temperatureGen
          }
        },
        '---',
        {
          opcode: 'mb_button_get',
          blockType: BlockType.BOOLEAN,
          isEdgeActivated: false,
          text: 'Button [BTN] Pressed',
          func: 'noop',
          arguments: {
            BTN: {
              type: ArgumentType.STRING,
              menu: 'BTNLIST',
              defaultValue: 'UP'
            }
          },
          gen: {
            micropy: this.btnGetGen
          }
        },
        {
          opcode: 'mb_button_evt',
          blockType: BlockType.HAT,
          isEdgeActivated: false,
          text: 'On Button [BTN] Pressed',
          func: 'mb_button_evt',
          arguments: {
            BTN: {
              type: ArgumentType.STRING,
              menu: 'BTNLIST',
              defaultValue: 'UP'
            }
          },
          gen: {
            micropy: this.btnEvtGen
          },
          hideFromPalette: true // not user friendly for non-os exec
        },
        '---',
        {
          opcode: 'mb_buzz_tone',
          blockType: BlockType.COMMAND,
          isEdgeActivated: false,
          text: 'Buzz Freq[FREQ] Delay[DELAY]',
          func: 'noop',
          arguments: {
            FREQ: {
              type: ArgumentType.NUMBER,
              defaultValue: 261
            },
            DELAY: {
              type: ArgumentType.NUMBER,
              defaultValue: 1000
            },
          },
          gen: {
            micropy: this.bzToneGen
          }
        },
        {
          opcode: 'mb_buzz_music',
          blockType: BlockType.COMMAND,
          isEdgeActivated: false,
          text: 'Buzz Music [NOTES]',
          func: 'noop',
          arguments: {
            NOTES: {
              type: ArgumentType.STRING,
              defaultValue: 'c4:4 r d4:3 r:2 e4:2 '
            }
          },
          gen: {
            micropy: this.bzMusicGen
          }
        },
        '---',
        {
          opcode: 'mb_imu_acc',
          blockType: BlockType.REPORTER,
          text: 'Imu get Acc [AXIS]',
          func: 'noop',
          arguments: {
            AXIS: {
              type: ArgumentType.STRING,
              menu: 'AXIS',
              defaultValue: 'x'
            }
          },
          gen: {
            micropy: this.imuAccGen
          }
        },
        {
          opcode: 'mb_imu_gyro',
          blockType: BlockType.REPORTER,
          text: 'Imu get Gyro [AXIS]',
          func: 'noop',
          arguments: {
            AXIS: {
              type: ArgumentType.STRING,
              menu: 'AXIS',
              defaultValue: 'x'
            }
          },
          gen: {
            micropy: this.imuGyroGen
          }
        },
        '---',
        {
          opcode: 'mb_servo_init',
          blockType: BlockType.COMMAND,
          text: 'Servo [SERVO] init',
          func: 'noop',
          arguments: {
            SERVO: {
              type: ArgumentType.STRING,
              menu: 'SERVO',
              defaultValue: '1'
            }
          },
          gen: {
            micropy: this.servoInitGen
          }
        },
        {
          opcode: 'mb_servo_angle',
          blockType: BlockType.COMMAND,
          text: 'Servo [SERVO] angle[DEGREE]',
          func: 'noop',
          arguments: {
            SERVO: {
              type: ArgumentType.STRING,
              menu: 'SERVO',
              defaultValue: '1'
            },
            DEGREE: {
              type: ArgumentType.NUMBER,
              defaultValue: 90
            }
          },
          gen: {
            micropy: this.servoAngleGen
          }
        },
        {
          opcode: 'mb_servo_pulse',
          blockType: BlockType.COMMAND,
          text: 'Servo [SERVO] pulse[PULSE]us',
          func: 'noop',
          arguments: {
            SERVO: {
              type: ArgumentType.STRING,
              menu: 'SERVO',
              defaultValue: '1'
            },
            PULSE: {
              type: ArgumentType.NUMBER,
              defaultValue: 1500
            }
          },
          gen: {
            micropy: this.servoPulseGen
          }
        },
        '---',
        {
          opcode: 'mb_uart_init',
          blockType: BlockType.COMMAND,
          text: 'Uart [UART] init baudrate[BAUD]',
          func: 'noop',
          arguments: {
            UART: {
              type: ArgumentType.STRING,
              menu: 'UARTLIST',
              defaultValue: '1'
            },
            BAUD: {
              type: ArgumentType.NUMBER,
              defaultValue: 115200
            }
          },
          gen: {
            micropy: this.uartInitGen
          }
        },
        {
          opcode: 'mb_uart_write',
          blockType: BlockType.COMMAND,
          text: 'Uart [UART] write [TXT]',
          func: 'noop',
          arguments: {
            UART: {
              type: ArgumentType.STRING,
              menu: 'UARTLIST',
              defaultValue: '1'
            },
            TXT: {
              type: ArgumentType.STRING,
              defaultValue: 'hello world'
            }
          },
          gen: {
            micropy: this.uartWriteGen
          }
        },
        {
          opcode: 'mb_uart_read',
          blockType: BlockType.REPORTER,
          text: 'Uart [UART] read',
          func: 'noop',
          arguments: {
            UART: {
              type: ArgumentType.STRING,
              menu: 'UARTLIST',
              defaultValue: '1'
            },
          },
          gen: {
            micropy: this.uartWriteRead
          }
        },
        '---',
        {
          opcode: 'mb_runtime',
          blockType: BlockType.REPORTER,
          text: 'runtime (ms)',
          func: 'noop',
          gen: {
            micropy: this.runtimeGen
          }
        },
        {
          opcode: 'mb_print',
          blockType: BlockType.COMMAND,
          text: 'Print [TXT]',
          arguments: {
            TXT: {
              type: ArgumentType.STRING,
              defaultValue: 'hello world'
            },
          },
          func: 'noop',
          gen: {
            micropy: this.printGen
          }
        },
      ],
      menus: {
        LEDS: ['1', '2'],
        ONOFF: ['on', 'off'],
        PINS: ['P0', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16'],
        PINSANALOG: ['P0', 'P1', 'P2', 'P3', 'P4', 'P8', 'P10', 'P12'],
        PINMODE: ['OUT', 'IN'],
        UARTLIST: [
          {text: '1 JAC', value: '1'},
          {text: '2 P2/P12', value: '2'},
          {text: '6 P9/P6', value: '6'}
        ],
        BTNLIST: [
          {text: 'Left', value: 'LEFT'},
          {text: 'Up', value: 'UP'},
          {text: 'Down', value: 'DOWN'},
          {text: 'Right', value: 'RIGHT'},
          {text: 'A', value: 'BTNA'},
          {text: 'B', value: 'BTNB'},
        ],
        AXIS: ['x', 'y', 'z'],
        SERVO: [
          {text: 'P0', value: '1'},
          {text: 'P1', value: '2'},
          {text: 'P2', value: '3'},
          {text: 'P12', value: '4'}
        ],
      },
      translation_map: {
        'zh-cn': {
          mb_led_toggle: "Led [INDEX] 反转",
          mb_led_intensity: "Led [INDEX] 亮度 [INTENT]",
          mb_tft_fill: "显示屏 填充 [COLOR]",
          mb_tft_pix: "显示屏 像素 x[X] y[Y] [COLOR]",
          mb_tft_line: "显示屏 线条 x[X0] y[Y0] - x[X1] y[Y1] [COLOR]",
          mb_tft_rect: "显示屏 矩形 x[X] y[Y] w[W] h[H] [COLOR]",
          mb_tft_text: "显示屏 文字 [TXT] x[X] y[Y] [COLOR]",
          mb_tft_redraw: "显示屏 刷新",
          mb_turtle_setcolor: "海龟 绘画颜色[COLOR]",
          mb_turtle_forward: "海龟 前进[PIX]",
          mb_turtle_left: "海龟 左转[DEG]度",
          mb_turtle_right: "海龟 右转[DEG]度",
          mb_turtle_heading: "海龟 朝向[DEG]度",
          mb_turtle_goto: "海龟 移动到x[X] y[Y]",
          mb_turtle_setx: "海龟 设置x[POS]",
          mb_turtle_sety: "海龟 设置y[POS]",
          mb_turtle_circle: "海龟 画圈 半径[R] 角度[DEG]",
          mb_turtle_dot: "海龟 画点 大小[SIZE]",
          mb_turtle_beginfill: "海龟 开始填充",
          mb_turtle_endfill: "海龟 结束填充",
          mb_turtle_penup: "海龟 抬笔",
          mb_turtle_pendown: "海龟 落笔",
          mb_turtle_clear: "海龟 清屏",
          mb_pin_mode: "引脚 [PIN] 模式[MODE]",
          mb_pin_write: "引脚 [PIN] 数字写[LVL]",
          mb_pin_read: "引脚 [PIN] 读电平",
          mb_analog_read: "引脚 [PIN] 模拟值",
          mb_uart_init: "串口 [UART] 初始化 波特率[BAUD]",
          mb_uart_write: "串口 [UART] 写 [TXT]",
          mb_uart_read: "串口 [UART] 读",
          mb_button_evt: "当按键 [BTN] 按下",
          mb_buzz_music: "蜂鸣器音符 [NOTES]",
          mb_buzz_tone: "蜂鸣器 频率[FREQ] 延时[DELAY]",
          mb_runtime: "运行时间 (ms)",
          mb_imu_acc: "加速度 [AXIS]",
          mb_imu_gyro: "转向加速度 [AXIS]",
          mb_servo_init: "Servo [SERVO] 初始化",
          mb_servo_angle: "Servo [SERVO] 角度[DEGREE]",
          mb_servo_pulse: "Servo [SERVO] 脉冲[PULSE]us",
          mb_button_get: "按键 [BTN] 按下"
        },
      }
    }
  }

  noop(args){

  }

  mb_led_onoff (args){

  }

  mb_led_toggle (args){
    
  }

  mb_led_intensity (args){
    
  }

  sleepGen (gen, block){
    gen.imports_['mbit_time'] = `from time import sleep\n`;
    const sec = gen.valueToCode(block, 'SEC', gen.ORDER_NONE);
    const code = `sleep(${sec})\n`;
    return code;
  }

  ledOnOffGen (gen, block){
    ledCommon(gen);
    const led = gen.valueToCode(block, 'INDEX', gen.ORDER_NONE);
    const op = gen.valueToCode(block, 'ONOFF', gen.ORDER_NONE);
    const code = `led${led}.${op}()\n`;
    return code;
  }

  ledToggleGen (gen, block){
    ledCommon(gen);
    const led = gen.valueToCode(block, 'INDEX', gen.ORDER_NONE);
    const code = `led${led}.toggle()\n`;
    return code;
  }

  ledIntensityGen (gen, block){
    ledCommon(gen);
    const led = gen.valueToCode(block, 'INDEX', gen.ORDER_NONE);
    const intensity = gen.valueToCode(block, 'INTENT', gen.ORDER_NONE);
    const code = `led${led}.intensity(${intensity})\n`;
    return code;
  }


  mb_tft_fill (args, util){
    const COLOR = args.COLOR;

    return this.write(`M0 \n`);
  }

  tftFillGen (gen, block){
    tftCommon(gen);
    const color = colorToHex(gen.valueToCode(block, 'COLOR'));
    const code = `fb.fill(${color})\n`
    return code;
  }

  tftPixGen (gen, block){
    tftCommon(gen);
    const color = colorToHex(gen.valueToCode(block, 'COLOR'));
    const x = gen.valueToCode(block, 'X');
    const y = gen.valueToCode(block, 'Y');
    const code = `fb.pixel(${x}, ${y}, ${color})\n`
    return code;
  }

  tftLineGen (gen, block){
    tftCommon(gen);
    const color = colorToHex(gen.valueToCode(block, 'COLOR'));
    const x0 = gen.valueToCode(block, 'X0');
    const y0 = gen.valueToCode(block, 'Y0');
    const x1 = gen.valueToCode(block, 'X1');
    const y1 = gen.valueToCode(block, 'Y1');
    const code = `fb.line(${x0},${y0},${x1},${y1},${color})\n`
    return code;
  }

  tftRectGen (gen, block){
    tftCommon(gen);
    const color = colorToHex(gen.valueToCode(block, 'COLOR'));
    const x = gen.valueToCode(block, 'X');
    const y = gen.valueToCode(block, 'Y');
    const w = gen.valueToCode(block, 'W');
    const h = gen.valueToCode(block, 'H');
    const code = `fb.rect(${x},${y},${w},${h},${color})\n`
    return code;
  }

  tftTextGen (gen, block){
    tftCommon(gen);
    const color = colorToHex(gen.valueToCode(block, 'COLOR'));
    const x = gen.valueToCode(block, 'X');
    const y = gen.valueToCode(block, 'Y');
    const txt = gen.valueToCode(block, 'TXT');
    const code = `fb.text(${txt},${x},${y},${color})\n`
    return code;
  }

  tftRedrawGen (gen, block){
    tftCommon(gen);
    return 'tft.show(fb)\n';
  }

  pinModeGen (gen, block){
    const pin = gen.valueToCode(block, 'PIN')
    const mode = gen.valueToCode(block, 'MODE')
    if (mode === 'OUT'){
      gen.variables_[`mb_${pin}`] = `p_${pin} = Pin('${pin}', Pin.OUT_PP)\n`;
    } else {
      gen.variables_[`mb_${pin}`] = `p_${pin} = Pin('${pin}', Pin.IN, Pin.PULL_UP)\n`;
    }
  }

  pinWriteGen (gen, block){
    const pin = gen.valueToCode(block, 'PIN')
    const lvl = gen.valueToCode(block, 'LVL')
    if (!gen.variables_[`mb_${pin}`]){
      gen.variables_[`mb_${pin}`] = `p_${pin} = Pin('${pin}', Pin.OUT_PP)\n`;
    }
    if (lvl === 'on'){
      return `p_${pin}.high()\n`
    } else {
      return `p_${pin}.low()\n`
    }
  }

  pinReadGen (gen, block){  
    const pin = gen.valueToCode(block, 'PIN')
    // noob friendly
    if (!gen.variables_[`mb_${pin}`]){
      gen.variables_[`mb_${pin}`] = `p_${pin} = Pin('${pin}', Pin.IN, Pin.PULL_UP)\n`;
    }
    return [`p_${pin}.value()`, 0]
  }

  pinAnalogGen (gen, block){
    const pin = gen.valueToCode(block, 'PIN')
    gen.functions_[`analog_${pin}`] = `analog_${pin} = ADC('${pin}')`
    return [`analog_${pin}.read()`, 0]
  }

  mb_lightsensor (gen, block){
    gen.functions_[`lightsensor`] = `pin_light = ADC('LIGHT')`
    return [`pin_light.read()`, 0]
  }

  mb_lightsensor (gen, block){
    gen.imports_[`math`] = `import math\n`
    gen.functions_[`adc2temp`] = `def adc2temp(adcValue, res=10000, beta=3300, norm=25.0, normread=10000, zero=273.5):
  sensor = 4096.0*res/adcValue - res
  value = (1.0 / ((math.log(sensor / normread) / beta) + (1.0 / (norm + zero)))) - zero
  return value\n`
    gen.functions_[`temperature`] = `pin_temp = ADC('TEMP')`
    return [`adc2temp(pin_temp.read())`, 0]
  }


  uartInitGen (gen, block){
    const idx = gen.valueToCode(block, 'UART')
    const baud = gen.valueToCode(block, 'BAUD')
    gen.variables_[`mb_uart${idx}`] = `uart${idx} = UART(${idx}, ${baud})\n`;
  }

  uartWriteGen (gen, block){
    const idx = gen.valueToCode(block, 'UART')
    const txt = gen.valueToCode(block, 'TXT')
    const code =`uart${idx}.write(${txt})\n`;
    return code;
  }

  uartWriteRead (gen, block){
    const idx = gen.valueToCode(block, 'UART')
    const code =`uart${idx}.read()`;
    return [code, 0];
  }

  trColorGen (gen, block){
    turtleCommon(gen);
    const color = colorToHex(gen.valueToCode(block, 'COLOR'));
    const code = `turtle.fillcolor(${color})\n`;
    return code;
  }

  trForwardGen (gen, block){
    turtleCommon(gen);
    const len = gen.valueToCode(block, 'PIX', gen.ORDER_NONE);
    const code = `turtle.forward(${len})\n`;
    return code;
  }

  trLeftGen (gen, block){
    turtleCommon(gen);
    const deg = gen.valueToCode(block, 'DEG', gen.ORDER_NONE);
    const code = `turtle.left(${deg})\n`;
    return code;
  }

  trRightGen (gen, block){
    turtleCommon(gen);
    const deg = gen.valueToCode(block, 'DEG', gen.ORDER_NONE);
    const code = `turtle.right(${deg})\n`;
    return code;
  }

  trHeadingGen (gen, block){
    turtleCommon(gen);
    const deg = gen.valueToCode(block, 'DEG', gen.ORDER_NONE);
    const code = `turtle.setheading(${deg})\n`;
    return code;
  }

  trGotoGen (gen, block){
    turtleCommon(gen);
    const x = gen.valueToCode(block, 'X', gen.ORDER_NONE);
    const y = gen.valueToCode(block, 'Y', gen.ORDER_NONE);
    const code = `turtle.goto(${x}, ${y})\n`;
    return code;
  }

  trSetxGen (gen, block){
    turtleCommon(gen);
    const x = gen.valueToCode(block, 'POS', gen.ORDER_NONE);
    const code = `turtle.setx(${x})\n`;
    return code;
  }

  trSetyGen (gen, block){
    turtleCommon(gen);
    const y = gen.valueToCode(block, 'POS', gen.ORDER_NONE);
    const code = `turtle.sety(${y})\n`;
    return code;
  }

  trCircleGen (gen, block){
    turtleCommon(gen);
    const r = gen.valueToCode(block, 'R', gen.ORDER_NONE);
    const deg = gen.valueToCode(block, 'DEG', gen.ORDER_NONE);
    const code = `turtle.circle(${r}, ${deg})\n`;
    return code;
  }

  trDotGen (gen, block){
    turtleCommon(gen);
    const size = gen.valueToCode(block, 'SIZE', gen.ORDER_NONE);
    const code = `turtle.dot(${size})\n`;
    return code;
  }

  trFillBeginGen (gen, block){
    turtleCommon(gen);
    const size = gen.valueToCode(block, 'SIZE', gen.ORDER_NONE);
    const code = `turtle.dot(${size})\n`;
    return code;
  }

  trFillBeginGen (gen, block){
    turtleCommon(gen);
    const code = `turtle.begin_fill()\n`;
    return code;
  }

  trFillEndGen (gen, block){
    turtleCommon(gen);
    const code = `turtle.end_fill()\n`;
    return code;
  }

  trPenUpGen (gen, block){
    turtleCommon(gen);
    const code = `turtle.penup()\n`;
    return code;
  }

  trPenDownGen (gen, block){
    turtleCommon(gen);
    const code = `turtle.pendown()\n`;
    return code;
  }

  trClear (gen, block){
    turtleCommon(gen);
    const code = `turtle.clear()\n`;
    return code;
  }

  imuAccGen (gen, block){
    imuCommon(gen);
    const axis = gen.valueToCode(block, 'AXIS', gen.ORDER_NONE);
    const code = `acc.get_ac_${axis}()`
    return [code, 0]
  }

  imuGyroGen (gen, block){
    imuCommon(gen);
    const axis = gen.valueToCode(block, 'AXIS', gen.ORDER_NONE);
    const code = `acc.get_g_${axis}()`
    return [code, 0]
  }

  servoInitGen (gen, block){
    const s = gen.valueToCode(block, 'SERVO', gen.ORDER_NONE);
    gen.variables_[`mb_s${s}`] = `s${s} = Servo(${s})\n`;
  }

  servoAngleGen (gen, block){
    const s = gen.valueToCode(block, 'SERVO', gen.ORDER_NONE);
    const a = gen.valueToCode(block, 'DEGREE', gen.ORDER_NONE);
    const code = `s${s}.angle(${a})\n`
    return code;
  }

  servoPulseGen (gen, block){
    const s = gen.valueToCode(block, 'SERVO', gen.ORDER_NONE);
    const a = gen.valueToCode(block, 'PULSE', gen.ORDER_NONE);
    const code = `s${s}.pulse_width(${a})\n`
    return code;
  }

  mb_tft_pix (args, util){
    const X = args.X;
    const Y = args.Y;
    
    return this.write(`M0 \n`);
  }

  mb_tft_line (args, util){
    const X0 = args.X0;
    const Y0 = args.Y0;
    const X1 = args.X1;
    const Y1 = args.Y1;

    return this.write(`M0 \n`);
  }

  mb_tft_rect (args, util){
    const X = args.X;
    const Y = args.Y;
    const W = args.W;
    const H = args.H;

    return this.write(`M0 \n`);
  }

  mb_tft_text (args, util){
    const TXT = args.TXT;
    const X = args.X;
    const Y = args.Y;

    return this.write(`M0 \n`);
  }

  mb_button_evt (args) {
    // console.log("mqtt got" + args);
    return true;
  }

  btnGetGen (gen, block){
    const btn = gen.valueToCode(block, 'BTN');
    gen.variables_[`mb_${btn}`] = `btn_${btn} = Pin('${btn}', Pin.IN, Pin.PULL_UP)\n`;
    const code = `btn_${btn}.value()`;
    return [code, 0]
  }

  btnEvtGen (gen, block){
    const btn = gen.valueToCode(block, 'BTN');
    const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    let code = gen.blockToCode(nextBlock) || 'pass';
    code = gen.prefixLines(code, gen.INDENT)
    gen.functions_[`_mb_btn_evt_${btn}`] = `\ndef onBtn${btn}Pressed(evt):\n  ${gen.getVarGlobals()}\n${code}\n`;
    gen.functions_[`mb_btn_${btn}`] = `ExtInt(Pin('${btn}'), ExtInt.IRQ_FALLING, Pin.PULL_UP, onBtn${btn}Pressed) `
  }

  bzToneGen (gen, block){
    buzzComm(gen);
    const freq = gen.valueToCode(block, 'FREQ');
    const t = gen.valueToCode(block, 'DELAY');
    const code = `tone(${freq}, ${t})\n`;
    return code;
  }

  bzMusicGen (gen, block){
    buzzComm(gen);
    const notes = gen.valueToCode(block, 'NOTES');
    const code = `music(${notes})\n`;
    return code;
  }

  runtimeGen (gen, block){
    gen.imports_['mbit_ticksms'] = `from time import ticks_ms\n`;
    const code = `ticks_ms()`;
    return [code, 0];
  }

  printGen (gen, block){
    const txt = gen.valueToCode(block, 'TXT');
    const code = `print(str(${txt}))\n`;
    return code;
  }


}

module.exports = meowbit;
