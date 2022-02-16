public class QueueBasedOnLinkedList {
  private Node head = null;
  private Node tail = null;

  public void enqueue(String value) {
    if (tail == null) {
      Node newNode = new Node(value, null);
      head = newNode;
      tail = newNode;
    } else {
      tail.next = new Node(value, null);
      tail = tail.next;
    }
  }

   // 出队
  public String dequeue() {
    if (head == null) return null;
    String value = head.data;
    head = head.next;
    if (head == null) {
      tail = head;
    }
    return value;
  }

  private static class Node {
    private String data;
    private Node next;

    public Node(String data, Node next) {
      this.data = data;
      this.next = next;
    }

    public String getData() {
      return data;
    }
  }
}
// 23
/**
 1、通过题目认为主要谈什么问题
 2、关于这个问题目前知道什么
 3、关于这个主题，观点是什么
 4、最想知道什么，想通过老师学到什么

 记笔记，讲小课，会迁移， 列清单
 操作关键点在哪，能做总结，能反思对不对，好的是哪些，哪些不好，10条
 


 * 
 */
