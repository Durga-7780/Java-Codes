package sortings;
import java.util.*;
public class mergesort {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("n : ");
        int n=sc.nextInt();
        int a[]=new int[n];
        for(int i=0;i<n;i++)
         a[i]=sc.nextInt();
        System.out.print(Arrays.toString(split(a)));
        sc.close();
    }
    static int [] split(int a[])
    {
        int n=a.length;
        if(n==1)
         return a;
        int mid=n/2;
        int left[]=split(Arrays.copyOfRange(a, 0, mid));
        int right[]=split(Arrays.copyOfRange(a, mid, n));
        return merge(left,right);
    }
    static int[] merge(int l[],int r[])
    {
        int i=0,j=0,k=0;        // k is for merg array 
        int merg[]=new int[l.length+r.length];
        while (i<l.length && j<r.length) {
            if(l[i]<r[j])
             merg[k++]=l[i++];
            else 
             merg[k++]=r[j++];
        }
        while(i<l.length)
         merg[k++]=l[i++];
        while (j<r.length) {
            merg[k++]=r[j++];
        }
        return merg;
    }
}
