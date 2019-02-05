import { Fump } from '../index';

test('Simple User Task', () => {
  const fump = new Fump();
  const element1 = fump.getModel().create('bpmn:UserTask');

  fump.getModel().toXML(element1, {}, (err: Error, result: string) => {
    expect(result).toContain('<bpmn:userTask');
  });
});

test('Simple Definitions', () => {
  const fump = new Fump();
  const element1 = fump.getModel().create('bpmn:Definitions', {
    name: 'myprocess',
  });

  fump.getModel().toXML(element1, {}, (err: Error, result: string) => {
    expect(result).toContain(
      'bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" name="myprocess"',
    );
  });
});

test('Definitions with Process', done => {
  const xmlStr =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<bpmn2:definitions xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" ' +
    'id="empty-definitions" ' +
    'targetNamespace="http://bpmn.io/schema/bpmn">' +
    '</bpmn2:definitions>';

  const fump = new Fump();
  fump.getModel().fromXML(xmlStr, {}, (err: Error, definitions: any) => {
    definitions.set('id', 'NEW ID');
    const bpmnProcess = fump.getModel().create('bpmn:Process', { id: 'MyProcess_1' });
    definitions.get('rootElements').push(bpmnProcess);
    fump.getModel().toXML(definitions, {}, (err2: Error, result: string) => {
      expect(result).toContain(
        '<bpmn2:definitions xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" id="NEW ID"',
      );
      expect(result).toContain('<bpmn2:process id="MyProcess_1" /></bpmn2:definitions>');
      done();
    });
  });
});
