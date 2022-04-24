# Container with most water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

## Example

```
Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
Accepted
1,453,281
Submissions
2,695,188
```

## 觀察

每次要從兩個 height 取出比較小來與兩個座標的距離 相乘

也就是要求 min(height[i], height[j]) * (j - i) 的最大值 j > i

## 想法

從左右兩邊來逼近

初始化 lp = 0, rp = len(height) -1, maxArea = 0

每次計算  area = min(height[rp], height[lp]) *( rp - lp)

如果 maxArea < area, 更新 maxArea = area

檢查如果  height[rp] > height[lp], 則更新 lp = lp + 1, 因為要找到更大的 height

否則 更新 rp = rp - 1, 因為要找到更大的 height

## 實作

```typescript
package largest_container_water

func maxArea(height []int) int {
	lp := 0
	rp := len(height) - 1
	max := 0
	for lp < rp {
		w := rp - lp
		h := 0
		if height[rp] > height[lp] {
			h = height[lp]
			lp++
		} else {
			h = height[rp]
			rp--
		}
		area := h * w
		if max < area {
			max = area
		}
	}
	return max
}
```