using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WeatherSite.Models;
using WeatherSite.Services;

namespace WeatherSite.Controllers
{
	public class HomeController : Controller
	{
		public HomeController(IWeatherService weatherService)
		{
			m_weatherService = weatherService;
		}

		public async Task<IActionResult> Index(string city, string country)
		{
			var location = new CityLocation { City = city ?? "Phoenix, AZ", Country = country };
			var currentConditions = await m_weatherService.GetCurrentConditionsAsync(location);

			return View(new WeatherViewModel
			{
				City = currentConditions.City,
				Temperature = currentConditions.Temperature,
				Description = currentConditions.Description,
			});
		}

		public IActionResult Error()
		{
			return View();
		}

		private readonly IWeatherService m_weatherService;
	}
}
