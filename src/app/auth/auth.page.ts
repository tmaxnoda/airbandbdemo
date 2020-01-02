import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { LoadingController } from '@ionic/angular';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private loadingCtrl: LoadingController,private router: Router, private authService: AuthService) { }
isLoading = false;
isLoggedIn = true;
  ngOnInit() {
  }

  onLogin() {
    this.isLoading = true;
    // authenticate
    this.authService.login();
    // load spinner
    this.loadingCtrl.create({keyboardClose: true, message: 'Logging in...'}).then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        this.isLoading = false;
        loadingEl.dismiss();
        this.router.navigateByUrl('/places/tabs/discover');
      }, 1500);
    });
  }

  onSubmit(f: NgForm) {
    console.log(f);
    if(!f.valid){
      return;
    };

    const email = f.value.email;
    const  password = f.value.password;

    console.log(`Email : ${email} , Password : ${password}`);

    if (this.isLoggedIn) {
        // call to logIn Service
        this.onLogin();
    } else {
        // sign up
    }
  }

  switchToSignUpMode() {
    this.isLoggedIn = !this.isLoggedIn;

  }

}
