import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _AuthService: AuthService) { }


  name: any;
  hisName: any = sessionStorage.getItem("name");

  ngOnInit(): void {
    this.getName();
    // if (!sessionStorage) {
    //   this.loggedIn = document.getElementById("loggedIn")
    //   this.logedOut = document.getElementById("logedOut")
    //   this.login = document.getElementById("login")
    //   this.logedOut?.classList.remove("hidden")
    //   this.loggedIn?.classList.remove("hidden")
    //   this.login?.classList.add("hidden")
    // }
    // else {
    //   this.login = document.getElementById("login")
    //   this.loggedIn = document.getElementById("loggedIn")
    //   this.logedOut = document.getElementById("logedOut")
    //   this.logedOut?.classList.add("hidden")
    //   this.loggedIn.classList.add("hidden")
    //   this.login?.classList.remove("hidden")
    // }
  }

  logedOut: any;
  loggedIn: any;
  login: any;
  clicked: boolean = false;



  getName() {
    this._AuthService.user.subscribe(res => {
      this.name = res;
      this.hisName = sessionStorage.getItem("name")
      this.loggedIn = document.getElementById("loggedIn")
      this.logedOut = document.getElementById("logedOut")
      this.login = document.getElementById("login")
      this.logedOut?.classList.remove("hidden")
      this.loggedIn?.classList.remove("hidden")
      this.login?.classList.add("hidden")
    })
  }

  signout() {
    this.login = document.getElementById("login")
    this.loggedIn = document.getElementById("loggedIn")
    this.logedOut = document.getElementById("logedOut")
    this.logedOut?.classList.add("hidden")
    this.loggedIn.classList.add("hidden")
    this.login?.classList.remove("hidden")
    this.clicked = true;
    sessionStorage.removeItem("name")
  }

}
