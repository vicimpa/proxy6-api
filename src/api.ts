import { Proxy6Error } from "./";

import type { Proxy6Result } from "./types";

export class Proxy6Api {
  #base = 'https://proxy6.net/api';
  #apiKey: string;

  /**
 * Метод "getprice"
 * Используется для получения информации о сумме заказа в зависимости от версии, периода и кол-ва прокси.
 */
  getprice(p: {
    /** (Обязательный) - Кол-во прокси; */
    count: number;
    /** (Обязательный) - Период - кол-во дней; */
    period: number;
    /** Версия прокси: 4 - IPv4, 3 - IPv4 Shared, 6 - IPv6 (по-умолчанию). */
    version?: number;
  }) {
    return this.#fetch<Proxy6Result['GetPrice']>('getprice', p);
  };

  /**
   * Метод "getcount" 
   * Используется для получения информации о доступном для приобретения кол-ве прокси определенной страны.
   */
  getcount(p: {
    /** (Обязательный) - Код страны в формате iso2; */
    country: string;
    /** Версия прокси: 4 - IPv4, 3 - IPv4 Shared, 6 - IPv6 (по-умолчанию). */
    version?: number;
  }) {
    return this.#fetch <Proxy6Result['GetCount']>('getcount', p);
  };;

  /**
   * Метод "getcountry"
   * Используется для получения информации о доступных для приобретения странах. 
   */
  getcountry(p: {
    /** Версия прокси: 4 - IPv4, 3 - IPv4 Shared, 6 - IPv6 (по-умолчанию). */
    version?: number;
  }) {
    return this.#fetch<Proxy6Result['GetCountry']>('getcountry', p);
  };

  /**
   * Метод "getproxy"
   * Используется для получения списка ваших прокси.
   */
  getproxy<NoKey extends true | false = false>(p: {
    /** Состояние возвращаемых прокси. Доступные значения: active - Активные, expired - Неактивные, expiring - Заканчивающиеся, all - Все (по-умолчанию); */
    state?: 'active' | 'expired' | 'expiring' | 'all';
    /** Технический комментарий, который вы указывали при покупке прокси. Если данный параметр присутствует, то будут выбраны только те прокси, у которых присутствует данный комментарий, если же данный параметр не задан, то будут выбраны все прокси; */
    descr?: string;
    /** При добавлении данного параметра (значение не требуется), список list будет возвращаться без ключей; */
    nokey?: NoKey;
    /** Номер страницы для вывода. 1 - по-умолчанию; */
    page?: number;
    /** Кол-во прокси для вывода в списке. 1000 - по-умолчанию (максимальное значение). */
    limit?: number;
  }) {
    return this.#fetch<Proxy6Result<NoKey>['GetProxy']>('getproxy', p);
  };

  /**
   * Метод "settype"
   * Используется для изменения типа (протокола) у списка прокси.
   */
  settype(p: {
    /** (Обязательный) - Перечень внутренних номеров прокси в нашей системе; */
    ids: number | number[];
    /** (Обязательный) - Устанавливаемый тип (протокол): http - HTTPS, либо socks - SOCKS5. */
    type: 'http' | 'socks';
  }) {
    return this.#fetch<Proxy6Result['SetType']>('settype', p);
  };

  /**
   * Метод "setdescr"
   * Используется для обновления технического комментария у списка прокси, который был установлен при покупке (метод buy).
   */
  setdescr(p: {
    /** (Обязательный) - Технический комментарий, на который нужно изменить. Максимальная длина 50 символов; */
    new: string;
  } & (
      {
        /** Технический комментарий, который нужно изменить; */
        old: string;
      } | {
        /** Перечень внутренних номеров прокси в нашей системе. */
        ids: number | number[];
      }
    )
  ) {
    return this.#fetch<Proxy6Result['SetDescr']>('setdescr', p);
  };

  /**
   * Метод "buy"
   * Используется для покупки прокси.
   */
  buy<NoKey extends true | false = false>(p: {
    /** (Обязательный) - Кол-во прокси для покупки; */
    count: number;
    /** (Обязательный) - Период на который покупаются прокси - кол-во дней; */
    period: number;
    /** (Обязательный) - Страна в формате iso2; */
    country: string;
    /** Версия прокси: 4 - IPv4, 3 - IPv4 Shared, 6 - IPv6 (по-умолчанию); */
    version?: number;
    /** Тип прокси (протокол): socks, либо http (по-умолчанию); */
    type?: 'http' | 'socks';
    /** Технический комментарий для списка прокси, максимальная длина 50 символов. Указание данного параметра позволит вам делать выборку списка прокси про этому параметру через метод getproxy */
    descr?: string;
    /** При добавлении данного параметра (значение не требуется), у купленных прокси будет включено автопродление; */
    auto_prolong?: boolean;
    /** При добавлении данного параметра (значение не требуется), список list будет возвращаться без ключей. */
    nokey?: NoKey;
  }) {
    return this.#fetch<Proxy6Result<NoKey>['Buy']>('buy', p);
  };

  /**
   * Метод "prolong"
   * Используется для продления текущих прокси.
   */
  prolong(p: {
    /** (Обязательный) - Период продления - кол-во дней; */
    period: number;
    /** (Обязательный) - Перечень внутренних номеров прокси в нашей системе; */
    ids: number | number[];
    /** При добавлении данного параметра (значение не требуется), список list будет возвращаться без ключей. */
    nokey?: boolean;
  }) {
    return this.#fetch<Proxy6Result['Prolong']>('prolong', p);
  };

  /** 
   * Метод "delete"
   * Используется для удаления прокси.
   */
  delete(p: {
    /** (Обязательный) - Перечень внутренних номеров прокси в нашей системе; */
    ids: number | number[];
  } | {
    /** (Обязательный) - Технический комментарий, который вы указывали при покупке прокси, либо через метод setdescr. */
    descr: string;
  }) {
    return this.#fetch<Proxy6Result['Delete']>('delete', p);
  };

  /**
   * Метод "check"
   * Используется для проверки валидности (работоспособности) прокси.
   */
  check(p: {
    /** (Обязательный) - Внутренний номер прокси в нашей системе. */
    ids: number | number[];
  }) {
    return this.#fetch<Proxy6Result['Check']>('check', p);
  };

  /**
   * Метод "ipauth"
   * Используется для привязки, либо удаления авторизации прокси по ip.
   */
  ipauth(p: {
    /** (Обязательный) - Список привязываемых ip-адресов, либо "delete" -  для удаления привязки. */
    ip: string | string[] | 'delete';
  }) {
    return this.#fetch<Proxy6Result['IPAuth']>('ipauth', p);
  };

  #fetch<T extends Proxy6Result['Ok']>(
    method: string,
    params?: Record<string, string | number | string[] | number[] | undefined | boolean>
  ) {
    var object: Record<string, any> = params ?? {};
    var paramsString = '';

    for (const key in object) {
      if (object[key] === false) continue;
      if (object[key] === undefined) continue;
      paramsString += paramsString.at(-1) ? '&' : '?';
      paramsString += `${key}=${object[key]}`;
    }

    return fetch(`${this.#base}/${this.#apiKey}/${method ?? ''}${paramsString}`)
      .then<Proxy6Result['Ok'] | Proxy6Result['Fail']>(e => e.json() as any)
      .then<T>(result => {
        if (result.status === 'no')
          throw new Proxy6Error(result.error_id, result.error);

        return result as T;
      });
  }

  constructor(apiKey: string) {
    this.#apiKey = apiKey;
  }
}