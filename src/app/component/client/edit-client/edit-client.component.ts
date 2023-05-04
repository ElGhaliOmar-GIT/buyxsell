import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Client} from "../../../models/client";
import {ClientService} from "../../../services/client.service";

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  ClientForm: FormGroup;
  errorMessage: string;
  client: Client;

  constructor(
    private formBuilder: FormBuilder,
    private ClientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.ClientService.getClientById(id).subscribe((client) => {
      this.client = client;
      console.log("asdfwkhfvbqlwkjef" ,this.client )
    });
    this.initForm();
  }

  initForm(): void {
    this.ClientForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required, Validators.pattern("[1-9][0-9]{8}")],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validators: this.matchingPasswordsValidator });
  }

  get firstName() { return this.ClientForm.get('fistName'); }
  get lastName() { return this.ClientForm.get('lastName'); }
  get phoneNumber() { return this.ClientForm.get('phoneNumber'); }
  get email() { return this.ClientForm.get('email'); }
  get password() { return this.ClientForm.get('password'); }
  get confirmPassword() { return this.ClientForm.get('confirmPassword'); }

  matchingPasswordsValidator(formGroup: FormGroup): null | { mismatch: boolean } {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    return password.value === confirmPassword.value ? null : { mismatch: true };
  }

  onSubmitForm(): void {
    this.ClientService.updateClient(this.client).subscribe(() => {
      console.log('Cart updated successfully');
      this.onCancel();
    }, (error) => {
      console.error('Error updating cart: ', error);
    });
  }

  onCancel() {
    this.router.navigate(['/list-Client']);
  }
}
