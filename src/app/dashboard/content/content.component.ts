import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/_services/user.service';
import { GarbageServiceService } from '../services/garbage-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  countAdmin: number = 0;
  countAgents: number = 0;
  userData: any = [];
  gpts: any;
  gbl: any;
  ngOnInit(): void {
    this.getAllUsers();
    this.getGarbagePointsCount();
  }
  constructor(private userService: UserService, private gptService: GarbageServiceService) {}

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      (data: any) => {
        this.userData = data;
        console.log(this.userData);
        
        // Initialize counters for admins and users
        let countAdmin = 0;
        let countUser = 0;
  
        this.userData.forEach((element: any) => {
          if (element.roles[0].name === 'ROLE_ADMIN') {
            countAdmin++;
          } else if (element.roles[0].name === 'ROLE_USER') {
            countUser++;
          }
        });
  
        this.countAdmin=countAdmin;
        this.countAgents=countUser;
      },
      (err: Error) => {
        console.log(err.message);
      }
    );
  }

  getGarbagePointsCount(){
    return this.gptService.getAllGarbagePts().subscribe(
      (data:any)=>{
        this.gpts = data;        
        this.gbl=this.gpts.length;
      }
    ),
    (error: Error)=>{
      console.log(error.message);
      
    }
  }
}  
