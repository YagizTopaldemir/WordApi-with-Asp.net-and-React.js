using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WordApi.Models;

namespace WordApi.Data
{
    public class WordApiContext : DbContext
    {
        public WordApiContext (DbContextOptions<WordApiContext> options)
            : base(options)
        {
        }

        public DbSet<WordApi.Models.Word> Word { get; set; } = default!;
    }
}
