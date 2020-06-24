using System;
using System.Collections.Generic;

namespace TiendaVirtual.Models2
{
    public partial class Usuario
    {
        public Usuario()
        {
            Ingreso = new HashSet<Ingreso>();
            Venta = new HashSet<Venta>();
        }

        public int Idusuario { get; set; }
        public int Idrol { get; set; }
        public string Nombre { get; set; }
        public string TipoDocumento { get; set; }
        public string NumDocumento { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public bool? Condicion { get; set; }

        public Rol IdrolNavigation { get; set; }
        public ICollection<Ingreso> Ingreso { get; set; }
        public ICollection<Venta> Venta { get; set; }
    }
}
