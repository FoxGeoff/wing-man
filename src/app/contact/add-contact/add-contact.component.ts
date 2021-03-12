import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  scrollTop() {
    /* Temp (bad) fix for scroll Top Button */
    window.location.reload();
 /*
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/contacts/add-contact'], { fragment: 'home' });

    .finally(() => {
      this.router.onSameUrlNavigation = 'ignore'; // Restore config after navigation completes
    });

  */
  }
}
