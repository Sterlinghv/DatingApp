namespace API;

public static class DateTimeExtensions
{
    public static int CalculateAge(this DateOnly dob)
    {
        var today = DateOnly.FromDateTime(DateTime.UtcNow);
        var age = today.Year - dob.Year;
        if (dob > today.AddDays(-age)) age--;

        // bad calculation (no leap years etc...)
        return age;
    }
}
