type CacheEntry<V> = {
  value: V;
  expiresAt: number;
};

export class LRUCache<K, V> {
  private capacity: number;
  private ttlMS: number;
  private cache: Map<K, CacheEntry<V>>;

  constructor({
    capacity,
    ttlMS = 28800000, // 8 hours
  }: {
    capacity: number;
    ttlMS?: number;
  }) {
    if (capacity <= 0) throw new Error("Capacity must be greater than 0");
    if (ttlMS <= 0) throw new Error("TTL must be greater than 0");
    this.capacity = capacity;
    this.ttlMS = ttlMS;
    this.cache = new Map();
  }

  get(key: K): V | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    if (this.isExpired(entry)) {
      this.cache.delete(key);
      return null;
    }

    // Refresh LRU order
    this.cache.delete(key);
    this.cache.set(key, entry);

    return entry.value;
  }

  put(key: K, value: V): void {
    // If key exists, delete so we can refresh order
    if (this.cache.has(key)) this.cache.delete(key);

    // Evict least recently used (first item in Map)
    if (this.cache.size >= this.capacity) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey !== undefined) this.cache.delete(firstKey);
    }
    const expiresAt = Date.now() + this.ttlMS;
    this.cache.set(key, {
      value,
      expiresAt,
    });
  }

  has(key: K): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;

    if (this.isExpired(entry)) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  delete(key: K): boolean {
    return this.cache.delete(key);
  }

  size(): number {
    return this.cache.size;
  }

  private isExpired(entry: CacheEntry<V>): boolean {
    return Date.now() > entry.expiresAt;
  }
}
