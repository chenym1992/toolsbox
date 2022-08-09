/**
 * 获取任意对象基本数据类型
 * @param obj
 * @returns
 *
 * @example
 * classof(2022); // number
 * classof("2022"); // string
 * classof(true); // boolean
 * classof(undefined); // undefined
 * classof(null); // null
 * classof(Symbol("123")); // symbol
 * classof(1n); // bigint
 * classof({}); // object
 * classof(classof); // function
 * classof([]); // array
 * classof(new Date()); // date
 * * classof(/^s/); //regexp
 */
export function classof(obj: any) {
  if (obj === null) return 'null'
  if (typeof obj !== 'object') return typeof obj
  else
    return Object.prototype.toString.call(obj).slice(8, -1).toLocaleLowerCase()
}

/**
 * isNumber
 * @param obj
 * @returns
 */
export function isNumber(obj: any) {
  return classof(obj) === 'number'
}

/**
 * isString
 * @param obj
 * @returns
 */
export function isString(obj: any) {
  return classof(obj) === 'string'
}

/**
 * isBoolean
 * @param obj
 * @returns
 */
export function isBoolean(obj: any) {
  return classof(obj) === 'boolean'
}

/**
 * isUndefined
 * @param obj
 * @returns
 */
export function isUndefined(obj: any) {
  return classof(obj) === 'undefined'
}

/**
 * isNull
 * @param obj
 * @returns
 */
export function isNull(obj: any) {
  return classof(obj) === 'null'
}

/**
 * isSymbol
 * @param obj
 * @returns
 */
export function isSymbol(obj: any) {
  return classof(obj) === 'symbol'
}

/**
 * isBigInt
 * @param obj
 * @returns
 */
export function isBigInt(obj: any) {
  return classof(obj) === 'bigint'
}

/**
 * isObject
 * @param obj
 * @returns
 */
export function isObject(obj: any) {
  return classof(obj) === 'object'
}

/**
 * isFunction
 * @param obj
 * @returns
 */
export function isFunction(obj: any) {
  return classof(obj) === 'function'
}

/**
 * isArray
 * @param obj
 * @returns
 */
export function isArray(obj: any) {
  return classof(obj) === 'array'
}

/**
 * isDate
 * @param obj
 * @returns
 */
export function isDate(obj: any) {
  return classof(obj) === 'date'
}

/**
 * isRegExp
 * @param obj
 * @returns
 */
export function isRegExp(obj: any) {
  return classof(obj) === 'regexp'
}

/**
 * isNaN
 * @param obj
 * @returns
 */
export function isNaN(obj: any) {
  return isNumber(obj) && obj != +obj
}

/**
 * isNil
 * @param obj
 * @returns
 */
export function isNil(obj: any) {
  return isNull(obj) || isUndefined(obj)
}
