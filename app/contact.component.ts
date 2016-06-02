import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  template:`
 
	<form #Form="ngForm" action="MAILTO:someone@example.com" method="post" enctype="text/plain" id="form" class="topBefore">
	<input type="text" class="form-control" required ngControl="name" placeholder="Imie i nazwisko"><br>
	<input type="text" class="form-control" required ngControl="name" placeholder="Temat"><br>
	<input type="text" class="form-control" required ngControl="mail" placeholder="Mail"><br>
	<input type="text" name="comment" placeholder="Treść..." size="50"><br><br>
	<input type="submit" value="Send">
	</form>
  `
})

export class ContactComponent { }