DisplaySeats.jsx
Denna kod fick vi tillhanda av vår lärare, det den gör är egentligen att sköta logiken bakom det visuella när bokningssidan visas, dem klickbara sätena men även rätt bild till rätt film, detta projekt har gjort minimala ändringar i denna kod. 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Footer.jsx
Footer är en komponent som visas längst ner på sidan, den är centrerad med en knapp som lyder ”top” som egentligen bara använder det inbyggda ”scrollTo” som scrollar användaren tillbaka till toppen av hemsidan. Footer har en border linje för att avskilja på varje page i färgtemat hemsidan har för en lättare överblick var på hemsidan du är och på så sätt underlätta navigeringen av hemsidan.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Movie.jsx
Movie är en komponent som håller i det visuella och tar emot logiken bakom movies, dvs fetchen från APIn. Movie visar filmernas poster och dessa är klickbara för framtida funktionalitet och vidare routing på hemsidan, kanske en ny page gällande mer information kring filmen. 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Navbar.jsx
Navbaren är hemsidans routing, denna komponent är flexibel i sitt utseende och innehåller länkarna till dem olika sidorna hemsidan består av. Den har länkar till Auditorium där du kan se alla visningar av filmerna, men även en länk till alla filmer med posters, dvs nyheterna som har kommit på biografen. Den innehåller även en länk till startsidan på hemsidan som just är vad jag beskrev ovan, alla nyheter och vilka filmer du kan välja att gå på.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Screening.jsx
Screening är hemsidans stora page, här visas alla visningar av filmerna, tar emot logiken bakom screenings och visar filmens titel, men även en överskrift på vilka dagar vilka filmer går, den tar emot logiken bakom att kunna sortera och visar detta med auto genererade knappar för just sortering över filmerna på sidan, allt detta är satt till att ingå i ett kort för en lättare överskådning och i själva kortet ingår det även vilken salong dem visas på vilken dag och tidpunkt. Kortet innehåller vilken genre och hur lång filmen är för att en användare lätt ska kunna få sig en överblick efter att varit på movie-pagen att hitta rätt film. Det finns även en knapp på kortet i screenings komponenten som tar dig till bookingssidan om användaren väljer att gå på just den visningen. 
