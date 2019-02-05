import { Fump } from '../index';

test('Simple Fump', () => {
  const fump = new Fump();

  const element1 = fump.getModdle().create('bpmn:UserTask');

  fump.getModdle().toXML(element1, {}, (err: Error, result: string) => {
    expect(result).toContain('bpmn:userTask');
  });
});
