// `link` is optional. `status: "dev"` marks work in progress. `tags` is optional.
const projects = [
  {
    id: "matjery",
    featured: true,
    image: "/images/matjery.svg",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    title: { ar: "متجري (Matjery)", en: "Matjery" },
    description: {
      ar: "نظام ERP مصغّر لإدارة متجر خياطة وملابس: كاشير (POS)، إدارة العملاء وذمّمهم، طلبات التفصيل، المخزون والمشتريات والموردين، الموظفين والسلف، المحاسبة بالقيود اليومية والمصروفات والأصول، مع تقارير مالية وصلاحيات حسب الدور (مالك، مدير، كاشير، خياط).",
      en: "A compact ERP for a clothing & tailoring store: a point-of-sale cashier, customers and receivables, tailoring orders, inventory, purchasing and suppliers, employees and advances, double-entry style accounting with expenses and assets, financial reports, and role-based access (owner, admin, cashier, tailor).",
    },
  },
  {
    id: "aura",
    image: "/images/aura.webp",
    link: "https://aura-secure.vercel.app",
    title: { ar: "Aura Secure", en: "Aura Secure" },
    description: {
      ar: "موقع تعريفي لشركة حلول السلامة والأمن في الرياض، متخصصة في معدات السلامة وأنظمة الوقاية من الحريق. يعرض المنتجات والخدمات وحلول الحماية من الحريق وإدارة المخاطر والسلامة في أماكن العمل.",
      en: "A corporate website for a safety and security solutions company based in Riyadh, specializing in safety equipment and fire prevention systems. The platform showcases products, services, and solutions for fire protection, risk management, and workplace safety.",
    },
  },
  {
    id: "sudatech",
    image: "/images/suda.webp",
    link: "https://sudatech-shop.vercel.app/",
    title: { ar: "Sudatech Shop", en: "Sudatech Shop" },
    description: {
      ar: "منصة تجارة إلكترونية للمنتجات التقنية والإلكترونية، تقدّم تجربة تسوّق سلسة تشمل تصفّح المنتجات والبحث والتصفية وإدارة سلة المشتريات بواجهة سهلة الاستخدام.",
      en: "An e-commerce platform for technology and electronic products, providing users with a seamless shopping experience through product browsing, search, filtering, shopping cart management, and an intuitive user interface.",
    },
  },
  {
    id: "ebdaa",
    image: "/images/swq.webp",
    link: "https://ebda-baswal-edu.vercel.app",
    title: { ar: "Ebdaa Besoual", en: "Ebdaa Besoual" },
    description: {
      ar: "مبادرة تعليمية تساعد الطلاب والخريجين الجدد على فهم المسارات المهنية ومتطلبات سوق العمل، وتوفّر إرشادات حول فرص العمل والبرامج التدريبية والمنح والمصادر التعليمية.",
      en: "An educational initiative designed to help students and fresh graduates better understand career paths and market requirements. The platform provides guidance on job opportunities, training programs, scholarships, and learning resources to support career development and growth.",
    },
  },
  {
    id: "zus",
    image: "/images/zus.webp",
    link: "https://zus.vercel.app/",
    title: { ar: "Zus", en: "Zus" },
    description: {
      ar: "منصة تجارة إلكترونية يستكشف فيها المستخدمون مجموعة واسعة من المنتجات ويمكنهم تصفيتها حسب الفئة أو العلامة التجارية، مع تجربة تسوّق نظيفة وتنقّل سلس ووظيفة بحث.",
      en: "An e-commerce platform where users can explore a wide range of products and filter them by category or brand. The site focuses on a clean shopping experience with smooth navigation and search functionality.",
    },
  },
  {
    id: "villans",
    image: "/images/villans.webp",
    link: "https://villans.vercel.app/villans",
    title: { ar: "Villans", en: "Villans" },
    description: {
      ar: "منصة سهلة الاستخدام لحجز الفنادق، تتيح تصفّح الفنادق وتصفيتها حسب الموقع أو السعر أو الفئة، واختيار الغرف وإتمام الحجز، مع إمكانية تعديل الحجز أو إلغائه قبل موعد الوصول.",
      en: "A user-friendly hotel booking platform that allows users to browse hotels, apply filters based on location, price, or category, select rooms, and complete reservations. Users can also modify or cancel bookings if the check-in date hasn’t passed.",
    },
  },
  {
    id: "niloop",
    image: "/images/niloop.webp",
    link: "https://niloop.vercel.app/ar",
    title: { ar: "Niloop", en: "Niloop" },
    description: {
      ar: "موقع لشركة تقنية تقدّم حلولاً وخدمات في تقنية المعلومات، بتصميم حديث وأقسام للتعريف بالشركة وخدماتها وآراء العملاء ونموذج تواصل للاستفسارات.",
      en: "A website for a technology company that provides IT solutions and services. The site features a modern design with sections for company information, services offered, client testimonials, and a contact form for inquiries.",
    },
  },
  {
    id: "bareq",
    image: "/images/bareeq.webp",
    link: "https://bareqrt.com/",
    title: { ar: "Bareq Alshati", en: "Bareq Alshati" },
    description: {
      ar: "موقع تعريفي لشركة استشارات أعمال سعودية، يعرض بيانات الشركة ورسالتها ورؤيتها وخدماتها، مع إمكانية طلب استشارة أو التواصل مع الفريق مباشرة.",
      en: "A corporate website for a Saudi-based business consulting firm. It showcases company details, mission, vision, and services, with features for users to request consultations or contact the team directly.",
    },
  },
  {
    id: "alfajr",
    status: "dev",
    image: "/images/school.webp",
    title: { ar: "الفجر التعليمية", en: "Al-Fajr Education" },
    description: {
      ar: "نظام لإدارة المدارس يوفّر منصة للطلاب والمعلمين والإداريين لإدارة الأنشطة الأكاديمية، من متابعة الحضور وإدارة الدرجات إلى أدوات التواصل.",
      en: "School management system that provides a platform for students, teachers, and administrators to manage academic activities, including attendance tracking, grade management, and communication tools.",
    },
  },
];

export default projects;
