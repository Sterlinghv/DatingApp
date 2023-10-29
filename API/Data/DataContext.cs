using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext : DbContext // DbContext is inherited from EF core, it represents a session with a DB
{
    // constructor base(options) allows for things like connections string, db provider and more
    public DataContext(DbContextOptions options) : base(options)
    {
    }

    // property allows you to work with the database table that corresponds
    // to AppUser entity. DbSet<T> is like a representation of a table in a database.
    // the users property allows us to CRUD operators on the table associated with the
    // AppUser entity
    public DbSet<AppUser> Users { get; set; }
}
