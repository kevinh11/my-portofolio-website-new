import React from 'react';

function VertTimeline() {
  return (
    <div className="space-y-8 my-7 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-red text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        </div>
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-black/75 p-4 rounded shadow">
          <div className="flex items-center justify-between space-x-2 mb-1">
            <div className="font-bold text-white">SMA Bukit Sion</div>
            <time className="font-caveat font-medium text-red">2019 - 2022</time>
          </div>
          <div className="text-grey-500 font-light">Education - High School.</div>
        </div>
      </div>

      <div id="placeholder" className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-red text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        </div>
        <div className="tl-card w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-black/75 p-4 rounded shadow">
          <div className="flex items-center justify-between space-x-2 mb-1">
            <div className="font-bold text-white">Mr Ms UMN</div>
            <time className="font-caveat font-medium text-red">2024-2025</time>
          </div>
          <div className="text-grey-500 font-medium">Website Division Member.</div>
          <div className="text-grey-500 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi obcaecati maxime aliquam numquam minus eos explicabo fugit non dolorum in!.
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-red text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        </div>
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-black/75 p-4 rounded shadow">
          <div className="flex items-center justify-between space-x-2 mb-1">
            <div className="font-bold text-white">Universitas Multimedia Nusantara</div>
            <time className="font-caveat font-medium text-red">2022-2026</time>
          </div>
          <div className="text-grey-500 font-light">Education - University.</div>
        </div>
      </div>

      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-red text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        </div>
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-black/75 p-4 rounded shadow">
          <div className="flex items-center justify-between space-x-2 mb-1">
            <div className="font-bold text-white">Ultimagz</div>
            <time className="font-caveat font-medium text-red">2022-2024</time>
          </div>
          <div className="text-grey-500 font-medium">Website division member</div>
          <div className="text-grey-500 font-light">Experience - University.</div>
        </div>
      </div>

      <div id="placeholder" className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-red text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        </div>
        <div className="tl-card w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-black/75 p-4 rounded shadow">
          <div className="flex items-center justify-between space-x-2 mb-1">
            <div className="font-bold text-white">Mr Ms UMN</div>
            <time className="font-caveat font-medium text-red">2024-2025</time>
          </div>
          <div className="text-grey-500 font-medium">Website Division Member.</div>
          <div className="text-grey-500 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi obcaecati maxime aliquam numquam minus eos explicabo fugit non dolorum in!.
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-red text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          {/* Icon or SVG can be placed here */}
        </div>
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-black/75 p-4 rounded shadow">
          <div className="flex items-center justify-between space-x-2 mb-1">
            <div className="font-bold text-white">Starlight (UMN Talent Show)</div>
            <time className="font-caveat font-medium text-red">2024-2025</time>
          </div>
          <div className="text-grey-500 font-medium">Website division member</div>
          <div className="text-grey-500 font-light">Experience - University.</div>
        </div>
      </div>
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-red text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          {/* Icon or SVG can be placed here */}
        </div>
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-black/75 p-4 rounded shadow">
          <div className="flex items-center justify-between space-x-2 mb-1">
            <div className="font-bold text-white">Mr Ms UMN</div>
            <time className="font-caveat font-medium text-red">2024-2025</time>
          </div>
          <div className="text-grey-500 font-medium">Website division member</div>
          <div className="text-grey-500 font-light">Experience - University.</div>
        </div>
      </div>
    </div>
  );
}

export default VertTimeline;
