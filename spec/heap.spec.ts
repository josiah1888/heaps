import { MinHeap, MaxHeap } from '../src/index';

describe('MinHeap', () => {
  let minHeap: MinHeap;

  beforeEach(() => {
    minHeap = new MinHeap();
  });


  it('should exist', () => {
    expect(minHeap).toBeTruthy();
  });

  describe('Peak', () => {
    it('should throw if empty', () => {
      expect(minHeap.peak).toThrow();
    });

    it('should show the top element', () => {
      const x = 5;
      minHeap.add(x);
      expect(minHeap.peak()).toBe(x);
    });

    it('should keep the smallest value on top', () => {
      minHeap.add(2);
      minHeap.add(3);
      minHeap.add(4);
      expect(minHeap.peak()).toBe(2);
      minHeap.add(1);
      expect(minHeap.peak()).toBe(1);
    });

    it('should bubble the smallest values up', () => {
      minHeap.add(10);
      minHeap.add(15);
      minHeap.add(20);
      minHeap.add(17);
      minHeap.add(25);
      expect(minHeap.poll()).toBe(10);
      expect(minHeap.peak()).toBe(15);
    });
  });
});

describe('MaxHeap', () => {
  let maxHeap: MaxHeap;

  beforeEach(() => {
    maxHeap = new MaxHeap();
  });


  it('should exist', () => {
    expect(maxHeap).toBeTruthy();
  });

  describe('Peak', () => {
    it('should throw if empty', () => {
      expect(maxHeap.peak).toThrow();
    });

    it('should show the top element', () => {
      const x = 5;
      maxHeap.add(x);
      expect(maxHeap.peak()).toBe(x);
    });

    it('should keep the largest value on top', () => {
      maxHeap.add(4);
      maxHeap.add(3);
      maxHeap.add(2);
      expect(maxHeap.peak()).toBe(4);
      maxHeap.add(6);
      expect(maxHeap.peak()).toBe(6);
    });

    it('should bubble the largest values up', () => {
      maxHeap.add(25);
      maxHeap.add(17);
      maxHeap.add(20);
      maxHeap.add(15);
      maxHeap.add(10);
      expect(maxHeap.poll()).toBe(25);
      expect(maxHeap.peak()).toBe(20);
    });
  });
});
