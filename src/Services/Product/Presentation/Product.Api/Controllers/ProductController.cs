using System.Net.Mime;
using AutoMapper;
using GraphQL.Conversion;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using Product.Application.UOW;
using Product.Common.Access;
using Product.Common.DTOs.ProductDtos;
using Product.Domain.Entities.ProductEntities;
using System.IO;
using System.Drawing;

namespace Product.Api.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    [Authorize(Roles = Roles.Seller)]
    public class ProductController : ControllerBase
    {
        #region Constractor
        private readonly IUnitOfWork _unitOfWork;
        private FileExtensionContentTypeProvider _fileExtensionContentTypeProvider;
        private readonly IMapper _mapper;
        private ILogger<ProductController> _logger;

        public ProductController(ILogger<ProductController> logger, IUnitOfWork unitOfWork, IMapper mapper)
        {
            _logger = logger;
            _fileExtensionContentTypeProvider = new FileExtensionContentTypeProvider();
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }
        #endregion

        #region GetProduct
        [AllowAnonymous]
        [HttpGet("GetAllProducts")]
        public async Task<ActionResult<IEnumerable<ProductDto>>> GetAllProducts()
        {
            var products = await _unitOfWork.ProductService.GetAllAsync();
            products.ToList();
            var response = new List<ProductDto>();
            foreach (var item in products)
            {
                response.Add(new ProductDto
                {
                    ProductImage = $"http://localhost:5010/Product/GetProductImage/{item.ProductImage}",
                    Count = item.Count,
                    CreateDate = DateTime.Now,
                    FirstDescription = item.FirstDescription,
                    GroupId = item.GroupId,
                    Id = item.Id,
                    IsActive = item.IsActive,
                    IsDelete = item.IsDelete,
                    ModifiedDate = item.ModifiedDate,
                    Price = item.Price,
                    ProductName = item.ProductName,
                    SecondDescription = item.SecondDescription,
                    SubGroup = item.SubGroup,
                    ThirdDescription = item.ThirdDescription,
                    Title = item.Title,
                    UserId = item.UserId,
                });

            }
            return Ok(response);
        }

        [AllowAnonymous]
        [HttpGet("GetProductImage/{imageAddress}")]
        public async Task<ActionResult> GetProductImage(string imageAddress)
        {
            //using (MemoryStream ms = new MemoryStream())
            //{
            //    Image img = Image.FromFile(System.IO.Path.Combine(Directory.GetCurrentDirectory()) + "\\wwwroot\\Products\\" + imageAddress);
            //    byte[] arr;
            //    img.Save(ms, System.Drawing.Imaging.ImageFormat.Jpeg);
            //    arr = ms.ToArray();
            //    return arr;
            //}
            if (System.IO.File.Exists("/Products/" + imageAddress)) return NotFound();
            var file = System.IO.File.ReadAllBytes(System.IO.Path.Combine(Directory.GetCurrentDirectory()) + "/wwwroot/Products/" + imageAddress);
            if (!_fileExtensionContentTypeProvider.TryGetContentType(imageAddress, out var ContentType))
            {
                ContentType = "application/octet-stream";
            }
            return File(file, ContentType, Path.GetFileName(imageAddress));
        }

        [AllowAnonymous]
        [HttpGet("GetProduct/{productId}")]
        public async Task<ActionResult<ProductDto>> GetProduct(string productId)
        {
            var product = _unitOfWork.ProductService.GetAsync(product => product.Id == productId).Result[0];
            return Ok(_mapper.Map<ProductDto>(product));
        }
        #endregion

        #region CreateProduct
        [HttpPost("CreateProduct")]
        public async Task<ActionResult<ProductEntity>> CreateProduct([FromBody] CreateProductDto createProductDto)
        {
            var result = await _unitOfWork.ProductService.AddAsync(_mapper.Map<ProductEntity>(createProductDto));
            return Ok(result);
        }
        #endregion

        #region UpdateProduct
        [HttpPut("UpdateProduct/{productId}")]
        public async Task<ActionResult<ProductEntity>> UpdateProduct(string productId, [FromBody] UpdateProductDto updateProductDto)
        {
            return Ok(_unitOfWork.ProductService.UpdateAsync(_mapper.Map<ProductEntity>(updateProductDto)));
        }
        #endregion

        #region DeleteProduct
        [HttpDelete("DeleteProduct/{productId}")]
        public async Task<ActionResult> DeleteProduct(string productId)
        {
            ProductEntity productEntity = _unitOfWork.ProductService.GetAsync(product => product.Id == productId).Result[0];
            return Ok(_unitOfWork.ProductService.DeleteAsync(productEntity));
        }

        [HttpDelete("DeleteProduct/{productId}/{count}")]
        public async Task<ActionResult> ProductPurchase(string productId, long count)
        {
            ProductEntity productEntity = _unitOfWork.ProductService.GetAsync(p => p.Id == productId).Result[0];
            productEntity.Count -= count;
            await _unitOfWork.ProductService.UpdateAsync(productEntity);
            return Ok();
        }
        #endregion
    }
}
