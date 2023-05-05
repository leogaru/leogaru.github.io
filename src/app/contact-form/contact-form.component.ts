import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MessageClient } from "cloudmailin"

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})


export class ContactFormComponent implements OnInit {
  constructor(private builder: FormBuilder) { }
  ngOnInit() {
    this.FormData = this.builder.group({
    Fullname: new FormControl('', [Validators.required]),
    Email: new FormControl<string>('', [Validators.required,Validators.email]),
    Comment: new FormControl('', [Validators.required])
    })
    }
  Fullname = ""
  Email = ""
  Comment = ""
  FormData!: FormGroup;
  onSubmit(FormData : FormGroup){
    this.Fullname = this.FormData.controls['Fullname'].value
    this.Email = this.FormData.controls['Email'].value
    this.Comment = this.FormData.controls['Comment'].value
    console.log(this.Fullname)
    console.log(this.Email)
    console.log(this.Comment)
    this.sendEmail()
  }
  async sendEmail() {
    const client = new MessageClient({ username: "e796dea731b2f948", apiKey: "56pWps4wHZ3xdPhiQWMbHA4m"});
    const response = await client.sendMessage({
      to: 'bho1234321@gmail.com',
      from: this.Email,
      plain: this.FormData.controls['Fullname'].value,
      html:  '<h1>Test Message</h1>',
      subject: "hello world"
    });
    console.log(response)
  }
}
