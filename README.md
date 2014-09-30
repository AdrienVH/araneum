#araneum (pour OpenLayers 2)

araneum est une fonction JS permettant de dessiner tous les liens existants entre les couples de points, à partir d'une couche d'entités ponctuelles.

`var result = araneum(couchePoints, coucheLiens);`

![Screenshot](https://github.com/adrienvh/araneum/blob/master/doc/screenshot.png "Screenshot")

##couchePoints

`OpenLayers.Layer.Vector`

Cette couche doit contenir, a minima, deux entités ponctuelles et être projetée en EPSG:3857 (Web Mercator).

##coucheLiens

`OpenLayers.Layer.Vector`

Cette couche vierge (et son style) doit avoir été créée avant l'appel de la fonction. Cela permet de lui donner une portée globale et, donc, de la réutiliser dans vos propres scripts.
Elle doit être projetée en EPSG:3857 (Web Mercator).
