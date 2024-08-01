package com.example.p03.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.NullValuePropertyMappingStrategy;

import com.example.p03.dto.CreateOrderDTO;
import com.example.p03.dto.OrderDTO;
import com.example.p03.model.Order;

import java.util.List;

@Mapper(
  componentModel = "spring", 
  injectionStrategy = InjectionStrategy.CONSTRUCTOR, 
  nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE
)
public interface OrderMapper{

    // OrderDTO toDTO (Order model);

    // List<OrderDTO> toDTO(List<Order> model);

    @Mapping(target = "idOrder", ignore = true)
    @Mapping(target = "orderDate", ignore = true)
    Order toModel(CreateOrderDTO data);

    @Mapping(source = "client.idClient", target = "idClient")
    @Mapping(source = "address.idAddress", target = "idAddress")
    OrderDTO toResponseDTO(Order model);
    
}
