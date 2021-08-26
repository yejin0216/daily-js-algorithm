function mergeSortedArrays(nums1, nums2) {
  // avoid extra work
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  let p1 = 0;
  let p2 = 0;

  let answer = [];
  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] > nums2[p2]) {
      answer.push(nums2[p2]);
      p2++;
    } else if (nums1[p1] < nums2[p2]) {
      answer.push(nums1[p1]);
      p1++;
    } else {
      answer.push(nums1[p1]);
      p1++;
      p2++;
    }
  }

  while (p1 < nums1.length) {
    answer.push(nums1[p1]);
    p1++;
  }

  while (p2 < nums2.length) {
    answer.push(nums2[p2]);
    p2++;
  }

  return answer;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
