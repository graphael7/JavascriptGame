var Questions = function(args) {
    this.category = args['category'] || null;
    this.question = args['question'] || null;
    this.answer = args['answer'] || null;
    this.points = args['points'] || null;

  };


geography100 = new Questions({category:"geography",question:"The city of El Paso in this state is a major gateway between the U.S. & Mexico",answer: "texas", points: 100})
geography200 = new Questions({category:"geography",question:"This 'stately' river carved the Black Canyon as well as the Grand Canyon",answer: "colorado river", points: 200})
geography300 = new Questions({category:"geography",question:"If you want to sneak a peek at the landmark seen here, head to this Midwest state:(Mount Rushmore)",answer: "south dakota", points: 300})
geography400 = new Questions({category:"geography",question:"Sounds morbid, but it's the lowest point in California & in all of the U.S.",answer: "death valley", points: 400})
geography500 = new Questions({category:"geography",question:"Vancouver is the northernmost city represented in the NBA; this is the southernmost",answer: "miami", points: 500})


sports100 = new Questions({category:"sports",question:"On May 22, 1999 this American scored her 108th goal, becoming the all-time leading scorer in int'l soccer",answer: "mia hamm", points: 100})
sports200 = new Questions({category:"sports",question:"Buster Douglas' 1990 knockout of this champ has been called the greatest heavyweight title upset",answer: "mike tyson", points: 200})
sports300 = new Questions({category:"sports",question:"In 1996 Emmitt Smith, with $16.5 million, & this Dolphins QB, with $11.7 million, led the NFL in total earnings",answer: "dan marino", points: 300})
sports400 = new Questions({category:"sports",question:"This Houston Rockets center won the NBA's Most Valuable Player award in 1994",answer: "hakeem olajuwon", points: 400})
sports500 = new Questions({category:"sports",question:"This NFL quarterback is a great-great-great-grandson of Brigham Young",answer: "steve young", points: 500})


animals100 = new Questions({category:"animals",question:"It's the common term for the young of a whale as well as a cow",answer: "calf", points: 100})
animals200 = new Questions({category:"animals",question:"The screech type of this creature may make its nest in a Saguaro cactus",answer: "owl", points: 200})
animals300 = new Questions({category:"animals",question:"The Weddell species of this animal can stay underwater for over an hour",answer: "seal", points: 300})
animals400 = new Questions({category:"animals",question:"It has webbed, padded toes & can drink over 20 gallons of water in a single drink",answer: "camel", points: 400 })
animals500 = new Questions({category:"animals",question:"This land animal can weigh more than 8,000 pounds & can open its immense jaws 150 degrees",answer: "hippo", points: 500})


science100 = new Questions({category:"science",question:"This green plant pigment is also found in algae & in some bacteria",answer: "chlorophyll", points: 100})
science200 = new Questions({category:"science",question:"The sun is 333,000 times as massive as the Earth & 1,047 times as massive as this planet",answer: "jupiter", points: 200})
science300 = new Questions({category:"science",question:"It's defined as an atom or group of atoms that has an electrical charge",answer: "ion", points: 300})
science400 = new Questions({category:"science",question:"Birds & bees perform this transfer of gametes from anthers to stigmas",answer: "pollination", points: 400})
science500 = new Questions({category:"science",question:"Einstein said measurements of this depend on whether the observer is moving; it's not absolute",answer: "time", points: 500})


television100 = new Questions({category:"television",question:"Ben Gould & Samantha Becker roam the halls of Bayside High as part of 'The New Class' on this show",answer: "saved by the bell", points: 100 })
television200 = new Questions({category:"television",question:"The series finale of this Fox drama aired on May 17, 2000, 2 weeks after the last 'Party of Five'",answer: "beverly hills 90210", points: 200})
television300 = new Questions({category:"television",question:"In 1981 she stepped out of 'Three's Company'",answer: "suzanne somers", points: 300 })
television400 = new Questions({category:"television",question:"Belinda Montgomery was Patrick Duffy's Dr. on 'The Man From Atlantis' & Neil Patrick Harris' mom on this show",answer: "doogie howser md", points: 400})
television500 = new Questions({category:"television",question:"Peter Boyle & Doris Roberts play the parents & neighbors of Ray Romano on this CBS sitcom",answer: "everybody loves raymond", points: 500})


history100 = new Questions({category:"history",question:"The California Gold Rush started the first big wave of immigration from this Asian nation",answer: "china", points: 100})
history200 = new Questions({category:"history",question:"The Treaty of Versailles ended this war & set up the League of Nations",answer: "world war 1", points: 200})
history300 = new Questions({category:"history",question:"In 338 B.C. this country's Philip II defeated Thebes & Athens at the Battle of Chaeronea",answer: "macedonia", points: 300})
history400 = new Questions({category:"history",question:"In February 1825 this 'liberator' was elected president of Peru",answer: "simon bolivar", points: 400})
history500 = new Questions({category:"history",question:"Tradition says this country's first emperor, Menelik I, was the son of King Solomon & the Queen of Sheba",answer: "ethiopia", points: 500})


var arr = [geography100,geography200,geography300,geography400,geography500,sports100,sports200,sports300,sports400,sports500,animals100,animals200,animals300,animals400,animals500,science100,science200,science300,science400,science500,television100,television200,television300,television400,television500,history100,history200,history300,history400,history500]
