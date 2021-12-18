export interface List {
  items: Item[]
}

export interface Item {
  id: number
  name?: string
  price?: number
  currency?: Currency
  checked?: boolean
}

enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP'
}
