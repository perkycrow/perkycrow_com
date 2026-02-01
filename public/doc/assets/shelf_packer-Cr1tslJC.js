class ShelfPacker {
  constructor(width, height, padding = 1) {
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.shelves = [];
    this.currentY = 0;
    this.full = false;
  }
  pack(w, h) {
    const pw = w + this.padding;
    const ph = h + this.padding;
    for (const shelf2 of this.shelves) {
      if (shelf2.height >= ph && shelf2.remainingWidth >= pw) {
        const slot = { x: shelf2.x, y: shelf2.y };
        shelf2.x += pw;
        shelf2.remainingWidth -= pw;
        return slot;
      }
    }
    if (this.currentY + ph > this.height) {
      this.full = true;
      return null;
    }
    const shelf = {
      y: this.currentY,
      x: pw,
      height: ph,
      remainingWidth: this.width - pw
    };
    this.shelves.push(shelf);
    this.currentY += ph;
    return { x: 0, y: shelf.y };
  }
  canFit(w, h) {
    const pw = w + this.padding;
    const ph = h + this.padding;
    for (const shelf of this.shelves) {
      if (shelf.height >= ph && shelf.remainingWidth >= pw) {
        return true;
      }
    }
    return this.currentY + ph <= this.height;
  }
}
export {
  ShelfPacker as S
};
