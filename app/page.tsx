"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Instagram, Users, Sparkles, BookOpen, GraduationCap, Phone, FileText, Target, Eye } from 'lucide-react';
import Image from 'next/image';

export default function LandingPage() {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd7joJH1jJgufHOcX-XGh9f7OWX97fI8e6t8WoZ6aOr996ZnQ/viewform";
  const baseWaNumber = "6281344622277"; 
  const directWaUrl = `https://wa.me/${baseWaNumber}?text=${encodeURIComponent("Halo admin, saya berminat untuk mendaftar pada prodi akuntansi UNIKA Fajar Timur Papua, mohon petunjuk pendaftarannya! 🙏🙏")}`;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp) return alert('Mohon isi nama dan nomor WhatsApp Anda terlebih dahulu.');
    const customMessage = encodeURIComponent(`Halo admin, nama saya ${name}. Saya berminat untuk mendaftar pada prodi akuntansi UNIKA Fajar Timur Papua, mohon petunjuk pendaftarannya! 🙏?!`);
    window.open(`https://wa.me/${baseWaNumber}?text=${customMessage}`, '_blank');
  };

  // Variabel Animasi untuk Scroll-Reveal
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-x-hidden selection:bg-amber-100 selection:text-amber-900">
      
      {/* Soft Glow Background Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-amber-100/50 rounded-full blur-[130px] pointer-events-none" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 font-extrabold text-sm md:text-base tracking-wider text-slate-900">
            {/* Panggil langsung file logo.svg dari folder public */}
            <Image
              src="/logo.svg" 
              alt="Logo UNIKA Fajar Timur Papua" 
              width={40} 
              height={40} 
              className="drop-shadow-sm object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span>UNIKA</span>
              <span className="text-xs text-amber-600 font-semibold tracking-normal">FAJAR TIMUR PAPUA</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-amber-600 transition-colors">Tentang Fakultas</a>
            <a href="#visimisi" className="hover:text-amber-600 transition-colors">Visi & Misi</a>
            <a href="#spirit" className="hover:text-amber-600 transition-colors">Spirit Prodi</a>
            <a href="#cta" className="hover:text-amber-600 transition-colors">Pendaftaran</a>
          </nav>
          <a href="https://instagram.com/unika_feb.ak" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs md:text-sm font-bold bg-white border border-slate-200 px-4 py-2 rounded-full hover:bg-slate-50 hover:border-amber-500 transition-all shadow-sm">
            <Instagram className="h-4 w-4 text-pink-500" />
            <span className="text-slate-700">@unika_feb.ak</span>
          </a>
        </div>
      </header>

      {/* HERO SECTION (Animasi Masuk Langsung Saat Load Halaman) */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/60 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold text-blue-600 mb-8">
          <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
          Fakultas Ekonomi dan Bisnis • Penerimaan Mahasiswa Baru TA 2026/2027
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl md:text-7xl font-black tracking-tight max-w-5xl leading-[1.1] mb-8 text-slate-900">
          Kuasai Finansial, Jadi Pemimpin Beretika di <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-600">Prodi Akuntansi</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-base md:text-xl text-slate-500 max-w-3xl font-normal leading-relaxed mb-12">
          Bukan sekadar hitung angka tradisional. Bersama UNIKA Fajar Timur Papua, kami membentuk *Financial Analyst* andal berbasis kearifan lokal melalui penguatan spirit intelektual populis dan spiritual ekologis.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-10">
          <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl text-md flex items-center justify-center gap-2 shadow-md hover:bg-slate-800 active:scale-95 transition-all group">
            <FileText className="h-5 w-5 text-amber-400" />
            Isi Formulir (Google Form)
            <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a href={directWaUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white border border-slate-200 rounded-xl text-md font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center justify-center gap-2 shadow-sm">
            <Phone className="h-4 w-4 text-emerald-500" />
            Tanya Admin via WA
          </a>
        </motion.div>
      </section>

      {/* PROFIL FAKULTAS (Scroll Reveal Component) */}
      <motion.section 
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="max-w-5xl mx-auto px-6 py-16 bg-white border border-slate-200/60 rounded-3xl shadow-sm text-center relative overflow-hidden"
      >
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10">
          <GraduationCap className="h-10 w-10 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Sekilas Tentang Fakultas</h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
            Fakultas Ekonomi dan Bisnis Universitas Katolik Fajar Timur Papua merupakan unit akademik strategis yang berperan dalam pengembangan ilmu pengetahuan, teknologi, dan praktik profesional di bidang ekonomi dan kesehatan, khususnya farmasi, yang berorientasi pada kesejahteraan masyarakat. Dalam penguatan identitas akademik, kami mengembangkan spirit keilmuan khas sebagai fondasi pembentukan lulusan yang holistik dan transformatif.
          </p>
        </div>
      </motion.section>

      {/* VISI MISI (Staggered Scroll Animation) */}
      <section id="visimisi" className="max-w-7xl mx-auto px-6 py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/50">Arah & Kompas Kami</span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 text-slate-900">Visi & Misi Utama</h2>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer} 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Card Visi */}
          <motion.div variants={scaleUp} className="lg:col-span-3 bg-gradient-to-br from-slate-900 to-blue-950 p-8 md:p-10 rounded-2xl border border-slate-800 text-white relative overflow-hidden shadow-sm group">
            <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-5 group-hover:scale-110 transition-transform duration-500">
              <Eye className="w-80 h-80 text-white" />
            </div>
            <div className="flex items-center gap-3 text-amber-400 text-sm font-bold uppercase tracking-wider mb-4">
              <Target className="h-5 w-5" />
              Visi Institusi
            </div>
            <p className="text-lg md:text-2xl font-medium leading-relaxed italic border-l-4 border-amber-400 pl-4 md:pl-6 text-slate-100">
              “Menjadi pusat unggulan pendidikan, penelitian, dan pengabdian di bidang ekonomi dan farmasi di Indonesia Timur yang berdaya saing global, berbasis kearifan lokal, melalui penguatan spirit intelektual populis dan spiritual ekologis”
            </p>
          </motion.div>

          {/* Cards Misi dengan Efek Muncul Berurutan */}
          <motion.div variants={fadeInUp} className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:border-blue-300 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm mb-4">1</div>
            <h4 className="font-bold text-slate-900 mb-2">Pendidikan Berkualitas</h4>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">Menyelenggarakan pendidikan tinggi di bidang ekonomi dan farmasi yang menghasilkan lulusan literat, profesional, dan berintegritas, serta mampu mengabdikan ilmunya bagi kesejahteraan masyarakat.</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:border-amber-300 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm mb-4">2</div>
            <h4 className="font-bold text-slate-900 mb-2">Penelitian Inovatif</h4>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">Mengembangkan penelitian yang inovatif dan berkelanjutan dengan menempatkan manusia dan alam sebagai satu kesatuan dalam upaya mencapai kebaikan bersama.</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:border-emerald-300 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm mb-4">3</div>
            <h4 className="font-bold text-slate-900 mb-2">Pengabdian & Budaya Papua</h4>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">Melaksanakan pengabdian kepada masyarakat yang berorientasi pada pemberdayaan potensi lokal, peningkatan kualitas hidup, serta pelestarian lingkungan dan budaya masyarakat Papua.</p>
          </motion.div>

          {/* Misi 4 */}
          <motion.div variants={scaleUp} className="lg:col-span-3 bg-blue-50/40 p-6 rounded-2xl border border-blue-100 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">4</div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Kemitraan Strategis Global</h4>
              <p className="text-slate-600 text-sm">Mengembangkan jejarian kemitraan strategis di tingkat lokal, nasional, dan global untuk meningkatkan relevansi dan daya saing lulusan.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SPIRIT PRODI (Scroll Zoom Card Reveal) */}
      <section id="spirit" className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full">Identitas Unik Kami</span>
            <h2 className="text-3xl md:text-5xl font-black mt-4">Spirit Prodi Akuntansi</h2>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }} 
            variants={scaleUp}
            className="bg-slate-950 p-8 md:p-12 rounded-3xl border border-slate-800 text-center max-w-4xl mx-auto shadow-xl"
          >
            <h3 className="text-3xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-amber-400 to-orange-400 mb-6">
              ACT • COUNT • THINK
            </h3>
            <p className="text-slate-300 text-base md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              Menekankan <span className="text-blue-400 font-semibold">tindakan nyata</span>, <span className="text-amber-400 font-semibold">akuntabilitas</span>, serta kemampuan <span className="text-orange-400 font-semibold">berpikir kritis & reflektif</span> dalam praktik akuntansi yang beretika dan berkelanjutan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* REGISTRATION FORM (Slide-in Reveal) */}
      <section id="cta" className="max-w-7xl mx-auto px-6 py-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="relative bg-white border border-slate-200 rounded-3xl p-8 md:p-16 overflow-hidden shadow-sm"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-slate-900">Siap Bergabung Tahun Ini?</h2>
              <p className="text-slate-500 mb-8 text-sm md:text-base leading-relaxed">
                Pendaftaran Fakultas Ekonomi dan Bisnis Program Studi Akuntansi Universitas Katolik Fajar Timur Papua resmi dibuka untuk Tahun Ajaran 2026-2027.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600"><span className="font-bold text-slate-900">Form Online Resmi:</span> Mengisi data diri lengkap langsung lewat tautan Google Form utama.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600"><span className="font-bold text-slate-900">Potongan Biaya & Beasiswa:</span> Dapatkan info beasiswa yayasan melalui admin pendaftaran via WhatsApp.</p>
                </div>
              </div>

              <div className="p-6 bg-blue-50/50 border border-blue-100 rounded-2xl">
                <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
                  <FileText className="h-4 w-4" /> Pendaftaran Online Utama
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Isi Google Form Pendaftaran</h4>
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xs transition-colors shadow-sm">
                  Buka Google Form Resmi <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200/60">
              <h3 className="text-md font-bold mb-2 text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> Hubungi Panitia / Tanya Alur
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Nama Lengkap Anda</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Contoh: Maria Flores" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors text-slate-900" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Nomor WhatsApp Aktif</label>
                  <input type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="0813xxxxxxxx" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors text-slate-900" />
                </div>
                <button type="submit" className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-sm shadow-sm transition-all active:scale-[0.99] flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-400" /> Kirim & Hubungi via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 UNIKA Fajar Timur Papua. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-2">
            <span>Fakultas Ekonomi dan Bisnis | IG:</span>
            <a href="https://instagram.com/unika_feb.ak" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-600 transition-colors font-bold">@unika_feb.ak</a>
          </div>
        </div>
      </footer>

    </div>
  );
}