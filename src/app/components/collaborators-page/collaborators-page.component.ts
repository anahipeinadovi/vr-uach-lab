import { Component, Input, OnInit } from '@angular/core';
import { CollaboratorsPageContent } from 'src/app/classes/collaborators-content';

@Component({
  selector: 'app-collaborators-page',
  templateUrl: './collaborators-page.component.html',
  styleUrls: ['./collaborators-page.component.css']
})
export class CollaboratorsPageComponent {
  defaultUrl = "https://raw.githubusercontent.com/Fuan200/info_web_site/main/";
  name:string|null = '';
  @Input({required: true, alias: 'pageContent'}) content!: CollaboratorsPageContent;

}
