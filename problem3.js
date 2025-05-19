function duplicatFind(relativs){
  let fainalDayot=[];
  for(const relativ of relativs){
    let isUnique = true;
    for(const newRelativ of fainalDayot){
      if(relativ.name === newRelativ.name && relativ.member === newRelativ.member){
        isUnique = false;
        break;
      }
    }
    if(isUnique){
      fainalDayot.push(relativ);
    }
  }
  return fainalDayot;
};



const relativs = [
  {name:"akash", member:2},
  {name:"sagor", member:3},
  {name:"kayes", member:1},
  {name:"sakil", member:2},
  {name:"akash", member:2},
  {name:"sakil", member:2},
  {name:"ohid", member:2},
];

const result = duplicatFind(relativs);
console.log(result);

// এই কোডটির উদ্দেশ্য হলো ডুপ্লিকেট (নকল) উপাদানগুলোকে বাদ দিয়ে ইউনিক (অনন্য) উপাদানগুলো ফিল্টার করা। নিচে লাইন বাই লাইন ব্যাখ্যা দেওয়া হলো:

// ১. ফাংশন ডিক্লেয়ারেশন
// javascript
// function duplicatFind(relativs) {
// duplicatFind নামে একটি ফাংশন তৈরি করা হয়েছে, যেটি relativs নামের একটি অ্যারেগ্রহণ করে।

// ২. ফাইনাল ডেটা রাখার অ্যারে
// javascript
//   let fainalDayot = [];
// fainalDayot নামে একটি খালি অ্যারে ডিক্লেয়ার করা হয়েছে। এখানে ইউনিক উপাদানগুলো জমা হবে।

// ৩. মূল অ্যারে লুপ করা
// javascript
//   for (const relativ of relativs) {
// relativs অ্যারের প্রতিটি উপাদান (relativ) এর জন্য লুপ চালানো হয়েছে।

// ৪. ইউনিক চেক করার ফ্ল্যাগ
// javascript
//     let isUnique = true;
// isUnique নামে একটি ভেরিয়েবল ডিক্লেয়ার করা হয়েছে, যেটি ডিফল্টভাবে true সেট করা আছে। এটি পরবর্তীতে চেক করবে বর্তমান উপাদানটি ইউনিক কিনা।

// ৫. ফাইনাল অ্যারে চেক করার লুপ
// javascript
//     for (const newRelativ of fainalDayot) {
// fainalDayot অ্যারের প্রতিটি উপাদান (newRelativ) এর জন্য লুপ চালানো হয়েছে। এটি চেক করবে বর্তমান উপাদানটি আগে থেকে fainalDayot-এ আছে কিনা।

// ৬. ডুপ্লিকেট চেক করা
// javascript
//       if (relativ.name === newRelativ.name && relativ.member === newRelativ.member) {
//         isUnique = false;
//         break;
//       }
//     }
// যদি relativ (বর্তমান উপাদান) এর name এবং member প্রপার্টি newRelativ (ফাইনাল অ্যারেতে থাকা উপাদান) এর সাথে মিলে যায়, তাহলে isUnique কে false সেট করা হয় এবং লুপ থেকে বেরিয়ে আসা হয় (break)।

// ৭. ইউনিক হলে অ্যারে-তে যুক্ত করা
// javascript
//     if (isUnique) {
//       fainalDayot.push(relativ);
//     }
// যদি isUnique true থাকে (অর্থাৎ উপাদানটি ইউনিক), তাহলে relativ কে fainalDayot অ্যারে-তে যুক্ত করা হয়।

// ৮. ফাইনাল অ্যারে রিটার্ন
// javascript
//   }
//   return fainalDayot;
// };
// সব লুপ শেষ হলে, ইউনিক উপাদানগুলোর অ্যারে fainalDayot রিটার্ন করা হয়।

// উদাহরণ ডেটা সহ ব্যাখ্যা:
// javascript
// const relativs = [
//   {name:"akash", member:2},
//   {name:"sagor", member:3},
//   {name:"kayes", member:1},
//   {name:"sakil", member:2},
//   {name:"akash", member:2}, // ডুপ্লিকেট (akash,2)
//   {name:"sakil", member:2}, // ডুপ্লিকেট (sakil,2)
//   {name:"ohid", member:2},
// ];
// ফলাফল: প্রথম ৪টি এবং শেষের ohid যোগ হবে। ৫ম ও ৬ম উপাদান (akash এবং sakil) ডুপ্লিকেট হওয়ায় বাদ পড়বে।

// আউটপুট:
// javascript
// [
//   {name:"akash", member:2},
//   {name:"sagor", member:3},
//   {name:"kayes", member:1},
//   {name:"sakil", member:2},
//   {name:"ohid", member:2}
// ]
// সারমর্ম:
// এই কোডটি একটি অ্যারে থেকে নাম (name) এবং সদস্য সংখ্যা (member) প্রপার্টি যাচাই করে ডুপ্লিকেট উপাদানগুলো বাদ দিয়ে শুধুমাত্র ইউনিক উপাদানগুলো রিটার্ন করে। এটি নেস্টেড লুপ ব্যবহার করে, যা প্রতিটি উপাদানের জন্য ফাইনাল অ্যারের সবগুলো উপাদানের সাথে তুলনা করে।