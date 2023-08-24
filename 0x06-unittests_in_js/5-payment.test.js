const mocha = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consSpy;

  beforeEach(() => {
    // runs before each test in this block
    consSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // runs after each test in this block
    consSpy.restore();
  });

  it('checks output of sendPaymentRequestToApi with 100 and 20 as args', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(consSpy.calledOnce).to.be.true;
  });

  it('checks output of sendPaymentRequestToApi with 10 and 10 as args', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(consSpy.calledOnce).to.be.true;
  });
});
