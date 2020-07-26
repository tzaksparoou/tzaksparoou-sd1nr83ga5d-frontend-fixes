// Must match div "class=modalDialog"  order in html.
// First n images that are shown are controlled in settings.js
// Therefore images need to be made in "rounds".

var images = [{
    image: "img/ThemeA.jpg",
    title: 'Moderation', // Andrea, Ken, Emily, Melissa
    theme: 'themeA' 
  }, {
    image: "img/ThemeB_Cropped.png",
    title: "The Frameless Image", // Raluca, Divya, Farid
    theme: 'themeB' 
  }, {
    image: "img/ThemeC.jpg",
    title: "Repulsion Suspicion", // Dominic, Kane, Jamie
    theme: 'themeC' 
  }, {
    image: "img/ThemeD_Cropped.png",
    title: "Building the Eye", // Lara, Kate, Guy
    theme: 'themeD'
  }, { // ROUND ONE
    image: "img/ChanAndrea01.jpg",
    title: '<em>A Walk As a Designed Crevasse</em><br>Anyu Chan',
    theme: 'themeA'
  },{
    image: "img/OliverDominic01.png",
    title: '<em>The No Book Library</em><br>Dominic Oliver',
    theme: 'themeC'
  },{
    image: "img/DawsonEmily01.jpg",
    title: '<em>The Language of Plaster Sledging</em><br>Emily Dawson',
    theme: 'themeA'
  },{
    image: "img/FrewKate01.png",
    title: '<em>r(rotate), (smudge), ctrl+x(cut), v(move), p(anchor_point), z(zoom)</em><br>Kate Frew',
    theme: 'themeD'
  },{
    image: "img/BryanLara01.gif",
    title: '<em>Modular Furniture System</em><br>Lara Bryan',
    theme: 'themeD'
  }, {
    image: "img/MoldoveanuRaluca01.jpg",
    title: '<em>Digital Translation of Recollection</em><br>Raluca Moldoveanu',
    theme: 'themeB'
  }, {
    image: "img/PatelDivya01.jpg",
    title: '<em>The Beauty Tutorial</em><br>Divya Patel',
    theme: 'themeB'
  }, {
    image: "img/KarimFarid01.jpg",
    title: '<em>Domestic Discussions</em><br>Farid Karim',
    theme: 'themeB'
  }, {
    image: "img/SheppardFrederick01.jpg",
    title: '<em>Samsung OS Default Icons #01-03</em><br>Frederick Sheppard',
    theme: 'themeA'
  }, {
    image: "img/MillsGuy01.jpg",
    title: '<em>Natural Modelling</em><br>Guy Mills',
    theme: 'themeD'
  }, {
    image: "img/KuehnJamie01.jpg",
    title: '<em>Ventilation and Astrology</em><br>Jamie Kuehn',
    theme: 'themeC'
  }, {
    image: "img/CarrollKane01.png",
    title: '<em>Home Assets</em><br>Kane Carroll',
    theme: 'themeC'
  }, {
    image: "img/WearMelissa01.jpg",
    title: '<em>Temporalising Habitation</em><br>Melissa Wear',
    theme: 'themeA'
  },{ // ROUND TWO
    image: "img/ChanAndrea02.png",
    title: '<em>World: Interested</em><br>Anyu Chan',
    theme: 'themeA'
  },{
    image: "img/OliverDominic02.jpg",
    title: '<em>Tumbledryer</em><br>Dominic Oliver',
    theme: 'themeC'
  },{
    image: "img/DawsonEmily02.jpg",
    title: '<em>A Kit of Parts</em><br>Emily Dawson',
    theme: 'themeA'
  },{
	image: "img/FrewKate02.png",
    title: '<em>Reading the Image</em><br>Kate Frew',
    theme: 'themeD'
  },{
    image: "img/BryanLara02.jpg",
    title: '<em>Tea for Three</em><br>Lara Bryan',
    theme: 'themeD'
  }, {
    image: "img/MoldoveanuRaluca02.jpg",
    title: '<em>Garden as Recollection Catalogue</em><br>Raluca Moldoveanu',
    theme: 'themeB'
  }, {
    image: "img/PatelDivya02.jpg",
    title: '<em>Rig-Space</em><br>Divya Patel',
    theme: 'themeB'
  }, {
    image: "img/KarimFarid02.jpg",
    title: '<em>Remembering Aleppo Whilst Shopping</em><br>Farid Karim',
    theme: 'themeB'
  }, {
    image: "img/SheppardFrederick02.jpg",
    title: '<em>Institute of Future Affordance - 11th Floor Plan</em><br>Frederick Sheppard',
    theme: 'themeA'
  }, {
    image: "img/MillsGuy02.jpg",
    title: '<em>Victoria Park as Building</em><br>Guy Mills',
    theme: 'themeD'
  }, {
    image: "img/KuehnJamie02.png",
    title: '<em>Dry Cleaning</em><br>Jamie Kuehn',
    theme: 'themeC'
  }, {
    image: "img/CarrollKane02.jpg",
    title: '<em>Augmented Home Video</em><br>Kane Carroll',
    theme: 'themeC'
  }, {
    image: "img/WearMelissa02.jpg",
    title: '<em>Simulating the Sun</em><br>Melissa Wear',
    theme: 'themeA'
  } // ROUND THREE
]
