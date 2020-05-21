import { getTexts, onNeedUpdatePreview } from './personalisation-form';
import getApiUrl from './url';
import $ from 'jquery';

const url = getApiUrl(window.location);
const inputList = ['#background-color'];

$(() => {
    updatePreview();

    // mise a jour automatique après chaque entrées calvier
    inputList.forEach(item => $(item).on('input', () => updatePreview()));
    onNeedUpdatePreview(() => updatePreview());
});


function updatePreview() {
    const texts = getTexts();
    const card = { id: `${Date.now()}`, color: $('#background-color').val(), texts };
    console.log(card);
    $.ajax({
        type: 'POST',
        url: `${url}/api/imagepreview/create`,
        data: JSON.stringify(card),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: data => $('#faire-part-preview').attr('src', `${url}/api/imagepreview/${data}`),
        failure: (err) => console.error(err)
    });
}
