var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct object', () => {
    var from = 'Alex';
    var text = 'Text';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from,
      text
    });
  });
});


describe('generateLocationMessage', () => {
  it('should generate the correct location', () => {
    var from = 'Alex';
    var latitude = 1;
    var longitude = 1;
    var url = 'https://www.google.es/maps?q='+latitude+','+longitude;
    var createdAt = new Date().getTime();

    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.url).toBeA('string');
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from,
      url,
      createdAt

    });

  });
});
