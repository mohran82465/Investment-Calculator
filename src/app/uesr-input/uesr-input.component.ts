import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-uesr-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './uesr-input.component.html',
  styleUrl: './uesr-input.component.css'
})
export class UesrInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>()
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubit() {
    this.calculate.emit({
      initialInvestment:+this.enteredInitialInvestment, 
      duration:+this.enteredDuration,
      expectedReturn:+this.enteredExpectedReturn,
      annualInvestment:+this.enteredAnnualInvestment
    })
    
  }
}
