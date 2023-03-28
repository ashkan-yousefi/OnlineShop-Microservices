using AutoMapper;
using Product.Grpc.DTOs.ProductDtos;
using Product.Domain.Entities.ProductEntities;
using Product.Grpc.Protos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Product.Common.Utilities.Mapping
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {
            CreateMap<ProductEntity,Product.Common.DTOs.ProductDtos.ProductDto>().ReverseMap();
            CreateMap<ProductEntity,ProductDto>().ReverseMap();

            CreateMap< IEnumerable<ProductEntity>,IEnumerable<ProductDto>>().ReverseMap();
            CreateMap< IEnumerable<ProductEntity>,List<ProductDto>>().ReverseMap();

            CreateMap<ProductEntity, CreateProductDto>().ReverseMap();
            CreateMap<ProductEntity, GetAllProductsResponse>().ReverseMap();
            CreateMap<ProductDto, GetAllProductsListResponse>().ReverseMap();
        }
    }
}
