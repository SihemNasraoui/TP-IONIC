import { User } from './../Models/user.models';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  addForm = this.formBuilder.group({
    name: ['', Validators.required],
    age: ['', [Validators.required, Validators.min(0)]],
    salary: ['', [Validators.required, Validators.min(0)]],
    email: ['', Validators.email]
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,

  ) { }

  async addUser() {
    const user: User = this.addForm.value;
    this.userService.addUser(user);
    this.addForm.reset();
  }

  ngOnInit(): void {

  }
}
