using System;

namespace WeatherSite.Services
{
	public sealed class PrecipitationPeriod
	{
		public float Value { get; set; }
		public TimeSpan Period { get; set; }
	}
}