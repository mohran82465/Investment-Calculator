import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-uesr-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './uesr-input.component.html',
  styleUrl: './uesr-input.component.css'
})
export class UesrInputComponent {

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService) { }

  onSubit() {
    this.investmentService.calculateInvestmentResults(
      {
        initialInvestment: +this.enteredInitialInvestment(),
        duration: +this.enteredDuration(),
        expectedReturn: +this.enteredExpectedReturn(),
        annualInvestment: +this.enteredAnnualInvestment()
      }
    )
    this.enteredInitialInvestment.set('0')
    this.enteredAnnualInvestment.set('0')
    this.enteredExpectedReturn.set('5')
    this.enteredDuration.set('10')

  }
}