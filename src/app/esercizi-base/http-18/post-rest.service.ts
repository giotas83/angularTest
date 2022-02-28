import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { delay, map, tap } from "rxjs/operators";
import { Post, PostResp } from "./post-model";

@Injectable({
    providedIn: 'root'
})
export class PostRestService {

    private posts: Post[] = [];

    private postsChangeSubject = new Subject<Post[]>();
    public $postChangeObs: Observable<Post[]> = this.postsChangeSubject.asObservable();

    private loaderBehavSubject = new BehaviorSubject<boolean>(false);
    public $loaderChangeObs: Observable<boolean> = this.loaderBehavSubject.asObservable();


    constructor(private http: HttpClient) {

    }

    /**
     * esempio get con headers e queryparams
     * https://jsonplaceholder.typicode.com/posts?queryUno=valore
     */
    public getPosts() { // la get di un json in assets funziona assets/db.json
        this.loaderBehavSubject.next(true);
        this.http.get<PostResp[]>('https://jsonplaceholder.typicode.com/posts', {
          headers: new HttpHeaders({'Custom-Header': 'ciao'}),
          params: new HttpParams().set('queryUno', 'valore')
        })
        .pipe(
          delay(2000),
          map( posts => posts.slice(0, 5)),
          map( posts => posts.map(post => {
            return {title: post.title, body: post.body} as Post;
          }))
        )
        .subscribe(data => {
          this.posts = data;
          this.postsChangeSubject.next(this.posts);
          this.loaderBehavSubject.next(false);
        }, (err) => this.loaderBehavSubject.next(false));
    }

    private createGetHeader() {
      return new HttpHeaders({
        'Custom-Header': 'ciao'
      });
    }

    public createPost(title: string, body: string) {
        const postData = {
            title, body
        };
        this.loaderBehavSubject.next(true);
        console.log(postData);
        this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', postData)
        .pipe(
          delay(2000)
        )
        .subscribe(postAdded => {
          console.log(postAdded);
          this.posts.push(postAdded);
          this.postsChangeSubject.next(this.posts);
          this.loaderBehavSubject.next(false);
        }, (err) =>  this.loaderBehavSubject.next(false));
    }

    // la delete è finta, mando sempre 1, non mi interessa fare tutta la struttura per passare l'id
    // faccio finta di cancellare tutto, jsonplaceholder nn ha l'api
    public deleteAllPosts() {
        this.loaderBehavSubject.next(true);
        this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
            .pipe(
                delay(2000)
            )
            .subscribe( data => {
                console.log(data);
                this.posts = [];
                this.postsChangeSubject.next(this.posts);
                this.loaderBehavSubject.next(false);
            }, (err) =>  this.loaderBehavSubject.next(false));
    }

    /**
     * get di esempo, differenti tipi di risposta
     * observe: body -> risposta standard
     * observe: response -> risposta dettagliata
     */
    public testGetObserveResponse() {
      this.http.get('https://jsonplaceholder.typicode.com/users/1', {
        observe: 'response'
      }).subscribe( resp => console.log('resp: ', resp));
    }
    /*
    observe RESPONSE:::::
      body: Object { id: 1, name: "Leanne Graham", username: "Bret", … }​
      headers: Object { normalizedNames: Map(0), lazyUpdate: null, lazyInit: lazyInit()
      }    ​
      ok: true    ​
      status: 200    ​
      statusText: "OK"    ​
      type: 4    ​
      url: "https://jsonplaceholder.typicode.com/users/1"
    */

    public testGetObserveEvents() {
      this.http.get('https://jsonplaceholder.typicode.com/users/1', {
        observe: 'events'
      })
      .pipe( 
        tap(event => {
          if(event.type === HttpEventType.DownloadProgress) { // n3
            console.log('tipo evento download')
          }
          if(event.type === HttpEventType.Response) { // n4
            console.log('tipo evento response')
          }
          if(event.type === HttpEventType.ResponseHeader) { // n2
            console.log('tipo evento response header')
          }
          if(event.type === HttpEventType.Sent) { // n0
            console.log('tipo evento sent')
          }
          if(event.type === HttpEventType.UploadProgress) { // n1
            console.log('tipo evento upload progress')
          }
          if(event.type === HttpEventType.User) { // n5
            console.log('tipo evento user')
          }
        })
      )
      .subscribe( resp => console.log('testGetObserveEvents: ', resp));
    }
   /**
    observe EVENTS:::::

    ci sono delle response diverse, arriva prima una e poi l altra, per capire di quale evento si
    tratta posso usare l'enum HttpEventType

    resp:  -> ARRIVA PRIMA QUESTO......
    Object { type: 0 } 
---------------------------
    resp:  -> ARRIVA QUESTO DOPO ......
      body: Object { id: 1, name: "Leanne Graham", username: "Bret", … }
      headers: Object { normalizedNames: Map(0), lazyUpdate: null, lazyInit: lazyInit()
      }
      ok: true
      status: 200
      statusText: "OK"
      type: 4
      url: "https://jsonplaceholder.typicode.com/users/1"
    */

    /**
     * test response type, tipo di risposta che arriva
     * json -> standard, erriva un jsn trasformato in obj javascript
     * text -> arriva proprio il json -> la stringa della resp
     * 'arraybuffer' ->
     * 'blob' -> 
     * 
     */
    public testGetResponseType() {
      this.http.get('https://jsonplaceholder.typicode.com/users/1', {
        responseType: 'arraybuffer'
      }).subscribe( resp => console.log('resp: ', resp));
    }

    /*
    RESPONSE TYPE TEXT:::: È UNA STRINGA
      resp:  {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }
    */
    /*
    RESPONSE TYPE BLOB
      Blob { size: 509, type: "application/json" }​
        size: 509​
        type: "application/json"
    */
    /*
    RESPONSE ARRAYBUFFER
      resp:  
        ArrayBuffer { byteLength: 509 }
        byteLength: 509
    */

        // usato insieme report progress, observe event, 
        // stampa tutti gli eventi con la prop loaded
    public testGetReportProgress() {
      this.http.get('https://jsonplaceholder.typicode.com/posts' , {
        reportProgress: true,
        observe: 'events'
      }).subscribe( resp => console.log('resp: ', resp));
    }

    /*
      resp:  
        Object { type: 0 }
        type: 0
---------------------------------------
    resp:  
      headers: Object { normalizedNames: Map(0), lazyUpdate: null, lazyInit: lazyInit()
      }​
      ok: true
      status: 200
      statusText: "OK"
      type: 2
      url: "https://jsonplaceholder.typicode.com/posts"
​
---------------------------------------------

    resp:  
      Object { type: 3, loaded: 7282 }
      loaded: 7282​
      type: 3
    ​
------------------------------------
    resp:  
      body: Array(100) [ {…}, {…}, {…}, … ]​
      headers: Object { normalizedNames: Map(0), lazyUpdate: null, lazyInit: lazyInit()
      }​
      ok: true​
      status: 200​
      statusText: "OK"​
      type: 4​
      url: "https://jsonplaceholder.typicode.com/posts"
    */




}