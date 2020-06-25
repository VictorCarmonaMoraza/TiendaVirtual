using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TiendaVirtual.Clases;
using TiendaVirtual.Models;

namespace TiendaVirtual.Controllers
{
    public class CategoriaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        //Listado de productos
        [HttpGet]
        [Route("api/Categoria/listarCategorias")]
        public IEnumerable<CategoriaCLS> listarCategorias()
        {
            using(var bd=new BDRestauranteContext())
            {
                IEnumerable<CategoriaCLS> listaCategoria = (from categoria in bd.Categoria
                                                            where categoria.Bhabilitado == 1
                                                            select new CategoriaCLS
                                                            {
                                                                iidcategoria = categoria.Iidcategoria,
                                                                nombre = categoria.Nombre
                                                            }).ToList();
                return listaCategoria;
            }
        }
    }
}