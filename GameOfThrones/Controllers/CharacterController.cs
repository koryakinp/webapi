using GameOfThrones.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GameOfThrones.Controllers
{
    public class CharacterController : ApiController
    {
        public List<Character> Characters = new List<Character>
        {
            new Character { Id = 1, Name = "Cercey" },
            new Character { Id = 2, Name = "Stannis" },
            new Character { Id = 3, Name = "John Snow" }
        };

        // GET: api/Character
        public List<Character> Get()
        {
            return Characters;
        }

        // GET: api/Character/5
        public Character Get(int id)
        {
            var character = Characters.FirstOrDefault(q => q.Id == id);

            if(character == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            return character;
        }
    }
}
