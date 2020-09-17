package com.mycompany.myapp.domain;

import java.time.LocalDate;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Product.class)
public abstract class Product_ {

	public static volatile SingularAttribute<Product, Float> sellingPrice;
	public static volatile SingularAttribute<Product, Integer> code;
	public static volatile SingularAttribute<Product, String> name;
	public static volatile SingularAttribute<Product, Long> id;
	public static volatile SingularAttribute<Product, LocalDate> validationDate;

	public static final String SELLING_PRICE = "sellingPrice";
	public static final String CODE = "code";
	public static final String NAME = "name";
	public static final String ID = "id";
	public static final String VALIDATION_DATE = "validationDate";

}

