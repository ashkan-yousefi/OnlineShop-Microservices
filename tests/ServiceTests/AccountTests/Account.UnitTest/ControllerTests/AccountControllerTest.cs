using Account.Api.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using Moq;
using Account.Service.Services.UserServices;
using Account.Service.Interfaces.UserInterfaces;
using Account.UnitTest.MoqData;
using Account.Service.UOW;
using Account.Repository.Context;
using Microsoft.EntityFrameworkCore;
using MassTransit.Transports;
using AutoMapper;
using Account.Api.GrpcServices;
using Microsoft.Extensions.Logging;
using System.Net.Http;
using Microsoft.Extensions.Configuration;

namespace Account.UnitTest.ControllerTests
{
    public class AccountControllerTest
    {
        //[Theory]
        ////[InlineData]
        //public void GetUser_When_UserIdString(string userEmail)
        //{
        //    //arrange
        //    var mock = new Mock<IUserService>();
        //    mock.Setup(m => m.GetAsync(userEmail).Result[0]).Returns(AccountMoqData.GetUser());
        //    AccountController accountController = new AccountController()

        //    //act


        //    //assert
        //}
    }
}
