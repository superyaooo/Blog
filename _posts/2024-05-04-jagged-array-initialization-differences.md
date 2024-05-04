---
layout: post
title: Jagged array initialization in C# vs Java
tags: [study note]
---
These days I've been brushing up Data Structure fundamentals and algorithms on leetcode. Today while doing [this graph problem](https://leetcode.com/problems/number-of-islands/description/), I ran into some interesting errors while trying to initialize some array of arrays in C#. <!--more-->

{% raw %}
While the following code snippet works perfectly in Java, it doesn't work in C#, despite the similar syntax between the two.
```Java
class Solution {
    int[][] directions = new int[][]{{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    boolean[][] seen;
    
    public int numIslands(char[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        seen = new boolean[m][n];
        
        // code blob
    }
}
```

What ended up working in C# is this:
```C#
public class Solution {
    private bool[][] seen;
    private int[][] directions= [[-1,0], [1,0],[0,1],[0,-1]];
    
    public int NumIslands(char[][] grid) {
        int m = grid.Length;
        int n = grid[0].Length;

        seen = new bool[m][];
        for(int i = 0; i < m; i++) {
            seen[i] = new bool[n];
        }

        // code blob
    }
}
```
There is another way to initialize the jagged array ```directions``` like so in C#:
```C#
int[][] directions = new int[][] {
    new int[]{-1,0},
    new int[]{1,0},
    new int[]{0,1},
    new int[]{0,-1}
};
```
Not confusing at all!
{% endraw %}