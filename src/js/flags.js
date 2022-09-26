import { fetchCountries } from '../js/flags-fetch';
import { searchUser, ulCointainer, divContainer } from '../js/refs/refs';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { renderCountries, renderFullCountries } from '../js/components/render';
import '../css/flags.css';

searchUser.addEventListener('input', debounce(onInputSearch, 300));

function onInputSearch(event) {
  const value = event.target.value.trim();
  if (!value) {
    Notiflix.Notify.warning('Enter valid name, please!');
    return;
  }

  fetchCountries(value)
    .then(data => {
      console.log(data);
      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }

      if (data.length >= 2 && data.length <= 10) {
        const markup = renderCountries(data);
        ulCointainer.insertAdjacentHTML('beforeend', markup);
      } else {
        const markup = renderFullCountries(data);
        divContainer.insertAdjacentHTML('beforeend', markup);
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
