using System;
using System.Collections.Generic;

namespace TiendaVirtual.Models2
{
    public partial class Categoria
    {
        public Categoria()
        {
            Articulo = new HashSet<Articulo>();
        }

        public int Idcategoria { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public bool? Condicion { get; set; }

        public ICollection<Articulo> Articulo { get; set; }
    }
}
