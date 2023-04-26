using Account.Core.Entities.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Account.UnitTest.MoqData
{
    public static class AccountMoqData
    {
        public static User GetUser()
        {
            return new User { Id = "123451234512345@ExampleId", Email = "Example@gmail.com", IsActive = true, FirstName = "Exaple", UserName = "Example", LastName = "Example", Password = "8C-FA-22-82-B1-7D-E0-A5-98-C0-10-F5-F0-10-9E-7D" };
        }
    }
}
