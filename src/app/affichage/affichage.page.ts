import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.page.html',
  styleUrls: ['./affichage.page.scss'],
})
export class AffichagePage implements OnInit {

  constructor(
    protected userService: UserService
  ) { }

  ngOnInit() {
  }


  }


