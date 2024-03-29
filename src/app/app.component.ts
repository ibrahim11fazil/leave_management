import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'leave-management';
  // textDir: string = 'rtl';
  // roles:String 
  constructor(private translate: TranslateService){
    translate.setDefaultLang('en');
    this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
    {
      if(event.lang == 'ar')
      {  
        this.translate.setDefaultLang('ar');
        this.translate.use('ar')
        
      } 
      else
      {
        this.translate.setDefaultLang('en');
        this.translate.use('en')
      }
    });
    //   this.roles= sessionStorage.getItem('role');
    // if(this.roles==="ADM"){

    // }
  }
}
