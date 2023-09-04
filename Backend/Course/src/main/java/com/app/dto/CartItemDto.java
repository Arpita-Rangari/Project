package com.app.dto;

import com.app.pojos.Cart;
import com.app.pojos.Product;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor

public class CartItemDto {
    private Integer id;
   // private Integer quantity; removed
    private Product product;

    public CartItemDto() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

//    public Integer getQuantity() {
//        return quantity;
//    }
//
//    public void setQuantity(Integer quantity) {
//        this.quantity = quantity;
//    } removed

    public Product getProduct() {
        return product;
    }

 public void setProduct(Product product) {
       this.product = product;
    }

    public CartItemDto(Cart cart) {
        this.id = cart.getId();
//        this.quantity = cart.getQuantity(); removed
        this.setProduct(cart.getProduct());
    }
}
