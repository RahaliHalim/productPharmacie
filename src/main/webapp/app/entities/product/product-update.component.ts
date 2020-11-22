import { Component, OnInit } from '@angular/core';
import {HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ITEMS_PER_PAGE } from 'app/shared/constants/pagination.constants';
import { IProduct, Product } from 'app/shared/model/product.model';
import { ProductService } from './product.service';
import { JhiParseLinks } from 'ng-jhipster';

@Component({
  selector: 'jhi-product-update',
  templateUrl: './product-update.component.html',
})
export class ProductUpdateComponent implements OnInit {
  isSaving = false;
  validationDateDp: any;
  public datemin: any;
  itemsPerPage: number;
  links: any;
  page: number;
  products: IProduct[];
  predicate: string;
  ascending: boolean;
  public uniquecodetest = 0;
  editForm = this.fb.group({
    id: [],
    name: [null, [Validators.required]],
    code: [null, [Validators.required]],
    validationDate: [null, [Validators.required]],
    sellingPrice: [null, [Validators.required]],
    selling: [null, [Validators.required]],
  });

  constructor(protected productService: ProductService, protected parseLinks: JhiParseLinks, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {
    this.itemsPerPage = ITEMS_PER_PAGE;
    this.products = [];
    this.page = 0;
    this.links = {
      last: 0,
    };
    this.predicate = 'id';
    this.ascending = true;
  }

  ngOnInit(): void {
    this.datemin = new Date();
    this.activatedRoute.data.subscribe(({ product }) => {
      this.updateForm(product);
    });
  }

  uniquecode(event: any): void {
    this.uniquecodetest = 0;
    if (event.target.value !== "") {
      this.productService
        .getByCode(Number(event.target.value))
        .subscribe((res)=>
         this.uniquecodetest=res
         );
        }
  }

  updateForm(product: IProduct): void {
    this.editForm.patchValue({
      id: product.id,
      name: product.name,
      code: product.code,
      validationDate: product.validationDate,
      sellingPrice: product.sellingPrice,
      selling: product.sellingPrice,
    });
  }

  previousState(): void {
    window.history.back();
  }
  sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  save(): void {
    this.isSaving = true;
    const product = this.createFromForm();
    if (product.id !== undefined) {
      this.subscribeToSaveResponse(this.productService.update(product));
    } else {
      this.subscribeToSaveResponse(this.productService.create(product));
    }
  }

  private createFromForm(): IProduct {
    return {
      ...new Product(),
      id: this.editForm.get(['id'])!.value,
      name: this.editForm.get(['name'])!.value,
      code: this.editForm.get(['code'])!.value,
      validationDate: this.editForm.get(['validationDate'])!.value,
      sellingPrice: this.editForm.get(['sellingPrice'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IProduct>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
