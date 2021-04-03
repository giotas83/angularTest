import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loadedFeature: FeatureSelected = 'recipe';

  public onNavigate(feature: 'recipe' | 'shopping-list') {
    this.loadedFeature = feature;
  }
}

type FeatureSelected = 'exercise' | 'recipe' | 'shopping-list';
