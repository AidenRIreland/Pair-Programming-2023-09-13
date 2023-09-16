def intToRoman(num):
    """
    :type num: int
    :rtype: str
    """
    # create a dict to match symbol with value
    dict = {1: "I",
            4: "IV",
            5: "V",
            9: "IX",
            10: "X",
            40: "XL",
            50: "L",
            90: "XC",
            100: "C",
            400: "CD",
            500: "D",
            900: "CM",
            1000: "M"}
    romanString = ""
    # create a dict with the len
    length_dict = {4: 1000, 3: 100, 2: 10, 1: 1}
    # step 1: break the number into single numbers
    arr = []
    for i in range(len(str(num)), -1, -1):
        if i in length_dict:
            num // length_dict[i]
            arr.append(num // length_dict[i])
            num = num - arr[len(arr) - 1] * length_dict[i]
    # step 2: reverse the arr
    arr.reverse()
    # multiply each element inside arr with 1, 10, 100, 1000
    reverse_arr = []
    for j in range(len(arr) - 1, -1, -1):
        arr[j] * length_dict[j + 1]
        reverse_arr.append(arr[j] * length_dict[j + 1])
    # step 3: convert the elements of the reverse_arr to letters
    for k in reverse_arr:
        while num > k: 
            romanString += dict[k]
            num -= k
    return romanString   
# MCMXCIV
print(intToRoman(3999))


# 1st iteration of the loop: 1994 // (1 [len(str(num)) - 1] 000]
# 1994 // 1000
# 994 // 100
# 94 // 10
# 4 // 1