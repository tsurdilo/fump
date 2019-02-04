import BpmnModdle from 'bpmn-moddle';
import * as jbpmModdleJSON from './resources/jbpm.json';

const fump = new BpmnModdle({ camunda: jbpmModdleJSON });

export default fump;
