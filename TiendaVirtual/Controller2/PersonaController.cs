using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TiendaVirtual.Clases;
using TiendaVirtual.Clases2;
using TiendaVirtual.Models2;

namespace TiendaVirtual.Controller2
{
    public class PersonaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        //Comenzamos a hacer el listado
        [HttpGet]
        [Route("api/Persona/listarPersonas")]
        public IEnumerable<PersonaClase> listarPersonas()
        {
            //LLamamamos a la base de datos
            using (dbsistemaContext bd = new dbsistemaContext())
            {
                List<PersonaClase> lista = (from persona in bd.Persona
                                           select new PersonaClase
                                           {
                                               idpersona = persona.Idpersona,
                                               nombre = persona.Nombre,
                                               telefono = persona.Telefono,
                                               email = persona.Email,
                                               
                                           }).ToList();
                return lista;
            }
        }
        [HttpGet]
        [Route("api/Persona/filtrarPorNombre/{nombre}")]
        public IEnumerable<PersonaClase> filtrarPorNombre(string nombre)
        {
            //LLamamamos a la base de datos
            using (dbsistemaContext bd = new dbsistemaContext())
            {
                List<PersonaClase> lista = (from persona in bd.Persona
                                            where persona.Nombre.ToLower().Contains(nombre.ToLower())
                                            select new PersonaClase
                                            {
                                                idpersona = persona.Idpersona,
                                                nombre = persona.Nombre,
                                                telefono = persona.Telefono,
                                                email = persona.Email,

                                            }).ToList();
                return lista;
            }
        }
    }
}