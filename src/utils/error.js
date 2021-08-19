function error(code) {
  let message
  switch (code) {
    //ошибки авторизации
    case 'auth/user-not-found':
      message = 'E-mail не существует'
      break
    case 'auth/wrong-password':
      message = 'Неверный пароль'
      break
    // ошибки регистрации
    case 'auth/email-already-in-use':
      message = 'Пользователь с таким e-mail уже существует'
      break
    default:
      message = 'Упс... Что-то пошло не так'
  }
  //Пока используем для формирования библиотеки кодов с ошибками
  console.log(code)
  return message
}
export default error
