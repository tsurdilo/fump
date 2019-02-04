import BpmnModdle from 'bpmn-moddle';
import * as jbpmModdleJSON from './resources/jbpm.json';

const fump = new BpmnModdle({ jbpm: jbpmModdleJSON });

export default fump;
