1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:    getElementById selcets a specific html element with a specific id. 

        getElementsByClassName selcet all the elements which has a certein class. this returns a htmlCollection, like array.

        with querySelector we can select element with css selectos. querySelector only selcect the first element.querySelectorAll selects all the elements.

2.How do you create and insert a new element into the DOM?
Ans:    step 1: select the element where we want to instret the new element.
        step 2: create the html element. we can use innerText.
            or, we can use innerHTML to dircetly insert to the parent.In this case we don't need to follow step 3.
        step 3: append the new element with existing parent element.

3. What is Event Bubbling and how does it work?
Ans: যখন আমরা কোনো ইলিমেন্টে ক্লিক করি, তখন যে ইলিমেন্ট ক্লিক করলাম সেটা প্রথমে সিলেক্ট হয়। এরপরে আস্তে আস্তে উপরে উঠতে শুরু করে। 

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: আমরা যদি অনেকগুলা ইলিমেন্ট এ ইমেন্ট লিসেনার এড করতে চাই, এইটা ভালোই সময় সাপেক্ষ এবং মেমোরিতে বেশি জায়গা নিবে। তাই, আমরা চাইলে সরাসরি পেরেন্ট ইলেমেন্টে এড করে দিতে পারে। এবং ইভেন্ট বাবলিং এর কারণে, কোন চাইল্ড ইলিমেন্টে ক্লিক হচ্ছে সেটাও বুঝতে পারব। 

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault(): ব্রাউজারের ডিফল্ট একশন বন্ধ করে দেয়। কিন্তু ইভেন্টটাকে বাবলিং থেকে আটকায় না। 
stopPropagation(): এইটা আগেরটার উল্টা। ইভেন্টের বাবলিং আটকায়, কিন্তু, ডিফল্ট একশন বন্ধ করে না। 