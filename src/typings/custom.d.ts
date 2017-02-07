declare var COURSES

declare namespace NodeJS {
  interface Global {
    COURSES: Object
  }
}

interface NodeRequire {
  ensure: (paths: string[], callback: (require: NodeRequireFunction) => void) => void;
}
