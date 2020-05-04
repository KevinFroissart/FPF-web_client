import getApiUrl from './url';
import $ from 'jquery';

/**
 * Ajoute des items sur la page de personalisation des faire-part de mariage.
 */
$(() => {


    /**
     * Ajoute des items pour les selectioner dans la liste des badge depuis la base de donnée 
     */
    fetch(`${getApiUrl(window.location)}/cardshapes`).then(response => response.text())
        .then(message => {
            const badges = JSON.parse(message);
            badges.forEach(badge => {
                $('#badges-list').append(`<a class="dropdown-item" href="#">${badge.name}</a>`);
            });
        });

    /**
     * Ajoute un item depuis la liste
     */
    $('#badges-list').on('click', '.dropdown-item', (e) => {
        const item = $(e.target).html();
        $('.choiceList').append(`<a href="#" class="badge badge-success" >${item}</a>`);
    });

    /**
     * Supprime l'item quand on clique dessus.
     */
    $('.choiceList').on('click', '.badge', (e) => $(e.target).remove());

});
