import { JwtStrategy } from './jwt.strategy';

describe('JwtStrategy.Ts', () => {
  it('should be defined', () => {
    expect(new JwtStrategy()).toBeDefined();
  });
});
