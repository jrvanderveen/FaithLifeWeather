using System.Threading.Tasks;

namespace WeatherSite.Services
{
	public interface IWeatherService
	{
		Task<Conditions> GetCurrentConditionsAsync(Location location);
		Task<Forecast> GetForecastAsync(Location location);
	}
}
