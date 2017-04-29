export interface Component<P, S = object> {
  props: P;
  state: S;
}

export interface ActionCreator<T> {
  (id: T): void;
}