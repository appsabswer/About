/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, useLocation, Link, NavLink } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Send, 
  Mail, 
  Globe, 
  Youtube, 
  Smartphone, 
  BookOpen, 
  Heart, 
  Code,
  ExternalLink,
  MapPin,
  GraduationCap,
  ChevronUp,
  Quote,
  ChevronLeft,
  ChevronRight,
  Home as HomeIcon,
  User,
  Briefcase,
  MessageSquare
} from 'lucide-react';

const SocialIcon = ({ href, icon: Icon, label, colorClass }: { href: string, icon: any, label: string, colorClass: string }) => (
  <motion.a
    whileHover={{ y: -3, scale: 1.1 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 bg-white rounded-full shadow-sm border border-stone-100 text-stone-600 ${colorClass} transition-all`}
    aria-label={label}
  >
    <Icon size={20} />
  </motion.a>
);

const SectionTitle = ({ children, icon: Icon, color = "emerald" }: { children: React.ReactNode, icon: any, color?: string }) => {
  const colorMap: Record<string, string> = {
    emerald: "bg-emerald-50 text-emerald-600",
    blue: "bg-blue-50 text-blue-600",
    amber: "bg-amber-50 text-amber-600",
    indigo: "bg-indigo-50 text-indigo-600",
    rose: "bg-rose-50 text-rose-600",
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center gap-3 mb-8"
    >
      <div className={`p-2 rounded-lg ${colorMap[color] || colorMap.emerald}`}>
        <Icon size={24} />
      </div>
      <h2 className="text-2xl font-bold text-stone-800">{children}</h2>
    </motion.div>
  );
};

const AnimatedSection = ({ children, id }: { children: React.ReactNode, id: string }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.section>
);

const Card = ({ children, className = "", hoverColor = "emerald" }: { children: React.ReactNode, className?: string, hoverColor?: string }) => {
  const hoverMap: Record<string, string> = {
    emerald: "hover:border-emerald-200",
    blue: "hover:border-blue-200",
    amber: "hover:border-amber-200",
    indigo: "hover:border-indigo-200",
    rose: "hover:border-rose-200",
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white p-6 rounded-2xl shadow-sm border border-stone-100 transition-all ${hoverMap[hoverColor] || hoverMap.emerald} ${className}`}
    >
      {children}
    </motion.div>
  );
};

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "আব্দুল্লাহ আল মামুন",
      role: "শিক্ষার্থী",
      text: "আবছার ভাইয়ের তৈরি অ্যাপগুলো আমার পড়াশোনায় অনেক সাহায্য করেছে। বিশেষ করে ইসলামিক অ্যাপগুলো খুবই তথ্যবহুল।"
    },
    {
      name: "মাওলানা হাফেজ আহমদ",
      role: "মাদ্রাসা শিক্ষক",
      text: "দ্বীনি শিক্ষার প্রসারে প্রযুক্তির এমন সঠিক ব্যবহার সত্যিই প্রশংসনীয়। উনার ওয়েবসাইট থেকে আমরা অনেক উপকৃত হচ্ছি।"
    },
    {
      name: "সোহেল রানা",
      role: "অ্যাপ ব্যবহারকারী",
      text: "সহজ ইন্টারফেস এবং নির্ভুল তথ্য—উনার প্রতিটি অ্যাপের বিশেষত্ব। আমি নিয়মিত উনার আপডেটগুলো অনুসরণ করি।"
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mt-12 bg-emerald-50/50 rounded-3xl p-8 border border-emerald-100">
      <div className="absolute -top-4 left-8 p-3 bg-emerald-600 text-white rounded-xl shadow-lg">
        <Quote size={20} />
      </div>
      
      <div className="min-h-[160px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.article
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <blockquote className="text-xl text-stone-700 italic leading-relaxed">
              "{testimonials[current].text}"
            </blockquote>
            <cite className="not-italic">
              <h4 className="font-bold text-stone-900">{testimonials[current].name}</h4>
              <p className="text-sm text-emerald-600 font-medium">{testimonials[current].role}</p>
            </cite>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="flex justify-end gap-2 mt-6">
        <button onClick={prev} className="p-2 hover:bg-emerald-100 rounded-full transition-colors text-emerald-600">
          <ChevronLeft size={24} />
        </button>
        <button onClick={next} className="p-2 hover:bg-emerald-100 rounded-full transition-colors text-emerald-600">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

const SkillBar = ({ label, percentage, color = "indigo" }: { label: string, percentage: number, color?: string }) => {
  const colorMap: Record<string, string> = {
    indigo: "bg-indigo-600",
    emerald: "bg-emerald-600",
    blue: "bg-blue-600",
    amber: "bg-amber-600",
    rose: "bg-rose-600",
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-end">
        <span className="font-bold text-stone-700">{label}</span>
        <span className="text-sm font-mono text-stone-500">{percentage}%</span>
      </div>
      <div className="h-3 bg-stone-100 rounded-full overflow-hidden border border-stone-200/50">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full rounded-full ${colorMap[color] || colorMap.indigo} shadow-sm`}
        />
      </div>
    </div>
  );
};

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const Navbar = () => (
  <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-100 px-6 py-4">
    <div className="max-w-5xl mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-emerald-700">Abswer</Link>
      <div className="flex gap-6">
        {[
          { to: "/", icon: HomeIcon, label: "হোম" },
          { to: "/portfolio", icon: Briefcase, label: "পোর্টফোলিও" },
          { to: "/contact", icon: MessageSquare, label: "যোগাযোগ" },
        ].map((item) => (
          <NavLink 
            key={item.to}
            to={item.to}
            className={({ isActive }) => 
              `flex items-center gap-2 text-sm font-medium transition-colors ${
                isActive ? "text-emerald-600" : "text-stone-500 hover:text-emerald-500"
              }`
            }
          >
            <item.icon size={18} />
            <span className="hidden sm:inline">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  </nav>
);

const HomePage = () => (
  <div className="space-y-20">
    {/* About Section */}
    <AnimatedSection id="about">
      <SectionTitle icon={BookOpen} color="emerald">সংক্ষিপ্ত পরিচিতি</SectionTitle>
      <Card className="prose prose-stone max-w-none" hoverColor="emerald">
        <p className="text-lg text-stone-700 leading-relaxed">
          মুহাম্মদ নুরুল আবছার চট্টগ্রাম জেলার বাঁশখালী উপজেলার একজন নিবেদিতপ্রাণ শিক্ষানুরাগী, প্রযুক্তি-উদ্যোক্তা এবং অ্যাপ ডেভেলপার। তিনি পবিত্র কোরআনের একজন হাফেজ এবং আধুনিক প্রযুক্তি ও দ্বীনি শিক্ষার প্রসারে নিরলসভাবে কাজ করে যাচ্ছেন।
        </p>
        <div className="flex items-center gap-2 mt-4 text-stone-500">
          <MapPin size={18} className="text-emerald-600" />
          <span>বাঁশখালী, চট্টগ্রাম, বাংলাদেশ</span>
        </div>
      </Card>
      <TestimonialSlider />
    </AnimatedSection>

    {/* Philosophy Section */}
    <AnimatedSection id="philosophy">
      <SectionTitle icon={Heart} color="amber">ধর্মীয় আদর্শ ও দর্শন</SectionTitle>
      <Card className="bg-amber-50 border-amber-100" hoverColor="amber">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="p-4 bg-white rounded-2xl shadow-sm border border-amber-100 shrink-0">
              <Heart className="text-amber-500" size={32} />
            </div>
            <p className="text-lg text-stone-800 leading-relaxed">
              তিনি হানাফী ফিকহ এবং সুফি মতাদর্শভিত্তিক সুন্নি আকিদার অনুসারী। কাদেরিয়া তরিকার মুর্শিদ, হুজুর কিবলা আল্লামা তাহের শাহ (মা.জি.আ.)-এর হাতে তিনি বায়াত গ্রহণ করেছেন।
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border-l-4 border-amber-500 shadow-sm italic">
            <p className="text-stone-700 text-lg">
              "তাঁর জীবনে অন্যতম অনুপ্রেরণা ও প্রিয় ব্যক্তিত্ব হলেন আ'লা হজরত ইমাম আহমদ রেযা খান (রহ.)।"
            </p>
          </div>
        </div>
      </Card>
    </AnimatedSection>
  </div>
);

const PortfolioPage = () => (
  <div className="space-y-20">
    {/* Education Section */}
    <AnimatedSection id="education">
      <SectionTitle icon={GraduationCap} color="blue">শিক্ষাগত যোগ্যতা</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        <Card hoverColor="blue">
          <h3 className="text-xl font-bold text-stone-800 mb-2">কামিল (হাদিস)</h3>
          <p className="text-blue-700 font-medium mb-2">জামেয়া আহমদিয়া সুন্নিয়া কামিল মাদ্রাসা</p>
          <p className="text-stone-600 text-sm">দাখিল, আলিম, ফাজিল ও কামিল (হাদিস) কৃতিত্বের সাথে সম্পন্ন করেছেন।</p>
        </Card>
        <Card hoverColor="blue">
          <h3 className="text-xl font-bold text-stone-800 mb-2">PGDLIS</h3>
          <p className="text-blue-700 font-medium mb-2">আন্তর্জাতিক ইসলামী বিশ্ববিদ্যালয় চট্টগ্রাম (IIUC)</p>
          <p className="text-stone-600 text-sm">লাইব্রেরি অ্যান্ড ইনফরমেশন সায়েন্সের ওপর পোস্ট গ্র্যাজুয়েট ডিপ্লোমা ডিগ্রি অর্জন।</p>
        </Card>
      </div>
    </AnimatedSection>

    {/* Professional Section */}
    <AnimatedSection id="professional">
      <SectionTitle icon={Code} color="indigo">পেশাগত উদ্যোগ ও প্রযুক্তি</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="flex flex-col h-full" hoverColor="indigo">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-indigo-50 rounded-xl">
              <Globe className="text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-800">Abswer.com</h3>
          </div>
          <p className="text-stone-600 mb-6 flex-grow">
            বাংলাদেশের অন্যতম বৃহৎ শিক্ষামূলক কন্টেন্ট সাইট। প্রযুক্তির মাধ্যমে শিক্ষাবিস্তারে এটি একটি বিশেষ অবদান।
          </p>
          <a 
            href="https://abswer.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline"
          >
            ভিজিট করুন <ExternalLink size={16} />
          </a>
        </Card>

        <Card className="flex flex-col h-full" hoverColor="indigo">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-indigo-50 rounded-xl">
              <Smartphone className="text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-800">অ্যাপ ডেভেলপমেন্ট</h3>
          </div>
          <p className="text-stone-600 mb-6 flex-grow">
            গুগল প্লে-স্টোরে “Mohammad Norul Abswer” হিসেবে তাঁর অসংখ্য জনপ্রিয় শিক্ষামূলক ও ইসলামিক অ্যাপ রয়েছে।
          </p>
          <div className="text-sm text-stone-500 mb-4 bg-stone-50 p-2 rounded">
            Developer ID: 6366150173205547249
          </div>
          <a 
            href="https://play.google.com/store/apps/dev?id=6366150173205547249" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline"
          >
            প্লে-স্টোর প্রোফাইল <ExternalLink size={16} />
          </a>
        </Card>
      </div>

      <Card className="mt-8" hoverColor="indigo">
        <h3 className="text-xl font-bold text-stone-800 mb-8 flex items-center gap-2">
          <Code size={20} className="text-indigo-600" />
          কারিগরি দক্ষতা ও অভিজ্ঞতা
        </h3>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          <SkillBar label="অ্যান্ড্রয়েড অ্যাপ ডেভেলপমেন্ট" percentage={90} color="indigo" />
          <SkillBar label="ওয়েব ডেভেলপমেন্ট (React/Next.js)" percentage={85} color="blue" />
          <SkillBar label="কন্টেন্ট ম্যানেজমেন্ট (WordPress/SEO)" percentage={95} color="emerald" />
          <SkillBar label="ইউআই/ইউএক্স ডিজাইন" percentage={80} color="amber" />
          <SkillBar label="ইসলামিক কন্টেন্ট রিসার্চ" percentage={98} color="rose" />
          <SkillBar label="ডাটাবেস ম্যানেজমেন্ট" percentage={82} color="indigo" />
        </div>
      </Card>
    </AnimatedSection>

    {/* Channels Section */}
    <AnimatedSection id="channels">
      <SectionTitle icon={Youtube} color="rose">প্রফেশনাল প্ল্যাটফর্ম ও চ্যানেল</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {[
          { name: 'ফেসবুক পেজ', url: 'https://www.facebook.com/abswercom', icon: Facebook, color: "hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200" },
          { name: 'ইউটিউব', url: 'https://www.youtube.com/@abswercom', icon: Youtube, color: "hover:text-red-600 hover:bg-red-50 hover:border-red-200" },
          { name: 'টেলিগ্রাম', url: 'https://t.me/abswercom', icon: Send, color: "hover:text-sky-500 hover:bg-sky-50 hover:border-sky-200" },
          { name: 'হোয়াটসঅ্যাপ', url: 'https://whatsapp.com/channel/0029valhcwgldqeb4wu7bi3y', icon: Smartphone, color: "hover:text-emerald-600 hover:bg-emerald-50 hover:border-emerald-200" },
          { name: 'পিন্টারেস্ট', url: 'https://www.pinterest.com/abswercom', icon: Heart, color: "hover:text-rose-600 hover:bg-rose-50 hover:border-rose-200" },
        ].map((item) => (
          <a 
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-stone-100 transition-all group ${item.color}`}
          >
            <item.icon className="text-stone-400 group-hover:text-inherit transition-colors" size={24} />
            <span className="text-sm font-medium text-stone-600 group-hover:text-inherit">{item.name}</span>
          </a>
        ))}
      </div>
    </AnimatedSection>
  </div>
);

const ContactPage = () => (
  <div className="space-y-20">
    {/* Contact Section */}
    <AnimatedSection id="contact">
      <SectionTitle icon={Mail} color="rose">যোগাযোগ করুন</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-4">
          <Card className="h-full">
            <h3 className="text-xl font-bold text-stone-800 mb-4">সরাসরি যোগাযোগ</h3>
            <address className="space-y-6 not-italic">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-rose-50 text-rose-600 rounded-xl">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-stone-500">ই-মেইল</p>
                  <a href="mailto:admin@abswer.com" className="text-stone-800 font-medium hover:text-rose-600 transition-colors">admin@abswer.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-sm text-stone-500">ওয়েবসাইট</p>
                  <a href="https://abswer.com" target="_blank" rel="noopener noreferrer" className="text-stone-800 font-medium hover:text-emerald-600 transition-colors">www.abswer.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-stone-500">ঠিকানা</p>
                  <p className="text-stone-800 font-medium">বাঁশখালী, চট্টগ্রাম, বাংলাদেশ</p>
                </div>
              </div>
            </address>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card hoverColor="rose">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const subject = formData.get('subject');
                const message = formData.get('message');
                const mailtoUrl = `mailto:admin@abswer.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`নাম: ${name}\n\n${message}`)}`;
                window.location.href = mailtoUrl;
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">আপনার নাম</label>
                  <input 
                    required
                    name="name"
                    type="text" 
                    placeholder="নাম লিখুন"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-rose-300 focus:ring-4 focus:ring-rose-50 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">বিষয়</label>
                  <input 
                    required
                    name="subject"
                    type="text" 
                    placeholder="বার্তার বিষয়"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-rose-300 focus:ring-4 focus:ring-rose-50 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700">বার্তা</label>
                <textarea 
                  required
                  name="message"
                  rows={4}
                  placeholder="আপনার বার্তাটি এখানে লিখুন..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-rose-300 focus:ring-4 focus:ring-rose-50 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-lg shadow-rose-200 transition-all flex items-center justify-center gap-2 group"
              >
                বার্তা পাঠান
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900 bg-stone-50">
        {/* Hero Section */}
        <header className="relative py-20 px-6 overflow-hidden bg-white border-b border-stone-100">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-200 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="https://raw.githubusercontent.com/appsabswer/About/main/Profile.png" 
                  alt="মুহাম্মদ নুরুল আবছার" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
                মুহাম্মদ নুরুল আবছার
              </h1>
              <p className="text-xl text-emerald-700 font-medium mb-6">
                MOHAMMAD NORUL ABSWER
              </p>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
                শিক্ষানুরাগী • প্রযুক্তি-উদ্যোক্তা • অ্যাপ ডেভেলপার • হাফেজে কোরআন
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mt-10"
            >
              <SocialIcon href="https://www.facebook.com/abswer" icon={Facebook} label="Facebook" colorClass="hover:text-blue-600 hover:border-blue-200" />
              <SocialIcon href="https://x.com/abswer" icon={Twitter} label="Twitter" colorClass="hover:text-sky-500 hover:border-sky-200" />
              <SocialIcon href="https://www.linkedin.com/in/abswer/" icon={Linkedin} label="LinkedIn" colorClass="hover:text-blue-700 hover:border-blue-200" />
              <SocialIcon href="https://t.me/abswer" icon={Send} label="Telegram" colorClass="hover:text-sky-400 hover:border-sky-200" />
              <SocialIcon href="mailto:admin@abswer.com" icon={Mail} label="Email" colorClass="hover:text-rose-500 hover:border-rose-200" />
              <SocialIcon href="https://about.abswer.com" icon={Globe} label="Website" colorClass="hover:text-emerald-500 hover:border-emerald-200" />
            </motion.div>
          </div>
        </header>

        <Navbar />

        <main className="max-w-5xl mx-auto py-16 px-6">
          <AnimatedRoutes />
        </main>

        {/* Footer */}
        <footer className="bg-stone-900 text-stone-400 py-12 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="mb-4">© {new Date().getFullYear()} মুহাম্মদ নুরুল আবছার। সর্বস্বত্ব সংরক্ষিত।</p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="mailto:admin@abswer.com" className="hover:text-white transition-colors">ই-মেইল</a>
              <a href="https://about.abswer.com" className="hover:text-white transition-colors">পোর্টফোলিও</a>
            </div>
          </div>
        </footer>

        {/* Back to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-4 bg-emerald-600 text-white rounded-full shadow-2xl z-50 hover:bg-emerald-700 transition-colors border-4 border-white"
              aria-label="Back to top"
            >
              <ChevronUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}
