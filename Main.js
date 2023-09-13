
 //@param {number[100,4,20,1,3,2]} nums
 //@return {number}
 //const nums = [100,4,200,1,3,2]
 //const nums =[1,2,0,1]

 var longestConsecutive = function(nums) {
    //1.Declare the values/data types
    var count = 1;
    var countarray = []
    nums.sort(function(a,b){return a-b})
    console.log(nums)
    //2. find the minuim number in the array
    if(nums.length === 0){
        return 0
    }
    for(let i = 0;i<nums.length; i++){
        if (nums[i+1] === nums[i]+1){
            count++
        }
        else if(nums[i+1] === nums[i]){
            continue
        }
        else{
            countarray.push(count)
            count = 1
        }
        
    }
    countarray.sort(function(a,b){return a-b})
    return countarray[countarray.length-1]    
    
};