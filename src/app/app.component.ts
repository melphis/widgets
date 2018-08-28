import {Component, OnDestroy} from '@angular/core';
import {FixturesLoaderService} from './fixtures-loader.service';
import {forkJoin, Subscription} from 'rxjs';
import {IWidgetFixture} from './iwidget-fixture';
import {IUserFixture} from './iuser-fixture';
import {Widget} from './widget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy {
  title = 'widget';

  private widgetsFixture: IWidgetFixture[];
  private usersFixture: IUserFixture[];

  widgets: Widget[];
  sub: Subscription;

  constructor(private fixtureLoaderService: FixturesLoaderService) {
    this.sub = forkJoin(
        fixtureLoaderService.load('users'),
        fixtureLoaderService.load('widgets')
      )
      .subscribe(([usersFixture, widgetsFixture]:
                       [IUserFixture[], IWidgetFixture[]]) => {

        this.usersFixture = usersFixture;
        this.widgetsFixture = widgetsFixture;

        this.widgets = widgetsFixture.map((widgetFixture: IWidgetFixture): Widget => {
          return Widget.generateRandomly(widgetFixture, usersFixture);
        });
      });
  }

  insertWidget() {
    const widget = Widget.generateRandomly(this.widgetsFixture[3], this.usersFixture);
    this.widgets.splice(0, 0, widget);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
