package com.example.p03.model;

import java.io.Serializable;
import java.util.Objects;
import jakarta.persistence.Embeddable;

@Embeddable
public class OrderDetailsId implements Serializable {
    private Integer idOrder;
    private Integer idProduct;

    // Constructores, getters, setters, equals y hashCode

    public OrderDetailsId() {}

    public OrderDetailsId(Integer idOrder, Integer idProduct) {
        this.idOrder = idOrder;
        this.idProduct = idProduct;
    }

    public Integer getIdOrder() {
        return idOrder;
    }

    public void setIdOrder(Integer idOrder) {
        this.idOrder = idOrder;
    }

    public Integer getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Integer idProduct) {
        this.idProduct = idProduct;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OrderDetailsId that = (OrderDetailsId) o;
        return Objects.equals(idOrder, that.idOrder) &&
               Objects.equals(idProduct, that.idProduct);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idOrder, idProduct);
    }
}
