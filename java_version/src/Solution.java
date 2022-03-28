import java.util.ArrayList;
import java.util.List;

class Solution {
  // left 随便加，只要不超标
  // right 左个数 > 右个数

  private List<String> result;
  public List<String> generateParenthesis(int n) {
    result = new ArrayList<String>();
    _generate(0, 0, n, "");
    return result;
  }

  private void _generate(int left, int right, int n, String s) {
    // terminator
    if (left == n && right == n) {
      // filter the invalid s
      result.add(s);
      // System.out.println(s);
      return;
    }
    // process current logic: left, right
    String s1 = s + "(";
    String s2 = s + ")";

    // drill down
    if (left < n) {
      _generate(left +  1, right, n, s1);
    }
    if (left > right && right < n) {
      _generate(left, right + 1, n, s2);
    }
  }

  public static void main(String[] args) {
    Solution sol = new Solution();
    System.out.println(sol.generateParenthesis(3));
  }
}

