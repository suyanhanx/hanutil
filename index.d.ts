declare namespace hanutil {
  /**
   * array
   */
  export function convertClass(obj: object): Array<any>

  export function isArray(obj: object): boolean

  /**
   * function
   */
  export function debounce(func: () => void, delay: number): void

  export function throttle(func: () => void, delay: number): void

  /**
   * object
   */
  export function deepAssign(obj1: object, obj2: object): object

  export function deepClone(obj: object): object

  export function getProperty(obj: object, path: string): object

  export function isDef(obj: any): boolean

  export function isEmptyObject(obj: any): boolean

  /**
   * validate
   */
  export function isEmail(value: string): boolean

  export function isPhoneNum(value: string): boolean

  export function isTaxNum(value: string): boolean
}

declare module 'hanutil' {
  export = hanutil
}
