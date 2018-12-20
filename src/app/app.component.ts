import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];

  onServerAdded(serverData: {serveName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serveName,
      content: serverData.serverContent
    });
  }

  onAddBlueprint(bluePrintData: {serveName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serveName,
      content: bluePrintData.serverContent
    });
  }

}
