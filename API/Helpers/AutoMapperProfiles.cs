using API.Entities;
using AutoMapper;

namespace API;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {
        // auto mapper takes away tedious code from us
        CreateMap<AppUser, MemberDto>()
            .ForMember(dest => dest.PhotoUrl, 
                opt => opt.MapFrom(src => src.Photos.FirstOrDefault(x => x.IsMain).Url));
        CreateMap<Photo, PhotoDto>();
    }
}
