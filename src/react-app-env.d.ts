/// <reference types="react-scripts" />

interface NodeRequire {
  context: (path: string, deep?: boolean, filter?: RegExp, mode?: "sync" | "eager" | "weak" | "lazy" | "lazy-once") => RequireContext
}
