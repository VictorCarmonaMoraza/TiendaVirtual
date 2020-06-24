﻿using System;
using System.Collections.Generic;

namespace TiendaVirtual.Models2
{
    public partial class Persona
    {
        public Persona()
        {
            Ingreso = new HashSet<Ingreso>();
            Venta = new HashSet<Venta>();
        }

        public int Idpersona { get; set; }
        public string TipoPersona { get; set; }
        public string Nombre { get; set; }
        public string TipoDocumento { get; set; }
        public string NumDocumento { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set; }

        public ICollection<Ingreso> Ingreso { get; set; }
        public ICollection<Venta> Venta { get; set; }
    }
}
