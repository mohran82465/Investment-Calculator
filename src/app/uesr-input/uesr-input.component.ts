import { Component, EventEmitter, output, Output, signal } from '@angular/core';
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
  calculate = output<InvestmentInput>();
  enteredInitialInvestment = signal( '0');
  enteredAnnualInvestment = signal( '0');
  enteredExpectedReturn = signal( '5');
  enteredDuration = signal( '10');

  onSubit() { 
    this.calculate.emit({
      initialInvestment:+this.enteredInitialInvestment(), 
      duration:+this.enteredDuration(),
      expectedReturn:+this.enteredExpectedReturn(),
      annualInvestment:+this.enteredAnnualInvestment()
    }); 

    this.enteredInitialInvestment.set('0')
    this.enteredAnnualInvestment.set('0')
    this.enteredExpectedReturn.set('5')
    this.enteredDuration.set('10')
    
  }
}
