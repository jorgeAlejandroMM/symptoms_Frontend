import { Component } from '@angular/core';
import { SymptomService } from './services/Symptom/symptom.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tablero';

  constructor(private service :SymptomService){
    
  }
}
