import * as Audit from './index';
import { IShortcode} from '../../interfaces/models'

describe('Utils::Audit', () => {
  it('create', () => {
    const url = 'https://www.gmail.com'
    const code = '12345678'
    const shortcode = <IShortcode>{ url, code};
    const updated = Audit.create(shortcode);
    expect(updated.id).not.toBeNull();
    expect(updated.createdAt).not.toBeNull();
    expect(updated.updatedAt).not.toBeNull();
  });
});

