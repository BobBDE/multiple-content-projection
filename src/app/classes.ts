export interface Category {
  name: string;
  items: AdvancedItem[];
}

export interface AdvancedItem {
  id: number;
  title: string;
}

// generic type for the view context
export interface ViewContext<T> {
  $implicit: T;
}


// expected type for the context of item
export interface AdvancedItemViewContext extends ViewContext<AdvancedItem> {
  first: boolean;
  last: boolean;
}
