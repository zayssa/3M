export const REGEXP_EMAIL = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
export const REGEXP_GROUP = /^fron[0-9]{1,3}/;

export const VALIDATE_MESSAGE = {
  requiredMessage: 'Обязательное поле',
  emailMessage: 'Не валидный email',
  passwordMessage:
    'Пароль должен содержать минимум восемь символов, одну букву латинского алфавита и одну цифру',
  groupMessage: 'Группа должна быть в формате: fron10',
};

export const USER_DIALOG_KINDS = {
  authorization: 'authorization',
  registration: 'registration',
  recovery: 'recovery',
};

export const URLS = {
  main: 'main',
  posts: 'posts',
  favourites: 'favourites',
  about: 'about',
  user: 'user',
};
