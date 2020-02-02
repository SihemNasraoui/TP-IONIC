import { User } from './../Models/user.models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  id: number;
  isUpdate = false as boolean;
  user: User;
  Updform: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
      this.id = Number(data.get('id'));
      this.user = this.userService.getUserById(this.id);
    });
  }

  onUpdate() {
    this.Updform = this.formBuilder.group({
      id: [this.user.id],
      name: [this.user.name, Validators.required],
      age: [this.user.age, [Validators.required, Validators.min(0)]],
      salary: [this.user.salary, [Validators.required, Validators.min(0)]],
      email: [this.user.email, Validators.email]
    });
    this.isUpdate = true;
  }

  async updateUser() {
    this.userService.updateUser(this.Updform.value);
    this.isUpdate = false;
    this.user = this.userService.getUserById(this.id);
  }

  async deleteUser() {
    this.userService.deleteUser(this.user.id);
    this.router.navigate(['/affichage']) ;
  }

}
