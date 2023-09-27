import React from "react";
import Image from "next/image";
import Link from "next/link";
const AboutPlan = () => {
  return (
    <section className="mb-8 text-start">
      <div className="overflow-auto mb-2">
        <h1 className="my-3 text-grays-700 font-black text-8">بلیط هواپیما</h1>
        <Image
          src="https://cdn.alibaba.ir/h2/desktop/assets/images/baggage/baggage@3x-bda919ec.webp"
          alt="Alibaba"
          className="is-responsive is-animated float-left block mr-12 w-2/5"
          width={464}
          height={335}
        />
        <p className="text-grays-500 text-3 my-6">
          علی‌بابا بزرگترین و معتبرترین سایت خرید اینترنتی بلیط هواپیما ، قطار و
          اتوبوس در کشور است که از سال ۱۳۹۳ کار خود را شروع کرده و در این مدت
          توانسته رضایت درصد قابل توجهی از کاربران را به دست بیاورد. در ابتدا،
          فروش بلیط پرواز داخلی در دستور کار علی‌بابا قرار داشت؛ اما به مرور
          امکان خرید سایر محصولات گردشگری نیز به علی‌بابا اضافه شد.
        </p>
        <h3 className="text-4 font-bold text-grays-600">
          مزایای خرید بلیط هواپیما از علی‌بابا
        </h3>
        <p className="text-grays-500 text-3">
          شما با خرید بلیط هواپیما از علی‌بابا با سامانه مطمئن و معتبری روبه‌رو
          هستید که تمام نیازهایتان را پاسخ می‌دهد. برای خرید آنلاین بلیط هواپیما
          در علی‌بابا کافیست مبدا، مقصد و تاریخ پرواز خود را انتخاب کنید. پس از
          کلیک روی جستجو، لیست
          <Link
            href="/ticket-price"
            className="text-secondary-400 font-medium"
            target="_blank"
          >
            قیمت بلیط هواپیما
          </Link>
          به مقصد مورد نظر شما ظاهر می‌شود. در این لیست، انتخابهای متعددی پیش
          روی شماست. برای اینکه گزینه‌ ها را برای خرید بلیط هواپیما محدودتر
          کنید، علی‌بابا ابزارهای مختلفی در اختیار شما می‌گذارد.
        </p>
      </div>
      <p className="text-grays-500 text-3">
        یکی از ابزارهای بسیار مفید و کاربردی برای خرید اینترنتی بلیط هواپیما،
        تقویم قیمتی است. با استفاده از تقویم قیمتی شما می‌توانید کمترین و
        بیشترین قیمت بلیط پرواز را در روزهای قبل و بعد از آن تاریخ مشاهده کنید.
        در صورتی که اصرار به خرید بلیط هواپیما در یک روز خاص نداشته باشید، این
        امکان به شما کمک می‌کند تا مبلغ بلیط هواپیما برایتان با مبلغ به صرفه تری
        تمام شود.
      </p>
      <p className="text-grays-500 text-3">
        علاوه بر این، با استفاده از فیلترهای کنار صفحه می‌توانید ایرلاین مورد
        نظرتان را انتخاب کنید. ضمنا می‌توانید،
        <Link
          href="/charter-ticket"
          className="text-secondary-400 font-medium"
          target="_blank"
        >
          بلیط چارتر هواپیما
        </Link>
        یا سیستمی را فعال کنید تا فقط یکی از این دو نوع بلیط را مشاهده کنید.
        <Link
          href="/iranout"
          className="text-secondary-400 font-medium"
          target="_blank"
        >
          بلیط هواپیما خارجی
        </Link>
        ،کلاس پروازی و زمان پرواز هم از دیگر گزینه‌هایی است که با انتخاب آنها،
        تعداد بلیط ها محدودتر و رزرو بلیط هواپیما برای شما آسانتر می‌شود.
      </p>
      <p className="text-grays-500 text-3">
        برای پرداخت هزینه می‌توانید از کارت شتاب استفاده کنید. پس از پرداخت،
        خرید اینترنتی بلیط هواپیما با موفقیت انجام میشود و بلیط به ایمیل شما
        ارسال میشود. همچنین در همه این مراحل، پشتیبانی علی‌بابا در کنار شماست تا
        هر زمانی که سوال یا مشکلی داشتید، 24 ساعته پاسخگوی شما باشد.
      </p>
      <h3 className="text-4 font-bold text-grays-600">
        امکان استرداد بلیط هواپیما
      </h3>
      <p className="text-grays-500 text-3">
        یکی دیگر از امکانات علی‌بابا استرداد آنلاین بلیط هواپیما (کنسلی بلیط)
        است. در صورتی که پس از رزرو بلیط هواپیما برنامه سفرتان تغییر کرده، به
        راحتی می‌توانید طبق قوانین کنسلی پرواز داخلی، بلیط هواپیمای خود را کنسل
        کنید. پس از استرداد، پول شما در کمترین زمان ممکن به حسابتان برگردانده
        می‌شود. شما برای خرید اینترنتی بلیط هواپیما از علی‌بابا می‌توانید از
        تلفن همراه، رایانه شخصی یا تبلت استفاده کنید. علی‌بابا در همه این
        ابزارها کاربرپسند است و شما خریدی آسان را تجربه خواهید کرد. همچنین امکان
        نصب و استفاده از اپلیکیشن علی‌بابا برای گوشی های اندروید و آیفون وجود
        دارد.
      </p>
      <h3 className="text-4 font-bold text-grays-600">
        رزرو بلیط هواپیما از معتبرترین ایرلاین‌ها
      </h3>
      <p className="text-grays-500 text-3">
        شما برای خرید بلیط هواپیما از بین ایرلاینهای مختلف حق انتخاب دارید و
        می‌توانید از ایرلاینهای ماهان، زاگرس، کیش ایر، قشم ایر، آسمان، کاسپین،
        تابان، وارش یا معراج، بلیط پرواز داخلی خود را خریداری کنید.
      </p>
      <p className="text-grays-500 text-3">
        هر یک از این ایرلاین ها ویژگیها و مشخصات خود را دارند. برخی امکانات و
        خدمات رفاهی بیشتر دارند و برخی دیگر بلیط هواپیما را با قیمت به صرفه تری
        ارائه می‌دهند. زمانی که در علی‌بابا لیست بلیط تمام این ایرلاین ها را
        مشاهده می‌کنید، می‌توانید از بین آنها انتخاب کنید.
      </p>
      <h3 className="text-4 font-bold text-grays-600">
        علی‌بابا: رتبه یک خرید اینترنتی بلیط سفر
      </h3>
      <p className="text-grays-500 text-3">
        علی‌بابا طی این سالها، اعتبار زیادی نزد مشتریان خود کسب کرده است. طبق
        نظرسنجی، 97.2 درصد از مشتریان علی‌بابا از خدمات این سامانه راضی بوده‌اند
        و استفاده از آن را به دوستان و آشنایان خود پیشنهاد داده‌اند. سرعت سادگی
        خرید اینترنتی بلیط هواپیما، اعتبار و خوشنامی، امکان استرداد آنلاین بلیط
        هواپیما و پشتیبانی 24 ساعته در تمام روزهای هفته، رتبه یک فروش بلیط را از
        آنِ علی‌بابا کرده است.
      </p>
      <p className="text-grays-500 text-3">
        شما با رزرو بلیط هواپیما در علی‌بابا، از سفری راحت و بی‌دردسر مطمئن
        خواهید بود.
      </p>
    </section>
  );
};

export default AboutPlan;
