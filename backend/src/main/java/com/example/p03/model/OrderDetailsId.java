package com.example.p03.model;

import java.io.Serializable;
import java.util.Objects;
import jakarta.persistence.Embeddable;

@Embeddable
public class OrderDetailsId implements Serializable {
    private Long idOrder;
    private Long idProduct;

    // Constructores, getters, setters, equals y hashCode

    public OrderDetailsId() {}

    public OrderDetailsId(Long idOrder, Long idProduct) {
        this.idOrder = idOrder;
        this.idProduct = idProduct;
    }

    public Long getIdOrder() {
        return idOrder;
    }

    public void setIdOrder(Long idOrder) {
        this.idOrder = idOrder;
    }

    public Long getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Long idProduct) {
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
