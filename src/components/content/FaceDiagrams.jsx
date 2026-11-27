// Esquemas de parálisis facial central y periférica.
const S = {
  skin: 'fill-[light-dark(#f6e2d3,#3a2e27)] stroke-ink2 [stroke-width:1.5]',
  line: 'fill-none stroke-ink2 [stroke-width:1.4] [stroke-linecap:round]',
  foldOff: 'fill-none stroke-ink2 opacity-45 [stroke-width:1.2] [stroke-dasharray:3_4]',
  brow: 'fill-none stroke-ink [stroke-width:3] [stroke-linecap:round]',
  eye: 'fill-white stroke-ink [stroke-width:1.5]',
  pupil: 'fill-ink',
  mouth: 'fill-none stroke-red [stroke-width:3] [stroke-linecap:round]',
  zone: 'fill-red/14 stroke-red [stroke-width:1.2] [stroke-dasharray:5_4]',
}

export default function FaceDiagrams() {
  return (
    <div className="my-[18px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-[18px]">
      <figure className="break-inside-avoid rounded-[14px] border border-line bg-bg2 p-3.5">
        <svg viewBox="0 0 200 230" role="img" aria-label="Parálisis facial central" className="mx-auto block w-full max-w-[220px]">
          <ellipse className={S.skin} cx="100" cy="115" rx="78" ry="98" />
          <path className={S.line} d="M45 62 Q65 52 85 60" />
          <path className={S.line} d="M45 72 Q65 62 85 70" />
          <path className={S.line} d="M115 60 Q135 52 155 62" />
          <path className={S.line} d="M115 70 Q135 62 155 72" />
          <path className={S.brow} d="M50 95 Q65 85 82 93" />
          <path className={S.brow} d="M118 93 Q135 85 150 95" />
          <ellipse className={S.eye} cx="66" cy="110" rx="13" ry="7" />
          <ellipse className={S.eye} cx="134" cy="110" rx="13" ry="7" />
          <circle className={S.pupil} cx="66" cy="110" r="4" />
          <circle className={S.pupil} cx="134" cy="110" r="4" />
          <path className={S.line} d="M100 115 L94 150 L106 150" />
          <path className={S.mouth} d="M68 168 Q90 182 108 176 Q125 172 136 178" />
          <path className={S.foldOff} d="M120 138 Q130 155 128 170" />
          <path className={S.line} d="M80 138 Q70 155 72 170" />
          <rect className={S.zone} height="70" rx="10" width="64" x="110" y="128" />
        </svg>
        <figcaption className="mt-[7px] text-[13.5px] leading-[1.45] text-ink2">
          <b className="mb-[3px] block text-[15px] text-ink">Central (primera motoneurona)</b>
          Frente y cierre palpebral conservados. Desviación de la comisura y borramiento del surco nasogeniano de la mitad inferior. Lesión en el hemisferio contralateral.
        </figcaption>
      </figure>
      <figure className="break-inside-avoid rounded-[14px] border border-line bg-bg2 p-3.5">
        <svg viewBox="0 0 200 230" role="img" aria-label="Parálisis facial periférica" className="mx-auto block w-full max-w-[220px]">
          <ellipse className={S.skin} cx="100" cy="115" rx="78" ry="98" />
          <path className={S.line} d="M45 62 Q65 52 85 60" />
          <path className={S.line} d="M45 72 Q65 62 85 70" />
          <path className={S.foldOff} d="M115 66 L155 68" />
          <path className={S.brow} d="M50 95 Q65 85 82 93" />
          <path className={S.brow} d="M118 100 Q135 97 150 102" />
          <ellipse className={S.eye} cx="66" cy="110" rx="13" ry="7" />
          <ellipse className={S.eye} cx="134" cy="112" rx="14" ry="10" />
          <circle className={S.pupil} cx="66" cy="110" r="4" />
          <circle className={S.pupil} cx="134" cy="106" r="4" />
          <path className={S.line} d="M100 115 L94 150 L106 150" />
          <path className={S.mouth} d="M68 168 Q90 182 108 176 Q125 174 136 182" />
          <path className={S.line} d="M80 138 Q70 155 72 170" />
          <rect className={S.zone} height="158" rx="10" width="64" x="110" y="40" />
        </svg>
        <figcaption className="mt-[7px] text-[13.5px] leading-[1.45] text-ink2">
          <b className="mb-[3px] block text-[15px] text-ink">Periférica (segunda motoneurona)</b>
          Hemicara completa: no arruga la frente, no cierra el ojo (signo de Bell: el globo gira hacia arriba), comisura caída. Lesión del nervio del mismo lado.
        </figcaption>
      </figure>
    </div>
  )
}
