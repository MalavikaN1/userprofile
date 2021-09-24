import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  


  origin = this.window.location.origin;

  private userId$: Observable<number> = this.activatedRoute.params.pipe(
    map((params: Params) => parseInt(params['username']))
  )

  user$: Observable<User> = this.username$.pipe(
    switchMap((username: string) => this.userService.findOne(username))
  )

  blogEntries$: Observable<BlogEntriesPageable> = this.username$.pipe(
    
  )


  onPaginateChange(event: PageEvent) {
    return this.username$.pipe(
      tap((username: string) => this.blogEntries$ = this.blogService.indexByUser(username, event.pageIndex, event.pageSize))
    ).subscribe();
  }
  constructor(   private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private blogService: BlogService,
    @Inject(WINDOW) private window: Window) { }

  ngOnInit(): void {
  }

}
