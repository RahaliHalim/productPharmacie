package com.mycompany.myapp.repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.mycompany.myapp.domain.Product;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
/**
 * Spring Data  repository for the Product entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {


   @Query("SELECT distinct product from Product product where product.name LIKE   CONCAT('%', :nameOrCode, '%')")
   Page<Product> findByNameOrCode(Pageable pageable,@Param("nameOrCode") String nameOrCode);

   
   @Query("SELECT count(*) from Product product where product.code = :code")
   Long findByCode(@Param("code") Integer code);


}
