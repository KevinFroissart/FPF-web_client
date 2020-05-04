import $ from 'jquery';

/**
 * Ajoute des items sur la page de personalisation des faire-part de mariage.
 */
$(() => {
	/**
	 * Ajoute un item depuis la liste
	 */
	$('.dropdownChoice .dropdown-menu .dropdown-item').click(e => {
		e.preventDefault();
		const item = $(e.target).html();
		$('.choiceList').append(
			`<a href="#" class="badge badge-success" >${item}</a>`
		);
	});

	/**
	 * Supprime l'item quand on clique dessus.
	 */
	$('.choiceList').on('click', '.badge', e => {
		e.preventDefault();
		$(e.target).remove();
	});
});
