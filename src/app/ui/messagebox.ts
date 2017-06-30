import { Component } from '@angular/core';

@Component({
  selector: 'message-box',
  template: `
    <div class="container">
      <form>
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
        <div *ngIf="tweet.text.length > 140">You have reached the limit! :( Please remove {{140 - tweet.text.length}} character(s)!</div>
        <button
          type="submit"
        >Send!
        </button>


      </form>

      <span>{{tweet.text}}</span>
    </div>
  `,
  styles: [``]
})

export class MessageBox {
  tweet = {
    text: ''
  }
}



        // <br style="clear:both">
        //   <div class="form-group col-md-4 ">
        //     <label id="messageLabel" for="message">Message </label>
        //     <textarea
        //       class="form-control input-sm "
        //       type="textarea"
        //       id="message"
        //       placeholder="Message"
        //       maxlength="140"
        //       rows="7"
        //     >
        //     </textarea>
        //         <span class="help-block"><p id="characterLeft" class="help-block ">You have reached the limit</p></span>
        //   </div>
        // <br style="clear:both">
        // <div class="form-group col-md-2">
        // <button
        //   class="form-control input-sm btn btn-success disabled"
        //   id="btnSubmit"
        //   name="btnSubmit"
        //   type="button"
        //   style="height:35px"
        //   >Send
        // </button>
