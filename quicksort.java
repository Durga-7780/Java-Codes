package sortings;

public class quicksort {
    public static void main(String[] args) {
        java.util.Scanner sc=new java.util.Scanner(System.in);
        System.out.print("enter array size ");
        int n=sc.nextInt();
        System.out.println("enter array elements ");
        int a[]=new int[n];
        for(int i=0;i<n;i++)
         a[i]=sc.nextInt();
        quick(a,0,a.length-1);
        for(int k:a)
         System.out.print(k+" ");
        sc.close();
    }
    static void quick(int []a,int s,int e)
    {
        if(s<=e)
        {        
         int j= partition(a,s,e);
         quick(a,s,j-1);  // left array
         quick(a, j+1, e);  // right array
        }
    }
    static int partition(int a[],int s,int e)
    {
        int i=s+1,j=e,pivot=s;
        while (true) 
        {
        while(i<=e && a[pivot]>=a[i]){
            i++;
        }
        while(j>s && a[pivot]<a[j])
        {
            j--;
        }
        if(i<j)
        {
            a[i]=a[i]+a[j]-(a[j]=a[i]);
        }
        else
        {
         a[pivot]=a[j]+a[pivot]-(a[j]=a[pivot]);
         break;
        }
        }
        return j;
    }
}
