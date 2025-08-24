import { NgIf } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: 'app-create-form-user',
    templateUrl: './create-user-form.component.html',
    styleUrl: './create-user-form.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule, NgIf],
})

export class CreateUserFormComponent{

@Output ()
createUser = new EventEmitter();

 public form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    address: new FormControl('', [Validators.required, Validators.minLength(2)]),
    companyName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(7)]),
 });

 public submintForm(): void{
    this.createUser.emit(this.form.value);
    this.form.reset();
}
}