import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
 
  @Input() backButton: boolean = false;

  theme: string;

  constructor(
    private router: Router,
    private templateService: TemplateService
  ) {  }

  ngOnInit(): void {

    this.theme = this.templateService.themeValue;

    this.templateService.theme.subscribe( theme =>{
      this.theme = theme;
    });
  }

  navigateToIndex(){
    this.router.navigate(['/']);
  }

}
