export abstract class Heap {
  protected items: number[] = [];
  private comparator: (a, b) => boolean;

  constructor(comparator: (a, b) => boolean) {
    this.comparator = comparator;
  }

  public get count(): number {
    return this.items.length;
  }

  public peak(): number {
    this.checkItems();
    return this.items[0];
  }

  public poll(): number {
    this.checkItems();
    const item = this.items.shift();
    this.items.unshift(this.items.pop());

    this.heapifyDown();
    return item;
  }

  public add(item: number): void {
    this.items.push(item);
    this.heapifyUp();
  }

  public heapifyUp(): void {
    let index = this.items.length - 1;

    while (this.comparator(this.getParent(index), this.items[index])) { // Should be > than
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  public heapifyDown(): void {
    let index = 0;

    while (this.hasLeftChild(index)) {
      let smallestChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.comparator(this.getLeftChild(index), this.getRightChild(index))) {
        smallestChildIndex = this.getRightChildIndex(index);
      }

      if (this.comparator(this.items[smallestChildIndex], this.items[index])) {
        break;
      }

      this.swap(index, smallestChildIndex);
      index = smallestChildIndex;
    }
  }

  protected getLeftChildIndex(parentIndex: number): number {
    return (2 * parentIndex) + 1;
  }

  protected getRightChildIndex(parentIndex: number): number {
    return (2 * parentIndex) + 2;
  }

  protected getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2.0);
  }

  protected hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.items.length;
  }

  protected hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.items.length;
  }

  protected hasParent(index: number): boolean {
    const parentIndex = this.getParentIndex(index);
    return parentIndex < this.items.length && parentIndex !== -1;
  }

  protected getLeftChild(index: number): number {
    return this.items[this.getLeftChildIndex(index)];
  }

  protected getRightChild(index: number): number {
    return this.items[this.getRightChildIndex(index)];
  }

  protected getParent(index: number): number {
    return this.items[this.getParentIndex(index)];
  }

  private checkItems(): void {
    if (this.items.length === 0) {
      throw new Error('Invalid Operation. Heap is Empty');
    }
  }

  private swap(indexA: number, indexB: number): void {
    let temp = this.items[indexA];
    this.items[indexA] = this.items[indexB];
    this.items[indexB] = temp;
  }

  private print(): void {
    console.log('Printing Items as Array: ', this.items);
  }
}

export class MinHeap extends Heap {
  constructor() {
    super((a, b) => a > b);
  }
}

export class MaxHeap extends Heap {
  constructor() {
    super((a, b) => a < b);
  }
}
