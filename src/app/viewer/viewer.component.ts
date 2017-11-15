import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'app/providers/authGuard';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
  providers: [AuthGuard]
})
export class ViewerComponent implements OnInit {

  constructor(public ag: AuthGuard) { }

  ngOnInit() {
  }

}
