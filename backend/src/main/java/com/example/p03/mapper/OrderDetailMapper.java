package com.example.p03.mapper;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.NullValuePropertyMappingStrategy;

import com.example.p03.dto.CreateOrderDetailDTO;
import com.example.p03.dto.OrderDetailDTO;
import com.example.p03.model.OrderDetails;

@Mapper(
  componentModel = "spring", 
  injectionStrategy = InjectionStrategy.CONSTRUCTOR, 
  nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE
)
public interface OrderDetailMapper {

    OrderDetailDTO toDTO(OrderDetails model);
    OrderDetails toModel(CreateOrderDetailDTO data);
} 
