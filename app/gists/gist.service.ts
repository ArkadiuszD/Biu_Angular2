import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Gist } from './gist';

@Injectable()
export class GistService {
	private gistsUrl = '../database/gists';
	constructor(private http: Http) { }

	getGists(): Promise<Gist[]> {
    return this.http.get(this.gistsUrl).toPromise().then(response => response.json().data).catch(this.handleError);
  }

	getGist(id: number) {
    return this.getGists()
               .then(gists => gists.filter(gist => gist.id === id)[0]);
  }

  save(gist: Gist): Promise<Gist>  {
    if (gist.id) {
      return this.put(gist);
    }
    return this.post(gist);
  }

  delete(gist: Gist) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.gistsUrl}/${gist.id}`;

    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  private post(gist: Gist): Promise<Gist> {
    let headers = new Headers({'Content-Type': 'application/json'});

    return this.http
               .post(this.gistsUrl, JSON.stringify(gist), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  private put(gist: Gist) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.gistsUrl}/${gist.id}`;

    return this.http
               .put(url, JSON.stringify(gist), {headers: headers})
               .toPromise()
               .then(() => gist)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
