using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TiendaVirtual.Clases
{
    public class ProductoCLS
    {
        public int idproducto { get; set; }
        public string nombre { get; set; }
        public int stock { get; set; }
        public decimal precio { get; set; }
        public string nombreCategoria { get; set; }
    }
}
