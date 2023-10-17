import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData: any = {
    username: '',
    password: ''
  };
  isLoggedIn = false;
  errorMessage = '';
  isSuccessful=false;
  roles: string[] = [];
  isSignUpFailed=false;
  constructor(private authService: AuthService, private storageService: StorageService,private route:Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }


  onSubmit(): void {
    const { username, password } = this.formData;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        
        this.isSuccessful=true;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.route.navigate(['/dashboard/home']);
      },
      error: err => {
        this.errorMessage = "Wrong Username or Password please try again";
        this.isSignUpFailed=true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}