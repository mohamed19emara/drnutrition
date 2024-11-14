import React from 'react';
import { ReactTyped as Typed } from 'react-typed';  // or { Typed } if supported in your version

const AutoTypingText = () => {
  return (
    <div className=' m-5'>
             <div className="auto-typing-text ">
      <h2>حول برنامجنا الغذائي</h2>
      <Typed
        strings={[
          "برنامجنا الغذائي مصمم ليحقق لك توازناً صحياً على المدى الطويل.",
          "نساعدك في اتباع أسلوب حياة غذائي مستدام.",
          "نقدم لك نصائح غذائية متوازنة ومتكاملة حسب احتياجاتك الشخصية."
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
    </div>
    
  );
};

export default AutoTypingText;
