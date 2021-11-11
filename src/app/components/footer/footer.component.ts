import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  theme: string;
  seconds: number = 5;
  showPoppup: boolean = false;

  constructor(
    private templateService: TemplateService
  ) { }

  ngOnInit(): void {

    this.theme = this.templateService.themeValue;

    this.templateService.theme.subscribe( theme =>{
      this.theme = theme;
    });

  }

  changeTemplate(){
    window.scrollTo(0, 0);
    if(this.theme !== '3it' ){ 

      this.showPoppup = true;

      this.templateService.setTheme('3it');
      
      let intervalSeconds = setInterval(()=>{
        this.seconds -= 1;
      }, 1000);
      
      setTimeout(()=>{
        this.showPoppup = false;
        clearInterval(intervalSeconds);
        this.seconds = 5;
      }, 5000); 
      
    }else{
      this.templateService.setTheme('classic');
    }
  }

}
