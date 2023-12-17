import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  displayedOrderId: boolean = false;

  users: any[] = [];
  selectedUser: any = null;
  newUser: any = { full_name: '', email: '', phone_number: '',password:''  };
  constructor(private userService:UserService) {}
  
 
  

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users= data;
    });
  }

  editUser(user: any) {
    this.selectedUser= { ...user }; 
  }
  deliteUser(user : any){
    this.editUser(user) ;
    if (this.selectedUser.client_id) {
      this.userService.DeleteUser(this.selectedUser).subscribe(
        (response) => {
          console.log("Update successful", response);
          this.loadUsers();
          this.selectedUser = null;  
        },
        (error) => {
          console.log("Update error", error);
        }
      );
  
      }
    } 
  saveUser() {
    console.log("dfffdd")
    if (this.selectedUser.client_id) {
      console.log(this.selectedUser)
      this.userService.updateUser(this.selectedUser).subscribe(
        (response) => {
          console.log("Update successful", response);
          this.loadUsers();
          this.selectedUser = null;  
        },
        (error) => {
          console.log("Update error", error);
        }
      );
    } else {
      
    }
  }

  createUser() {
    this.userService.createUser(this.newUser).subscribe(
      (response) => {
        console.log(response); 
  
        this.loadUsers(); 
        this.newUser = { full_name: '', email: '', phone_number: '', password: '' };  
      },
      (error) => {
        console.error('Error:', error); 
      }
    );
  }
  
  }

