import { UserModel } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../../../constants/api.response.model';
import { Constants } from '../../../constants/constants';
import { CategoryModel } from '../models/category.model';
import { GroupModel } from '../models/group.model';
import { PropertyModel } from '../models/property.model';
import { StoreModel } from '../models/store.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl:string = Constants.BaseURL;
  constructor(
    private http:HttpClient
  ) { }

  // Category services
  public CreateCategory(model:CategoryModel)
  {
   return this.http.post<ApiResponse<CategoryModel>>(this.baseUrl+'category',model);
  }

  public EditCategory(model:CategoryModel)
  {
   return this.http.put<ApiResponse<CategoryModel>>(this.baseUrl+'category',model);
  }

  public GetAllCategories()
  {
    return this.http.get<ApiResponse<CategoryModel[]>>(this.baseUrl + 'category')
  }

  public DeleteCategory(id:number)
  {
    return this.http.delete<ApiResponse<number>>(this.baseUrl + 'category?id='+id)
  }
  public DeleteUser(id:number)
  {
    return this.http.delete<ApiResponse<number>>(this.baseUrl + 'user?id='+id)
  }
  //Group services
  public GetAllGroups()
  {
    return this.http.get<ApiResponse<GroupModel[]>>(this.baseUrl + 'group')
  }

  public GetAllUsers()
  {
    return this.http.get<ApiResponse<UserModel[]>>(this.baseUrl + 'user')
  }

  public CreateGroup(model:GroupModel)
  {
    model.numberOfPropriety = null;
    return this.http.post<ApiResponse<GroupModel>>(this.baseUrl+'group',model);
  }

  public EditGroup(model:GroupModel)
  {
    model.numberOfPropriety = null;
    return this.http.put<ApiResponse<GroupModel>>(this.baseUrl+'group',model);
  }

  public DeleteGroup(id:number)
  {
    return this.http.delete<ApiResponse<number>>(this.baseUrl + 'group?id='+id)
  }

  // Property services
  public GetAllProperties()
  {
    return this.http.get<ApiResponse<PropertyModel[]>>(this.baseUrl + 'property')
  }

  public CreateProperty(model:PropertyModel)
  {
    return this.http.post<ApiResponse<GroupModel>>(this.baseUrl+'property',model);
  }

  public EditProperty(model:PropertyModel)
  {
    return this.http.put<ApiResponse<GroupModel>>(this.baseUrl+'property',model);
  }

  public DeleteProperty(id:number)
  {
    return this.http.delete<ApiResponse<number>>(this.baseUrl + 'property?id='+id)
  }
  // Store services
  public GetAllNotApprovedStores()
  {
    return this.http.get<ApiResponse<StoreModel[]>>(this.baseUrl + 'store/StoresNotApproved')
  }
  public GetAllApprovedStores()
  {
    return this.http.get<ApiResponse<StoreModel[]>>(this.baseUrl + 'store')
  }

  public ApproveStore(id:number)
  {
    return this.http.put<ApiResponse>(this.baseUrl+'store/Approved/'+id,{})
  }

  public DeleteStore(id:number)
  {
    return this.http.delete<ApiResponse>(this.baseUrl+'store?storeId='+id)
  }


}
