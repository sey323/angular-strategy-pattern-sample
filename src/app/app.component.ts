import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculationKey } from './services/calculation-key';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculationStrategiesService } from './services/calculation-strategies.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  calculationKeyEnums = CalculationKey;
  selectedCalculation: CalculationKey = CalculationKey.ADD;
  firstNumber = 10;
  secondNumber = 5;
  result = 0;
  calculationStrategiesService: CalculationStrategiesService;

  constructor(
    private _calculationStrategiesService: CalculationStrategiesService
  ) {
    this.calculationStrategiesService = _calculationStrategiesService;
  }

  calculate() {
    this.result = this.calculationStrategiesService.execute(
      this.selectedCalculation,
      this.firstNumber,
      this.secondNumber
    );
  }
}
