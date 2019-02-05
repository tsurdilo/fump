import BpmnModdle from 'bpmn-moddle';
import BpmnPackage from './resources/json/bpmn.json';
import BpmnDiPackage from './resources/json/bpmndi.json';
import DcPackage from './resources/json/dc.json';
import DiPackage from './resources/json/di.json';

export const fumpPackages = {
  bpmn: BpmnPackage,
  bpmndi: BpmnDiPackage,
  dc: DcPackage,
  di: DiPackage,
};

export class Fump {
  private packages = {
    bpmn: BpmnPackage,
    bpmndi: BpmnDiPackage,
    dc: DcPackage,
    di: DiPackage,
  };
  private model: BpmnModdle.BPMNModdle;

  constructor() {
    this.model = new BpmnModdle(this.packages);
  }

  public getModel(): BpmnModdle.BPMNModdle {
    return this.model;
  }
}
