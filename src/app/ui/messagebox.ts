import { Component } from '@angular/core';

@Component({
  selector: 'message-box',
  template: `
    <div class="container">
      <form (submit)="onSubmit()">
      <label id="messageLabel" for="message">Message </label>
      <br>
        <textarea
          id="message"
          placeholder="Write your message here..."
          name="tweet"
          [(ngModel)]="tweet.text"
          rows="7"
        ></textarea>
        <div *ngIf="tweet.text.length < 141">You have {{140 - tweet.text.length}} characters remaining!</div>
        <div
          *ngIf="tweet.text.length > 140"
          class="red"
        >You have reached the limit! :( Please remove {{Math.abs(140 - tweet.text.length)}} character(s)!</div>
        <button
          type="submit"
        >Send!
        </button>
      </form>
    </div>
  `,
  styles: [`
    .red {
      color: red;
    }
  `]
})

export class MessageBox {
  Math: any;
  tweet = {
    text: ''
  }

  constructor() {
    this.Math = Math;
  }

  onSubmit() {
    alert(this.tweet.text);
  }
}
