import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() loadedFeature:string='Recipes';

  onNavigate(selection:string){
    this.loadedFeature = selection;
  }
}
