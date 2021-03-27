import {Component, OnInit, ViewChild} from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild('customTemplate', { static: true }) customNotificationTmpl: any;
  project = 'Mon portfolio';
  faBars = faBars;
  private readonly notifier: NotifierService;

  constructor(notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.showCustomNotificationTemplate(
      'warning',
      'Attention le responsive de ce site n\'est pas au point, il est conseillé de le visionner sur ordinateur'
    );
  }
  public showCustomNotificationTemplate(type: string, message: string): void {
    this.notifier.show({
      message,
      type,
      template: this.customNotificationTmpl,
    });
  }
}
