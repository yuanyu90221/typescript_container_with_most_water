export const maxArea = (height: number[]): number => {
  let left = 0;
  let right = height.length - 1;
  let max  = 0;
  while (left < right) {
      const width = right - left;
      let h = 0;
      if (height[left] > height[right]) {
          h = height[right];
          right--;
      } else {
          h = height[left];
          left++;
      }
      const area = h * width;
      if (area > max) {
          max = area;
      }
  }
  return max;
};