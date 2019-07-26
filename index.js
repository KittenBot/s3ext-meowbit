
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

    // repl state
    this.state = 0;
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
        this.state = 0;
      }
    }

  }


  onclose (){
      this.session = null;
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
          opcode: 'mb_sleep',
          blockType: BlockType.COMMAND,
          text: 'Sleep [SEC]sec',
          arguments: {
            SEC: {
              type: ArgumentType.NUMBER,
              defaultValue: 1
            },
          },
          func: 'noop',
          gen: {
            micropy: this.sleepGen
          }
        },
        '---',
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
      ],
      menus: {
        LEDS: ['1', '2'],
        ONOFF: ['on', 'off'],
        PINS: ['A3', 'A0', 'A4', 'D4', 'D9', 'D2', 'A1', 'A2', 'PC6', 'A5', 'D3', 'D0', 'D1'],
        PINMODE: ['OUT', 'IN'],
        UARTLIST: ['1', '2', '6']

      },
      translation_map: {
        'zh-cn': {
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
    if (lvl === 'on'){
      return `p_${pin}.high()\n`
    } else {
      return `p_${pin}.low()\n`
    }
  }

  pinReadGen (gen, block){  
    const pin = gen.valueToCode(block, 'PIN')
    return [`p_${pin}.value()`, 0]
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

}

module.exports = meowbit;
