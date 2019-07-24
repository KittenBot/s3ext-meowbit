
// create by scratch3-extension generator
const ArgumentType = Scratch.ArgumentType;
const BlockType = Scratch.BlockType;
const formatMessage = Scratch.formatMessage;
const log = Scratch.log;

const menuIconURI = "data:image/png;base64,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";
const blockIconURI = null;

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

  onmessage (data){
    const dataStr = this.decoder.decode(data);
    this.lineBuffer += dataStr;
    if (this.lineBuffer.indexOf('\n') !== -1){
      const lines = this.lineBuffer.split('\n');
      this.lineBuffer = lines.pop();
      for (const l of lines){
        if (this.reporter){
          const {parser, resolve} = this.reporter;
          resolve(parser(l));
        };
      }
    }
  }

  scan (){
    this.comm.getDeviceList().then(result => {
        this.runtime.emit(this.runtime.constructor.PERIPHERAL_LIST_UPDATE, result);
    });
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
          opcode: 'mb_inittft',
          blockType: BlockType.COMMAND,
          text: 'Init TFT'
        },
        {
          opcode: 'mb_tft_fill',
          blockType: BlockType.COMMAND,
          arguments: {
            COLOR: {
              type: ArgumentType.STRING
            }
          },
          text: 'TFT fill [COLOR]'
        },
        {
          opcode: 'mb_tft_pix',
          blockType: BlockType.COMMAND,
          arguments: {
            X: {
              type: ArgumentType.STRING
            },
            Y: {
              type: ArgumentType.STRING
            }
          },
          text: 'TFT Pixel [X] [Y]'
        },
        {
          opcode: 'mb_tft_line',
          blockType: BlockType.COMMAND,
          arguments: {
            X0: {
              type: ArgumentType.STRING
            },
            Y0: {
              type: ArgumentType.STRING
            },
            X1: {
              type: ArgumentType.STRING
            },
            Y1: {
              type: ArgumentType.STRING
            }
          },
          text: 'TFT Line [X0] [Y0] - [X1] [Y1]'
        },
        {
          opcode: 'mb_tft_rect',
          blockType: BlockType.COMMAND,
          arguments: {
            X: {
              type: ArgumentType.STRING
            },
            Y: {
              type: ArgumentType.STRING
            },
            W: {
              type: ArgumentType.STRING
            },
            H: {
              type: ArgumentType.STRING
            }
          },
          text: 'TFT Rect [X] [Y] [W] [H]'
        },
        {
          opcode: 'mb_tft_text',
          blockType: BlockType.COMMAND,
          arguments: {
            TXT: {
              type: ArgumentType.STRING
            },
            X: {
              type: ArgumentType.STRING
            },
            Y: {
              type: ArgumentType.STRING
            }
          },
          text: 'TFT text [TXT] [X] [Y]'
        }
      ]
    }
  }

mb_inittft (args, util){

  return this.write(`M0 \n`);
}

mb_tft_fill (args, util){
  const COLOR = args.COLOR;

  return this.write(`M0 \n`);
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
