import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/_services/storage.service';
import { UserService } from 'src/app/_services/user.service';
import { EventBusService } from 'src/app/_shared/event-bus.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isLoggedIn: any;
  username: any;
  content: any;
  errormessage = ''
  roles: any;
  showAdminBoard: any;
  showModeratorBoard: any;
 userData:any = [];
 userId!:number;
  constructor(private userService: UserService, private eventBusService: EventBusService, private storageService: StorageService,

  ) { }
  profileImage: string = 'assets/img/user4-128x128.jpg'; // Default image

  

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
      this.userId=user.id;
    }
    this.getEmployeeByUsername()
  }

  getEmployeeByUsername(){
  this.userService.getAdminBoard(this.username).subscribe(
    (data:any)=>{
      this.userData = data;
      console.log(this.userData);
      
    }
  ),
  (err:Error)=>{
    this.errormessage=err.message;
    console.log("error");
    
    }
  }

  selectedFile!: File;
  defaultProfilePictureUrl = 'assets/img/user4-128x128.jpg'; // Replace with the actual URL
  previewImageUrl!: string;


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewSelectedImage();
  }

  previewSelectedImage() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewImageUrl = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

 
  
}
