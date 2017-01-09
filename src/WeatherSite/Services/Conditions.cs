using System;

namespace WeatherSite.Services
{
	public sealed class Conditions
	{
		public DateTime DateTime { get; set; }
		public float Temperature { get; set; }
		public WeatherKind Kind { get; set; }
		public string Description { get; set; }
		public PrecipitationPeriod Rain { get; set; }
		public string City { get; internal set; }
	}
}
