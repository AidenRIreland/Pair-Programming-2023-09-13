
 //@param {number[100,4,20,1,3,2]} nums
 //@return {number}
 const nums = [100,4,20,1,5,2,0]

var longestConsecutive = function(nums) {
    //1.Declare the values/data types
    var count = 0;
    var countarray = []
    nums.sort(function(a,b){return a-b})
    //console.log(nums)
    //2. find the minuim number in the array
    for(let i = 0;i<nums.length; i++){
        if (nums[i+1] === nums[i]+1){
            count++
        }
        else{
            countarray.push(count)
            count = 0
        }
        
    }
    console.log(countarray)
    countarray.sort(function(a,b){return a-b})
    return countarray[countarray.length-1]    
    console.log()
    //3. Check in the array if the minium in area is plus one


    //4.
};
console.log(longestConsecutive(nums));
