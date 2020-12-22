import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  constructor(
    public afauth: AngularFireAuth
  ) {}

  ngOnInit(): void {
  }

  async logout() {
      await this.afauth.signOut();
  }

}
