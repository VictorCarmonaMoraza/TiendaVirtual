using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TiendaVirtual.Clases;
using TiendaVirtual.Models;

namespace TiendaVirtual.Controllers
{
    public class ProductoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        //Comenzamos a hacer el listado
        [HttpGet]
        [Route("api/Producto/listarProductos")]
        public IEnumerable<ProductoCLS> listarProductos()
        {
            //LLamamamos a la base de datos
            using (BDRestauranteContext bd = new BDRestauranteContext())
            {
                List<ProductoCLS> lista = (from producto in bd.Producto
                                           join categoria in bd.Categoria
                                           on producto.Iidcategoria equals
                                           categoria.Iidcategoria
                                           where producto.Bhabilitado == 1
                                           select new ProductoCLS
                                           {
                                               idproducto = producto.Iidproducto,
                                               nombre = producto.Nombre,
                                               precio = (decimal)producto.Precio,
                                               stock = (int)producto.Stock,
                                               nombreCategoria = categoria.Nombre,
                                           }).ToList();
                return lista;
            }
        }


        //Filtrar podructos por nombre
        [HttpGet]
        [Route("api/Producto/filtrarProductosPorNombre/{nombre}")]
        public IEnumerable<ProductoCLS> filtrarProductosPorNombre(string nombre)
        {
            //LLamamamos a la base de datos
            using (BDRestauranteContext bd = new BDRestauranteContext())
            {
                List<ProductoCLS> lista = (from producto in bd.Producto
                                           join categoria in bd.Categoria
                                           on producto.Iidcategoria equals
                                           categoria.Iidcategoria
                                           where producto.Bhabilitado == 1
                                            && producto.Nombre.ToLower().Contains(nombre.ToLower())
                                           select new ProductoCLS
                                           {
                                               idproducto = producto.Iidproducto,
                                               nombre = producto.Nombre,
                                               precio = (decimal)producto.Precio,
                                               stock = (int)producto.Stock,
                                               nombreCategoria = categoria.Nombre,
                                           }).ToList();
                return lista;
            }
        }

        //Listar por categoria
        //Filtrar podructos por nombre
        [HttpGet]
        [Route("api/Producto/filtrarProductosPorCategoria/{idcategoriaParametro}")]
        public IEnumerable<ProductoCLS> filtrarProductosPorCategoria(int idcategoriaParametro)
        {
            //LLamamamos a la base de datos
            using (BDRestauranteContext bd = new BDRestauranteContext())
            {
                List<ProductoCLS> lista = (from producto in bd.Producto
                                           join categoria in bd.Categoria
                                           on producto.Iidcategoria equals
                                           categoria.Iidcategoria
                                           where producto.Bhabilitado == 1
                                            && producto.Iidcategoria==idcategoriaParametro
                                           select new ProductoCLS
                                           {
                                               idproducto = producto.Iidproducto,
                                               nombre = producto.Nombre,
                                               precio = (decimal)producto.Precio,
                                               stock = (int)producto.Stock,
                                               nombreCategoria = categoria.Nombre,
                                           }).ToList();
                return lista;
            }
        }
    }
}