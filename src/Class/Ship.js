export class Ship {
  constructor(givenLength) {
    this.shipLength = givenLength;
    this.sunkStatus = false;
    this.hitCount = 0;
  }

  hit() {
    this.hitCount += 1;
  }

  isSunk() {
    if (this.hitCount >= this.shipLength) {
      if (!this.sunkStatus) {
        this.sunkStatus = true;
      }
      return true;
    }
    return false;
  }

  getHitCount() {
    return this.hitCount;
  }

  getLength() {
    return this.shipLength;
  }
}
