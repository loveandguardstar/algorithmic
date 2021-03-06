public class ArrayQueue {
  private String[] items;
  private int n = 0;
  private int head = 0;
  private int tail = 0;

  public ArrayQueue(int capacity) {
    items = new String[capacity];
    n = capacity;
  }

  public boolean enqueue(String item) {
    // tail == n表示队列末尾没有空间了
    if (tail == n) {
      // tail ==n && head==0，表示整个队列都占满了
      if (head == 0)
        return false;
      // 数据搬移
      for (int i = head; i < tail; ++i) {
        items[i - head] = items[i];
      } // 搬移完之后重新更新head和tail
      tail -= head;
      head = 0;
    }
    items[tail] = item;
    ++tail;
    return true;
  }

  public String dequeue() {
    if (head == tail)
      return null;
    String ret = items[head];
    ++head;
    return ret;
  }

  private static Type name() {

  }
}
