import getApiUrl from './url';
import $ from 'jquery';

const textBox = `
    <div class="item-box text-box">
        <input class="item-field text-field" type="text" placeHolder="Votre texte..." />
        <select class="item-field policy-field"></select>
        <input class="item-field color-field" type="color" value="#FFFFFF" />
        <input class="item-field size-field" type="number" value="15" />
        <input class="item-field x-field" type="number" value="50" />
        <input class="item-field y-field" type="number" value="50" />
        <button class="remove-button">Supprimer</button>
    </div>
`;

let updateFunction = undefined;

$(() => {
    $('#add-text').click(() => {
        $('#item-list').append(textBox);
        let policyList = '';
        fetch(`${getApiUrl(window.location)}/api/fonts`).then(message => message.text()).then(list => {
            JSON.parse(list).forEach(policy => policyList += `<option value="${policy}">${policy}</option>`);
            $('.policy-field').append(policyList);
        });

        $('.remove-button').click(e => {
            $(e.target).parent().remove();
            updateFunction();
        });
        ['.text-field', '.policy-field', '.color-field', '.size-field', '.x-field', '.y-field']
            .forEach(item => $('.text-box ' + item).on('input', () => updateFunction()));

    });
});

export function getTexts() {
    const cards = [];
    $('.text-box').each((index, element) => {
        const text = $(element).children('.text-field').val();
        const policy = $(element).children('.policy-field').val();
        const color = $(element).children('.color-field').val();
        const size = $(element).children('.size-field').val();
        const x = $(element).children('.x-field').val();
        const y = $(element).children('.y-field').val();
        cards.push({ text, policy, color, size, x, y });
    })
    return cards;
}

export function onNeedUpdatePreview(update) {
    updateFunction = update
}