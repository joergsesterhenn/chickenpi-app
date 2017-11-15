import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'app/providers/authGuard';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css'],
  providers:[AuthGuard]
})
export class ControllerComponent implements OnInit {

  constructor(public ag: AuthGuard) { }

  ngOnInit() {
  }

}
