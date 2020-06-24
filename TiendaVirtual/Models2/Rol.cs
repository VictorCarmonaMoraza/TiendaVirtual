using System;
using System.Collections.Generic;

namespace TiendaVirtual.Models2
{
    public partial class Rol
    {
        public Rol()
        {
            Usuario = new HashSet<Usuario>();
        }

        public int Idrol { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public bool? Condicion { get; set; }

        public ICollection<Usuario> Usuario { get; set; }
    }
}
