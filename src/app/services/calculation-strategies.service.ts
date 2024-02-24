import { Injectable } from '@angular/core';
import { CalculationKey } from './calculation-key';
import { CalculationInterface } from './calculation-interface';
import {
  AddService,
  DivideService,
  MultiplyService,
  SubtractService,
} from './calculation-services';

@Injectable({
  providedIn: 'root',
})
export class CalculationStrategiesService {
  private calculationServices: Map<CalculationKey, CalculationInterface>;

  constructor(
    private addService: AddService,
    private subtractService: SubtractService,
    private multiplyService: MultiplyService,
    private divideService: DivideService
  ) {
    this.calculationServices = new Map<CalculationKey, CalculationInterface>();

    // Add the services to the map
    this.calculationServices.set(CalculationKey.ADD, addService);
    this.calculationServices.set(CalculationKey.SUBTRACT, subtractService);
    this.calculationServices.set(CalculationKey.MULTIPLY, multiplyService);
    this.calculationServices.set(CalculationKey.DIVIDE, divideService);
  }

  // Execute the calculation
  execute(calculationKey: CalculationKey, a: number, b: number): number {
    return this.calculationServices.get(calculationKey)!.execute(a, b);
  }
}
