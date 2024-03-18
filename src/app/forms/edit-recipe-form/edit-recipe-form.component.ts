import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-edit-recipe-form',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule, FormsModule, MatButtonModule, MatRadioModule],
  templateUrl: './edit-recipe-form.component.html',
  styleUrl: './edit-recipe-form.component.scss'
})
export class EditRecipeFormComponent {

  
  recipeItem: any={
    title: 'Biryani',
    description:'mast hai biryani bhai',
    foodType:'Non-veg',
    image:'image'
   }

   onSubmit(value: any){
    console.log("values", this.recipeItem)
   }
}
