function obtenhaParametosDaQueryString() {
	// Vetor que conterá a resposta do nosso método com os parâmetros da query string.
	var parametrosDaQueryString = [];

	// 'chave=valor&chave=valor&chave=valor'
	var queryString = window.location.search.replace("?", "");
	
	// ['chave=valor', 'chave=valor', 'chave=valor']
	var parametrosJuntoComValores = queryString.split("&");
	
	for (var i = 0; i < parametrosJuntoComValores.length; i++) {
		var parametroComValor = parametrosJuntoComValores[i];
		
		// ['chave', 'valor']
		var parametroSeparadoDoValor = parametroComValor.split('=');
		
		/*
			[
				{chave: 'chave', valor: 'valor'},
				{chave: 'chave', valor: 'valor'},
				{chave: 'chave', valor: 'valor'}
			]
		*/	
		parametrosDaQueryString.push({
			chave: parametroSeparadoDoValor[0],
			valor: parametroSeparadoDoValor[1]
		});
	}
	
	return parametrosDaQueryString;
}

function obtenhaParametroDaQueryStringPorChave(chave) {
	var parametrosDaQueryString = obtenhaParametosDaQueryString();
	
	return parametrosDaQueryString.find(function(parametro) {
		return parametro.chave == chave;
	});
}