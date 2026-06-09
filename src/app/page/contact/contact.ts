import { Component, inject } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private fb = inject(FormBuilder);

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    message: ['', [Validators.required, Validators.minLength(15)]],
  });

  submit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    console.log(this.contactForm.value);

    emailjs
      .send(
        'service_s1x3k8c',
        'template_tpmcfo7',
        {
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email,
          phone: this.contactForm.value.phone,
          message: this.contactForm.value.message,
        },
        'MXWS_HdKeVnE5WznE',
      )
      .then(() => {
        console.log('SUCCESS!');

        this.contactForm.reset();
      });
  }
}
