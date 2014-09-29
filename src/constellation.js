function constellation(couchePoints, coucheLiens)
{
	// Construction des features (entités)
	var liens = new Array();
	// Parcours des points
	for(var i = 0; i < couchePoints.features.length; i++)
	{
		var point_1 = couchePoints.features[i].geometry;
		for(var j = i + 1; j < couchePoints.features.length; j++)
		{
			var point_2 = couchePoints.features[j].geometry;
			// Construction de la feature (entité)
			var the_geom = new OpenLayers.Geometry.LineString([point_1, point_2]);
			var the_feature = new OpenLayers.Feature.Vector(the_geom, {});
			liens.push(the_feature);
		}
	}
	// Si des features (entités) ont été créées
	if(liens.length > 0)
	{
		// On vide le layer (couche) de toutes ses features (entités)
		coucheLiens.destroyFeatures();
		// On peuple le layer (couche) avec les features (entités) créées
		coucheLiens.addFeatures(liens);
		coucheLiens.redraw();
		// On retourne le nombre de liens créés, pour information
		return liens.length;
	}
	// En cas d'erreur
	return false;
}