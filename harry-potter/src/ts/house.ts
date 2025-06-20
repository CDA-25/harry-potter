export type HouseName = string

export default class House {
  name: HouseName

  constructor(name: HouseName) {
    this.name = name
  }
}