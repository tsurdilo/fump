import { Fump } from '../index';

test('Simple Fump', () => {
  const fump = new Fump();

  const element1 = fump.getModel().create('bpmn:UserTask');

  fump.getModel().toXML(element1, {}, (err: Error, result: string) => {
    expect(result).toContain('<bpmn:userTask');
  });
});
