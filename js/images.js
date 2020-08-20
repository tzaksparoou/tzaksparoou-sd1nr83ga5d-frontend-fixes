// Must match div "class=modalDialog"  order in html.
// First n images that are shown are controlled in settings.js
// Therefore images need to be made in "rounds".

var images = [{
  // THEMES/YEARS
  image: "img/ThemeA.jpg",
  title: "Moderation", // Andrea, Ken, Emily, Melissa
  theme: "themeA"
}, {
  image: "img/ThemeB_Cropped.png",
  title: "The Frameless Image", // Raluca, Divya, Farid
  theme: "themeB"
}, {
  image: "img/ThemeC.jpg",
  title: "Repulsion Suspicion", // Dominic, Kane, Jamie
  theme: "themeC"
}, {
  image: "img/ThemeD_Cropped.png",
  title: "Building the Eye", // Lara, Kate, Guy
  theme: "themeD"
}, {

// ROUND ONE
  image: "img/BryanLara01.gif",
  title: "<em>Modular Furniture System</em><br>Lara Bryan",
  theme: "themeD"
}, {
  image: "img/CarrollKane01.png",
  title: "<em>Home Assets</em><br>Kane Carroll",
  theme: "themeC"
}, {
  image: "img/ChanAndrea01.jpg",
  title: "<em>A Walk As a Designed Crevasse</em><br>Anyu Chan",
  theme: "themeA"
}, {
  image: "img/DawsonEmily01.jpg",
  title: "<em>The Language of Plaster Sledging</em><br>Emily Dawson",
  theme: "themeA"
}, {
  image: "img/FrewKate01.png",
  title: "<em>r(rotate), (smudge), ctrl+x(cut), v(move), p(anchor_point), z(zoom)</em><br>Kate Frew",
  theme: "themeD"
}, {
  image: "img/KarimFarid01.jpg",
  title: "<em>Domestic Discussions</em><br>Farid Karim",
  theme: "themeB"
}, {
  image: "img/KuehnJamie01.jpg",
  title: "<em>Ventilation and Astrology</em><br>Jamie Kuehn",
  theme: "themeC"
}, {
  image: "img/MillsGuy01.jpg",
  title: "<em>Juglas Nigra Skin</em><br>Guy Mills",
  theme: "themeD"
}, {
  image: "img/MoldoveanuRaluca01.jpg",
  title: "<em>Digital Translation of Recollection</em><br>Raluca Moldoveanu",
  theme: "themeB"
}, {
  image: "img/OliverDominic01.png",
  title: "<em>The Bookless Library</em><br>Dominic Oliver",
  theme: "themeC"
}, {
  image: "img/PatelDivya01.jpg",
  title: "<em>The Beauty Tutorial</em><br>Divya Patel",
  theme: "themeB"
}, {
  image: "img/SheppardFrederick01.jpg",
  title: "<em>Samsung OS Default Icons #01-03</em><br>Frederick Sheppard",
  theme: "themeA"
}, {
  image: "img/WearMelissa01.jpg",
  title: "<em>Temporalising Habitation</em><br>Melissa Wear",
  theme: "themeA"
}, {

  // ROUND TWO
  image: "img/BryanLara02.jpg",
  title: "<em>Tea for Three</em><br>Lara Bryan",
  theme: "themeD"
}, {
  image: "img/CarrollKane02.jpg",
  title: "<em>Augmented Home Video</em><br>Kane Carroll",
  theme: "themeC"
}, {
  image: "img/ChanAndrea02.png",
  title: "<em>Image as the Primary Generator</em><br>Anyu Chan",
  theme: "themeA"
}, {
  image: "img/DawsonEmily02.jpg",
  title: "<em>Construction Certificate</em><br>Emily Dawson",
  theme: "themeA"
}, {
  image: "img/FrewKate02.png",
  title: "<em>Reading the Image</em><br>Kate Frew",
  theme: "themeD"
}, {
  image: "img/KarimFarid02.jpg",
  title: "<em>Watermelons Everywhere</em><br>Farid Karim",
  theme: "themeB"
},{
  image: "img/KuehnJamie02.png",
  title: "<em>Dry Cleaning</em><br>Jamie Kuehn",
  theme: "themeC"
}, 
{
  image: "img/MillsGuy02.jpg",
  title: "<em>Victoria Park as Building</em><br>Guy Mills",
  theme: "themeD"
}, {
  image: "img/MoldoveanuRaluca02.jpg",
  title: "<em>Recollection Catalogue Garden</em><br>Raluca Moldoveanu",
  theme: "themeB"
}, {
  image: "img/OliverDominic02.jpg",
  title: "<em>Tumbledryer</em><br>Dominic Oliver",
  theme: "themeC"
}, {
  image: "img/PatelDivya02.jpg",
  title: "<em>Between Package and Building</em><br>Divya Patel",
  theme: "themeB"
}, {
  image: "img/SheppardFrederick02.jpg",
  title: "<em>Institute of Future Affordance - 11th Floor Plan</em><br>Frederick Sheppard",
  theme: "themeC"
}, {
  image: "img/WearMelissa02.jpg",
  title: "<em>Simulating the Sun</em><br>Melissa Wear",
  theme: "themeA"
}, {

  // ROUND THREE
  image: "img/BryanLara03.png",
  title: "<em>Text - Image - Form</em><br>Lara Bryan",
  theme: "themeD"
}, {
  image: "img/CarrollKane03.png",
  title: "<em>The Substances of Horror</em><br>Kane Carroll",
  theme: "themeC"
}, {
  image: "img/ChanAndrea03.png",
  title: "<em>Visual Creating Spatial</em><br>Anyu Chan",
  theme: "themeA"
}, {
  image: "img/DawsonEmily03.jpg",
  title: "<em>Arcs of Communality</em><br>Emily Dawson",
  theme: "themeA"
}, {
  image: "img/FrewKate03.jpg",
  title: "<em>Colour Space</em><br>Kate Frew",
  theme: "themeD"
}, {
  image: "img/KarimFarid03.png",
  title: "<em>The Specific, The Generic, The Sensory</em><br>Karim Farid",
  theme: "themeB"
}, {
  image: "img/KuehnJamie03.jpg",
  title: "<em>Reflections of Mirador Mansion</em><br>Jamie Kuehn",
  theme: "themeC"
}, {
  image: "img/MillsGuy03.png",
  title: "<em>Natural Modelling</em><br>Guy Mills",
  theme: "themeD"
}, {
  image: "img/MoldoveanuRaluca03.jpg",
  title: "<em>Digital Sorting</em><br>Raluca Moldoveanu",
  theme: "themeB"
}, {
  image: "img/OliverDominic03.jpg",
  title: "<em>Bathing in Copy</em><br>Dominic Oliver",
  theme: "themeC"
}, {
  image: "img/SheppardFrederick03.jpg",
  title: "<em>Institute of Future Affordance: Fragment Model</em><br>Frederick Sheppard",
  theme: "themeA"
}, {

  // ROUND FOUR
  image: "img/BryanLara04.jpg",
  title: "<em>Apartments for Amorists</em><br>Lara Bryan",
  theme: "themeD"
}, {
  image: "img/CarrollKane04.jpg",
  title: "<em>Illicit Activity Studies</em><br>Kane Carroll",
  theme: "themeC"
}, {
  image: "img/ChanAndrea04.png",
  title: "<em>World: Interested</em><br>Anyu Chan",
  theme: "themeA"
}, {
  image: "img/FrewKate04.png",
  title: "<em>#176106 Bricks</em><br>Kate Frew",
  theme: "themeD"
}, {
  image: "img/KarimFarid04.jpg",
  title: "<em>Remembering Aleppo Whilst Shopping</em><br>Farid Karim",
  theme: "themeB"
}, {
  image: "img/MillsGuy04.png",
  title: "<em>Fagus Sylvatica: 8,176,297 Faces</em><br>Guy Mills",
  theme: "themeD"
}, {
  image: "img/OliverDominic04.jpg",
  title: "<em>Homeomorphic Space</em><br>Dominic Oliver",
  theme: "themeC"
}, {

  // ROUND FIVE
  image: "img/CarrollKane05.jpg",
  title: "<em>Epochs of Horror</em><br>Kane Carroll",
  theme: "themeC"
}, {
  image: "img/ChanAndrea05.jpg",
  title: "<em>World: Stationary</em><br>Andrea Chan",
  theme: "themeA"
}, {
  image: "img/FrewKate05.jpg",
  title: "<em>High-Res Stitching</em><br>Kate Frew",
  theme: "themeD"
}, {
  image: "img/MillsGuy05.jpg",
  title: "<em>Digital Branches</em><br>Guy Mills",
  theme: "themeD"
}, {
  image: "img/OliverDominic05.png",
  title: "<em>Xenocentrism</em><br>Dominic Oliver",
  theme: "themeC"
}, {

  // ROUND SIX
  image: "img/FrewKate06.jpg",
  title: "<em>Neighbourhood Watch</em><br>Kate Frew",
  theme: "themeD"
}, {

  // ROUND SEVEN
  image: "img/FrewKate07.jpg",
  title: "<em>Continuous Interference</em><br>Kate Frew",
  theme: "themeD"
}]
