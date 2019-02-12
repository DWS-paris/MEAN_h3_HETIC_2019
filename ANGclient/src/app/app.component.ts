// Import
import { Component } from '@angular/core';
import { UserModel } from "./models/user.model";

// Definition
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export
export class AppComponent {
  public myTitle: String;
  public formData: UserModel;

  constructor(){
    this.myTitle = 'Hello Angular';
    this.formData = {
      email: undefined,
      name: undefined,
      password: undefined
    }
  };

  public formSubmit( ): void{
    console.log(this.formData);
  }
}
