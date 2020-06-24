using System;
using System.Collections.Generic;

namespace TiendaVirtual.Models2
{
    public partial class DetalleIngreso
    {
        public int IddetalleIngreso { get; set; }
        public int Idingreso { get; set; }
        public int Idarticulo { get; set; }
        public int Cantidad { get; set; }
        public decimal Precio { get; set; }

        public Articulo IdarticuloNavigation { get; set; }
        public Ingreso IdingresoNavigation { get; set; }
    }
}
