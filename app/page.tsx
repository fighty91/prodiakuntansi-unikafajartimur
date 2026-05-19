"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Instagram, Sparkles, BookOpen, GraduationCap, Phone, FileText, Target, Eye, MapPin } from 'lucide-react';

export default function LandingPage() {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  // Konfigurasi Tautan Pendaftaran & WhatsApp Baru
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd7joJH1jJgufHOcX-XGh9f7OWX97fI8e6t8WoZ6aOr996ZnQ/viewform";
  const baseWaNumber = "6285244488870"; 
  const directWaMessage = encodeURIComponent("Halo admin, saya berminat untuk mendaftar pada prodi S-1 Akuntansi UNIKA Fajar Timur Papua, mohon petunjuk pendaftarannya! 🙏 🙏");
  const directWaUrl = `https://wa.me/${baseWaNumber}?text=${directWaMessage}`;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp) return alert('Mohon isi nama dan nomor WhatsApp Anda terlebih dahulu.');
    
    const customMessage = encodeURIComponent(`Halo admin, nama saya ${name}. Saya berminat untuk mendaftar pada prodi S-1 Akuntansi UNIKA Fajar Timur Papua, mohon petunjuk pendaftarannya! 🙏 🙏`);
    window.open(`https://wa.me/${baseWaNumber}?text=${customMessage}`, '_blank');
  };

  // Variabel Animasi yang Aman untuk Mobile (Mengurangi offset Y agar tidak memicu overflow browser)
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const reasonsList = [
    "Peluang kerja luas dan stabil",
    "Peran strategis dalam pembangunan daerah",
    "Mendukung penguatan ekonomi masyarakat adat",
    "Relevan dengan isu lingkungan Papua",
    "Meningkatkan literasi keuangan lokal",
    "Peluang menjadi wirausahawan sosial",
    "Membentuk pemimpin yang berintegritas"
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-x-hidden w-full relative selection:bg-amber-100 selection:text-amber-900">
      
      {/* Soft Glow Background Effects - Dipersempit dimensinya agar tidak meluber keluar layar HP */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-72 bg-blue-100/40 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-md h-72 bg-amber-100/30 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          
          {/* LOGO AREA - NAMA KAMPUS SEKARANG MUNCUL DI SEMUA UKURAN LAYAR */}
          <div className="flex items-center gap-2 font-extrabold text-slate-900 shrink-0">
            {/* Bungkus gambar logo agar ukurannya tetap kaku */}
            <div className="h-9 w-9 shrink-0 flex items-center justify-center p-1 bg-white rounded-full border border-slate-100 shadow-inner">
              <img 
                src="/logo.svg" 
                alt="Logo UNIKA" 
                className="h-full w-full object-contain" 
              />
            </div>
            
            {/* Nama Kampus yang Dioptimalkan untuk Mobile & Desktop */}
            <div className="flex flex-col leading-none sm:leading-tight shrink-0 whitespace-nowrap">
              <span className="text-sm md:text-base font-black tracking-wide">UNIKA</span>
              {/* Menggunakan text-[8px] di HP agar pas, dan md:text-xs di komputer */}
              <span className="text-[8px] md:text-xs text-amber-600 font-bold tracking-normal mt-0.5 md:mt-0">
                FAJAR TIMUR PAPUA
              </span>
            </div>
          </div>

          {/* NAVIGATION LINKS (Desktop Only) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-amber-600 transition-colors">Tentang</a>
            <a href="#visimisi" className="hover:text-amber-600 transition-colors">Visi & Misi</a>
            <a href="#reasons" className="hover:text-amber-600 transition-colors">7 Alasan</a>
            <a href="#spirit" className="hover:text-amber-600 transition-colors">Spirit</a>
            <a href="#cta" className="hover:text-amber-600 transition-colors">Pendaftaran</a>
          </nav>

          {/* INSTAGRAM LINK */}
          <a 
            href="https://instagram.com/unika_feb.ak" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 p-2 rounded-full bg-white border border-slate-200 hover:bg-slate-50 hover:border-amber-500 transition-all shadow-sm shrink-0 sm:px-4 sm:py-2"
          >
            <Instagram className="h-4 w-4 text-pink-500 shrink-0" />
            <span className="text-slate-700 text-xs font-bold hidden sm:inline">
              @unika_feb.ak
            </span>
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center text-center overflow-hidden w-full z-10">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }} 
          className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/60 px-3 py-1.5 rounded-full text-[10px] sm:text-sm font-semibold text-blue-600 mb-6 max-w-full"
        >
          <Sparkles className="h-3.5 w-3.5 text-amber-500 animate-pulse shrink-0" />
          <span className="truncate">FEB • Penerimaan Mahasiswa Baru TA 2026/2027</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }} 
          className="text-2xl sm:text-5xl md:text-7xl font-black tracking-tight max-w-4xl leading-[1.2] mb-6 text-slate-900 w-full break-words"
        >
          Kuasai Finansial, Jadi Pemimpin Beretika di <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-600 block sm:inline">Prodi S-1 Akuntansi</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="text-xs sm:text-base md:text-xl text-slate-500 max-w-2xl font-normal leading-relaxed mb-8 w-full"
        >
          Program Studi Akuntansi Universitas Katolik Fajar Timur Papua menghadirkan pendekatan unggulan berbasis akuntansi lingkungan dan keberlanjutan, yang dirancang untuk menjawab tantangan ekonomi sekaligus menjaga keseimbangan ekologis.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.3 }} 
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center justify-center max-w-xs sm:max-w-none mx-auto"
        >
          <a 
            href={googleFormUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-5 py-3.5 bg-slate-900 text-white font-bold rounded-xl text-xs sm:text-base flex items-center justify-center gap-2 shadow-md hover:bg-slate-800 active:scale-95 transition-all w-full sm:w-auto shrink-0"
          >
            <FileText className="h-4 w-4 text-amber-400 shrink-0" />
            <span>Isi Formulir (Google Form)</span>
          </a>
          
          <a 
            href={directWaUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-base font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto shrink-0"
          >
            <Phone className="h-4 w-4 text-emerald-500 shrink-0" />
            <span>Tanya Admin via WA</span>
          </a>
        </motion.div>
      </section>

      {/* PROFIL FAKULTAS */}
      <motion.section 
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="max-w-5xl mx-auto px-4 py-12 bg-white border border-slate-200/60 rounded-2xl shadow-sm text-center relative overflow-hidden w-full"
      >
        <div className="relative z-10">
          <GraduationCap className="h-8 w-8 text-blue-600 mx-auto mb-3" />
          <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-3">Sekilas Tentang Fakultas</h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-3xl mx-auto">
            Fakultas Ekonomi dan Bisnis Universitas Katolik Fajar Timur Papua merupakan unit akademik strategis yang berperan dalam pengembangan ilmu pengetahuan, teknologi, dan praktik profesional di bidang ekonomi, yang berorientasi pada kesejahteraan masyarakat. Dalam penguatan identitas akademik, kami mengembangkan spirit keilmuan khas sebagai fondasi pembentukan lulusan yang holistik dan transformatif.
          </p>
        </div>
      </motion.section>

      {/* VISI MISI BENTO GRID */}
      <section id="visimisi" className="max-w-7xl mx-auto px-4 py-16 overflow-hidden w-full">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/50">Arah & Kompas Kami</span>
          <h2 className="text-2xl md:text-5xl font-black mt-3 text-slate-900">Visi & Misi Utama</h2>
        </motion.div>

        {/* ======================================================== */}
        {/* 1. KONTAINER VISI (Berdiri Sendiri - Memanjang Penuh) */}
        {/* ======================================================== */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={scaleUp} 
          // {/* REVISI: lg:min-h-[220px] ditambah flexbox agar box tinggi kokoh dan teks presisi di tengah */}
          className="bg-gradient-to-br from-slate-900 to-blue-950 p-6 md:p-10 rounded-2xl border border-slate-800 text-white relative overflow-hidden shadow-sm group w-full lg:min-h-[220px] flex flex-col justify-center"
        >
          <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-5 group-hover:scale-110 transition-transform duration-500">
            <Target className="w-80 h-80 text-white" />
          </div>

          {/* z-10 memastikan teks berada di atas bayangan icon background */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Target className="h-4 w-4" />
              Visi Institusi
            </div>
            <p className="text-sm md:text-xl font-medium leading-relaxed italic border-l-4 border-amber-400 pl-3 md:pl-4 text-slate-100">
              “Menjadi pusat unggulan pendidikan, penelitian, dan pengabdian di bidang ekonomi di Indonesia Timur yang berdaya saing global, berbasis kearifan lokal, melalui penguatan spirit intelektual populis dan spiritual ekologis”
            </p>
          </div>
        </motion.div>


        {/* SPACING / JARAK ANTARA VISI DAN MISI (mt-8 memberikan space yang pas) */}
        <div className="mt-8 w-full">

          {/* ======================================================== */}
          {/* 2. KONTAINER MISI (Dipisah & Dibuat Tidak Terisi Penuh) */}
          {/* ======================================================== */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }} 
            variants={staggerContainer} 
            // {/* max-w-5xl & mx-auto membuat grid misi mengumpul proporsional di tengah, tidak melar penuh ke kanan */}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 w-full max-w-5xl mx-auto"
          >
            {/* Misi 1 */}
            <motion.div variants={fadeInUp} className="lg:col-span-3 bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors">
              <div>
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs mb-3">1</div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5">Pendidikan Berkualitas</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Menyelenggarakan pendidikan tinggi di bidang ekonomi yang menghasilkan lulusan literat, profesional, dan berintegritas, serta mampu mengabdikan ilmunya bagi kesejahteraan masyarakat.</p>
              </div>
            </motion.div>

            {/* Misi 2 */}
            <motion.div variants={fadeInUp} className="lg:col-span-3 bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between hover:border-amber-300 transition-colors">
              <div>
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs mb-3">2</div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5">Penelitian Inovatif</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Mengembangkan penelitian yang inovatif dan berkelanjutan dengan menempatkan manusia dan alam sebagai satu kesatuan dalam upaya mencapai kebaikan bersama.</p>
              </div>
            </motion.div>

            {/* Misi 3 */}
            <motion.div variants={fadeInUp} className="lg:col-span-3 bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between hover:border-emerald-300 transition-colors">
              <div>
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs mb-3">3</div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5">Pengabdian & Budaya Papua</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Melaksanakan pengabdian kepada masyarakat yang berorientasi pada pemberdayaan potensi lokal, peningkatan kualitas hidup, serta pelestarian lingkungan dan budaya masyarakat Papua.</p>
              </div>
            </motion.div>

            {/* Misi 4 */}
            <motion.div variants={fadeInUp} className="lg:col-span-3 bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between hover:border-indigo-300 transition-colors">
              <div>
                <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs mb-3">4</div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5">Kemitraan Strategis Global</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Mengembangkan jejaring kemitraan strategis di tingkat lokal, nasional, dan global untuk meningkatkan relevansi dan daya saing lulusan.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7 ALASAN MEMILIH AKUNTANSI */}
      <section id="reasons" className="max-w-7xl mx-auto px-4 py-16 border-t border-slate-200/60 overflow-hidden w-full">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/50">Kenapa S-1 Akuntansi?</span>
          <h2 className="text-2xl md:text-5xl font-black mt-3 text-slate-900">7 Alasan Harus Memilih Akuntansi</h2>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
        >
          {reasonsList.map((reason, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp} 
              className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex gap-3 items-start"
            >
              <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 font-bold text-blue-600 text-xs">
                {index + 1}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 pt-0.5 leading-snug">{reason}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SPIRIT PRODI SECTION */}
      <section id="spirit" className="bg-slate-900 text-white py-16 relative overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2.5 py-1 rounded-full">Identitas Unik Kami</span>
            <h2 className="text-2xl md:text-5xl font-black mt-3">Spirit Prodi Akuntansi</h2>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={scaleUp}
            className="bg-slate-950 p-6 md:p-12 rounded-2xl border border-slate-800 text-center max-w-4xl mx-auto shadow-xl"
          >
            <h3 className="text-xl sm:text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-amber-400 to-orange-400 mb-4 uppercase">
              ACT • COUNT • THINK
            </h3>
            <p className="text-slate-300 text-xs sm:text-lg leading-relaxed max-w-2xl mx-auto font-light">
              Menekankan <span className="text-blue-400 font-semibold">tindakan nyata</span>, <span className="text-amber-400 font-semibold">akuntabilitas</span>, serta kemampuan <span className="text-orange-400 font-semibold">berpikir kritis & reflektif</span> dalam praktik akuntansi yang beretika dan berkelanjutan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* REGISTRATION FORM & CHANNELS */}
      <section id="cta" className="max-w-7xl mx-auto px-4 py-16 overflow-hidden w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="relative bg-white border border-slate-200 rounded-3xl p-5 md:p-12 overflow-hidden shadow-sm w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 w-full">
            
            {/* SISI KIRI INFO TEXT */}
            <div className="w-full">
              <h2 className="text-2xl md:text-5xl font-black mb-4 leading-tight text-slate-900">Siap Bergabung Tahun Ini?</h2>
              
              <div className="mb-5 p-4 bg-amber-50/70 border border-amber-200/60 rounded-xl flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <p className="font-bold text-slate-900 mb-0.5">Tempat Pendaftaran Offline Kampus II:</p>
                  <p className="text-slate-600">(Kompleks SMA YPPK Taruna Dharma Kotaraja)</p>
                  <p className="font-semibold text-amber-700 mt-0.5">Hotline WA: 0852-4448-8870</p>
                </div>
              </div>

              <p className="text-slate-500 mb-5 text-xs sm:text-base leading-relaxed">
                Pendaftaran Fakultas Ekonomi dan Bisnis Program Studi S-1 Akuntansi Universitas Katolik Fajar Timur Papua resmi dibuka untuk Tahun Ajaran 2026-2027.
              </p>

              <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
                <div className="flex items-center gap-2 text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-1">
                  <FileText className="h-3.5 w-3.5" /> Pendaftaran Online Utama
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-0.5">Isi Google Form Pendaftaran</h4>
                <p className="text-[11px] text-slate-500 mb-3">Pastikan telah menyiapkan berkas pendaftaran lengkap.</p>
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xs transition-colors shadow-sm">
                  <span>Buka Google Form</span> <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* SISI KANAN: FORM WHATSAPP & QR CODE CARD (MOBILE FRIENDLY FLEX STACK) */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 w-full">
              <div className="flex flex-col sm:flex-row gap-6 items-stretch w-full">
                
                {/* FORM INPUT UTAMA */}
                <form onSubmit={handleFormSubmit} className="space-y-3 flex-1 w-full">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> Hubungi Panitia
                  </h3>
                  <p className="text-[11px] text-slate-500 mb-2">Ketik nama untuk langsung konsultasi via WhatsApp.</p>
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">Nama Lengkap</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Contoh: Maria Flores" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500 text-slate-900" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">Nomor WhatsApp</label>
                    <input type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="0852xxxxxxxx" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500 text-slate-900" />
                  </div>
                  <button type="submit" className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-[11px] transition-all flex items-center justify-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-emerald-400" /> Tanya via WhatsApp
                  </button>
                </form>

                {/* BOX UNTUK QR CODE DINAMIS (Responsif: Melebar penuh di HP, kotak rapi di desktop) */}
                <div className="w-full sm:w-32 bg-white border border-slate-200 p-4 rounded-xl flex flex-col items-center justify-center text-center shrink-0 shadow-sm">
                  <div className="w-24 h-24 bg-white border border-slate-100 rounded-lg flex items-center justify-center p-1.5 mb-2">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(googleFormUrl)}`}
                      alt="QR Code Pendaftaran" 
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Scan Daftar</span>
                  <span className="text-[8px] text-slate-400 mt-0.5 leading-tight hidden sm:inline">Arahkan kamera HP Anda</span>
                </div>

              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-6 w-full relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>© 2026 UNIKA Fajar Timur Papua. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-1.5">
            <span>Fakultas Ekonomi dan Bisnis | IG:</span>
            <a href="https://instagram.com/unika_feb.ak" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-600 transition-colors font-bold">@unika_feb.ak</a>
          </div>
        </div>
      </footer>

    </div>
  );
}