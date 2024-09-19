using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        [HttpGet("GetString")]
        public async Task<ActionResult> GetString()
        {
            return Ok("test string.");
            //return BadRequest("Error occurred");
        }
    }
}
