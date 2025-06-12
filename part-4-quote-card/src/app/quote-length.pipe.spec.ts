import { QuoteLengthPipe } from './quote-length.pipe';

describe('QuoteLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new QuoteLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
