import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent {
developer = new Developer('abidar', 'himed', 30, 'homme', 'blablabla', [new Skill('angular', 'logo', 'angular.fr'), new Skill('react', 'logo', 'react.fr')] ) 
}
