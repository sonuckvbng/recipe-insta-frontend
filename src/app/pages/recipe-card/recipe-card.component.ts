import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { EditRecipeFormComponent } from '../../forms/edit-recipe-form/edit-recipe-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatIconModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {

  constructor(public dialog: MatDialog) { }

  handleEditRecipeForm() {
    this.dialog.open(EditRecipeFormComponent)
  }
  
}
