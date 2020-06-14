import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import {TranslateService, LangChangeEvent, TranslationChangeEvent} from '@ngx-translate/core';
// import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `.angular-logo {
        margin: 0 4px 3px 0;
        height: 35px;
        vertical-align: middle;
    }
    .fill-remaining-space {
      flex: 1 1 auto;
    }
    `
  ]
})
export class HeaderComponent implements OnInit{

  isAdmin:boolean;
  isManager:boolean;
  isEmployee:boolean;
  isNoRole:boolean;
  roleName:string;
  empId:string;
  empName:string;
  emailId:string;
  textDir: string ;
  // currLang: string;
  // = 'rtl';
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router ,private translate: TranslateService) 
    { 
      console.log("HEADER INVOCkED");
      this.translate.addLangs(['en','ar']);  
      this.translate.use('ar'); 
      // this.currLang="ar";
      this.textDir = 'rtl'; 
      // this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
      // {
      //   console.log("INSIDE EMPLOYEE" +event.lang );
      //   if(this.translate.currentLang == 'ar') 
      //   {
      //     this.translate.use('ar');  
      //     this.textDir = 'rtl';   
      //     this.translate.setDefaultLang('ar');
      //   } 
      //   else
      //   {
      //     this.translate.use('en'); 
      //     this.textDir = 'ltr';   
      //     this.translate.setDefaultLang('en');
      //   }
      // });
    }
 
  onLogout() {
    // this.authService.logout();
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }
 ngOnInit(){

   
  console.log("HEADER INVOCkED");
   this.empId=sessionStorage.getItem('empId');
   this.empName=sessionStorage.getItem('empName');
   this.emailId=sessionStorage.getItem('emailId');
    this.roleName=sessionStorage.getItem('role');
        if(this.roleName==="ADM")
          this.isAdmin=true;
        if(this.roleName==="MGR")
          this.isManager=true;
        if(this.roleName==="EMP") 
           this.isEmployee=true;
           if(this.roleName==="" ||this.roleName===null || this.roleName===undefined)
           this.isNoRole=true;
 }
 

 useLanguage(language: string) {
  // this.currLang=language;
  this.translate.use(language).toPromise()

  if(language == 'ar')
  {
    this.textDir = 'rtl';  
    this.translate.use(language);
    this.translate.currentLang="ar";
  } 
  else
  {
    this.textDir = 'ltr';  
    this.translate.use(language);
    this.translate.currentLang="en";
  }

   
    this.router.navigate(['employeeLeave']) 

}



}
