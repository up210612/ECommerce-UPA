package com.example.p03.mapper;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.NullValuePropertyMappingStrategy;

import com.example.p03.dto.CreateOrderDetailDTO;
import com.example.p03.dto.OrderDetailDTO;
import com.example.p03.dto.OrderDetailsResponseDTO;
import com.example.p03.model.OrderDetails;

@Mapper(
  componentModel = "spring", 
  injectionStrategy = InjectionStrategy.CONSTRUCTOR, 
  nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE
)
public interface OrderDetailMapper {

    OrderDetailDTO toDTO(OrderDetails model);

    @Mappings({
        @Mapping(source = "idOrder", target = "id.idOrder"),
        @Mapping(source = "idProduct", target = "id.idProduct")
    })
    OrderDetails toModel(CreateOrderDetailDTO data);

    @Mapping(source = "id.idOrder", target = "idOrder")
    @Mapping(source = "id.idProduct", target = "idProduct")
    OrderDetailsResponseDTO toResponseDTO(OrderDetails orderDetails);
} 
