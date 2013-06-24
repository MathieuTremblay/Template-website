function newScuze() {
	var messages = [
					'Le chien a tout mangé',
					'J\'ai la fièvre du printemp',
					'Ce mal de tête me tue',
					'Je suis encore ivre de la nuit dernière',
					'Ma voiture a pris feu',
					'Je suis enceinte',
					'La ville refait ma rue',
					'Mon poisson est mort',
					'Le soleil brille',
					'Il fait noir',
					'J\ai dépanssé mon argent à jouer au poker en ligne et je n\'en est plus asser pour le bus',
					'Nouriture Mexicaine',
					'La troisième guerre mondial',
					'Le président m\'a téléphoner',
					'Ma maison est inondé',
					'Je suis juré',
					'J\'ai essayé de me teindre les cheveux en blond, mais il sont sorti vert',
					'Quelqu\'un a cogné a ma fenêtre ce matin',
					'Je me suis embarré dans les toilettes',
					'J\'ai mangé des sushis périmmé hier soir',
					'Je n\'ai pas trouver mes vêtement',
					'Twitter a planté',
					'C\'était comme sa quand je suis arrivé',
					'J\'est été kidnapé par les aliens',
					'la voix m\'a dit de nettoyer toutes les armes aujourd\'hui',
					'Mon vol a été annulé',
					'Mon auto n\'a plus d\'essence',
					'Mon chien s\'est sauvé',
					'Une météorite es tombé sur ma maison',
					'Je me suis fait attaqué par des zombies',
					'Facebook m\'a appelé',
					'Je devais sauve la terre',
					'J\'était dans l\'espace',
					'Je me suis cogné la petite orteille sur un meuble',
					'J\'ai échapper du café sur mon travail',
					'Je doit déasmorcer une bombe',
					'La suite de &lt;mon jeu favoris&gt; est sortie hier',
					'J\'ai été mordu par un vampire',
					'J\'ai aidé E.T. à téléphoner chez lui',
					'Darth Vader est mon père',
					'L\'internet a planté et je dois le réparer',
					'Le président m\'a demandé de l\'aider pour quelque\'chose de très important',
					'Je suis juste un nerdz',
					'Les aliens ont détruis ma maison',
					'Le dernier épisode de &lt;mon émission favoris&gt; a été diffusé hier soir',
					'C\'est la pleine lune',
					'Chuck Norris N\'a pas besoin d\'excuse',
					'Je suis stupide',
					'Le site a été piraté',
					'Je suis un vampire',
					'J\'aidais Marty McFly à retourné dans le futur',
					'La date limite était il y a 5 heures',
					'Microsoft a acheté Google',
					'Internet Explorer 6',
					'Ce n\'est pas supporter pas votre configuration'
					];
	
	var _container = $('div[role="excuse"]'),
	_el = $('div[role="message"]'),
	_last_random = 0,
	_counter = 1,
	_color;
	
	_el.click(function() {
			  _last_random = randomBetween(messages.length);
			  
			  _el.addClass('off');
			  _container.addClass('off-' + _counter);
			  
			  
			  
			  setTimeout(function() {
						 _el.html(messages[_last_random]);
						 _el.removeClass('off');
						 _container.removeClass('off-' + _counter);
						 
						 _counter++;
						 
						 if (_counter == 3) {
						 _counter = 1;
						 }
						 
						 
						 
						 }, 400);
			  });
	
	function randomBetween(max) {
		var r;
		do {r = Math.random();} while(r == 1.0);
		
		r = parseInt(r * max);
		
		if (r == _last_random) {
			return randomBetween(max);
		} else {
			return r;
		}
	}
	
}
