import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';
import { EventBusService } from 'src/app/_shared/event-bus.service';


@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.css']
})
export class LeftSidenavComponent {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false; 
  username?: string;
  showUserBoard: boolean=false;
  
  
  constructor(private authService: AuthService,private route:Router, private eventBusService: EventBusService,  private storageService: StorageService,
  
    ){}
  // ngOnInit():void{
  //   if(this.isLoggedIn){
  //     this.showAdminBoard = this.roles.includes('ADMIN');
  //   }
  // }
  // RegisterPage(){
  // this.route.navigate(['authentication/register']);
  // }
  // loginPage(){
  //   this.route.navigate(['authentication/login']);
  // }
  
  
  
  
  
  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
  
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
  
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');
  
      this.username = user.username;
    }
  
    
  }
  
}
