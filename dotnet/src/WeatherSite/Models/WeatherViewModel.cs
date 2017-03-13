using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WeatherSite.Models
{
	public sealed class WeatherViewModel
	{
		public string City { get; set; }
		public float Temperature { get; set; }
		public string Description { get; set; }
	}
}
