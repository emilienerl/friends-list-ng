import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friends-list';
  newFriend = '';
  isDisabled = false;
  // create an array named friends and populate with some friends
  friends = ["Sean", "Julie", "Phil", "Ron", "Dana"];

  // add to your friend list
  addFriend() {
    this.friends.push(this.newFriend);
  }
 
}
