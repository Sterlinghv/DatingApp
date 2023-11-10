using API.Entities;

namespace API;

public interface ITokenService
{
    string CreateToken(AppUser user);
    // any other class that implements this interface has to support this method
    // and has to return a string from that method
    // and it has to take app user as an arg, its a contract
}
