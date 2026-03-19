'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    document.body.classList.add('fade-in');
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          contact,
          preferredDate,
          message,
        }),
      });

      if (!res.ok) throw new Error();

      setStatus('success');
      setName('');
      setContact('');
      setPreferredDate('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <main className="min-h-screen .bg-gradient-to-b {
    --tw-gradient-position: to bottom in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
} from-slate-100 to-slate-200">

     {/* HERO WITH PHOTO */}
<section className="max-w-6xl mx-auto px-6 pt-32 pb-40 flex flex-col lg:flex-row items-center gap-16">

  {/* TEXT */}
  <div className="flex-1 text-center lg:text-center">
    <h1 className="text-5xl font-light leading-tight mb-8 tracking-tight">

      
      Спокойная психологическая<br />
      поддержка в современном ритме
    </h1>

    <p className="text-xl text-slate-600 max-w-xl lg:text-center mx-auto">
      Индивидуальные консультации, работа с тревогой, стрессом, выгоранием и отношениями.
      Мягкий подход. Без давления. В безопасной атмосфере.
    </p>
  </div>

  {/* PHOTO */}
  {/*<div className="relative w-80 h-[480px] rounded-3xl overflow-hidden shadow-2xl bg-white/40 backdrop-blur-xl">
    <Image
      src="/psychologist-photo.jpeg"
      alt="Психолог"
      fill
      className="object-cover"
      priority
    />
  </div> */}

</section>


      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <div className="bg-white/70 backdrop-blur-xl shadow-xl rounded-3xl p-12 flex flex-col lg:flex-row items-center gap-12">

          {/* PHOTO */}
          <div className="w-64 h-80 relative rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/psyhologist-portret.jpeg"
              alt="Психолог"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* TEXT */}
          <div className="flex-1">
            <h2 className="text-4xl font-medium mb-6">Обо мне</h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              Я практикующий психолог, работаю в гуманистическом и когнитивно‑поведенческом подходах.
              Помогаю людям справляться с тревогой, эмоциональным выгоранием, сложностями в отношениях
              и поиском внутренней опоры. Моя цель — создать пространство, где вы сможете говорить честно,
              чувствовать себя в безопасности и находить новые опоры.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <h2 className="text-4xl font-medium mb-12 text-center">С чем я работаю</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            'Тревога и стресс',
            'Эмоциональное выгорание',
            'Самооценка и уверенность',
            'Отношения и коммуникация',
            'Кризисные состояния',
            'Поиск смысла и опоры',
          ].map((item) => (
            <div
              key={item}
              className="bg-white/70 backdrop-blur-xl shadow-lg rounded-2xl p-6 text-lg text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* PRICE */}
      <section className="max-w-4xl mx-auto px-6 py-28 text-center">
        <h2 className="text-4xl font-medium mb-6">Стоимость консультации</h2>
        <p className="text-2xl text-slate-700 mb-4">3500 ₽ / 50 минут</p>
        <p className="text-slate-500">Онлайн или очно</p>
      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-6 py-28">
        <h2 className="text-4xl font-medium mb-12 text-center">Записаться на консультацию</h2>

        <div className="bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Имя</label>
              <input
                className="w-full border rounded-xl px-4 py-3 bg-white/60"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Контакт</label>
              <input
                className="w-full border rounded-xl px-4 py-3 bg-white/60"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Предпочтительная дата</label>
              <input
                type="date"
                className="w-full border rounded-xl px-4 py-3 bg-white/60"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Сообщение</label>
              <textarea
                className="w-full border rounded-xl px-4 py-3 bg-white/60"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-slate-900 text-white py-3 rounded-xl text-lg hover:bg-slate-800 disabled:opacity-60 transition"
            >
              {status === 'loading' ? 'Отправка...' : 'Отправить'}
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-green-600 text-center">Заявка отправлена.</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-600 text-center">Ошибка. Попробуйте ещё раз.</p>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-12 text-slate-500 text-sm">
        © {new Date().getFullYear()} Психологическая практика
      </footer>
    </main>
  );
}
