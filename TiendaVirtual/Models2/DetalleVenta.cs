using System;
using System.Collections.Generic;

namespace TiendaVirtual.Models2
{
    public partial class DetalleVenta
    {
        public int IddetalleVenta { get; set; }
        public int Idventa { get; set; }
        public int Idarticulo { get; set; }
        public int Cantidad { get; set; }
        public decimal Precio { get; set; }
        public decimal Descuento { get; set; }

        public Articulo IdarticuloNavigation { get; set; }
        public Venta IdventaNavigation { get; set; }
    }
}
