// Portfolio section start
var pItems = document.getElementById("portfolioItems"), mItems = document.getElementById("portfolioModals");
var portfolioItems = [], modalItems = [];

var items = [
    {
        name: 'Pozole',
        type: 'Soup',
        origin: 'México',
        spicy: 3,
        ingredients: 'Pork, hominy (maíz pozolero), ancho chiles, guajillo chiles, onion, garlic, and Mexican oregano and optional chiles de arból.',
        desc: 'Pozole (Nahuatl languages: pozolli Spanish pronunciation: [po\'sole], pozole), which means "hominy", is a traditional soup or stew from Mexican Cuisine. It is made from hominy, with meat (typically pork), and can be seasoned and garnished with shredded lettuce or cabbage, chile peppers, onion, garlic, radishes, avocado, salsa or limes.'
    },{
        name: 'Tacos',
        type: 'Finger food',
        origin: 'México',
        spicy: 4,
        ingredients: 'Tortillas, meat, vegetables.',
        desc: 'A taco (US: /ˈtɑːkoʊ/, UK: /ˈtækoʊ/, Spanish: [ˈtako]) is a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling. The tortilla is then folded around the filling and eaten by hand. A taco can be made with a variety of fillings, including beef, pork, chicken, seafood, vegetables, and cheese, allowing great versatility and variety. They are often garnished with various condiments, such as salsa, guacamole, or sour cream, and vegetables, such as lettuce, onion, tomatoes, and chiles. Tacos are a common form of antojitos, or Mexican street food, which have spread around the world.'
    },{
        name: 'Chile en nogada',
        type: 'Stuffed vegetable',
        origin: 'México - Puebla',
        spicy: 2,
        ingredients: 'Poblano chile, picadillo, walnuts, cream, pomegranate.',
        desc: 'Chiles en nogada is a Mexican dish of poblano chiles stuffed with picadillo (a mixture usually containing shredded meat, aromatics, fruits and spices) topped with a walnut-based cream sauce, called nogada, and pomegranate seeds, and typically served at room temperature.'
    },{
        name: 'Guacamole',
        type: 'Sauce',
        origin: 'México',
        spicy: 3,
        ingredients: 'Avocados, sea salt, lime juice',
        desc: 'Guacamole (Spanish: [(ɡ)waka\ˈmole] (About this soundlisten), see below for more; informally shortened to guac in North America since the 1980s) is an avocado-based dip, spread, or salad first developed by the Aztecs in present-day Mexico. In addition to its use in modern Mexican cuisine, it has become part of international and American cuisine as a dip, condiment and salad ingredient.'
    },{
        name: 'Enchilada',
        type: 'Street food',
        origin: 'México',
        spicy: 4,
        ingredients: 'Tortillas, chili pepper sauce, meat',
        desc: 'An enchilada (/ˌɛntʃɪˈlɑːdə/, Spanish: [entʃiˈlaða]) is a corn tortilla rolled around a filling and covered with a savory sauce. Enchiladas can be filled with a variety of ingredients, including various meats, cheese, beans, potatoes, vegetables or combinations, a variety of sauces can also be used to cover the enchiladas, including chile-based sauces, such as salsa roja, various moles, or cheese-based sauces such as chile con queso. Originating in Mexico, enchiladas are a popular dish throughout Mexico and the American Southwest.'
    },{
        name: 'Sopes',
        type: 'Antojito',
        origin: 'México',
        spicy: 4,
        ingredients: 'Corn dough, vegetables, meat, refried beans, cheese, lettuce, onions, red or green sauce (salsa)',
        desc: 'A sope (Spanish pronunciation: [ˈso.pe]), also known as picadita (in Tierra Caliente, Guerrero) is a traditional Mexican dish originating in the central and southern parts of Mexico, where it was sometimes first known as pellizcadas. It is an antojito, which at first sight looks like an unusually thick tortilla with vegetables and meat toppings. The base is made from a circle of fried masa (ground maize soaked in lime, also used as the basis for tamales and tortillas) with pinched sides. This is then topped with refried beans and crumbled cheese, lettuce, onions, red or green sauce (salsa, made with chiles or tomatillos, respectively), and sour cream. Sometimes other ingredients (mostly meat) are also added to create different tastes and styles of sopes; they are roughly the size of a fist.'
    }

];
var spicyLevel = function(level){
    let levelArray = [];
    
    for(let i = 1; i <= level; i++){
        levelArray.push(
            `<i class="fas fa-pepper-hot"></i>`
        )
    }
    return levelArray.join('');
}

for(var i = 0; i < items.length; i++){
    portfolioItems.push(`
         <div class="col-md-6 col-lg-4">
            <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#modal${i+1}">
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="portfolio-item-caption-content text-center text-white">
                        <i class="fas fa-plus fa-3x"></i>
                    </div>
                </div>
                <img id="portfolio" class="img-fluid rounded-lg" src="img/portfolio/${items[i].name.toLocaleLowerCase()}.jpg" alt="${items[i].name}">
            </div>
        </div>
`);
    modalItems.push(
        `
        <div class="portfolio-modal modal fade" id="modal${i+1}" tabindex="-1" role="dialog" aria-labelledby="portfolioModal${i+1}Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">
                <i class="fas fa-times"></i>
              </span>
            </button>
            <div class="modal-body text-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <!-- Portfolio Modal - Title -->
                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">${items[i].name}</h2>
                    <!-- Icon Divider -->
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon">
                        <i class="fas fa-utensils"></i>
                      </div>
                    <div class="divider-custom-line"></div>
                    </div>
                    <!-- Portfolio Modal - Image -->
                    <img class="img-fluid rounded mb-5" src="img/portfolio/${items[i].name.toLocaleLowerCase()}.jpg" alt="">
                    <!-- Portfolio Modal - Text -->
                    <p class="text-justify">Type: ${items[i].type}</p>
                    <p class="text-justify">Ingredients: ${items[i].ingredients}</p>
                    <p class="text-justify">Spicy level(1-5): ${spicyLevel(items[i].spicy)}</p>
                    <p class="mb-5 text-justify">${items[i].desc}</p>
                    <button class="btn btn-primary" href="#" data-dismiss="modal">
                      <i class="fas fa-times fa-fw"></i>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
    );
}

pItems.innerHTML = portfolioItems.join('');
mItems.innerHTML = modalItems.join('');

// Portfolio section end

$(function() {
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html, body').animate({
                  scrollTop: (target.offset().top - 85)
              }, 1000);
              return false;
          }
      }
  });
});