export interface Category {
  name: string;
  items: AdvancedItem[];
}

export interface AdvancedItem {
  id: number;
  title: string;
}

// generic type for the template outlet context
export interface Implicit<T> {
  $implicit: T;
}

// expected type for the context of item
export interface AdvancedItemContext {
  item: AdvancedItem;
  first: boolean;
  last: boolean;
}
