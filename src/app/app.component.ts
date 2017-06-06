import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  options = ['Stable','Critical','Finished'] ;
  projectForm : FormGroup;


  ngOnInit(){
    this.projectForm = new FormGroup({
      'projectName' : new FormControl(
        null,
        [Validators.required,CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus' : new FormControl("Critical")
    });

    this.projectForm.statusChanges.subscribe(
      (value) => {
        if(value === 'VALID'){
          console.log(value);
        }
        else if(value == 'INVALID'){
          console.log(value);
        }
      }
    );
  }

  onSaveProject(){
    if(this.projectForm.status === 'VALID'){
      
      console.log(this.projectForm.value);

      this.projectForm.reset({
        'projectStatus' : "Critical"
      });
    }
  }

}
