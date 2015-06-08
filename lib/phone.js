var plivo = require('plivo-node');
var marklar = require('marklar');

// making error messages more fun... and possibly making the number useful for something other than simon xt
marklar.nameList['first'] = ["Christopher", "Joseph", "James", "Amy", "Robert", "Gerald", "Betty", "Terry", "Claude", "Quinton", "Dorla", "Rudy", "William", "Charles", "Howard", "Napoleon", "Richard", "Irene", "Melissa", "James", "Esther", "Debra", "Patricia", "Betty", "Roger", "Cynthia", "Debra", "Tom", "Michael", "Patricia", "Stephanie", "Nancy", "Alisa", "Jackie", "Melissa", "Sabine", "Tammy", "Jack", "Scott", "Esteban", "James", "Darren", "Stephanie", "Pam", "Willa", "Patricia", "Larry", "John", "Sharon", "Iva", "Tina", "Robert", "Emma", "Robert", "Tony", "Carolyn", "David", "Lois", "April", "Jerome", "James", "Stacie", "Kevin", "Joseph", "Jason", "Edward", "Leonard", "Latricia", "Lisa", "Henry", "Melanie", "Nancy", "Justin", "Carolyn", "Joseph", "Ellen", "Jeffery", "Beverly", "Rose", "Larry", "Robin", "John", "Marshall", "Bethany", "Jill", "James", "Trinidad", "Lori", "Robert", "Tereasa", "Tricia", "Michelle", "Yasmin", "Alice", "Crystal", "Stephen", "Faye", "Leslie", "Earl", "William", "Christy", "Kelly", "Nathan", "Jennifer", "Noemi", "Gilbert", "Isabel", "Cynthia", "Jeremy", "Marsha", "Frieda", "Robin", "Paula", "Michael", "Josephine", "Clyde", "Clifford", "Randy", "Steven", "Norma", "So", "James", "Larry", "Michael", "Barbara", "Rebecca", "Walter", "Eddie", "Dolores", "James", "Andrew", "Inez", "Erin", "Scott", "Adeline", "Benjamin", "Verna", "David", "Cody", "Margaret", "Debra", "Matthew", "Morton", "Leroy", "Paula", "Justin", "Roxanne", "Stephanie", "Gregory", "Sean", "Betty", "Julie", "Donald", "Frank", "Lonnie", "Irma", "Kim", "Guy", "Teresa", "Alexander", "Kimberley", "Vicki", "James", "Rachel", "Deborah", "Judy", "Brian", "Heather", "Ray", "Rebekah", "Susanne", "Jean", "Aaron", "Nicole", "Tosha", "Kristy", "Edward", "Elizabeth", "Stefanie", "Ruth", "Alicia", "Pauline", "Carl", "Robert", "Nerissa", "Carolyn", "Jamie", "Carley", "Gregory", "George", "Jesus", "Thomas", "Becky", "Henry", "Alice", "Lori", "Carole", "Josefina", "Maria", "Henry", "Eleanor", "Daryl", "Philip", "Anna", "Edward", "Eugene", "Katherine", "Rick", "Elisha", "Salvador", "Kenneth", "John", "Chloe", "Robert", "Otis", "Tommy", "Thelma", "Jeannette", "Derek", "Paul", "Frida", "Joseph", "Mary", "Diane", "Rachel", "Lajuana", "Lois", "Gladys", "Sonia", "Sharon", "Jason", "Jason", "Manuel", "Benjamin", "Marguerite", "Glenn", "Elmer", "Kay", "Thomas", "Cheryl", "Virginia", "Brenda", "Brett", "Pamela", "Calvin", "Kay", "David", "Barbara", "Eddie", "John", "Betty", "Mia", "Diane", "Sue", "Stephanie", "Jonathon", "Judith", "Gregory", "Jacqueline", "Shawn", "Richard", "Nancy", "John", "John", "Joe", "Daniel", "Derek", "Danny", "Marie", "William", "Gladys", "Marylee", "Thomas", "Ellen", "Helen", "Gary", "Mary", "Jerry", "Lee", "Janet", "Sarah", "Shirley", "Alicia", "Jonathan", "Beverly", "John", "Sandra", "Gerard", "David", "Merle", "Steven", "Annie", "Berniece", "Joseph", "Erin", "Pierre", "Pete", "Flavia", "Belinda", "Beth", "Mae", "Christina", "Neil", "Roy", "Pamela", "William", "Leon", "Kimberly", "Carol", "Rhonda", "Anthony", "Kathryn", "Juanita", "Angela", "Krista", "William", "Holly", "Shirley", "Terry", "Marilyn", "Zena", "John", "Andrea", "Douglas", "John", "James", "Daniel", "Daniel", "Janene", "Stella", "April", "Donna", "Verna", "Kristy", "Vivian", "Robert", "Robert", "Gretchen", "Karen", "David", "Michael", "Michelle", "Kristen", "Ruby", "Vernell", "Marty", "Sheila", "Ricardo", "Betty", "Karen", "Lauren", "James", "Laila", "Raymond", "Marvin", "Trista", "Christine", "Dagny", "Janet", "Daniel", "Wayne", "Richard", "Tony", "Margarita", "Dion", "Annie", "Amelia", "Timothy", "Elizabeth", "Annie", "John", "William", "Vera", "Margaret", "Arlene", "Wilda", "Kevin", "Tina", "Andrew", "Howard", "Mike", "Randall", "Joel", "Anna", "Gillian", "Patrick", "Rachel", "Thomas", "Bobbie", "Joshua", "Jodie", "Artie", "Elsa", "Antonia", "Karen", "Vicki", "Richard", "Wayne", "Timothy", "Dana", "Patricia", "Jessie", "Steve", "Shirley", "Billie", "Jeffrey", "Esther", "Adam", "Eric", "Sam", "Robert", "Cynthia", "Matthew", "Peter", "Tammy", "Zula", "Frank", "Melanie", "Greg", "Mary", "Mafalda", "Gladys", "Phillip", "Daniel", "Charles", "Kathy", "Jan", "Beatrice", "William", "Kelley", "Thomas", "Noble", "Elizabeth", "Corinne", "Bonnie", "Candice", "Lynn", "Walter", "Anibal", "Darius", "Lela", "Dale", "Courtney", "Victor", "Angela", "Barbara", "Donald", "Robert", "Juanita", "Michelle", "Stephanie", "Margaret", "Sarah", "Warren", "Andrew", "Wanda", "Donald", "John", "Crystal", "Barbara", "George", "Cynthia", "Cameron", "Anthony", "Nicholas", "Gavin", "Michael", "Glenn", "Rosie", "Kenneth", "James", "Robin", "James", "Harold", "Jack", "James", "Loretta", "Megan", "Bruce", "George", "Charles", "Pat", "Wayne", "Frank", "Michael", "Cynthia", "Jeanette", "Eric", "Alan", "Nicholas", "Edwin", "Bobby", "Jeanette", "James", "Amy", "Celeste", "Sheila", "Stan", "Rebecca", "Joseph", "Valerie", "Trenton", "Thuy", "Carol", "Clara", "Julia", "Larry", "Verdell", "In", "Gladys", "Tony", "Brice", "Patrick", "James", "Rex", "Thomas", "Jeremy", "Jason", "George", "Wade", "Duane", "Tyron", "Charles", "Adelia", "Tonya", "Amy", "John", "Dale", "Joyce", "Jennifer", "Carisa", "Alison", "Kimberly", "Jim", "Richard", "Tiffany", "Lawrence", "Shelley", "Jimmie", "David", "Blake", "Ida", "Annie", "Sandy", "Katrina", "Doris", "Sharon", "Jesse", "Melissa", "Leslie", "Verlene", "Carlos", "Donnell", "John", "Kevin", "Victor", "Amber", "Patricia", "Eric", "Robert", "John", "Karen", "Geoffrey", "Felicia", "John", "Amanda", "Brittany", "Jennifer", "Crystal", "Barbara", "Edna", "Betty", "Diane", "Joe", "Amy", "Peter", "June", "Miranda", "Mae", "Carrie", "Fredrick", "Tanya", "Yvonne", "Minnie", "Keith", "Donald", "Luis", "Nellie", "Daniel", "Robert", "Beverly", "Leora", "June", "Michael", "Christopher", "Margaret", "Frank", "Richard", "Jose", "Malcom", "Jeremy", "Patricia", "Amber", "James", "Kathryn", "Bruce", "Amy", "Britney", "James", "Robert", "Ashley", "Edward", "Lee", "Earl", "Lonnie", "Vernon", "Wanda", "Luis", "Malik", "John", "Russell", "Patricia", "Iva", "Maria", "Felicia", "Chris", "Mary", "Lisa", "Charlene", "James", "Marie", "Kimberly", "Tamela", "Cecile", "Ralph", "Crystal", "Ignacio", "Daniel", "Julia", "Kenneth", "Rick", "Bettye", "Carol", "Daniel", "Rhonda", "Lee", "Tim", "Jeremy", "Evelyn", "Alejandro", "Raul", "Ernest", "Rhonda", "John", "Thaddeus", "Mark", "Victoria", "Michael", "Estelle", "Maurice", "Peter", "Phyllis", "Cathy", "Melinda", "Irene", "Bradley", "Michelle", "Elsie", "Jeanne", "Donald", "Delia", "Shane", "Herbert", "Lena", "Frank", "Connie", "Lora", "Donald", "Phillip", "Julie", "Roy", "Anthony", "Carolina", "Jason", "Tabitha", "Mark", "Margaret", "Annette", "Christoper", "Michael", "Robert", "Marcos", "Mary", "Odette", "Priscilla", "Walter", "Nancy", "Jenifer", "Mark", "Betty", "Everett", "Gary", "Ronald", "Neva", "Ruth", "Ida", "Erin", "Brendan", "Jennefer", "Anthony", "Emma", "Melissa", "Tracy", "Elizabeth", "James", "Charles", "Jazmine", "Adelaida", "Mary", "Robert", "Jerry", "Joseph", "Louise", "Carl", "Lavelle", "Rosie", "Dana", "Jessica", "Joseph", "Louise", "Jesus", "Lorraine", "Robert", "Harry", "Frederick", "John", "George", "Leta", "Amanda", "Enoch", "Thomas", "Jessie", "Florentino", "Chad", "Lawanda", "Marlon", "Harry", "Lee", "Edith", "Vinnie", "Sandra", "Leticia", "Dan", "Julia", "Wesley", "Heather", "Jeff", "Elizabeth", "Alexia", "Samuel", "Lesley", "James", "Rachelle", "Evelyn", "Kathleen", "Martha", "Marisa", "Amy", "Patricia", "Greg", "Melvin", "David", "Vito", "Lisa", "Harold", "Robert", "Manuel", "Lora", "Ralph", "Vickie", "Patricia", "Brenda", "Janet", "Charles", "Steven", "Daryl", "Maria", "Faith", "Marjorie", "Sherry", "Nathaniel", "Constance", "Paul", "John", "Bonnie", "Grace", "Douglas", "Elma", "Brian", "James", "Laura", "Luis", "Gail", "Georgia", "Norman", "Lori", "Harold", "Anthony", "Hayley", "Corey", "Darrel", "Joseph", "Ronald", "Thomas", "Judith", "Lucille", "Noreen", "Salvador", "Stephanie", "Lena", "Dean", "Latonya", "Karmen", "Kevin", "Gertrude", "Kenneth", "Dustin", "Richie", "Charles", "Pablo", "Nora", "Barbara", "Jeanne", "Mike", "Jackie", "Karen", "Fay", "Bernardo", "Ruth", "Betty", "Walter", "Hiroko", "Scott", "Mellissa", "Ethel", "Barbara", "Michael", "Norman", "Christina", "Robert", "Glenda", "Gary", "John", "Brendan", "Saul", "Gladys", "Jennifer", "Anthony", "Latasha", "Arthur", "Gloria", "Jason", "Don", "Jacqueline", "Rebecca", "Walter", "Mallie", "Stephen", "Albert", "Albert", "Brenda", "Vicki", "Carol", "David", "Scott", "Alton", "Jimmie", "Dale", "Bob", "Michael", "Keri", "Esther", "Wanda", "Eleanor", "Edgar", "Randy", "Beverly", "Ethan", "Annie", "Fran", "Robbie", "Philip", "Andre", "George", "Ken", "Cheryl", "Mildred", "Geraldine", "Tracie", "Faye", "Louise", "Matthew", "Valeria", "Rita", "Dale", "David", "Julian", "Elena", "Lauren", "Ebony", "Charles", "David", "Anthony", "Bessie", "Gary", "Matthew", "Brenda", "Tommy", "Wendy", "Mike", "Robert", "Karen", "Shannon", "Barry", "George", "Thaddeus", "Kimberly", "Gregory", "Irene", "Jillian", "Dean", "Eugene", "Craig", "Harold", "Craig", "Bobby", "Charlene", "Roseanna", "Larry", "Daniel", "Ernest", "Teresa", "Mary", "Erin", "Dennise", "William", "Charles", "Sherrie", "Kenneth", "Staci", "Maria", "Paul", "Sharon", "Julie", "Lindsey", "Benjamin", "William", "Bonita", "Rebecca", "Loren", "Dustin", "Phyllis", "Susan", "Tyrone", "Nicole", "Kimberly", "James", "Anna", "Robert", "Alyssa", "Shirley", "Joan", "William", "Thomas", "Lottie", "Linda", "Michael", "Dwight", "Robin", "Erica", "Lera", "Laura", "Tanya", "Kimberly", "Michelle", "Jorge", "Dennis", "William", "John", "Eva", "Katharyn", "Lynn", "Darryl", "Mary", "Merlin", "Karl", "Anthony", "Jason", "Loretta", "Anita"];
marklar.nameList['last'] = ["Johnson", "Young", "Walczak", "Marjanović", "Pfaff", "Brockhouse", "Herceg", "Jasiński", "Michaels", "Batista", "Garica", "Mayonga", "Roper", "Detweiler", "Wiśniewska", "Sedillo", "Rivera", "Knežević", "Took-Brandybuck", "Ruiz", "Reiniger", "Frankfurter", "Kull", "Kamińska", "Baggins", "Gloeckner", "Michalski", "Noakes", "Tûk", "Pabst", "Took-Took", "Berg", "Popović", "Romero", "Guest", "Baum", "Jager", "Marušić", "Martinez", "Ornelas", "Król", "Walter", "Grabowski", "Frías", "Gardner", "Dudek", "Matković", "Shuster", "Mercado", "Fowler", "Gärtner", "Quintero", "Gonzalez", "Topić", "Meister", "Lightfoot", "Burrowes", "Chubb", "Gaukrogers", "Alejandro", "Marinović", "Mehler", "Weisz", "Gardner", "Klein", "Duda", "Chmielewska", "Lothran", "Zimmer", "Valentín", "Diggle", "Banks", "Jasiński", "Smallburrow", "Altamirano", "Brownlock", "Kucharski", "Olszewska", "Serna", "Schultheiss", "Blažević", "Jager", "Grabowska", "Sparks", "Ostrowska", "Kolar", "Grant", "Mandić", "Duda", "Emrick", "Jurić", "Bunce", "Krause", "Chubb-Baggins", "Foerster", "Czerwinski", "Zelaya", "Zaragamba", "Proudfoot", "Chubb-Baggins", "Brandagamba", "Burrows", "Trommler", "Marinović", "Kucharski", "Molina", "White", "Gardner", "Pejić", "Sawicki", "Kowalski", "Zielinska", "Borkowski", "Burton", "Stojanović", "Argüello", "Mikulić", "Wulf", "Peters", "Saldivar", "Zawadzki", "Oldbuck", "Knežević", "Kalinowska", "Armstrong", "Ćosić", "Unger", "Lončar", "Medrano", "Suarez", "Cuellar", "Herceg", "Herzog", "Sobczak", "Curry", "Mena", "Kamińska", "Oquendo", "Kovačević", "Headstrong", "Katić", "Button", "Zielinska", "Cardona", "Rossi", "Kovačević", "Dujmović", "Zweig", "Marín", "Symanski", "Calderone", "Winslow", "Kovač", "Duda", "Isaac", "Dudek", "Blažević", "Kwiatkowska", "Zawadzka", "Leal", "Brockhouse", "Probst", "Prado", "Lafleur", "Burrows", "Czarnecki", "Kastner", "Young", "Zagorec", "Lovrić", "Greenhand", "Weber", "Vogel", "Valdés", "Spindler", "Twofoot", "Vaughn", "Ilić", "Olszewska", "Vogel", "Banks", "Montanez", "Pawlak", "Goldworthy", "Queen", "Borkowska", "Obad", "Cindrić", "Vidović", "Mikulić", "Kowalski", "Bosch", "Dąbrowski", "Orta", "Bolger", "Sokołowska", "Ebersbacher", "Adamski", "Blažević", "Underhill", "Weissmuller", "Chubb-Baggins", "Jaimes", "Carrasquill", "Zimmerman", "Pejić", "Symanski", "Čerkez", "Blackwell", "Esquivel", "Urrútia", "Myers", "Schroder", "Wagner", "Boffin", "Król", "Walter", "Christensen", "Bunce", "Fraley", "Schwarz", "Zawadzki", "Herceg", "Mihaljević", "Pfeifer", "Griffiths", "Hernandes", "Brandybuck", "Mađar", "Enríquez", "Kwiatkowski", "Luján", "Sawicki", "Underhill", "Nowakowska", "Farías", "Gurule", "Kovačević", "Baeza", "Carson", "Sawicka", "Čerkez", "Clay", "Austin", "Puddifoot", "Cruz", "Méndez", "Alvarez", "Richter", "Tijerina", "Sokołowska", "Bartlett", "Ellis", "Burrows", "Tûk", "Boffin", "Walczak", "Gamgee", "Hornblower", "Tomaszewski", "Hayward", "Jones", "Fenstermacher", "Kolar", "Majewska", "Goodbody", "Gaukrogers", "Bačić", "Faber", "Jelić", "Diamond", "Meyer", "Pawłowska", "Kovač", "Gammidge", "Gawkroger", "Marín", "Himmel", "Norwood", "Nowakowska", "Banks", "Young", "Proudfoot", "Garnica", "Noakes", "Toler", "Weiß", "Williams", "Gawkroger", "Sokołowski", "Schroder", "Obad", "Tomaszewska", "Pawlak", "Marinović", "Baggins", "Jabłońska", "Vučković", "Tunnelly", "Ćosić", "Chmielewska", "Polanco", "Brajković", "Nowicki", "Waechter", "Blažević", "Woźniak", "Decker", "Roldán", "Sandheaver", "Carson", "Greenhand", "Bilić", "Longhole", "Limón", "Marcos", "Clayhanger", "Sandheaver", "Carey", "Thompson", "Casillas", "Nagel", "Faber", "Apodaca", "Mata", "Marinović", "Longhole", "Bilić", "Benavidez", "Lothran", "Ortiz", "Kuprešak", "Goldworthy", "Barišić", "Montoya", "Ritter", "Beike", "Jurić", "Ivanković", "Lowe", "Tafoya", "Ramos", "Villalobos", "Brandagamba", "Kamińska", "Vanegas", "Weber", "Razo", "Zagorec", "Twofoot", "Adamczyk", "Brkić", "Brandybuck", "Zayas", "Vega", "Hogpen", "Bunce", "Tomaszewski", "Ćosić", "Schultz", "Grunewald", "Dustin", "Wysocka", "Zawadzki", "Fruehauf", "Keller", "Wieczorek", "Murphy", "Nowakowska", "Cole", "Eggers", "Adamska", "Girón", "Szczepańska", "Woźniak", "Díaz", "Baier", "Wexler", "Walter", "Daniel", "Gärtner", "Morales", "Chubb-Baggins", "Corrales", "Burrows", "Walter", "Alonzo", "Sawicki", "Anguiano", "Duda", "Quintanilla", "Miller", "Bauer", "Antunović", "Bracegirdle", "Nagy", "Callas", "Took", "Atkins", "Fleischer", "Underhill", "Jabłońska", "Sanabria", "Czerwinska", "Jaworski", "Muller", "Schroder", "Nowakowski", "Zagorec", "Lehmann", "Armendáriz", "Boehm", "Ponte", "Greenhand", "Pavičić", "White", "Tunnelly", "Saldivar", "Wieczorek", "Noakes", "Frueh", "Tadić", "Thalberg", "Hayward", "Smith", "Taylor", "Bolger", "Tomić", "Zawadzki", "Perković", "Burrowes", "Lovrić", "Garica", "Casas", "Morgan", "Šarić", "Romero", "Michalska", "Pawlak", "Chmielewski", "Czerwinski", "Symanska", "Wysocka", "Gerken", "Jovanović", "Kastner", "Dresdner", "Smart", "Pfeffer", "Nowakowska", "Miller", "Fennell", "Walczak", "Pawłowska", "Boffin", "Hurt", "Schwartz", "Neumann", "Woodruff", "Wood", "Montgomery", "Varga", "Lothran", "Čeh", "Valadez", "Kowalski", "Lightfoot", "Bracegirdle", "Kaczmarek", "Mugwort", "Jovanović", "Banks", "Morris", "Casillas", "Ferry", "Frey", "Sackville-Baggins", "Marušić", "Freitag", "Labingi", "Neustadt", "Valentín", "Baecker", "Olszewski", "Zawadzki", "Propst", "Vogel", "Aguilar", "Maestas", "Kaestner", "Wysocki", "Walczak", "Wojciechowska", "Freytag", "Chubb", "Pugliese", "Kluge", "Gawkroger", "Kaufmann", "Stojanović", "Cole", "Carrillo", "Kowalska", "Torres", "Schmid", "Diggle", "Santana", "Wojciechowski", "Hrvatin", "Oldbuck", "Gamboa", "Cerda", "Ohare", "Zaragamba", "Petković", "Grabowska", "Rosenblatt", "Howard", "Čeh", "Allen", "Sackville-Baggins", "Goodbody", "Mendoza", "McGhee", "Piotrowski", "Don", "Kowalczyk", "Mirabal", "Oldbuck", "Hertzog", "Perales", "Wannemaker", "Chamberlain", "Benfield", "Nagel", "Vogler", "Anić", "Grgić", "Gammidge", "Zielinski", "Walczak", "Matić", "Jozić", "Król", "Schroder", "Hansen", "Rumble", "Kolar", "Smallburrow", "Szczepański", "Mađar", "Proudfoot", "Fassbinder", "Nacht", "Bačić", "Jukić", "Acosta", "Bosanac", "Lončar", "Whitfoot", "Villalobos", "Czerwinski", "Whittle", "Eggers", "Page", "Valadez", "Sandyman", "Valle", "Kirsch", "Button", "Crespo", "Gammidge", "Rukavina", "Jović", "Curiel", "Herz", "Rodriguez", "Čerkez", "Took-Took", "Vučković", "Popović", "Shelly", "Pfaff", "Zając", "Johnson", "Swanson", "Carvajal", "Eisenhauer", "Nagel", "Killebrew", "Puddifoot", "González", "Escamilla", "Mugwort", "Brandybuck", "Finkel", "Loya", "Hoskinson", "Sokołowska", "Symanski", "Shuster", "Brown", "Moench", "Živković", "Kowalski", "Boffin", "Wannemaker", "Douglas", "Pranjić", "Klobučar", "Puddifoot", "Estrada", "Wright", "Zamudio", "Mascarenas", "Terán", "Alejandro", "Chubb", "Gamgee", "Heredia", "Herceg", "Noakes", "Wieczorek", "Walczak", "Abt", "Benavidez", "Oldbuck", "Baggins", "Perić", "Sandheaver", "Puddifoot", "Rivas", "Nowakowska", "Vera", "Noakes", "Szczepański", "Piotrowski", "Armijo", "Gaona", "Clark", "Beich", "Dudek", "Goodwin", "Puddifoot", "Papst", "Sawicki", "Casillas", "Burger", "Walczak", "Anguiano", "Wojciechowska", "Diggle", "Alvarado", "Jaworski", "Schröder", "Burrowes", "Rukavina", "Milić", "Goldworthy", "Meister", "Chubb-Baggins", "Montemayor", "Stolar", "Novak", "Rumble", "Lewis", "Biermann", "Munk", "Matić", "Fischer", "Kuster", "Sanchez", "Loewe", "Morales", "Cepeda", "Puckett", "Friedman", "Posada", "Jasińska", "Đurić", "Novak", "Olague", "Feliciano", "Živković", "Šarić", "Varga", "Szczepański", "Kozłowska", "Welch", "Klein", "Walsh", "Valdez", "Zawadzka", "Rodriquez", "Dąbrowski", "Twofoot", "Gratton", "Miller", "Alexander", "Greenhand", "Gorski", "Pawlak", "Goold", "Navarro", "Lovrić", "Orosco", "Frankfurter", "Brajković", "Preciado", "Novaković", "Becker", "Božić", "Armstrong", "Mota", "Kovač", "Zając", "Mađar", "Kastner", "Smith", "Adame", "Nowak", "Villanueva", "Covas", "Rukavina", "Sweat", "Majewski", "Hodges", "Grubb", "Christensen", "Zagorec", "Pawłowska", "Schwartz", "Huerta", "Mueller", "Stanković", "Maier", "Beckenbauer", "Fusco", "Carbajal", "Vukelić", "Probst", "Sandheaver", "Papst", "Galić", "Stipanov", "Symanska", "Weissmuller", "Kucharski", "Sandyman", "Villaseñor", "Goold", "Jasińska", "Krueger", "Barić", "Davis", "Sparling", "Nowicki", "Wiśniewska", "Reyes", "Jasiński", "Wojciechowski", "McKnight", "Rich", "West", "Pranjić", "Eisenhauer", "Dalton", "Jaworska", "Jukić", "Beike", "Theiss", "Alemán", "Glass", "Cormier", "Dąbrowski", "Novosel", "Pavičić", "Boffin", "Robles", "Gorska", "Rutkowska", "Macías", "Enríquez", "Jabłońska", "Barragán", "Labingi", "Kowalczyk", "Lemus", "Jabłoński", "Abbott", "Friedman", "Rodríguez", "Partington", "Holtzmann", "Chubb-Baggins", "Howard", "Underhill", "Valle", "Brockhouse", "Dreher", "Caldera", "Martinović", "Schäfer", "Chmielewski", "Bohm", "Weatherford", "Velasco", "Pospisil", "Burrows", "Brandybuck", "Davis", "Rascón", "Jozić", "Nikolić", "Took-Brandybuck", "Concepción", "Topić", "Galbassi", "Schroder", "Miller", "Dudek", "Pawlak", "Perković", "Hoch", "Duerr", "Anić", "Moench", "Dudek", "Schimmel", "Pavlović", "Ketchum", "Lothran", "Feliciano", "Dąbrowski", "Alonso", "Lange", "Traugott", "Matić", "Wilkin", "Fried", "Król", "Czarnecka", "Baumgaertner", "Matić", "Greenhand", "Hornblower", "Halsey", "Irizarry", "Zając", "Bosanac", "Casillas", "Dalessandro", "Symanski", "Smallburrow"];
marklar.nameList['activity'] = ['boating', 'floating', 'jogging', 'concert', 'running', 'climbing', 'biking', 'travelling', 'swinging', 'festival', 'movie', 'dinner', 'baking', 'educating', 'jumping', 'rafting', 'skiing', 'longboarding', 'racing', 'karting', 'babtising']
marklar.nameList['place'] = ['house', 'church', 'cemetery', 'laboratory', 'study', 'community center', 'launchpad', 'lake', 'fizzure', 'volcano', 'office', 'zoo', 'cafeteria', 'chamber', 'field', 'observation tower', 'kitchen', 'store', 'shoppe', 'street', 'market', 'park', 'resort']

var api;
var sites;


/**
 * isRecognizedSite
 * 
 * finds if this number is one associated with a site or not
 * 
 * @param {string} number - the number calling us. The number to see if it is associated with a site
 * @returns {boolean} - false if no match, true if match
 */
var isRecognizedSite = function isRecognizedSite(number) {
    //console.log('isRecognizedSite with num', number);
    
    
    function isInArray(array, str) {
        for(var i=0; i<array.length; i++) {
            return (array[i] === str);
        }
        return false;
    }
    
    for (var site in sites) {
        //console.log(sites[site]);
        var siteNumbers = sites[site].numbers;
        //console.log('sitenumbers:', siteNumbers);
        return isInArray(siteNumbers, number);
    }
};

// var getSiteNumbers = function getSiteNumbers(from) {
    
//     for (var site in sites) {
//         return (inArray(numbers, from))
//         console.log('site', site, sites[site].numbers);
//         // for (var number in site.numbers) {
//         //     console.log('number', number);
//         // }
//     }
// };


// var bork = function bork(message) {
//     //throw new Error(message);
//     console.error('BORK!', message); // @todo email the admin
// };


exports.consoleAnswer = function(req, res, next) {
    console.log('> ANSWER');
    next();
};

exports.consoleRecord = function(req, res, next) {
    console.log('> RECORD');
    next();
};

exports.consoleHangup = function(req, res, next) {
    console.log('> HANGUP');
    next();
};



exports.getData = function getData(req, res, next) {
    console.log('> phone::getData');
    
    //console.log(req.body);
    
    // get call data
    var call = req.body;
    var uuid = call.CallUUID;
    var from = call.From;
    console.log('got call', call);
    console.log('from: ', from);
    
    req['xtah'] = {};
    req.xtah['call'] = call;
    req.xtah['uuid'] = uuid;
    req.xtah['from'] = from;
    
    next();
};


exports.recognize = function recognize(req, res, next) {
    console.log('> phone::recognize');
    
    // end call if number is not recognized
    if (!isRecognizedSite(req.xtah.from)) {
        console.log('num not recog');
        return next('number not recognized');
    }
    
    //console.log('number recog');
    next();
};


exports.redirect = function redirect(req, res) {
    console.log('> phone::redirect');
    var r = plivo.Response();
    
    var url = 'http://'+req.headers.host+'/call/record';
    console.log('redirecting to ', url);
    var redirectOptions = {
        method: 'POST'
    };
    
    r.addRedirect(url, redirectOptions);
    res.set({
        'Content-Type': 'text/xml'
    });
    return res.end(r.toXML());
};


exports.handleErrors = function handleErrors(err, req, res, next) {
    console.log('> phone::handleErrors');
    
    var r = plivo.Response();
    
    console.log('there was an error in a previos middlware:', err);
    var firstName = marklar.getName('first');
    var lastName = marklar.getName('last');
    var activity = marklar.getName('activity');
    var place = marklar.getName('place');
    
    r.addSpeak(firstName + ' ' + lastName + ' ' + activity + ' ' + place);
    res.set({
        'Content-Type': 'text/xml'
    });
    return res.end(r.toXML());

};

exports.end = function end(req, res) {
    console.log('> phone::end');
    res.sendStatus(202);
};

exports.waitShort = function waitShort(req, res, next) {
    console.log('> phone::waitShort');
    var r = plivo.Response();
    
    var waitOptions = {
        length: 15,
        silence: false
    };
    r.addWait(waitOptions);
    r.addRedirect('http://'+req.headers.host+'/call/record');
    res.set({
        'Content-Type': 'text/xml'
    });
    return res.end(r.toXML());
};

exports.waitLong = function waitLong(req, res, next) {
    console.log('> phone::waitShort');
    var r = plivo.Response();
    
    var waitOptions = {
        length: 15,
        silence: false
    };
    r.addWait(waitOptions);
    //r.addRedirect('http://'+req.headers.host+'/call/hangup');
    r.addHangup();
    res.set({
        'Content-Type': 'text/xml'
    });
    return res.end(r.toXML());
};


exports.introduce = function introduce(req, res, next) {
    console.log('> phone::introduce');
    
    var r = plivo.Response();
    
    r.addPlay('https://s3.amazonaws.com/plivocloud/Trumpet.mp3');
    r.addRedirect('http://'+req.headers.host+'/call/record');
    res.set({
        'Content-Type': 'text/xml'
    });
    return res.end(r.toXML());
};

exports.record = function record(req, res, next) {
    console.log('> phone::record');
    
    console.log('time to record', req.xtah.uuid);
    console.log('match up curre', req.body.CallUUID);
    var call = req.xtah.uuid;
    
    // record call if recognized number
    var recordParams = {
        "call_uuid": call,
        "time_limit": 30,
        "file_format": "wav"
    };
    
    api.get_live_calls({"status": "live"}, function(status, calls) {
        if (status >= 400) {
            console.log('could not get live calls '+status);
        }
        console.log('got live calls. status', status, 'calls', calls);
        
        api.record(recordParams, function(status, response) {
            if (status >= 400) {
                var msg = 'could not start recording ';
                console.log(response);
                return next(msg);
            }
            console.log('HOLY S-BALLS WE HAD A SUCCESS', response);
            return next();
        });
    });
};

exports.start = function start(plivoId, plivoToken, siteData) {
    console.log('> phone module go');
    
    if (typeof(plivoId) != 'string') throw new Error('plivoId must be string');
    if (typeof(plivoToken) != 'string') throw new Error('plivoToken must be string');
    if (typeof(siteData) != 'object') throw new Error('siteData must be an objects');

    sites = siteData;
    api = plivo.RestAPI({
        authId: plivoId,
        authToken: plivoToken,
    });
    
    return 0;
};