declare var COURSES

declare namespace NodeJS {
  interface Global {
    COURSES: Object
  }
}

interface NodeRequire {
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
}
