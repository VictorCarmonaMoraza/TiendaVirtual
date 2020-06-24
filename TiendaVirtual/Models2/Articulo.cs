using System;
using System.Collections.Generic;

namespace TiendaVirtual.Models2
{
    public partial class Articulo
    {
        public Articulo()
        {
            DetalleIngreso = new HashSet<DetalleIngreso>();
            DetalleVenta = new HashSet<DetalleVenta>();
        }

        public int Idarticulo { get; set; }
        public int Idcategoria { get; set; }
        public string Codigo { get; set; }
        public string Nombre { get; set; }
        public decimal PrecioVenta { get; set; }
        public int Stock { get; set; }
        public string Descripcion { get; set; }
        public bool? Condicion { get; set; }

        public Categoria IdcategoriaNavigation { get; set; }
        public ICollection<DetalleIngreso> DetalleIngreso { get; set; }
        public ICollection<DetalleVenta> DetalleVenta { get; set; }
    }
}
