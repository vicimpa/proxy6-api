export class Proxy6Error extends Error {
  id: number;

  get description() {
    return Proxy6Error.getDescriptionById(this.id);
  }

  constructor(id: number, message: string) {
    super(`${message} (${id})`);
    this.id = id;
  }

  static getDescriptionById(id: number): string {
    switch (id) {
      case 100: return "Error key - Ошибка авторизации, неверный ключ";
      case 105: return "Error ip - Доступ к API произошел с неверного IP(если включено ограничение), либо некорректный формат IP адреса";
      case 110: return "Error method - Ошибочный метод";
      case 200: return "Error count - Ошибка кол - ва прокси, неверно указано кол - во, либо отсутствует";
      case 210: return "Error period - Ошибка периода, неверно указано кол - во(дней), либо отсутствует";
      case 220: return "Error country - Ошибка страны, неверно указана страна(страны указываются в формате iso2), либо отсутствует";
      case 230: return "Error ids - Ошибка списка номеров прокси.Номера прокси должны быть указаны через запятую";
      case 240: return "Error version - Некорректно указана версия прокси";
      case 250: return "Error descr - Ошибка технического комментария, неверно указан, либо отсутствует";
      case 260: return "Error type - Ошибка типа(протокола) прокси, неверно указан, либо отсутствует";
      case 300: return "Error active proxy allow - Ошибка кол - ва прокси.Возникает при попытке покупки большего кол - ва прокси, чем доступно на сервисе";
      case 400: return "Error no money - Ошибка баланса.На вашем балансе отсутствуют средства, либо их не хватает для покупки запрашиваемого кол - ва прокси";
      case 404: return "Error not found - Ошибка поиска.Возникает когда запрашиваемый элемент не найден";
      case 410: return "Error price - Ошибка расчета стоимости.Итоговая стоимость меньше, либо равна нулю";
      default: return "Error unknown - Неизвестная ошибка";
    }
  }
}