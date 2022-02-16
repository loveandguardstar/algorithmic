public class Bsearch {
  public static int bsearch(int[] a, int n, int value) {
    // bsearchInternally(a, 0, n - 1, value)
    int low = 0;
    int high = n-1;
    while(low < high) {
      int mid = low+(high-low) / 2;
      if (value < a[mid]) {
        low = mid + 1;
      } else if (value > value){
        high = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  }

  // 递归法
  public static int bsearchInternally(int[] a, int low, int high, int value) {
    if (low > high) return -1;
    int mid = low + ((high - low) >> 1);
    if (a[mid] == value) {
      return mid;
    } else if (a[mid] < value) {
      return bsearchInternally(a, mid + 1, high, value);
    } else {
      return bsearchInternally(a, low, mid - 1, value);
    }
  }

  public static int getLastBsearch(int[] a, int n, int value) {
    int aLen = a.length;
    int low = 0;
    int high = n - 1;
    while(low <= high) {
      int mid = low + ((high - low) >> 1);
      if (a[mid] > value) {
        high = mid - 1;
      } else if (a[mid] < value) {
        low = mid + 1;
      } else {
        if (value != a[mid+1] || (mid + 1) == aLen) {
          return mid;
        } else {
          low = mid + 1;
        }
      }
    }
    return -1;
  }

  public static int maxBsearch(int[] a, int n, int value) {
    int low = 0;
    int high = n - 1;
    while(low <= high) {
      int mid = low + ((high - low) >> 1);
      if (a[mid] >= value) {
        if ((mid == 0) || (a[mid - 1] < value)) return mid;
        else high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return -1;
  }

  public static int minBsearch(int[] a, int n, int value) {
    int low = 0;
    int high = n - 1;
    while(low <= high) {
      int mid = low + ((high - low) >> 1);
      if (value < a[mid]) {
        high = mid -1;
      } else {
        if ((mid == n - 1) || (a[mid = 1] > value)) return mid;
        else low = mid + 1;
      }
    }
    return -1;
  }

  public static int getNum(int num) {
    
    return -1;
  }
}
