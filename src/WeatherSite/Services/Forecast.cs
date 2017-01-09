using System.Collections.Generic;

namespace WeatherSite.Services
{
	public sealed class Forecast
	{
		public string City { get; set; }
		public IReadOnlyCollection<Conditions> Forecasts { get; set; }
	}
}
