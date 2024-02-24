import { Injectable } from '@angular/core';
import { CalculationInterface } from './calculation-interface';

@Injectable({
  providedIn: 'root',
})
export class AddService implements CalculationInterface {
  execute(a: number, b: number): number {
    return a + b;
  }
}

@Injectable({
  providedIn: 'root',
})
export class SubtractService implements CalculationInterface {
  execute(a: number, b: number): number {
    return a - b;
  }
}

@Injectable({
  providedIn: 'root',
})
export class MultiplyService implements CalculationInterface {
  execute(a: number, b: number): number {
    return a * b;
  }
}

@Injectable({
  providedIn: 'root',
})
export class DivideService implements CalculationInterface {
  execute(a: number, b: number): number {
    return a / b;
  }
}
