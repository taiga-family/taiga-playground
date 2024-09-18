import { TuiRoot, TuiSelect } from '@taiga-ui/core';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FormControl,
  FormsModule,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  TuiSelectModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
  standalone: true,
  imports: [
    TuiSelect,
    TuiSelectModule,
    RouterModule,
    TuiRoot,
    FormsModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected persons = ['Не важно', 'text1', 'text2', 'text3', 'text4', 'text5'];

  protected testForm: any = new FormGroup({
    personValue: new FormControl(this.persons[0]),
  });
}
