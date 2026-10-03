import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  selectedDistance: number = 25;
  selectedAgeRange: number = 30;
  selectedGender: string = 'all';

  interests: string[] = ['Music', 'Travel', 'Fitness', 'Cooking', 'Gaming', 'Photography'];
  selectedInterests: string[] = ['Music', 'Travel'];

  toggleInterest(interest: string) {
    if (this.selectedInterests.includes(interest)) {
      this.selectedInterests = this.selectedInterests.filter(item => item !== interest);
    } else {
      this.selectedInterests.push(interest);
    }
  }
}