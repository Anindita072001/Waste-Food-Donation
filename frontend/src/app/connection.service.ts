import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConnectionService {



 

  constructor(private http:HttpClient) {
    
   }
   doRegistration(donerData:any):Observable<any>{
    
    return this.http.post("http://localhost:8080/adddonorname",donerData,
    {
      observe: 'response',
      responseType: 'text' as 'json' 
    });
  }

  orgaRegistration(orgaData:any):Observable<any>{
  
    return this.http.post("http://localhost:8080/addorganizationname",orgaData,
    {
      observe: 'response',
      responseType: 'text' as 'json' 
    }
    );
  }

  createPost(pData:any):Observable<any>{
   
    return this.http.post("http://localhost:8080/addpostname",pData,
    {
      observe: 'response',
      responseType: 'text' as 'json' 
    }
    );
  }
  

  updateOrga(oID:number,uData:any):Observable<any>{
   
    return this.http.put(`http://localhost:8080/organizationname/${oID}`,uData,
    {
      observe: 'response',
      responseType: 'text' as 'json' 
    }
    );
  }

  updateDoner(oID:number,uData:any):Observable<any>{
   
    return this.http.put(`http://localhost:8080/donorname/${oID}`,uData,
    {
      observe: 'response',
      responseType: 'text' as 'json' 
    }
    );
  }

  deleteDoner(oID:number):Observable<any>{
   
    return this.http.delete(`http://localhost:8080/donordelete/${oID}`,
    {
      observe: 'response',
      responseType: 'text' as 'json' 
    }
    );
  }

  deleteOrga(oID:number):Observable<any>{
   
    return this.http.delete(`http://localhost:8080/organizationname/${oID}`,
    {
      observe: 'response',
      responseType: 'text' as 'json' 
    }
    );
  }


  deleteDonorPost(oID:number):Observable<any>{
   
    return this.http.delete(`http://localhost:8080/deleteByDonor/${oID}`,
    {
      observe: 'response',
      responseType: 'text' as 'json' 
    }
    );
  }


  


  getDonorData(donorId:number):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'crossOrigin': 'true' 
    });
    return this.http.get<any>(`http://localhost:8080/getdonorname/${donorId}`,{headers});
  }

  getOrganizationData(orgId:number):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'crossOrigin': 'true' 
    });
    return this.http.get<any>(`http://localhost:8080/getorganizationname/${orgId}`,{headers});
  }

  getAllPosts(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'crossOrigin': 'true' 
    });
    return this.http.get<any[]>("http://localhost:8080/getpostname",{headers});
  }

  
  getPostById(poId:any): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'crossOrigin': 'true' 
    });
    return this.http.get<any[]>(`http://localhost:8080/getpostname/${poId}`,{headers});
  }

  updatePost(pID:number,pData:any):Observable<any>{
   
    return this.http.put(`http://localhost:8080/postname/${pID}`,pData,
    {
      observe: 'response',
      responseType: 'text' as 'json' 
    }
    );
  }
  deletePost(pID:any):Observable<any>{
   
    return this.http.delete(`http://localhost:8080/postname/${pID}`,
    {
      observe: 'response',
      responseType: 'text' as 'json' 
    }
    );
  }



   login(data:any):Observable<any>{
    
    return this.http.post("http://localhost:8080/login",data,
    {
      observe: 'response',
      responseType: 'text' as 'json' 
    });
   }

   orgLogin(data:any):Observable<any>{
    
    return this.http.post("http://localhost:8080/orgLogin",data,
    {
      observe: 'response',
      responseType: 'text' as 'json' 
    });
   }


   checkLoggedInStatus(): boolean {
    if (typeof sessionStorage !== 'undefined') {
      return !!sessionStorage.getItem('loggedIn');
    }
    
  }

   checkLoggedInStatus1(): boolean {
    if (typeof localStorage !== 'undefined') {
      return !!localStorage.getItem('orgLoggedIn');
    }
   
  }
}
