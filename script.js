/**
 * Verkefni 7 – Gisk leikur
 *
 * Leikur sem snýst um að giska á tölu milli 0 og 100
 */


/**
 * Global fylki sem geymir fjölda ágiskana í leikjum
 * Ef fylki er tómt hefur enginn leikur verið spilaður.
 * Ef fylki er [2, 3] hafa verið spilaðir tveir leikir þar sem:
 *  - Fyrsti leikur kláraðist í tveim ágiskunum.
 *  - Seinni leikur kláraðist í þrem ágiskunum.
 */

 const games = [];
 var leikir = 0;

/**
 * Spilar einn leik.
 */
function play() {
  const random = randomNumber(1,100);
  const gisk = 0;
  const rett = false;
  const tilraunir = 0;
  
  getResults(random, gisk, rett, tilraunir);

  
}

/**
 * Tekur inn ágiskun, gáir hvort að það sé tala.
 * Ef svo er þá tékkar það á hversu langt frá réttu töluni ágiskunin er og prentar út eftirfarandi:
 * ef ekki tala "Ekki tala!"
 * ef gisk < 0 "Ekki rétt!"
 * ef gisk er rétt "rétt!"
 * ef munur < 5 "Mjög nálægt"
 * ef munur < 10 "Nálægt"
 * ef munur < 20 "Frekar langt frá"
 * ef munur < 50 "Langt frá"
 * annars "Mjög langt frá"
 * bætir svo fjölda tilrauna inn í games.
 */
function getResults(random, gisk, rett, tilraunir){
  do{
    gisk = prompt('Giskaðu á tölu milli 0 - 100: ');
    if(gisk === null){
      spilaAftur(tilraunir);
    }else if(gisk != Number(gisk)){
      isNaN(gisk);
      alert('Ekki tala!')
    }else if(gisk < 0){
      alert('Ekki rétt!');
    }else if(gisk == random){
      rett = true;
      alert('Rétt!');
    }else if(Math.abs(gisk - random) < 5){
      alert('Mjög nálægt');
    }else if(Math.abs(gisk - random) < 10){
      alert('Nálægt');
    }else if(Math.abs(gisk - random) < 20){
      alert('Frekar langt frá');
    }else if(Math.abs(gisk - random) < 50){
      alert('Langt frá');
    }else{
      alert('Mjög langt frá');
    }

    tilraunir ++;
  }while(rett == false);

  Games = games.push(tilraunir);

  spilaAftur(tilraunir);

}

/**
 * Spyr að leik loknum hvort að þú viljir spila annan leik,
 * ef svo er þá runnar það aftur play();
 * annars segir það þér hversu marga leiki þú spilaðir og hver meðalfjöldi ágiskana var.
 */
function spilaAftur(){
  const SpilaAftur = confirm('Viltu spila aftur?');
  if(SpilaAftur == true){
    play();
  }else{
    alert('þú spilaðir ' + games.length + ' leiki \n'+ 'Meðalfjöldi ágiska var ' + (games.reduce((a,b) => a + b, 0)/parseInt(games.length)));
  }
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
play();
