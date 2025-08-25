import { Component, EventEmitter, Output } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from  '@angular/material/input' ;
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


export function completedValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value?.trim().toLowerCase();
        if (value === 'да' || value === 'нет') {
            return null;
        }
        return { invalidCompleted: true};
    };
}

@Component({
    selector: 'app-create-todo-form',
    templateUrl:'./create-todo-form.component.html',
    styleUrl: 'create-todo-form.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule, MatFormFieldModule , MatInputModule , MatButtonModule,  MatIconModule,]

})

export class CreateTodoFormComponent{

    @Output()
    createTodo = new EventEmitter();

    public formTodo = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.minLength(2)]),
        userId: new FormControl('', [Validators.required, Validators.minLength(2)]),
        completed: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(3), completedValidator()]),
    });

    private getCompletedValue(): boolean {
        const value = this.formTodo.get('completed')?.value!.trim().toLowerCase();
        if (value === 'да')
            return true;
        else return false;
    }

    public submintTodoForm(): void {
        this.createTodo.emit({ ...this.formTodo.value, completed: this.getCompletedValue()});
        this.formTodo.reset();
    }
}