import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Client} from "../../../models/client";
import {ClientService} from "../../../services/client.service";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  clientForm: FormGroup;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.clientForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required, Validators.pattern("[1-9][0-9]{8}")],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validators: this.matchingPasswordsValidator });
  }

  get firstName() { return this.clientForm.get('fistName'); }
  get lastName() { return this.clientForm.get('lastName'); }
  get phoneNumber() { return this.clientForm.get('phoneNumber'); }
  get email() { return this.clientForm.get('email'); }
  get password() { return this.clientForm.get('password'); }
  get confirmPassword() { return this.clientForm.get('confirmPassword'); }

  matchingPasswordsValidator(formGroup: FormGroup): null | { mismatch: boolean } {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    return password.value === confirmPassword.value ? null : { mismatch: true };
  }

  onSubmitForm(): void {
    const client: Client = this.clientForm.value;
    this.clientService.addClient(client).subscribe(
      () => {
        this.router.navigate(['/list-client']);
      },
      error => {
        this.errorMessage = error.error.message;
      }
    );
  }

  onCancel() {
    this.router.navigate(['/list-client']);
  }

}
