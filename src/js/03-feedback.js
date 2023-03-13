import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(e => {
    dataSaveText();
  }, 500)
);
form.addEventListener('submit', onSubmit);

function dataSaveText() {
  const dataSave = { email: email.value, message: message.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataSave));
}

function onSubmit(evt) {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

const loadData = key => {
  const serializedState = localStorage.getItem(key);
  return serializedState === null ? undefined : JSON.parse(serializedState);
};

const storageData = loadData(LOCALSTORAGE_KEY);
if (storageData) {
  email.value = storageData.email;
  message.value = storageData.message;
}
