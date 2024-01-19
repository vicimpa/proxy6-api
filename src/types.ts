export type Proxy6List<T, NoKey extends false | true = false> = (
  NoKey extends true ? Array<T> : Record<string, T>
);

export interface Proxy6Types {
  ProxyType: 'http' | 'socks';
  ProxyActive: '1' | '0';
  ProxyVersion: 3 | 4 | 6;
  ProxyCurrency: "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "wf" | "ws" | "ye" | "yt" | "za" | "zm" | "zw";
  ProxyState: 'active' | 'expired' | 'expiring' | 'all';
}

export interface Proxy6Result<NoKey extends false | true = false> {
  Ok: {
    status: 'yes';
    user_id: string;
    balance: string;
    currency: string;
  };

  Fail: {
    status: 'no';
    error_id: number;
    error: string;
  };

  GetPrice: this['Ok'] & {
    price: number;
    price_single: number;
    period: number;
    count: number;
  };

  GetCount: this['Ok'] & {
    count: number;
  };

  GetCountry: this['Ok'] & {
    list: string[];
  };

  ProxyItem: {
    id: string;
    host: string;
    port: string;
    user: string;
    pass: string;
    type: string;
    date: string;
    date_end: string;
    unixtime: number;
    unixtime_end: number;
    active: string;
    country: string;
    descr: string;
  };

  ProxyItemBuy: Omit<Proxy6Result<NoKey>['ProxyItem'], 'country' | 'descr'>;
  ProxyItemProlong: Pick<Proxy6Result<NoKey>['ProxyItem'], 'id' | 'date_end' | 'unixtime_end'>;

  GetProxy: this['Ok'] & {
    list_count: number;
    list: Proxy6List<Proxy6Result<NoKey>['ProxyItem'], NoKey>;
  };

  SetType: this['Ok'] & {

  };

  SetDescr: this['Ok'] & {
    count: number;
  };

  Buy: this['Ok'] & {
    count: number;
    price: number;
    period: number;
    country: string;
    list: Proxy6List<Proxy6Result['ProxyItemBuy'], NoKey>;
  };

  Prolong: this['Ok'] & {
    price: number;
    period: number;
    count: number;
    list: Proxy6List<Proxy6Result['ProxyItemProlong'], NoKey>;
  };

  Delete: this['Ok'] & {
    count: number;
  };

  Check: this['Ok'] & {
    proxy_id: number;
    proxy_status: boolean;
  };

  IPAuth: this['Ok'] & {

  };
}