import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  forceNavigate(name: string) {
    this.router.navigate(['/paragraph'], { fragment: name });
  }

  onAnchorClick() {
    this.route.fragment.subscribe(f => {
      const element = document.querySelector('#' + f);
      console.log(element.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  ngOnInit(): void {
    // this.router.navigate(['/contacts/add-contact'], {fragment: 'home'});
    this.onAnchorClick();
  }

}
