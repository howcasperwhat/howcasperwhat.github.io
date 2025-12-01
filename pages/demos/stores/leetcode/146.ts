export class LNode {
  constructor(
    public key: number = 0,
    public val: number = 0,
    public prev: LNode | null = null,
    public next: LNode | null = null,
  ) { }

  insert(node: LNode) {
    this.prev && (this.prev.next = this.next)
    this.next && (this.next.prev = this.prev)
    this.next = node.next
    this.prev = node
    node.next && (node.next.prev = this)
    node.next = this
  }

  erase() {
    this.prev && (this.prev.next = this.next)
    this.next && (this.next.prev = this.prev)
    this.prev = null
    this.next = null
  }
}

export class LRUCache {
  private capacity: number
  private map: Map<number, LNode>
  private head: LNode
  private tail: LNode

  constructor(capacity: number) {
    this.capacity = capacity
    this.map = new Map()
    this.head = new LNode()
    this.tail = new LNode()
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  get(key: number): number {
    if (!this.map.has(key))
      return -1
    const node = this.map.get(key)!
    node.insert(this.head)
    return node.val
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const node = this.map.get(key)!
      node.val = value
      node.insert(this.head)
      return
    }
    if (this.map.size === this.capacity) {
      const lru = this.tail.prev
      lru !== this.head && lru!.erase()
      lru !== this.head && this.map.delete(lru!.key)
    }
    if (this.map.size < this.capacity) {
      const newNode = new LNode(key, value)
      newNode.insert(this.head)
      this.map.set(key, newNode)
    }
  }
}
