using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TiendaVirtual.Clases;
using TiendaVirtual.Models;

namespace TiendaVirtual.Controllers
{
    public class Persona1Controller : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("api/Persona1/listarPersonas")]
        public IEnumerable<PersonaCLS> listarPersonas() {

            using(Models.BDRestauranteContext bd =new BDRestauranteContext())
            {
                List<PersonaCLS> listaPersona = (from persona in bd.Persona
                                                 where persona.Bhabilitado == 1
                                                 select new PersonaCLS
                                                 {
                                                     iidpersona = persona.Iidpersona,
                                                     nombreCompleto = persona.Nombre + " " + persona.Appaterno + " " + persona.Apmaterno,
                                                     telefono=persona.Telefono,
                                                     correo=persona.Correo
                                                 }).ToList();
                return listaPersona;
            }
        }
    }
}