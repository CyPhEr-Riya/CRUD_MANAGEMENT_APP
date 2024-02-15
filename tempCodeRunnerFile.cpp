// Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.
// N = 5
// Arr[] = {1,2,3,-2,5}
// Output:
// 9
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    int ptr1 = arr[0];
    int ptr2 = arr[1];
    int sum =0;
    for(int i=0;i<n;i++)
    {
        for(int j=i+1;j<n;j++)
        {
            sum += arr[j];
            if(sum<0){
            i++;
        }
        }
    }
    return sum;
}
