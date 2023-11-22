using API.Entities;
using AutoMapper;

namespace API;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {
        // auto mapper takes away tedious code from us
        CreateMap<AppUser, MemberDto>();
        CreateMap<Photo, PhotoDto>();
    }
}
