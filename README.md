# Platform Bieb in Bloei sprint 4
Tijdens sprint 5 heb ik me verdiept in interacties met JavaScript. Als onderdeel hiervan heb ik een extra pagina toegevoegd: de Partnerpagina. Voor deze pagina heb ik een interactieve carousel ontworpen, waarmee gebruikers de recensies en ervaringen van partners van Bieb in Bloei kunnen bekijken.

Linkje naar de pagina: https://ambersr.github.io/fix-the-flow-interactive-website/partner.html

#### Wie is Bieb in Bloei?
Bieb in Bloei is onderdeel van Buurtcampus Oost. Dit is een sociale groene ontmoetingsplek waar plantenliefhebbers bij elkaar komen om actief deel te nemen aan vergroening van de omgeving van Amsterdam. Bieb in Bloei biedt verschillende diensten aan waaronder: Zaden- en stekjesbibliotheek, groene educatieve workshops over duurzaamheid, tuinieren en vergroening en geveltuin project waaarin je van alles leert over duurzaamheid, verzorging van stekjes en zaadjes.

#### Vraag opdrachtgever
De opdrachtgever heeft de volgende vraag aan mij opgesteld: Ontwerp en ontwikkel een digitaal platform voor Bieb in Bloei van Buurtcampus Oost, waarbij Harry op een creatieve manier naar voren komt.

## Inhoudsopgave Readme

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)

## Beschrijving
### Het ontwerp
Het ontwerp is grotendeels ongewijzigd gebleven, met uitzondering van een kleine aanpassing in het kleurgebruik. Zoals besproken tijdens de vorige sprintreview, waren de oranje knoppen niet voldoende toegankelijk. Om dit te verbeteren, heb ik de knoppen donkerder gemaakt, zodat ze nu voldoen aan de toegankelijkheidstests.

Daarnaast heb ik een nieuw ontwerp gemaakt voor de Partnerpagina. Deze pagina sluit qua stijl naadloos aan bij de andere pagina’s. Op de Partnerpagina heb ik verschillende contentblokken toegevoegd, waarmee gebruikers meer te weten kunnen komen over de samenwerkingen tussen Bieb in Bloei en haar partners.

<img width="319" alt="image" src="https://github.com/user-attachments/assets/425b5eb7-702f-4ad6-b104-bae804b4b540" />

### Het ontwikkelde platform
In de afgelopen sprints heb ik 3 pagina's ontwikkeld:
- Geveltuin pagina
- Contact pagina
- Partner pagina

De patner pagina is een nieuw ontwikkelde pagina. Deze pagina bevat een interactie met Javscript namelijk de carousel met reviews. De carousel is mobile first ontiwkkeld en is voor verschillende schermbreedtes toegankelijk. Daarnaast is de carousel via de tab te navigeren, dit is handig voor gebruikers met screenreaders en heeft de carousel labels zodat het voor elke gebruiker duidelijk is hoe de interactie werkt.

Linkje naar de Partner pagina: 

### Belangrijke features:
- Interactief element (carousel)

De partner pagina bevat een carousel. Op deze carousel kunnen gebruikers de meningen van partners van Bieb in Bloei bekijken. De carousel is volledig toegankelijk en bruikbaar voor diverse devices.

<img width="600" alt="image" src="https://github.com/user-attachments/assets/206d6a0d-16c1-4903-83dc-bbc573ea662c" />

- Formulieren aangepast

De teksten in de velden van de formulieren zijn aangepast naar toegankelijke labels.

<img width="600" alt="image" src="https://github.com/user-attachments/assets/184fc37d-1958-4a21-b48d-c7fc3a5864ee">

## Kenmerken
### Toegankelijkheid HTML
De HTML bevat code voor een skiplink. Op deze manier kunnen screenreader gebruikers de navigatie overslaan. Ook hebben een aantal HTML-elementen hebben aria-labels toegevoegd gekregen en hebben alle elementen een semantieke functionaliteit. 

### Belangrijke aspecten in CSS
De styling wordt ingeladen aan de hand van een stylesheet waarin het huisstijl vast staat. Daarnaast wordt er een aparte CSS bestand gebruikt om de overige styling van de pagina's aan te passen.

### Belangrijke aspecten Javascript
De Javascript wordt gebruikt om de animatie van het openklappen en dichtklappen van het hamburger menu te functioneren. Daarnaast wordt dit ook gebruik voor de functionaliteit van de carousel met reviews.

## Bronnen
- Huisstijl (kleuren en fonts uit de website gehaald) Linkje: https://bieb-in-bloei.vercel.app/
- Figma bestand (design Geveltuin pagina) Linkje: https://www.figma.com/design/DXJVOUapnTVZWHXkFpcr0I/FDND-projecten?node-id=62-2304&t=5PNDDUMVCjG4DIYr-1


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
