import { atom, selector } from 'recoil'

export const countState = atom<number>({
  key: 'counter.count',
  default: 0
})

export const countLabelState = selector({
  key: 'counter.countLabel',
  get: ({ get }) => {
    const count = get(countState)
    if (count === 0) return 'Zero'
    if (count < 10) return '< 10'
    if (count === 10) return '= 10'
    return '> 10'
  }
})
