using Microsoft.AspNetCore.Mvc;

namespace API;

[ApiController]
[Route("api/[controller]")] // will take the first part of the name of the controller, so the Users. /api/users
public class BaseApiController: ControllerBase
{

}
