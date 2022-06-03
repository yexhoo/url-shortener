import * as Logger from './index';

describe('Utils::Logger', () => {
  it('info', () => {
    Logger.info('test')
    Logger.info('test', 'arg1', 'arg2', 'arg3')
  });
});

