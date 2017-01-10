using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WeatherSite.Services
{
	public class DefaultWeatherService : IWeatherService
	{
		public Task<Conditions> GetCurrentConditionsAsync(Location location)
		{
			var conditions = new Conditions
			{
				DateTime = DateTime.Now,
				City = "Anywhere",
				Description = "overcast",
				Kind = WeatherKind.Cloudy,
				Temperature = 15,
			};

			var cityLocation = location as CityLocation;
			if (cityLocation != null)
			{
				conditions.City = cityLocation.City;
				if ("philadelphia".StartsWith(cityLocation.City, StringComparison.OrdinalIgnoreCase))
				{
					conditions.Description = "sunny";
					conditions.Kind = WeatherKind.Clear;
					conditions.Temperature = 20;
				}
			}

			return Task.FromResult(conditions);
		}

		public Task<Forecast> GetForecastAsync(Location location)
		{
			throw new NotImplementedException();
		}
	}
}
